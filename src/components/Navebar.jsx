import { useState } from "react"
import logo from "../assets/images/e3mqr-icon.png"
import { FaBars, FaTimes } from "react-icons/fa"

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
          <li className="hover:text-[#ffd900] cursor-pointer">الصفحة الرئيسية</li>
          <li className="hover:text-[#ffd900] cursor-pointer">من نحن</li>
          <li className="hover:text-[#ffd900] cursor-pointer">خدماتنا</li>
          <li className="hover:text-[#ffd900] cursor-pointer">الوظائف المتاحة</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-4 py-2 text-white bg-blue-900 rounded-xl hover:bg-[#ffd900] hover:font-bold transition">
        إبحث عن وظيفة!
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-blue-800  px-4 py-3 space-y-3">
          <p className=" cursor-pointer hover:text-[#ffd900]">الصفحة الرئيسية</p>
          <p className="cursor-pointer hover:text-[#ffd900]">من نحن</p>
          <p className="cursor-pointer hover:text-[#ffd900]">خدماتنا</p>
          <p className="cursor-pointer hover:text-[#ffd900]">الوظائف المتاحة</p>

          <button className="w-full mt-2 px-4 py-2 bg-white text-blue-900 rounded hover:bg-[#ffd900] font-medium">
            قدم دلوقتي !
          </button>
        </div>
      )}

    </section>
  )
}