import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaHandshake,
  FaBriefcase,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzv3abQk-wImq5ES7wX5WmWzfHw79kST0NkxLi04C4qEcbnzqSlTb2fDgYyz36q8Hxz/exec";

const COMPANY = {
  name: "إعمار مصر",
  phone1: "0238341280",
  phone2: "01119666524",
  email: "info@emaarmasr.com",
  address:
    "مبنى 32، الحي 11، المحور الخدمي، أمام مدينة الثقافة والعلوم، مدينة 6 أكتوبر، الجيزة، مصر",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm text-[#071B3A] placeholder:text-slate-400 outline-none transition duration-200 focus:border-[#B99A55] focus:bg-white focus:ring-4 focus:ring-[#D6B76C]/15";

const labelClass =
  "mb-2 block text-sm font-semibold text-[#071B3A]";

export default function Contact() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setStatus("");

    try {
      const formData = new URLSearchParams();

      // أسماء الحقول متوافقة مع Google Apps Script
      formData.append("name", data.name.trim());
      formData.append("company", data.company.trim());
      formData.append("phone", data.phone.trim());
      formData.append("email", data.email.trim());
      formData.append("service", data.service);
      formData.append("message", data.message.trim());

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const clearStatus = () => {
    if (status) setStatus("");
  };

  const phoneNumbers = [
    {
      number: COMPANY.phone1,
      href: `tel:${COMPANY.phone1}`,
    },
    {
      number: COMPANY.phone2,
      href: `tel:${COMPANY.phone2}`,
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#F7F8FA] text-[#071B3A]"
    >
      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-l from-[#071B3A] via-[#102F56] to-[#071B3A]">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-[#D6B76C]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-8 -top-12 h-48 w-48 rounded-full border border-[#D6B76C]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-[#D6B76C]/5 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-blue-200">
              <a
                href="/"
                className="transition hover:text-[#D6B76C]"
              >
                الرئيسية
              </a>

              <span className="text-[#D6B76C]">/</span>

              <span className="text-white">تواصل معنا</span>
            </div>

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D6B76C]/30 bg-white/5 px-4 py-2">
              <FaHandshake className="text-[#D6B76C]" />

              <span className="text-sm font-medium text-[#E7D4A3]">
                LET'S WORK TOGETHER
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-relaxed text-white sm:text-4xl lg:text-5xl">
              تواصل مع إعمار مصر
              <span className="mt-2 block text-[#D6B76C]">
                لنبدأ التعاون
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              هل تبحث عن عمالة مناسبة لشركتك أو مشروعك؟
              شاركنا احتياجاتك، وفريق إعمار مصر يمكنه مراجعة
              طلبك والتواصل معك لمناقشة التفاصيل.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">

          {/* =====================================
              COMPANY CONTACT DETAILS
          ===================================== */}

          <motion.aside
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >

            <div className="overflow-hidden rounded-2xl bg-[#071B3A] p-6 text-white sm:rounded-3xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6B76C]/10 text-xl text-[#D6B76C]">
                <FaBuilding />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold">
                بيانات الشركة
              </h2>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                يسعدنا استقبال استفسارات الشركات والمؤسسات حول
                خدمات القوى العاملة والتشغيل وفرص التعاون.
              </p>

              <div className="mt-7 space-y-6">

                {/* Phones */}

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D6B76C]">
                    <FaPhoneAlt />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-bold text-white">
                      أرقام التواصل
                    </h3>

                    <div className="mt-2 flex flex-col items-start gap-2">

                      {phoneNumbers.map((item) => (
                        <a
                          key={item.number}
                          href={item.href}
                          dir="ltr"
                          className="text-sm text-blue-100 transition hover:text-[#D6B76C]"
                        >
                          {item.number}
                        </a>
                      ))}

                    </div>

                  </div>
                </div>


                {/* Email */}

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D6B76C]">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-bold text-white">
                      البريد الإلكتروني
                    </h3>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      dir="ltr"
                      className="mt-2 inline-block break-all text-sm text-blue-100 transition hover:text-[#D6B76C]"
                    >
                      {COMPANY.email}
                    </a>

                  </div>
                </div>


                {/* Address */}

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D6B76C]">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-bold text-white">
                      عنوان الشركة
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {COMPANY.address}
                    </p>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        COMPANY.address
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#D6B76C] transition hover:text-white"
                    >
                      عرض العنوان على الخريطة
                      <FaArrowLeft className="text-xs" />
                    </a>

                  </div>
                </div>

              </div>
            </div>


            {/* Working relationship card */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8F3E6] text-lg text-[#A78436]">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="font-bold text-[#071B3A]">
                    هل تحتاج إلى عمالة لشركتك؟
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    وضّح نوع الخدمة وعدد العمالة المطلوبة في الرسالة،
                    وساعدنا على فهم احتياجات شركتك بشكل أفضل.
                  </p>
                </div>

              </div>

            </div>


            {/* Privacy note */}

            <div className="flex items-start gap-3 px-1 py-2">

              <FaShieldAlt className="mt-1 shrink-0 text-[#A78436]" />

              <p className="text-xs leading-7 text-slate-500">
                يرجى إدخال بيانات التواصل الصحيحة، وتجنب مشاركة
                أي بيانات شخصية أو مالية غير ضرورية.
              </p>

            </div>

          </motion.aside>


          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10"
          >

            <div className="mb-8 border-b border-slate-100 pb-7">

              <p className="text-sm font-bold tracking-[0.12em] text-[#A78436]">
                CONTACT FORM
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-[#071B3A] sm:text-3xl">
                ابعتلنا تفاصيل طلبك
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                املأ البيانات التالية، وسيتم إرسال طلبك لفريق
                إعمار مصر لمراجعته.
              </p>

            </div>


            {/* SUCCESS MESSAGE */}

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                className="mb-7 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-lg text-emerald-600" />

                <div>
                  <p className="font-bold">
                    تم إرسال طلبك
                  </p>

                  <p className="mt-1 text-sm leading-6">
                    شكرًا لتواصلك مع إعمار مصر. سنراجع بياناتك
                    وفقًا لآلية متابعة الطلبات بالشركة.
                  </p>
                </div>
              </motion.div>
            )}


            {/* ERROR MESSAGE */}

            {status === "error" && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-7 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"
              >
                <FaExclamationCircle className="mt-1 shrink-0 text-lg" />

                <div>
                  <p className="font-bold">
                    تعذر إرسال الطلب
                  </p>

                  <p className="mt-1 text-sm leading-6">
                    حصلت مشكلة في الاتصال. حاول مرة أخرى، أو تواصل
                    معنا مباشرة عبر البريد الإلكتروني أو الهاتف.
                  </p>
                </div>
              </div>
            )}


            <form
              onSubmit={handleSubmit(onSubmit)}
              onChange={clearStatus}
              noValidate
            >

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* NAME */}

                <div>

                  <label htmlFor="contact-name" className={labelClass}>
                    الاسم بالكامل
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="اكتب اسمك"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name", {
                      required: "من فضلك اكتب الاسم",
                      minLength: {
                        value: 2,
                        message: "الاسم قصير جدًا",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.name
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}

                </div>


                {/* COMPANY */}

                <div>

                  <label htmlFor="contact-company" className={labelClass}>
                    اسم الشركة
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="اسم الشركة أو المؤسسة"
                    {...register("company")}
                    className={inputClass}
                  />

                </div>


                {/* PHONE */}

                <div>

                  <label htmlFor="contact-phone" className={labelClass}>
                    رقم الموبايل
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="رقم للتواصل معك"
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone", {
                      required: "رقم الموبايل مطلوب",
                      pattern: {
                        value: /^[0-9+\s()-]{8,20}$/,
                        message: "من فضلك أدخل رقم هاتف صحيح",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.phone
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}

                </div>


                {/* EMAIL */}

                <div>

                  <label htmlFor="contact-email" className={labelClass}>
                    البريد الإلكتروني
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email", {
                      validate: (value) =>
                        !value ||
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                        "من فضلك أدخل بريدًا إلكترونيًا صحيحًا",
                    })}
                    className={`${inputClass} ${
                      errors.email
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}

                </div>


                {/* SERVICE */}

                <div className="sm:col-span-2">

                  <label htmlFor="contact-service" className={labelClass}>
                    نوع الخدمة المطلوبة
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <select
                    id="contact-service"
                    aria-invalid={Boolean(errors.service)}
                    {...register("service", {
                      required: "من فضلك اختر نوع الخدمة",
                    })}
                    className={`${inputClass} ${
                      errors.service
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  >
                    <option value="">اختار نوع الطلب</option>
                    <option value="توفير العمالة">
                      توفير العمالة
                    </option>
                    <option value="العمالة للمشروعات والشركات">
                      العمالة للمشروعات والشركات
                    </option>
                    <option value="استقطاب واختيار الكفاءات">
                      استقطاب واختيار الكفاءات
                    </option>
                    <option value="التوظيف والتعيين">
                      التوظيف والتعيين
                    </option>
                    <option value="الشراكات والتعاون">
                      الشراكات والتعاون
                    </option>
                    <option value="استفسار عام">
                      استفسار عام
                    </option>
                    <option value="أخرى">
                      أخرى
                    </option>
                  </select>

                  {errors.service && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.service.message}
                    </p>
                  )}

                </div>


                {/* MESSAGE */}

                <div className="sm:col-span-2">

                  <label htmlFor="contact-message" className={labelClass}>
                    تفاصيل الطلب
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    rows={5}
                    maxLength={1500}
                    placeholder="اكتب تفاصيل احتياجات شركتك أو المشروع، ونوع العمالة المطلوبة..."
                    aria-invalid={Boolean(errors.message)}
                    {...register("message", {
                      required: "من فضلك اكتب تفاصيل طلبك",
                      minLength: {
                        value: 10,
                        message: "اكتب تفاصيل أكثر عن طلبك",
                      },
                      maxLength: {
                        value: 1500,
                        message: "الرسالة طويلة جدًا",
                      },
                    })}
                    className={`${inputClass} min-h-[140px] resize-y leading-7 ${
                      errors.message
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}

                </div>

              </div>


              {/* SUBMIT */}

              <div className="mt-7">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#071B3A] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#102F56] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:min-w-[220px]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      جاري إرسال الطلب...
                    </>
                  ) : (
                    <>
                      إرسال الطلب
                      <FaPaperPlane className="text-sm text-[#D6B76C]" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs leading-6 text-slate-400">
                  الحقول التي تحمل علامة * مطلوبة. برجاء التأكد من
                  صحة بيانات التواصل قبل الإرسال.
                </p>

              </div>

            </form>

          </motion.section>

        </div>

      </section>

    </main>
  );
}