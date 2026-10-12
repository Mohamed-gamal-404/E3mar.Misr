import logo from "../assets/images/e3mqr-icon.png";

import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="footer bg-blue-950 w-full text-white pt-14"
      dir="rtl"
    >
      {/* Main Footer */}
      <div className="main w-full max-w-7xl mx-auto px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="companyinfo flex flex-col items-center lg:items-start">
            <img
              src={logo}
              alt="Emaar Misr"
              className="w-30 h-15 object-contain"
            />

            <h1 className="font-bold text-xl mt-2">
              إعمار مصر
            </h1>

            <h2 className="font-bold text-xl">
              Emaar Misr
            </h2>

            <p className="text-gray-300 text-sm mt-4 text-center lg:text-right leading-6">
              نسعى دائمًا لتقديم أفضل الخدمات والحلول
              لعملائنا بأعلى جودة واحترافية.
            </p>
          </div>

          {/* Contact Info */}
          <div className="info">
            <h3 className="text-xl font-bold mb-5">
              تواصل معنا
            </h3>

            <div className="flex flex-col gap-4 text-gray-200">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg shrink-0" />
                <span dir="ltr">0238341280 / 01119666524 </span>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineMail className="text-xl shrink-0" />
                <span>email@emaar.com</span>
              </div>

              <div className="flex items-start gap-3">
                <IoLocation className="w-7 h-7 shrink-0" />

                <span className="leading-6">
مبنى 32 الحي 11 , المحور الخدمي ,امام مدينة الثقافة والعلوم , مدينة 6 اكتوبر , الجيزة , مصر 
                </span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="text-xl font-bold mb-5">
              روابط سريعة
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">

              <Link
                to="/"
                className="hover:text-white transition duration-300"
              >
                الرئيسية
              </Link>

              <Link
                to="/about"
                className="hover:text-white transition duration-300"
              >
                من نحن
              </Link>

              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                خدماتنا
              </Link>

              <Link
                to="/jobs"
                className="hover:text-white transition duration-300"
              >
                الوظائف
              </Link>

              <Link
                to="/faq"
                className="hover:text-white transition duration-300"
              >
                الأسئلة الشائعة
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                تواصل معنا
              </Link>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              تابعنا على
            </h3>

            <p className="text-gray-300 text-sm leading-6 mb-5">
              تابعنا على منصات التواصل الاجتماعي
              لمعرفة أحدث الأخبار والعروض.
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition duration-300"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-12 py-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-gray-400 text-sm text-center">

            <p>
              جميع الحقوق محفوظة شركة إعمار مصر © 2026
            </p>

            <p dir="ltr">
              © 2026 All Rights Reserved  Emaar Misr
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}