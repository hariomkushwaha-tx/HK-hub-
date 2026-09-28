import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Copy, 
  Check, 
  Layers, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  Clock,
  Database
} from 'lucide-react';

interface DsaPattern {
  id: string;
  number: number;
  name: string;
  category: 'Arrays & Strings' | 'Pointers' | 'Trees & Graphs' | 'Heaps' | 'Dynamic Programming';
  summary: string;
  whenToUse: string[];
  classicProblems: string[];
  timeComplexity: string;
  spaceComplexity: string;
  codeTemplate: {
    ts: string;
    py: string;
    java: string;
  };
}

const DSA_PATTERNS: DsaPattern[] = [
  {
    id: 'sliding-window',
    number: 1,
    name: 'Sliding Window',
    category: 'Arrays & Strings',
    summary: 'Maintains a subarray or substring window of variable or fixed size to avoid recalculating overlapping ranges.',
    whenToUse: [
      'Problem asks for longest, shortest, or target subarray / substring matching a constraint.',
      'Contiguous sequence of elements in an array or string.',
      'Naive approach takes O(N²) by testing all subranges.'
    ],
    classicProblems: [
      'Maximum Sum Subarray of Size K',
      'Longest Substring Without Repeating Characters',
      'Minimum Size Subarray Sum (Target Sum)'
    ],
    timeComplexity: 'O(N) - right pointer advances N times, left pointer advances at most N times',
    spaceComplexity: 'O(1) or O(K) for character frequency map',
    codeTemplate: {
      ts: `// Sliding Window Variable Template (Longest Valid Window)
function slidingWindow(arr: number[], target: number): number {
  let left = 0;
  let currentSum = 0;
  let maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right]; // Expand window to the right

    // Shrink window from left until constraint becomes valid
    while (currentSum > target && left <= right) {
      currentSum -= arr[left];
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,
      py: `# Sliding Window Variable Template
def sliding_window(arr, target):
    left = 0
    current_sum = 0
    max_len = 0

    for right in range(len(arr)):
        current_sum += arr[right]
        
        while current_sum > target and left <= right:
            current_sum -= arr[left]
            left += 1
            
        max_len = max(max_len, right - left + 1)
        
    return max_len`,
      java: `// Sliding Window Variable Template
public int slidingWindow(int[] arr, int target) {
    int left = 0, currentSum = 0, maxLen = 0;
    for (int right = 0; right < arr.length; right++) {
        currentSum += arr[right];
        while (currentSum > target && left <= right) {
            currentSum -= arr[left++];
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
    }
  },
  {
    id: 'two-pointers',
    number: 2,
    name: 'Two Pointers (Converging / Opposing)',
    category: 'Pointers',
    summary: 'Two pointers iterate across data structure in opposite directions (e.g. start and end) to find pairs or partitions in linear time.',
    whenToUse: [
      'Array is sorted (or can be sorted in O(N log N) without violating constraints).',
      'Searching for pairs meeting a sum, difference, or palindrome symmetry.',
      'In-place array element rearrangement.'
    ],
    classicProblems: [
      'Two Sum II (Input array is sorted)',
      '3Sum (Triplet zero sum)',
      'Container With Most Water',
      'Valid Palindrome'
    ],
    timeComplexity: 'O(N) traversal (or O(N log N) if array needs sorting first)',
    spaceComplexity: 'O(1) auxiliary space',
    codeTemplate: {
      ts: `// Two Pointers Converging Template (Two Sum Sorted)
function twoPointers(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++; // Need a larger sum
    } else {
      right--; // Need a smaller sum
    }
  }

  return null;
}`,
      py: `# Two Pointers Converging Template
def two_pointers(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (left, right)
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None`,
      java: `// Two Pointers Converging Template
public int[] twoPointers(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return new int[]{left, right};
        else if (sum < target) left++;
        else right--;
    }
    return new int[]{-1, -1};
}`
    }
  },
  {
    id: 'fast-slow-pointers',
    number: 3,
    name: 'Fast & Slow Pointers (Tortoise & Hare)',
    category: 'Pointers',
    summary: 'Pointers move at different speeds (slow moves 1 step, fast moves 2 steps) to detect cycles or pinpoint midpoints.',
    whenToUse: [
      'Detecting cycles or loops in a Linked List or finite sequence.',
      'Finding the middle node of a Linked List in one pass.',
      'Finding the kth element from the end of a Linked List.'
    ],
    classicProblems: [
      'Linked List Cycle Detection',
      'Start of Linked List Cycle (Floyd’s Algorithm)',
      'Middle of the Linked List',
      'Happy Number'
    ],
    timeComplexity: 'O(N) linear time',
    spaceComplexity: 'O(1) memory (avoids hash set of visited nodes)',
    codeTemplate: {
      ts: `// Fast & Slow Pointers Cycle Template
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // Reached end of list
}`,
      py: `# Fast & Slow Pointers Cycle Template
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
      java: `// Fast & Slow Pointers Cycle Template
public boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`
    }
  },
  {
    id: 'merge-intervals',
    number: 4,
    name: 'Merge Intervals',
    category: 'Arrays & Strings',
    summary: 'Deals with overlapping intervals by sorting intervals by their start times and consolidating intersecting ranges.',
    whenToUse: [
      'Problem inputs contain start and end timestamps [start, end].',
      'Finding overlapping conference rooms, appointment conflicts, or contiguous ranges.',
      'Insert a new interval into an existing sorted schedule.'
    ],
    classicProblems: [
      'Merge Overlapping Intervals',
      'Insert Interval',
      'Meeting Rooms II (Minimum conference rooms required)',
      'Non-overlapping Intervals'
    ],
    timeComplexity: 'O(N log N) dominated by sorting the intervals by start time',
    spaceComplexity: 'O(N) for storing the merged output array',
    codeTemplate: {
      ts: `// Merge Overlapping Intervals Template
function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by start time ascending
  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      // Overlap detected: extend end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap: push current interval
      merged.push(current);
    }
  }

  return merged;
}`,
      py: `# Merge Overlapping Intervals Template
def merge_intervals(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for current in intervals[1:]:
        last_merged = merged[-1]
        if current[0] <= last_merged[1]:
            last_merged[1] = max(last_merged[1], current[1])
        else:
            merged.append(current)
    return merged`,
      java: `// Merge Overlapping Intervals Template
public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> merged = new ArrayList<>();
    int[] current = intervals[0];
    merged.add(current);
    for (int[] interval : intervals) {
        if (interval[0] <= current[1]) {
            current[1] = Math.max(current[1], interval[1]);
        } else {
            current = interval;
            merged.add(current);
        }
    }
    return merged.toArray(new int[merged.size()][]);
}`
    }
  },
  {
    id: 'tree-bfs',
    number: 5,
    name: 'Tree / Graph BFS (Level Order)',
    category: 'Trees & Graphs',
    summary: 'Traverses nodes layer-by-layer using a Queue (FIFO), tracking distance or minimum step path.',
    whenToUse: [
      'Finding the shortest path in an unweighted graph or tree.',
      'Level-by-level processing (e.g. zigzag level order, right-side view).',
      'Multi-source shortest path problems.'
    ],
    classicProblems: [
      'Binary Tree Level Order Traversal',
      'Word Ladder (Shortest transformation sequence)',
      'Rotting Oranges',
      'Binary Tree Zigzag Level Order Traversal'
    ],
    timeComplexity: 'O(V + E) for graphs, O(N) for trees',
    spaceComplexity: 'O(W) where W is the maximum width of the tree/graph level',
    codeTemplate: {
      ts: `// Tree BFS (Level Order) Template
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}`,
      py: `# Tree BFS (Level Order) Template
from collections import deque

def level_order(root):
    result = []
    if not root:
        return result
    queue = deque([root])
    while queue:
        level_size = len(queue)
        current_level = []
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(current_level)
    return result`,
      java: `// Tree BFS (Level Order) Template
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(currentLevel);
    }
    return result;
}`
    }
  },
  {
    id: 'top-k-elements',
    number: 6,
    name: 'Top "K" Elements (Min/Max Heap)',
    category: 'Heaps',
    summary: 'Uses a Priority Queue (Heap) of fixed size K to find the K smallest or K largest elements in O(N log K) time.',
    whenToUse: [
      'Problem asks for the K largest, K smallest, or K most frequent items in an unsorted stream/array.',
      'Avoids sorting the entire array in O(N log N).'
    ],
    classicProblems: [
      'Kth Largest Element in an Array',
      'Top K Frequent Elements',
      'Find K Closest Points to Origin',
      'Kth Smallest Element in a Sorted Matrix'
    ],
    timeComplexity: 'O(N log K) - maintaining a heap of size K across N elements',
    spaceComplexity: 'O(K) auxiliary space for heap',
    codeTemplate: {
      ts: `// Finding Kth Largest using Min-Heap of size K logic
