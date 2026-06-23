export default function Logo({ size = "md" }) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };
  return (
    <div className={`flex items-center gap-1.5 font-bold ${sizes[size]}`}>
      <div className="w-5 h-5 bg-purple-600 rounded-sm flex items-center justify-center">
        <span className="text-white text-[10px] font-black">H</span>
      </div>
      <span className="text-purple-700 tracking-tight">Hittofit</span>
    </div>
  );
}
