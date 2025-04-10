import Logo from "./Logo";

export default function Topbar() {
  return (
    <div className="p-4 bg-black text-white items-center">
      <div className="container mx-auto flex items-center sm:justify-evenly">
        <div className="text-xs font-normal hidden sm:flex">github.com/khanmcodes</div>

        <div className="px-2 sm:px-56">
          <Logo size={80} spinDuration={20} onHover="pause" />
        </div>

        <div className="text-xs font-normal hidden sm:flex">khanmuhammad.work@gmail.com</div>
      </div>
    </div>
  );
}
