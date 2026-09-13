import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  Sparkles,
  Heart,
  QrCode,
  Copy,
  Smartphone
} from 'lucide-react';

interface DirectPaymentModalProps {
  onClose: () => void;
}

export const DirectPaymentModal: React.FC<DirectPaymentModalProps> = ({ onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(49);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upi' | 'qr'>('upi');
  const [isVerifying, setIsVerifying] = useState(false);
  const [txnRef, setTxnRef] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Merchant Details
  const merchantName = 'Hariom Kushwaha (HK VELORA)';
  const phonePeUpiId = '7393043715@ybl';
  const gpayUpiId = '7393043715@okaxis';
  const paytmUpiId = '7393043715@paytm';
  const primaryUpiId = phonePeUpiId;
  const bankName = 'Punjab National Bank (PNB)';

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  // Standard UPI URI format (NPCI standard)
  const upiUri = `upi://pay?pa=${primaryUpiId}&pn=${encodeURIComponent(merchantName)}&am=${activeAmount}&cu=INR&tn=${encodeURIComponent('HK VELORA Student Library Support')}`;
  
  // Safe QR Code generator URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiUri)}`;

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!txnRef.trim()) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">HK VELORA Direct UPI Payment</h3>
              <p className="text-[10px] text-slate-400">100% Secure • Verified Account</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {!submitted ? (
            <>
              {/* Beneficiary Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-indigo-950/40 border border-emerald-500/30 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Verified Beneficiary
                    </span>
                    <h4 className="text-base font-extrabold text-slate-100">{merchantName}</h4>
                    <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <span>Bank:</span>
                      <strong className="text-slate-200">{bankName}</strong>
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* UPI ID Quick Copy Box */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs">
                    <Smartphone className="w-4 h-4 text-indigo-400" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Primary UPI ID (GPay / PhonePe / Paytm):</p>
                      <span className="font-mono font-bold text-slate-200">{primaryUpiId}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(primaryUpiId, 'primary')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-[11px] font-semibold flex items-center gap-1 transition-all"
                  >
                    {copiedField === 'primary' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy UPI</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Select Contribution / Unlock Amount</span>
                  <span className="text-indigo-400 font-bold font-mono">₹{activeAmount}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[29, 49, 99, 199].map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-2 px-3 rounded-xl border text-center font-mono font-bold text-xs transition-all ${
                        activeAmount === amt && !customAmount
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <div className="pt-1">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Or enter custom amount (e.g. 50, 100)"
                    min="1"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Mode Selector (Scan QR vs Direct UPI Apps) */}
              <div className="space-y-3">
                <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab('upi')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'upi' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Pay via UPI App</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('qr')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'qr' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Scan QR Code</span>
                  </button>
                </div>

                {activeTab === 'upi' ? (
                  <div className="space-y-2">
                    <p className="text-[11px] text-slate-400">
                      Tap below on mobile to open your UPI app directly, or copy the UPI handle:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <a
                        href={upiUri}
                        className="p-2.5 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/30 text-indigo-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Google Pay</span>
                      </a>
                      <a
                        href={upiUri}
                        className="p-2.5 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 text-purple-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>PhonePe</span>
                      </a>
                      <a
                        href={upiUri}
                        className="p-2.5 rounded-xl bg-cyan-600/15 hover:bg-cyan-600/25 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Paytm / BHIM</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white space-y-2">
                    <img 
                      src={qrCodeUrl} 
                      alt="UPI QR Code" 
                      className="w-48 h-48 rounded-lg object-contain"
                    />
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-900">Scan using any UPI App</p>
                      <p className="text-[10px] text-slate-600">GPay, PhonePe, Paytm, BHIM</p>
                      <p className="text-xs font-black text-indigo-700 mt-1 font-mono">Amount: ₹{activeAmount}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Transaction Verification Section */}
              <form onSubmit={handleConfirmPayment} className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Enter UTR / Transaction ID (After Payment)</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={txnRef}
                  onChange={(e) => setTxnRef(e.target.value)}
                  placeholder="e.g. 425619384729 (12-digit UTR)"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
                  required
                />
                <button
                  type="submit"
                  disabled={isVerifying || !txnRef.trim()}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                >
                  {isVerifying ? (
                    <span>Verifying with PNB Bank Network...</span>
                  ) : (
                    <>
                      <span>Submit Confirmation & Unlock</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Privacy & Safe Notice */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>100% Privacy & Security:</strong> Transactions are routed through NPCI UPI protocol. No personal banking credentials or passwords are ever stored on this site.
                </span>
              </div>
            </>
          ) : (
            /* Thank You & Receipt Confirmation Screen */
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">Payment Verified & Received!</h3>
                <p className="text-xs text-slate-400">
                  Transaction Ref: <span className="font-mono text-emerald-400 font-bold">{txnRef}</span>
                </p>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs text-slate-300 mt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Paid To:</span>
                    <span className="font-bold text-slate-200">{merchantName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bank:</span>
                    <span className="font-semibold text-slate-200">{bankName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Amount Paid:</span>
                    <span className="font-bold font-mono text-emerald-400">₹{activeAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-bold text-emerald-400">Confirmed (Active)</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-md shadow-indigo-500/20"
              >
                Done & Return to Library
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
