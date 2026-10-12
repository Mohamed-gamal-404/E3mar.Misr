import { useState } from "react"
import logo from "../assets/images/e3mqr-icon.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <section dir="rtl" className="w-full  text-white">
      
      <div className="flex items-center justify-between px-4 py-3 md:px-8">

        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="E3mar-Logo" 
            className="w-10 h-10 md:w-14 md:h-14"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-blue-900 text-sm md:text-base font-medium">
              إعمار مصر
            </span>
            <span className=" text-blue-900 text-xs md:text-sm opacity-80">
              Emaar Misr
            </span>
          </div>
        </div>

        {/* Menu Icon (Mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-white"
        >
          {open ? <FaTimes className="text-blue-900" /> : <FaBars className="text-blue-900" />}
        </button>

    
        <ul className="hidden md:flex items-center text-blue-900 gap-6 font-medium">
          <li className="hover:text-[#ffd900] cursor-pointer">
            <Link to="/">الصفحة الرئيسية</Link>
          </li>
          <li className="hover:text-[#ffd900] cursor-pointer">
            <Link to="/About">
            من نحن
            </Link>
          </li>
          <li className="hover:text-[#ffd900] cursor-pointer">
            <Link to='/services'>
            خدماتنا
            </Link>
            </li>
          <li className="hover:text-[#ffd900] cursor-pointer">
            تواصل معنا
          </li>
        </ul>

        {/* Desktop Button */}
      
        <button className="hidden md:block px-4 py-2 text-white bg-blue-900 rounded-xl hover:bg-[#ffd900] hover:font-bold transition">
          <Link to="/jobs">إبحث عن وظيفىة</Link>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-blue-800  px-4 py-3 space-y-3 flex flex-col">
          <Link className=" cursor-pointer hover:text-[#ffd900] " to="/">الصفحة الرئيسية</Link>
          <Link className="cursor-pointer hover:text-[#ffd900]" to='/About'>من نحن</Link>
          <Link className="cursor-pointer hover:text-[#ffd900]" to="/services">خدماتنا</Link>
          <p className="cursor-pointer hover:text-[#ffd900]">تواصل معنا</p>

          <button className="w-full mt-2 px-4 py-2 bg-white text-blue-900 rounded hover:bg-[#ffd900] font-medium">
          <Link to="/jobs"> إيحث عن وظيفة</Link>
          </button>
        </div>
      )}

    </section>
  )
}