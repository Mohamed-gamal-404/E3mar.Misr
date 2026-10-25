import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";

import logo from "../assets/images/e3mqr-icon.png";

const links = [
  { label: "الرئيسية", to: "/", end: true },
  { label: "من نحن", to: "/about" },
  { label: "خدماتنا", to: "/services" },
  { label: "فرص العمل", to: "/jobs" },
  { label: "تواصل معنا", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    [
      "relative flex min-h-10 items-center text-[14px] font-medium",
      "transition-colors duration-200",
      isActive
        ? "text-[#A78436]"
        : "text-[#27364B] hover:text-[#A78436]",
    ].join(" ");

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-[#E9ECF0] bg-white"
    >
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">

        {/* BRAND */}

        <Link
          to="/"
          onClick={closeMenu}
          aria-label="إعمار مصر - الصفحة الرئيسية"
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src={logo}
            alt="شعار إعمار مصر"
            className="h-12 w-12 object-contain sm:h-[54px] sm:w-[54px]"
          />

          <div className="flex flex-col justify-center">
            <span className="text-[19px] font-extrabold leading-7 tracking-tight text-[#071B3A]">
              إعمار مصر
            </span>

            <span className="mt-0.5 text-[10px] font-medium tracking-[0.04em] text-[#747E8B] sm:text-[11px]">
              لخدمات القوى العاملة والتشغيل
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          aria-label="القائمة الرئيسية"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-[21px] h-[2px] rounded-full bg-[#B99A55]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CTA */}

        <Link
          to="/contact"
          className="group hidden shrink-0 items-center gap-3 rounded-md bg-[#071B3A] px-5 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#142F50] lg:inline-flex"
        >
          <span>اطلب خدمة</span>

          <FaArrowLeft
            className="text-[11px] text-[#D6B76C] transition-transform duration-200 group-hover:-translate-x-1"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navbar"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E4E7EB] text-[#071B3A] transition-colors hover:border-[#D6B76C] lg:hidden"
        >
          {menuOpen ? (
            <FaTimes size={17} />
          ) : (
            <FaBars size={17} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}

      <div
        id="mobile-navbar"
        className={[
          "overflow-hidden border-t border-[#E9ECF0] bg-white transition-[max-height,opacity] duration-200 lg:hidden",
          menuOpen
            ? "max-h-[440px] opacity-100"
            : "pointer-events-none max-h-0 border-t-transparent opacity-0",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="قائمة الموبايل"
          className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-8"
        >
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) =>
                [
                  "flex min-h-11 items-center justify-between rounded-md px-4 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#F8F5ED] text-[#8E7130]"
                    : "text-[#27364B] hover:bg-[#F7F8FA]",
                ].join(" ")
              }
            >
              {item.label}

              <FaArrowLeft className="text-[10px] opacity-50" />
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-2 flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#071B3A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#142F50]"
          >
            اطلب خدمة

            <FaArrowLeft className="text-[11px] text-[#D6B76C]" />
          </Link>
        </nav>
      </div>
    </header>
  );
}