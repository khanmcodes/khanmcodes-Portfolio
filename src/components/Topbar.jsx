import Logo from "./Logo";

export default function Topbar() {
  return (
    <div className="flex p-4 bg-black text-white items-center justify-center">
      <div className="container flex items-center sm:justify-between">
        <div className="text-xs font-normal hidden sm:flex">github.com/khanmcodes</div>

        <div className="px-2">
          <Logo size={80} spinDuration={20} onHover="pause" />
        </div>

        <div className="text-xs font-normal hidden sm:flex">khanmuhammad.work@gmail.com</div>
      </div>
    </div>
  );
}