// Note: To find K largest, maintain Min-Heap of size K (root is kth largest).
// To find K smallest, maintain Max-Heap of size K.
class SimpleMinHeap {
  // Built-in or standard MinHeap structure maintaining size <= k
}`,
      py: `# Top K Largest Elements using Min-Heap
import heapq

def find_k_largest(nums, k):
    # Maintain a min-heap of size K
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0] # Top of min-heap is Kth largest`,
      java: `// Top K Largest Elements using Min-Heap
public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    for (int num : nums) {
        minHeap.offer(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return minHeap.peek();
}`
    }
  },
  {
    id: 'two-heaps',
    number: 7,
    name: 'Two Heaps (Running Median)',
    category: 'Heaps',
    summary: 'Partitions elements into two halves: a Max-Heap for the smaller half and a Min-Heap for the larger half.',
    whenToUse: [
      'Tracking the median of a dynamically growing number stream.',
      'Balancing numbers into lower and upper quartiles.'
    ],
    classicProblems: [
      'Find Median from Data Stream',
      'Sliding Window Median',
      'Maximize Capital (IPO)'
    ],
    timeComplexity: 'O(log N) per insert, O(1) median query',
    spaceComplexity: 'O(N) to store stream elements',
    codeTemplate: {
      ts: `// Two Heaps Running Median Concept
// maxHeap stores lower half of numbers
// minHeap stores upper half of numbers
// Balance condition: maxHeap.size == minHeap.size OR maxHeap.size == minHeap.size + 1`,
      py: `# Two Heaps Running Median
import heapq

class MedianFinder:
    def __init__(self):
        self.small = [] # Max-heap (invert values)
        self.large = [] # Min-heap

    def addNum(self, num: int):
        heapq.heappush(self.small, -num)
        # Ensure every element in small <= every element in large
        if self.small and self.large and (-self.small[0] > self.large[0]):
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        # Handle size imbalance
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0`,
      java: `// Two Heaps Running Median
class MedianFinder {
    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
    private PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    public void addNum(int num) {
        maxHeap.offer(num);
        minHeap.offer(maxHeap.poll());
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }

    public double findMedian() {
        if (maxHeap.size() > minHeap.size()) return maxHeap.peek();
        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }
}`
    }
  },
  {
    id: 'monotonic-stack',
    number: 8,
    name: 'Monotonic Stack',
    category: 'Arrays & Strings',
    summary: 'A stack whose elements are always strictly increasing or decreasing. Finds the Next Greater or Previous Smaller element in O(N).',
    whenToUse: [
      'Finding the Next Greater Element, Next Smaller Element, or Daily Temperatures.',
      'Histogram largest area, stock span problems.',
      'Eliminates nested O(N²) scans looking ahead.'
    ],
    classicProblems: [
      'Next Greater Element I & II',
      'Daily Temperatures',
      'Largest Rectangle in Histogram',
      'Trapping Rain Water'
    ],
    timeComplexity: 'O(N) - each element is pushed and popped at most once',
    spaceComplexity: 'O(N) stack auxiliary memory',
    codeTemplate: {
      ts: `// Next Greater Element (Monotonic Decreasing Stack)
function nextGreaterElements(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(-1);
  const stack: number[] = []; // Stores indices

  for (let i = 0; i < nums.length; i++) {
    // While current element is greater than element at top of stack
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = nums[i];
    }
    stack.push(i);
  }

  return result;
}`,
      py: `# Next Greater Element Template
def next_greater(nums):
    result = [-1] * len(nums)
    stack = [] # indices
    for i, num in enumerate(nums):
        while stack and num > nums[stack[-1]]:
            prev_idx = stack.pop()
            result[prev_idx] = num
        stack.append(i)
    return result`,
      java: `// Next Greater Element Template
public int[] nextGreaterElements(int[] nums) {
    int[] result = new int[nums.length];
    Arrays.fill(result, -1);
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i < nums.length; i++) {
        while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return result;
}`
    }
  },
  {
    id: 'subsets-backtracking',
    number: 9,
    name: 'Subsets & Backtracking',
    category: 'Dynamic Programming',
    summary: 'Builds candidates incrementally and abandons ("backtracks") paths as soon as they violate validity constraints.',
    whenToUse: [
      'Generating all Permutations, Combinations, or Subsets (Power Set).',
      'Sudoku Solver, N-Queens, Word Search grid traversal.',
      'Exhaustive combinatorial search where constraint pruning is essential.'
    ],
    classicProblems: [
      'Subsets & Subsets II (with duplicates)',
      'Permutations',
      'Combination Sum',
      'Generate Parentheses'
    ],
    timeComplexity: 'O(2^N) for subsets, O(N!) for permutations',
    spaceComplexity: 'O(N) recursive call stack depth',
    codeTemplate: {
      ts: `// Standard Backtracking Template (Combinations / Subsets)
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const current: number[] = [];

  function backtrack(startIndex: number) {
    // Record current valid state
    result.push([...current]);

    for (let i = startIndex; i < nums.length; i++) {
      current.push(nums[i]);     // 1. Choose
      backtrack(i + 1);          // 2. Explore
      current.pop();             // 3. Un-choose (Backtrack)
    }
  }

  backtrack(0);
  return result;
}`,
      py: `# Standard Backtracking Template
def subsets(nums):
    result = []
    def backtrack(start, current):
        result.append(list(current))
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return result`,
      java: `// Standard Backtracking Template
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(0, nums, new ArrayList<>(), result);
    return result;
}
private void backtrack(int start, int[] nums, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.remove(current.size() - 1);
    }
}`
    }
  },
  {
    id: 'modified-binary-search',
    number: 10,
    name: 'Modified Binary Search',
    category: 'Arrays & Strings',
    summary: 'Halves the search space on every iteration by identifying which half of a rotated, peak-shaped, or infinite array is strictly sorted.',
    whenToUse: [
      'Array is sorted or rotated sorted (e.g. [4, 5, 6, 7, 0, 1, 2]).',
      'Searching for peak element in an unsorted array.',
      'Binary Search on Answer (Capacity to ship packages within D days).'
    ],
    classicProblems: [
      'Search in Rotated Sorted Array',
      'Find Minimum in Rotated Sorted Array',
      'Find First and Last Position of Element',
      'Find Peak Element'
    ],
    timeComplexity: 'O(log N) logarithmic search time',
    spaceComplexity: 'O(1) iterative space',
    codeTemplate: {
      ts: `// Search in Rotated Sorted Array
function searchRotated(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) return mid;

    // Check if the left half is normally sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1; // Target lies in the sorted left half
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1; // Target lies in the sorted right half
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}`,
      py: `# Search in Rotated Sorted Array
def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`,
      java: `// Search in Rotated Sorted Array
public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`
    }
  }
];

