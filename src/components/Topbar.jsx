import Logo from "./Logo";

export default function Topbar() {
  return (
      <div className="container px-2 pt-4 sm:px-12 flex items-center max-w-screen sm:justify-between">
        <div className="text-xs font-normal hidden sm:flex">github.com/khanmcodes</div>

        <div>
          <Logo size={80} spinDuration={20} onHover="pause" />
        </div>

        <div className="text-xs font-normal hidden sm:flex">khanmuhammad.work@gmail.com</div>
      </div>
  );
}
