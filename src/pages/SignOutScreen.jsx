import React from "react";
import { LogOut, ShieldCheck } from "lucide-react";

export default function SignOutScreen({ onSignOut, onStaySignedIn }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0EFF4] font-['Inter',sans-serif] px-5">
      {/* Blurred background header hint */}
      <div className="w-full flex items-center justify-between px-1 mb-6 opacity-30 pointer-events-none select-none">
        <span className="text-[14px] font-bold text-gray-400">CRM Admin</span>
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>

      {/* Bottom sheet card */}
      <div className="w-full bg-white rounded-[28px] shadow-xl px-6 pt-2 pb-8 flex flex-col items-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
          <LogOut size={26} color="#DC2626" />
        </div>

        {/* Title */}
        <h2 className="text-[24px] font-black text-gray-900 mb-3 text-center">
          Sign Out?
        </h2>

        {/* Description */}
        <p className="text-[13px] text-gray-400 text-center leading-relaxed mb-6 max-w-[260px]">
          You're about to sign out of your CRM workspace. You can sign back in
          anytime using your registered mobile number.
        </p>

        {/* User card */}
        <div className="w-full bg-gray-50 rounded-2xl px-4 py-3.5 flex items-center gap-3 mb-4">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden shrink-0">
            <svg viewBox="0 0 48 48" width="48" height="48">
              <rect width="48" height="48" fill="#DDD6FE" />
              {/* Shirt */}
              <rect x="8" y="30" width="32" height="18" rx="6" fill="#2D3A8C" />
              {/* Neck */}
              <rect x="20" y="24" width="8" height="8" rx="3" fill="#C68642" />
              {/* Head */}
              <circle cx="24" cy="20" r="12" fill="#C68642" />
              {/* Hair */}
              <ellipse cx="24" cy="10" rx="10" ry="7" fill="#1A0A00" />
              <rect x="14" y="8" width="20" height="8" rx="4" fill="#1A0A00" />
              {/* Eyes */}
              <circle cx="20" cy="20" r="1.8" fill="#5C3A1E" />
              <circle cx="28" cy="20" r="1.8" fill="#5C3A1E" />
              {/* Smile */}
              <path
                d="M20 25 Q24 28 28 25"
                stroke="#5C3A1E"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Beard */}
              <path
                d="M16 24 Q24 32 32 24 Q30 30 24 32 Q18 30 16 24"
                fill="#8B5020"
                opacity="0.35"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-bold text-gray-900">Vishal Patil</p>
            <p className="text-[11px] text-gray-400 leading-tight">
              CRM
              <br />
              Administrator
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-[#5B21D4] tracking-wide uppercase">
              ACTIVE
            </p>
            <p className="text-[10px] text-gray-400">Just Now</p>
          </div>
        </div>

        {/* Security note */}
        <div className="w-full bg-[#EEE9FB] rounded-2xl px-4 py-3 flex items-start gap-2.5 mb-6">
          <ShieldCheck size={15} color="#5B21D4" className="mt-0.5 shrink-0" />
          <p className="text-[12px] font-semibold text-[#5B21D4] leading-snug">
            Your data and preferences will remain securely saved.
          </p>
        </div>

        {/* Sign Out button */}
        <button
          onClick={onSignOut}
          className="w-full py-4 rounded-2xl text-[14px] font-bold text-white mb-4"
          style={{
            background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
            boxShadow: "0 6px 20px rgba(220,38,38,0.35)",
          }}
        >
          Sign Out
        </button>

        {/* Stay signed in */}
        <button
          onClick={onStaySignedIn}
          className="text-[13px] font-semibold text-gray-400"
        >
          Stay Signed In
        </button>
      </div>

      {/* Bottom spacer area */}
      <div className="h-12" />
    </div>
  );
}
