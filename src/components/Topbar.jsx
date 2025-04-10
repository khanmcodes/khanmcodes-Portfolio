import Logo from "./Logo";

export default function Topbar() {
  return (
    <div className="p-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-evenly">
        <div className="text-xs font-normal">github.com/khanmcodes</div>

        <div className="px-56">
          <Logo size={80} spinDuration={20} onHover="pause" />
        </div>

        <div className="text-xs font-normal">khanmuhammad.work@gmail.com</div>
      </div>
    </div>
  );
}
