import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Circle, Plus, Trash2, Bell, Clock } from 'lucide-react';

interface StudyTask {
  id: string;
  title: string;
  completed: boolean;
}

export const StudyPomodoroTimer: React.FC = () => {
  const [mode, setMode] = useState<'focus25' | 'deep50' | 'shortBreak' | 'longBreak'>('focus25');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('hk_velora_pomodoro_sessions');
      return saved ? parseInt(saved) : 0;
    } catch {
      return 0;
    }
  });

  // Task list
  const [tasks, setTasks] = useState<StudyTask[]>(() => {
    try {
      const saved = localStorage.getItem('hk_velora_pomodoro_tasks');
      return saved ? JSON.parse(saved) : [
        { id: '1', title: 'Revise Dynamic Programming optimal substructure', completed: false },
        { id: '2', title: 'Complete Computer Networks subnetting numericals', completed: true }
      ];
    } catch {
      return [];
    }
  });
  const [newTaskInput, setNewTaskInput] = useState('');

  const timerRef = useRef<any>(null);

  // Play a soft synthesized chime using Web Audio API
  const playSynthesizedChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      // Gentle dual-tone chord
      const playTone = (freq: number, start: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        gain.gain.setValueAtTime(0, ctx.currentTime + start);
        gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + start + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };

      playTone(523.25, 0, 1.2); // C5
      playTone(659.25, 0.15, 1.2); // E5
      playTone(783.99, 0.3, 1.5); // G5
    } catch (e) {
      // AudioContext unavailable or blocked by browser policy
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem('hk_velora_pomodoro_sessions', sessionsCompleted.toString());
    } catch {}
  }, [sessionsCompleted]);

  useEffect(() => {
    try {
      localStorage.setItem('hk_velora_pomodoro_tasks', JSON.stringify(tasks));
    } catch {}
  }, [tasks]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            playSynthesizedChime();
            if (mode === 'focus25' || mode === 'deep50') {
              setSessionsCompleted(c => c + 1);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, mode]);

  const switchMode = (newMode: 'focus25' | 'deep50' | 'shortBreak' | 'longBreak') => {
    setIsRunning(false);
    setMode(newMode);
    if (newMode === 'focus25') setTimeLeft(25 * 60);
    else if (newMode === 'deep50') setTimeLeft(50 * 60);
    else if (newMode === 'shortBreak') setTimeLeft(5 * 60);
    else if (newMode === 'longBreak') setTimeLeft(15 * 60);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (mode === 'focus25') setTimeLeft(25 * 60);
    else if (mode === 'deep50') setTimeLeft(50 * 60);
    else if (mode === 'shortBreak') setTimeLeft(5 * 60);
    else if (mode === 'longBreak') setTimeLeft(15 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now().toString(), title: newTaskInput.trim(), completed: false }
    ]);
    setNewTaskInput('');
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Main Timer Display */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col items-center justify-center space-y-6 text-center">
        {/* Interval Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          {[
            { id: 'focus25', label: '25m Focus' },
            { id: 'deep50', label: '50m Deep Work' },
            { id: 'shortBreak', label: '5m Short Break' },
            { id: 'longBreak', label: '15m Long Break' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => switchMode(t.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                mode === t.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Big Tabular Digits */}
        <div className="text-7xl sm:text-8xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-mono tabular-nums select-none">
          {formattedTime}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause Session</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Start Focus</span>
              </>
            )}
          </button>

          <button
            onClick={resetTimer}
            className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            title="Reset timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 flex items-center gap-2">
          <span>Completed focus blocks today:</span>
          <span className="font-extrabold text-blue-600 dark:text-blue-400 tabular-nums text-sm">
            {sessionsCompleted}
          </span>
        </div>
      </div>

      {/* Today's Study Tasks Checklist */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Target Study Checklist For Today
        </h4>

        <form onSubmit={addTask} className="flex gap-2">
          <input
            type="text"
            value={newTaskInput}
            onChange={e => setNewTaskInput(e.target.value)}
            placeholder="Add subject chapter, lecture notes, or lab program to finish..."
            className="flex-1 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </form>

        <div className="space-y-2 pt-1">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 text-xs"
            >
              <div 
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-2.5 flex-1 cursor-pointer"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                )}
                <span className={task.completed ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200 font-medium'}>
                  {task.title}
                </span>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="text-center py-6 text-xs text-slate-400">
              No tasks added yet. Enter what you want to accomplish in your focus blocks!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
