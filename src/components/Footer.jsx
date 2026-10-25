import logo from "../assets/images/e3mqr-icon.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaBriefcase,
  FaBuilding,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const phoneNumbers = [
  {
    number: "0238341280",
    href: "tel:0238341280",
  },
  {
    number: "01119666524",
    href: "tel:01119666524",
  },
];

const quickLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "من نحن", to: "/about" },
  { label: "خدماتنا", to: "/services" },
  { label: "فرص العمل", to: "/jobs" },
  { label: "تواصل معنا", to: "/contact" },
];

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "مبنى 32 الحي 11 المحور الخدمي أمام مدينة الثقافة والعلوم مدينة 6 أكتوبر الجيزة مصر"
  )}`;

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#071B3A] text-white"
    >
      {/* =====================================
          TOP ACCENT
      ===================================== */}

      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-l from-[#D6B76C] via-[#E7D4A3] to-[#D6B76C]"
      />

      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 sm:pt-16 lg:px-12 lg:pt-20">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* =====================================
              COMPANY BRAND
          ===================================== */}

          <div className="lg:col-span-4">

            <Link
              to="/"
              aria-label="إعمار مصر - الصفحة الرئيسية"
              className="group inline-flex items-center gap-4"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2 transition duration-300 group-hover:bg-[#F8F3E6]">
                <img
                  src={logo}
                  alt="شعار إعمار مصر"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                  إعمار مصر
                </h2>

                <p
                  dir="ltr"
                  className="mt-1 text-left text-xs font-medium tracking-[0.12em] text-[#D6B76C]"
                >
                  EMAAR MISR
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-slate-300">
              شركة متخصصة في توفير العمالة الماهرة وغير الماهرة
              ودعم احتياجات الشركات والمشروعات من القوى العاملة،
              مع الاهتمام بفهم متطلبات التشغيل وبناء علاقات عمل
              قائمة على الثقة والتعاون.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <FaHandshake className="shrink-0 text-lg text-[#D6B76C]" />

              <span className="text-sm font-semibold text-slate-200">
                شريكك في احتياجات القوى العاملة
              </span>
            </div>

          </div>


          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div className="lg:col-span-2 lg:mr-4">

            <h3 className="text-base font-bold text-white">
              روابط سريعة
            </h3>

            <div className="mb-5 mt-3 h-[2px] w-10 rounded-full bg-[#D6B76C]" />

            <nav
              aria-label="روابط الفوتر"
              className="flex flex-col items-start gap-3.5"
            >
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-[#D6B76C]"
                >
                  <FaArrowLeft className="text-[9px] text-[#D6B76C] opacity-0 transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100" />

                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

          </div>


          {/* =====================================
              CONTACT DETAILS
          ===================================== */}

          <div className="lg:col-span-3">

            <h3 className="text-base font-bold text-white">
              بيانات التواصل
            </h3>

            <div className="mb-5 mt-3 h-[2px] w-10 rounded-full bg-[#D6B76C]" />

            <div className="space-y-5">

              {/* Phone numbers */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#D6B76C]">
                  <FaPhoneAlt />
                </div>

                <div className="min-w-0">

                  <p className="mb-2 text-xs text-slate-400">
                    اتصل بنا
                  </p>

                  <div className="flex flex-col items-start gap-2">

                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.number}
                        href={phone.href}
                        dir="ltr"
                        className="text-sm text-slate-200 transition-colors hover:text-[#D6B76C]"
                      >
                        {phone.number}
                      </a>
                    ))}

                  </div>

                </div>
              </div>


              {/* Email */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#D6B76C]">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">

                  <p className="mb-2 text-xs text-slate-400">
                    البريد الإلكتروني
                  </p>

                  <a
                    href="mailto:info@emaarmasr.com"
                    dir="ltr"
                    className="inline-block break-all text-sm text-slate-200 transition-colors hover:text-[#D6B76C]"
                  >
                    info@emaarmasr.com
                  </a>

                </div>
              </div>


              {/* Address */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#D6B76C]">
                  <FaMapMarkerAlt />
                </div>

                <div className="min-w-0">

                  <p className="mb-2 text-xs text-slate-400">
                    عنوان الشركة
                  </p>

                  <p className="text-sm leading-7 text-slate-200">
                    مبنى 32، الحي 11، المحور الخدمي،
                    أمام مدينة الثقافة والعلوم،
                    مدينة 6 أكتوبر، الجيزة، مصر.
                  </p>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#D6B76C] transition-colors hover:text-white"
                  >
                    عرض الموقع على الخريطة

                    <FaArrowLeft className="text-[10px]" />
                  </a>

                </div>
              </div>

            </div>

          </div>


          {/* =====================================
              CALL TO ACTION
          ===================================== */}

          <div className="lg:col-span-3">

            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D6B76C]/10 text-xl text-[#D6B76C]">
                <FaBuilding />
              </div>

              <h3 className="mt-5 text-xl font-bold leading-relaxed text-white">
                هل تبحث عن عمالة لشركتك؟
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                شاركنا احتياجاتك ومتطلبات التشغيل،
                ليتسنى لفريق إعمار مصر مراجعة طلبك
                ومناقشة الخطوات المناسبة.
              </p>

              <Link
                to="/contact"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#D6B76C] px-5 py-3.5 text-sm font-bold text-[#071B3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7CC8B]"
              >
                اطلب خدمة

                <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
              </Link>

              <Link
                to="/jobs"
                className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#D6B76C]/60 hover:bg-white/[0.05]"
              >
                <FaBriefcase className="text-[#D6B76C]" />

                التقديم على الوظائف

              </Link>

            </div>

          </div>

        </div>


        {/* =====================================
            BOTTOM BRAND STATEMENT
        ===================================== */}

        <div className="mt-14 border-t border-white/10 pt-7">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">

            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              © {currentYear} إعمار مصر. جميع الحقوق محفوظة.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
              <FaClock className="text-[#D6B76C]" />

              <span>
                نرحب بتواصلكم لمناقشة احتياجات القوى العاملة والتشغيل.
              </span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}