export const DsaPatternsVisualizer: React.FC = () => {
  const [selectedPatternId, setSelectedPatternId] = useState<string>('sliding-window');
  const [language, setLanguage] = useState<'ts' | 'py' | 'java'>('ts');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedPattern = DSA_PATTERNS.find(p => p.id === selectedPatternId) || DSA_PATTERNS[0];

  const filteredPatterns = DSA_PATTERNS.filter(p => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.classicProblems.some(prob => prob.toLowerCase().includes(q))
    );
  });

  const copyTemplateCode = () => {
    const code = selectedPattern.codeTemplate[language];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
          <Zap className="w-4 h-4" />
          <span>Modern Technical Interview Strategy (2026 Edition)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          The 14 Master Algorithmic Patterns
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Instead of memorizing 500 individual LeetCode problems, master the core underlying structural templates. Spotting the right pattern reduces interview problem-solving time from 40 minutes to under 10 minutes.
        </p>
      </div>

      {/* Main Grid: Left Selector List, Right Detailed Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Pattern Nav Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search patterns or problems..."
              className="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none focus:ring-1 focus:ring-blue-500 shadow-xs"
            />
          </div>

          <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-1">
            {filteredPatterns.map(pattern => {
              const isSelected = pattern.id === selectedPattern.id;
              return (
                <button
                  key={pattern.id}
                  onClick={() => setSelectedPatternId(pattern.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500/50 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                      {pattern.number}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{pattern.name}</div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                        {pattern.category}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Pattern Specification & Code Engine (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    PATTERN #{selectedPattern.number}
                  </span>
                  <span>·</span>
                  <span>{selectedPattern.category}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                  {selectedPattern.name}
                </h3>
              </div>

              {/* Complexity Badges */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Time: {selectedPattern.timeComplexity.split('-')[0].trim()}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Space: {selectedPattern.spaceComplexity.split(' ')[0]}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {selectedPattern.summary}
            </p>

            {/* When to use heuristics */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 block">
                🎯 How to Spot This Pattern In 30 Seconds:
              </span>
              <div className="space-y-1.5">
                {selectedPattern.whenToUse.map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Classic Interview Questions */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                Standard Questions Testing This Pattern:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedPattern.classicProblems.map((prob, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {prob}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Template Box */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  Master Algorithm Template:
                </span>

                <div className="flex items-center gap-2">
                  {/* Language Switcher */}
                  <div className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono">
                    {[
                      { id: 'ts', label: 'TypeScript' },
                      { id: 'py', label: 'Python' },
                      { id: 'java', label: 'Java' }
                    ].map(lang => (
                      <button
                        key={lang.id}
                        onClick={() => setLanguage(lang.id as any)}
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                          language === lang.id
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={copyTemplateCode}
                    className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Pre container */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{selectedPattern.codeTemplate[language]}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
