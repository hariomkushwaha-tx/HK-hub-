import React, { useState, useMemo } from 'react';
import { Calculator, Calendar, Landmark, Percent, Receipt, Scale, HardDrive } from 'lucide-react';

interface SubToolProps {
  toolId: string;
}

export const CalculatorTools: React.FC<SubToolProps> = ({ toolId }) => {
  // 1. Percentage Calc state
  const [percMode, setPercMode] = useState<1 | 2 | 3>(1);
  const [pX, setPX] = useState<number>(15);
  const [pY, setPY] = useState<number>(200);

  const percentageResult = useMemo(() => {
    if (percMode === 1) {
      // What is X% of Y?
      const res = (pX / 100) * pY;
      return `${pX}% of ${pY} is ${parseFloat(res.toFixed(4))}`;
    } else if (percMode === 2) {
      // X is what % of Y?
      if (pY === 0) return 'Cannot divide by zero';
      const res = (pX / pY) * 100;
      return `${pX} is ${parseFloat(res.toFixed(4))}% of ${pY}`;
    } else {
      // % increase or decrease from X to Y
      if (pX === 0) return 'Initial value cannot be zero';
      const diff = pY - pX;
      const res = (diff / pX) * 100;
      const type = res >= 0 ? 'Increase' : 'Decrease';
      return `${Math.abs(parseFloat(res.toFixed(4)))}% ${type} (From ${pX} to ${pY})`;
    }
  }, [percMode, pX, pY]);

  // 2. Age Calculator state
  const [birthDate, setBirthDate] = useState<string>('2002-05-15');
  const ageResult = useMemo(() => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const now = new Date();
    if (isNaN(birth.getTime())) return null;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const diffMs = now.getTime() - birth.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(diffMs / (1000 * 60 * 60));

    // Next birthday calculation
    let nextBday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday.getTime() < now.getTime()) {
      nextBday = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const daysToBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][birth.getDay()];

    return { years, months, days, totalDays, totalHours, daysToBday, dayOfWeek };
  }, [birthDate]);

  // 3. Date & Duration Calc
  const [startDate, setStartDate] = useState<string>('2026-01-01');
  const [endDate, setEndDate] = useState<string>('2026-12-31');
  const dateDiffResult = useMemo(() => {
    const s = new Date(startDate);
    const e = new Date(endDate);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;
    const diffTime = Math.abs(e.getTime() - s.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;
    return { diffDays, weeks, remainingDays };
  }, [startDate, endDate]);

  // 4. Discount & GST Calculator
  const [originalPrice, setOriginalPrice] = useState<number>(1000);
  const [discountPercent, setDiscountPercent] = useState<number>(20);
  const [gstRate, setGstRate] = useState<number>(18);
  const [gstType, setGstType] = useState<'exclusive' | 'inclusive'>('exclusive');

  const discountGstResult = useMemo(() => {
    const discAmount = (originalPrice * discountPercent) / 100;
    const priceAfterDisc = Math.max(0, originalPrice - discAmount);

    let taxAmount = 0;
    let finalPayable = 0;

    if (gstType === 'exclusive') {
      taxAmount = (priceAfterDisc * gstRate) / 100;
      finalPayable = priceAfterDisc + taxAmount;
    } else {
      // inclusive: priceAfterDisc = finalPayable = Base + (Base * gstRate / 100)
      finalPayable = priceAfterDisc;
      taxAmount = priceAfterDisc - (priceAfterDisc / (1 + gstRate / 100));
    }

    return {
      discountAmount: parseFloat(discAmount.toFixed(2)),
      priceAfterDiscount: parseFloat(priceAfterDisc.toFixed(2)),
      taxAmount: parseFloat(taxAmount.toFixed(2)),
      finalPayable: parseFloat(finalPayable.toFixed(2)),
      totalSavings: parseFloat(discAmount.toFixed(2))
    };
  }, [originalPrice, discountPercent, gstRate, gstType]);

  // 5. EMI Calculator
  const [principal, setPrincipal] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const emiResult = useMemo(() => {
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    if (r === 0) {
      const emi = principal / n;
      return { emi: Math.round(emi), totalInterest: 0, totalPayment: principal };
    }
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    };
  }, [principal, interestRate, tenureYears]);

  // 6. Unit Converter
  const [unitType, setUnitType] = useState<'length' | 'weight' | 'temp'>('length');
  const [unitVal, setUnitVal] = useState<number>(10);
  const [unitFrom, setUnitFrom] = useState<string>('m');
  const [unitTo, setUnitTo] = useState<string>('ft');

  const convertedUnit = useMemo(() => {
    if (unitType === 'length') {
      // base is meter
      const toMeters: Record<string, number> = { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 };
      const valInMeters = unitVal * (toMeters[unitFrom] || 1);
      const res = valInMeters / (toMeters[unitTo] || 1);
      return parseFloat(res.toFixed(5));
    }
    if (unitType === 'weight') {
      // base is kg
      const toKg: Record<string, number> = { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 };
      const valInKg = unitVal * (toKg[unitFrom] || 1);
      const res = valInKg / (toKg[unitTo] || 1);
      return parseFloat(res.toFixed(5));
    }
    if (unitType === 'temp') {
      if (unitFrom === unitTo) return unitVal;
      let celsius = unitVal;
      if (unitFrom === 'F') celsius = (unitVal - 32) * (5 / 9);
      if (unitFrom === 'K') celsius = unitVal - 273.15;

      if (unitTo === 'C') return parseFloat(celsius.toFixed(2));
      if (unitTo === 'F') return parseFloat((celsius * (9 / 5) + 32).toFixed(2));
      if (unitTo === 'K') return parseFloat((celsius + 273.15).toFixed(2));
    }
    return unitVal;
  }, [unitType, unitVal, unitFrom, unitTo]);

  // 7. Data Storage Converter
  const [dataStorageVal, setDataStorageVal] = useState<number>(1);
  const [storageFrom, setStorageFrom] = useState<'B' | 'KB' | 'MB' | 'GB' | 'TB'>('GB');

  const storageResults = useMemo(() => {
    const multipliers: Record<string, number> = {
      B: 1,
      KB: 1024,
      MB: 1024 ** 2,
      GB: 1024 ** 3,
      TB: 1024 ** 4,
    };
    const bytes = dataStorageVal * (multipliers[storageFrom] || 1);
    return {
      bytes: bytes.toLocaleString() + ' Bytes',
      kb: (bytes / 1024).toFixed(3) + ' KB',
      mb: (bytes / (1024 ** 2)).toFixed(3) + ' MB',
      gb: (bytes / (1024 ** 3)).toFixed(3) + ' GB',
      tb: (bytes / (1024 ** 4)).toFixed(5) + ' TB',
    };
  }, [dataStorageVal, storageFrom]);

  return (
    <div className="space-y-6">
      {/* 1. Percentage Calculator */}
      {toolId === 'percentage-calculator' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            {[
              { id: 1, label: 'What is X% of Y?' },
              { id: 2, label: 'X is what % of Y?' },
              { id: 3, label: '% Increase / Decrease' },
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setPercMode(m.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  percMode === m.id ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Value X</label>
              <input
                type="number"
                value={pX}
                onChange={e => setPX(parseFloat(e.target.value) || 0)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none focus:border-indigo-500 text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Value Y</label>
              <input
                type="number"
                value={pY}
                onChange={e => setPY(parseFloat(e.target.value) || 0)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none focus:border-indigo-500 text-slate-100"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculation Result</span>
            <p className="text-xl font-extrabold text-indigo-400">{percentageResult}</p>
          </div>
        </div>
      )}

      {/* 2. Age Calculator */}
      {toolId === 'age-calculator' && (
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-400 mb-1 block">Select Date of Birth</label>
            <input
              type="date"
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-medium outline-none text-slate-100"
            />
          </div>

          {ageResult && (
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30 text-center">
                <span className="text-xs font-semibold uppercase text-indigo-300">Exact Age</span>
                <h3 className="text-3xl font-extrabold text-white mt-1">
                  {ageResult.years} <span className="text-lg font-normal text-slate-400">Years</span> {ageResult.months} <span className="text-lg font-normal text-slate-400">Months</span> {ageResult.days} <span className="text-lg font-normal text-slate-400">Days</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 uppercase">Total Days Lived</span>
                  <p className="text-base font-bold text-slate-200 mt-0.5">{ageResult.totalDays.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 uppercase">Total Hours</span>
                  <p className="text-base font-bold text-slate-200 mt-0.5">{ageResult.totalHours.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 uppercase">Next Birthday</span>
                  <p className="text-base font-bold text-amber-400 mt-0.5">In {ageResult.daysToBday} Days</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 uppercase">Day Born</span>
                  <p className="text-base font-bold text-cyan-400 mt-0.5">{ageResult.dayOfWeek}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Date Duration Calculator */}
      {toolId === 'date-calculator' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm outline-none text-slate-100"
              />
            </div>
          </div>

          {dateDiffResult && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Duration Between Dates</span>
              <p className="text-2xl font-bold text-indigo-400">
                {dateDiffResult.diffDays} Days
              </p>
              <p className="text-xs text-slate-400">
                Equivalent to {dateDiffResult.weeks} Weeks and {dateDiffResult.remainingDays} Days
              </p>
            </div>
          )}
        </div>
      )}

      {/* 4. Discount & GST Calculator */}
      {toolId === 'discount-gst-calc' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Original Price (₹ / $)</label>
              <input
                type="number"
                value={originalPrice}
                onChange={e => setOriginalPrice(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Discount (%)</label>
              <input
                type="number"
                value={discountPercent}
                onChange={e => setDiscountPercent(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">GST Rate (%)</label>
              <select
                value={gstRate}
                onChange={e => setGstRate(parseFloat(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              >
                <option value={0}>0% (Tax Free)</option>
                <option value={5}>5% (Essential)</option>
                <option value={12}>12% (Standard I)</option>
                <option value={18}>18% (Standard II)</option>
                <option value={28}>28% (Luxury)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 uppercase">Discount Saved</span>
              <p className="text-base font-bold text-emerald-400 mt-0.5">{discountGstResult.discountAmount}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 uppercase">Post-Discount Price</span>
              <p className="text-base font-bold text-slate-200 mt-0.5">{discountGstResult.priceAfterDiscount}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 uppercase">GST / Tax Amount</span>
              <p className="text-base font-bold text-amber-400 mt-0.5">{discountGstResult.taxAmount}</p>
            </div>
            <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center">
              <span className="text-[11px] text-indigo-300 uppercase font-bold">Total Payable</span>
              <p className="text-lg font-black text-indigo-400 mt-0.5">{discountGstResult.finalPayable}</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. EMI Calculator */}
      {toolId === 'emi-calculator' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Loan Principal (₹ / $)</label>
              <input
                type="number"
                value={principal}
                onChange={e => setPrincipal(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={e => setInterestRate(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Loan Tenure (Years)</label>
              <input
                type="number"
                value={tenureYears}
                onChange={e => setTenureYears(parseFloat(e.target.value) || 1)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-center">
              <span className="text-xs font-semibold text-indigo-300 uppercase">Monthly EMI</span>
              <h4 className="text-2xl font-black text-white mt-1">₹ {emiResult.emi.toLocaleString()}</h4>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase">Total Interest</span>
              <h4 className="text-xl font-bold text-amber-400 mt-1">₹ {emiResult.totalInterest.toLocaleString()}</h4>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase">Total Overall Payment</span>
              <h4 className="text-xl font-bold text-emerald-400 mt-1">₹ {emiResult.totalPayment.toLocaleString()}</h4>
            </div>
          </div>
        </div>
      )}

      {/* 6. Unit Converter */}
      {toolId === 'unit-converter' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
            {(['length', 'weight', 'temp'] as const).map(t => (
              <button
                key={t}
                onClick={() => {
                  setUnitType(t);
                  if (t === 'length') { setUnitFrom('m'); setUnitTo('ft'); }
                  if (t === 'weight') { setUnitFrom('kg'); setUnitTo('lb'); }
                  if (t === 'temp') { setUnitFrom('C'); setUnitTo('F'); }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize ${
                  unitType === t ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Value</label>
              <input
                type="number"
                value={unitVal}
                onChange={e => setUnitVal(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">From Unit</label>
              <select
                value={unitFrom}
                onChange={e => setUnitFrom(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
              >
                {unitType === 'length' && (
                  <>
                    <option value="m">Meters (m)</option>
                    <option value="km">Kilometers (km)</option>
                    <option value="cm">Centimeters (cm)</option>
                    <option value="ft">Feet (ft)</option>
                    <option value="in">Inches (in)</option>
                    <option value="mi">Miles (mi)</option>
                  </>
                )}
                {unitType === 'weight' && (
                  <>
                    <option value="kg">Kilograms (kg)</option>
                    <option value="g">Grams (g)</option>
                    <option value="lb">Pounds (lb)</option>
                    <option value="oz">Ounces (oz)</option>
                  </>
                )}
                {unitType === 'temp' && (
                  <>
                    <option value="C">Celsius (°C)</option>
                    <option value="F">Fahrenheit (°F)</option>
                    <option value="K">Kelvin (K)</option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">To Unit</label>
              <select
                value={unitTo}
                onChange={e => setUnitTo(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
              >
                {unitType === 'length' && (
                  <>
                    <option value="ft">Feet (ft)</option>
                    <option value="m">Meters (m)</option>
                    <option value="km">Kilometers (km)</option>
                    <option value="cm">Centimeters (cm)</option>
                    <option value="in">Inches (in)</option>
                    <option value="mi">Miles (mi)</option>
                  </>
                )}
                {unitType === 'weight' && (
                  <>
                    <option value="lb">Pounds (lb)</option>
                    <option value="kg">Kilograms (kg)</option>
                    <option value="g">Grams (g)</option>
                    <option value="oz">Ounces (oz)</option>
                  </>
                )}
                {unitType === 'temp' && (
                  <>
                    <option value="F">Fahrenheit (°F)</option>
                    <option value="C">Celsius (°C)</option>
                    <option value="K">Kelvin (K)</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 text-center">
            <span className="text-xs text-slate-400 uppercase font-semibold">Converted Result</span>
            <p className="text-2xl font-black text-indigo-400 mt-1">
              {convertedUnit} {unitTo}
            </p>
          </div>
        </div>
      )}

      {/* 7. Data Storage Converter */}
      {toolId === 'data-storage-calc' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Amount</label>
              <input
                type="number"
                value={dataStorageVal}
                onChange={e => setDataStorageVal(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold outline-none text-slate-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Input Storage Unit</label>
              <select
                value={storageFrom}
                onChange={e => setStorageFrom(e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
              >
                <option value="B">Bytes (B)</option>
                <option value="KB">Kilobytes (KB)</option>
                <option value="MB">Megabytes (MB)</option>
                <option value="GB">Gigabytes (GB)</option>
                <option value="TB">Terabytes (TB)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { label: 'Bytes', val: storageResults.bytes },
              { label: 'KB', val: storageResults.kb },
              { label: 'MB', val: storageResults.mb },
              { label: 'GB', val: storageResults.gb },
              { label: 'TB', val: storageResults.tb },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">{item.label}</span>
                <p className="text-xs font-mono font-bold text-cyan-400 truncate mt-1">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
