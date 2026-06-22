import { useRef, useState, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/optimized/Logo.webp";
import solidLogo from "../assets/optimized/Logo Black Label.webp";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About us",
    to: "/who-we-are",
    dropdown: [
      { label: "Who we are", to: "/who-we-are" },
      { label: "Our Story", to: "/our-story" },
      { label: "The Team", to: "/meet-the-team" },
    ],
  },
  { label: "The Group", to: "/the-group" },
  { label: "Partners", to: "/partners" },
  {
    label: "Media",
    to: "/news",
    dropdown: [
      { label: "News", to: "/news" },
      { label: "Gallery", to: "/gallery" },
      { label: "Awards", to: "/awards" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback);

  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

function getScrollSnapshot() {
  return window.scrollY;
}

function getServerScrollSnapshot() {
  return 0;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const scrollY = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, getServerScrollSnapshot);
  const hero = isHomePage ? document.getElementById("home") : null;
  const heroThreshold = hero ? hero.offsetHeight - 80 : window.innerHeight - 80;
  const isPastHero = isHomePage && scrollY > Math.max(heroThreshold, 80);
  const isSolid = !isHomePage || isPastHero || menuOpen;

  const closeMenu = () => setMenuOpen(false);
  const clearDropdownCloseTimer = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };
  const openDropdown = (label: string) => {
    clearDropdownCloseTimer();
    setActiveDropdown(label);
  };
  const closeDropdownSoon = () => {
    clearDropdownCloseTimer();
    dropdownCloseTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      dropdownCloseTimer.current = null;
    }, 220);
  };
  const closeDropdownNow = () => {
    clearDropdownCloseTimer();
    setActiveDropdown(null);
  };

  const headerClass = isSolid
    ? "fixed bg-white text-slate-950 shadow-sm ring-1 ring-slate-200/70"
    : "absolute bg-transparent text-white";

  const desktopLinkBase =
    "group relative inline-flex items-center gap-1 py-2 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1c400]";
  const desktopLinkTone = isSolid ? "text-slate-700 hover:text-slate-950" : "text-white/75 hover:text-white";
  const dropdownPanelTone = isSolid
    ? "bg-white text-slate-700 shadow-xl ring-1 ring-slate-200"
    : "bg-[#0e1116]/95 text-white/80 shadow-xl ring-1 ring-white/10 backdrop-blur";
  const mobilePanelTone = isSolid
    ? "border-slate-200 bg-white text-slate-800"
    : "border-white/10 bg-[#0e1116] text-white/85";
  const mobileHoverTone = isSolid ? "hover:bg-slate-100 hover:text-slate-950" : "hover:bg-white/8 hover:text-white";

  return (
    <header className={`left-0 top-0 z-50 w-full transition-all duration-300 ${headerClass}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link to="/" className="inline-flex items-center" aria-label="FON Group home">
          <img
            src={isSolid ? solidLogo : logo}
            alt="FON Group"
            className="h-9 w-auto md:h-8"
            decoding="async"
            loading="eager"
          />
        </Link>

        <div className="hidden items-center gap-9 text-[15px] font-medium md:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="group relative"
              onMouseEnter={() => (link.dropdown ? openDropdown(link.label) : closeDropdownNow())}
              onMouseLeave={link.dropdown ? closeDropdownSoon : undefined}
              onFocus={() => (link.dropdown ? openDropdown(link.label) : closeDropdownNow())}
              onBlur={link.dropdown ? closeDropdownSoon : undefined}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${desktopLinkBase} ${desktopLinkTone} ${isActive ? "font-semibold" : ""}`
                }
              >
                <span>{link.label}</span>
                {link.dropdown ? (
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    strokeWidth={2.25}
                    className={`transition duration-200 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    } ${isSolid ? "text-slate-500" : "text-white/45"}`}
                  />
                ) : null}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#f1c400] transition-all duration-200 group-hover:w-full" />
              </NavLink>

              {link.dropdown ? (
                <div
                  className={`absolute left-0 top-full mt-3 min-w-44 rounded-md py-2 transition duration-200 ${
                    activeDropdown === link.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  } ${dropdownPanelTone}`}
                >
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => {
                        closeMenu();
                        closeDropdownNow();
                      }}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm transition duration-200 ${
                          isSolid ? "hover:bg-slate-100 hover:text-slate-950" : "hover:bg-white/10 hover:text-white"
                        } ${isActive ? "font-semibold text-[#f1c400]" : ""}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-200 md:hidden ${
            isSolid ? "border-slate-300 text-slate-900 hover:bg-slate-100" : "border-white/15 text-white hover:bg-white/10"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t transition-[max-height,opacity] duration-300 md:hidden ${mobilePanelTone} ${
          menuOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-h-[calc(100vh-5rem)] max-w-7xl gap-1 overflow-y-auto overscroll-contain px-6 py-5">
          {navLinks.map((link) => (
            <div key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-md px-2 py-3 text-sm font-medium transition duration-200 ${mobileHoverTone} ${
                    isActive ? "text-[#f1c400]" : ""
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
                {link.dropdown ? (
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    strokeWidth={2.25}
                    className={isSolid ? "text-slate-400" : "text-white/40"}
                  />
                ) : null}
              </NavLink>

              {link.dropdown ? (
                <div className={`ml-3 grid gap-1 border-l pl-3 ${isSolid ? "border-slate-200" : "border-white/10"}`}>
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-md px-2 py-2 text-sm transition duration-200 ${mobileHoverTone} ${
                          isActive ? "font-semibold text-[#f1c400]" : isSolid ? "text-slate-600" : "text-white/65"
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
