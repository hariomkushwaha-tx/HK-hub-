import React, { useState } from 'react';
import { EBookItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  BookOpen,
  Tag
} from 'lucide-react';

interface CheckoutModalProps {
  book: EBookItem;
  onClose: () => void;
  onPurchaseComplete: (book: EBookItem) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  book,
  onClose,
  onPurchaseComplete
}) => {
  const { unlockBook } = useApp();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  const basePrice = book.price;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'STUDENT50' || couponCode.trim().toUpperCase() === 'HKHUB') {
      const disc = Math.round(basePrice * 0.5);
      setDiscountAmount(disc);
      setCouponApplied(true);
    } else {
      alert('Invalid code. Try "STUDENT50" for 50% extra scholarship discount!');
    }
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    setGeneratedOrderId(orderId);

    setTimeout(() => {
      unlockBook(book.id, {
        id: orderId,
        bookId: book.id,
        bookTitle: book.title,
        amount: finalPrice,
        date: 'Just now',
        status: 'Paid',
        paymentMethod: paymentMethod === 'upi' ? 'UPI / QR' : paymentMethod === 'card' ? 'Debit/Credit Card' : 'Net Banking'
      });

      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-950/90 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold text-slate-100">HK HUB Secure Digital Checkout</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {!isSuccess ? (
            <>
              {/* Book Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-4">
                <div className={`w-14 h-16 rounded-xl bg-gradient-to-br ${book.coverGradient} p-2 flex flex-col justify-between text-white shrink-0 shadow-md`}>
                  <span className="text-[8px] font-bold uppercase">{book.bookType || 'E-Book'}</span>
                  <span className="text-[9px] font-bold truncate">{book.pages}p</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">{book.category}</span>
                  <h4 className="font-bold text-sm text-slate-100 truncate">{book.title}</h4>
                  <p className="text-xs text-slate-400 truncate">By {book.author}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-base font-extrabold text-indigo-400">₹{finalPrice}</p>
                  {book.originalPrice && (
                    <p className="text-xs text-slate-400 line-through">₹{book.originalPrice}</p>
                  )}
                </div>
              </div>

              {/* Coupon Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon code (Try: STUDENT50)"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 font-mono uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors shrink-0"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between">
                  <span>Coupon applied: ₹{discountAmount} discount</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}

              {/* Payment Method Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'upi', label: 'UPI / QR', icon: <QrCode className="w-4 h-4" /> },
                    { id: 'card', label: 'Card', icon: <CreditCard className="w-4 h-4" /> },
                    { id: 'netbanking', label: 'Net Banking', icon: <Lock className="w-4 h-4" /> }
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all text-xs font-semibold ${
                        paymentMethod === m.id
                          ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm'
                          : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      {m.icon}
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Digital Book Access</span>
                  <span>₹{basePrice}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>Scholarship Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>GST / Tax</span>
                  <span>₹0 (Included)</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-slate-100">
                  <span>Total Payable</span>
                  <span className="text-indigo-400">₹{finalPrice}</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant access granted to your HK HUB library upon payment confirmation.</span>
              </div>

              {/* Pay Button */}
              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePayNow}
                className="w-full py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all"
              >
                {isProcessing ? (
                  <span>Verifying Transaction...</span>
                ) : (
                  <>
                    <span>Pay ₹{finalPrice} & Unlock Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </>
          ) : (
            /* Success Screen */
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-100">Purchase Successful!</h3>
                <p className="text-xs text-slate-400">Order ID: <span className="font-mono text-indigo-400 font-bold">{generatedOrderId}</span></p>
                <p className="text-xs text-slate-300 mt-2">
                  <span className="font-bold text-slate-100">{book.title}</span> has been permanently unlocked and added to your <span className="text-indigo-400 font-semibold">My Library</span>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPurchaseComplete(book);
                  }}
                  className="flex-1 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/20"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Reading Now</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
