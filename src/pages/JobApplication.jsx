import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaCommentAlt,
  FaPaperPlane,
  FaArrowLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwtjnzgMHCQjvckT464KhrEhkCxnZGO_Hbi8F60vzt_ZLiTDKSYNsMQIb4OetXMZrK_zQ/exec";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-[#FBFCFE] px-4 py-3.5 text-sm text-[#071B3A] placeholder:text-slate-400 outline-none transition duration-200 focus:border-[#B99A55] focus:bg-white focus:ring-4 focus:ring-[#D6B76C]/15";

const labelClass =
  "mb-2 block text-sm font-semibold text-[#071B3A]";

const iconClass =
  "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-colors";

export default function JobApplication() {
  const [submitStatus, setSubmitStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      phone: "",
      age: "",
      location: "",
      job: "",
      experience: "",
      notes: "",
    },
  });

  const onSubmit = async (data) => {
  setSubmitStatus("");

  try {
    const formData = new URLSearchParams();

    formData.append("fullName", data.fullName || "");
    formData.append("phone", data.phone || "");
    formData.append("age", data.age ?? "");
    formData.append("location", data.location || "");
    formData.append("job", data.job || "");
    formData.append("experience", data.experience || "");
    formData.append("notes", data.notes || "");

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    // فضّي الحقول أولًا
    reset();

    // وبعدها اعرض رسالة النجاح
    setSubmitStatus("success");
  } catch (error) {
    console.error("Submit Error:", error);
    setSubmitStatus("error");
  }
};

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

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}

            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-blue-200">
              <Link
                to="/"
                className="transition hover:text-[#D6B76C]"
              >
                الرئيسية
              </Link>

              <span className="text-[#D6B76C]">/</span>

              <span className="text-white">
                فرص العمل
              </span>
            </div>

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D6B76C]/30 bg-white/5 px-4 py-2">
              <FaBriefcase className="text-[#D6B76C]" />

              <span className="text-sm font-medium text-[#E7D4A3]">
                CAREER OPPORTUNITIES
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-relaxed text-white sm:text-4xl lg:text-5xl">
              خطوتك التالية
              <span className="block text-[#D6B76C]">
                تبدأ من هنا
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              بتدور على فرصة عمل؟ سجّل بياناتك ومجال خبرتك،
              وفريق إعمار مصر يقدر يرجع لبياناتك عند مراجعة
              فرص العمل المناسبة.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================
          APPLICATION CONTENT
      ===================================== */}

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-7 lg:grid-cols-[1.35fr_0.75fr] lg:gap-10">

          {/* =====================================
              APPLICATION FORM
          ===================================== */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10"
          >

            {/* Form heading */}

            <div className="mb-8 border-b border-slate-100 pb-7">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F3E6] text-xl text-[#A78436]">
                <FaClipboardList />
              </div>

              <h2 className="text-2xl font-extrabold text-[#071B3A] sm:text-3xl">
                استمارة التقديم
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                اكتب بياناتك الأساسية واختر المهنة المناسبة ليك.
                الحقول اللي عليها علامة
                <span className="mx-1 font-bold text-red-500">
                  *
                </span>
                مطلوبة.
              </p>

            </div>


            {/* Success message */}

            {submitStatus === "success" && (
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
                    شكرًا لاهتمامك بالانضمام إلى إعمار مصر.
                    يمكنك تسجيل بياناتك مرة أخرى إذا احتجت لذلك.
                  </p>
                </div>
              </motion.div>
            )}


            {/* Error message */}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                aria-live="assertive"
                className="mb-7 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-7 text-red-700"
              >
                حصلت مشكلة أثناء إرسال الطلب. راجع اتصال الإنترنت
                وحاول مرة تانية.
              </motion.div>
            )}


          <form
  onSubmit={handleSubmit(onSubmit)}
  noValidate
>

              {/* PERSONAL INFORMATION */}

              <div className="mb-8">

                <div className="mb-5 flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#071B3A] text-sm font-bold text-[#D6B76C]">
                    01
                  </span>

                  <div>
                    <h3 className="font-bold text-[#071B3A]">
                      بياناتك الشخصية
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      معلومات تساعدنا على التواصل معك
                    </p>
                  </div>

                </div>


                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* FULL NAME */}

                  <div className="sm:col-span-2">

                    <label
                      htmlFor="fullName"
                      className={labelClass}
                    >
                      الاسم بالكامل
                      <span className="mr-1 text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <FaUser className={iconClass} />

                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="اكتب اسمك رباعي"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        {...register("fullName", {
                          required: "من فضلك اكتب الاسم بالكامل",
                          minLength: {
                            value: 3,
                            message: "الاسم قصير جدًا",
                          },
                        })}
                        className={`${inputClass} pr-11 ${
                          errors.fullName
                            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                            : ""
                        }`}
                      />
                    </div>

                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        className="mt-2 text-xs text-red-600"
                      >
                        {errors.fullName.message}
                      </p>
                    )}

                  </div>


                  {/* PHONE */}

                  <div>

                    <label
                      htmlFor="phone"
                      className={labelClass}
                    >
                      رقم الهاتف
                      <span className="mr-1 text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <FaPhone className={iconClass} />

                      <input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={11}
                        placeholder="01xxxxxxxxx"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        {...register("phone", {
                          required: "رقم الهاتف مطلوب",
                          pattern: {
                            value: /^01[0125][0-9]{8}$/,
                            message: "اكتب رقم هاتف مصري صحيح من 11 رقم",
                          },
                        })}
                        className={`${inputClass} pr-11 ${
                          errors.phone
                            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                            : ""
                        }`}
                      />
                    </div>

                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="mt-2 text-xs text-red-600"
                      >
                        {errors.phone.message}
                      </p>
                    )}

                  </div>


                  {/* AGE */}

                  <div>

                    <label
                      htmlFor="age"
                      className={labelClass}
                    >
                      السن
                    </label>

                    <input
                      id="age"
                      type="number"
                      inputMode="numeric"
                      min={16}
                      max={70}
                      placeholder="مثال: 25"
                      aria-invalid={Boolean(errors.age)}
                      aria-describedby={
                        errors.age ? "age-error" : undefined
                      }
                      {...register("age", {
                        setValueAs: (value) =>
                          value === "" ? undefined : Number(value),
                        min: {
                          value: 16,
                          message: "السن يجب أن يكون 16 سنة أو أكثر",
                        },
                        max: {
                          value: 70,
                          message: "من فضلك راجع السن المدخل",
                        },
                      })}
                      className={`${inputClass} ${
                        errors.age
                          ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                          : ""
                      }`}
                    />

                    {errors.age && (
                      <p
                        id="age-error"
                        className="mt-2 text-xs text-red-600"
                      >
                        {errors.age.message}
                      </p>
                    )}

                  </div>


                  {/* LOCATION */}

                  <div className="sm:col-span-2">

                    <label
                      htmlFor="location"
                      className={labelClass}
                    >
                      المحافظة / المنطقة
                    </label>

                    <div className="relative">
                      <FaMapMarkerAlt className={iconClass} />

                      <input
                        id="location"
                        type="text"
                        autoComplete="address-level1"
                        placeholder="مثال: الجيزة، القاهرة، الإسكندرية"
                        {...register("location")}
                        className={`${inputClass} pr-11`}
                      />
                    </div>

                  </div>

                </div>

              </div>


              {/* JOB INFORMATION */}

              <div className="mb-8 border-t border-slate-100 pt-8">

                <div className="mb-5 flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#071B3A] text-sm font-bold text-[#D6B76C]">
                    02
                  </span>

                  <div>
                    <h3 className="font-bold text-[#071B3A]">
                      بيانات العمل
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      اختار المجال الأقرب لخبرتك
                    </p>
                  </div>

                </div>


                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* JOB */}

                  <div>

                    <label
                      htmlFor="job"
                      className={labelClass}
                    >
                      المهنة / مجال العمل
                      <span className="mr-1 text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <FaBriefcase className={iconClass} />

                      <select
                        id="job"
                        aria-invalid={Boolean(errors.job)}
                        aria-describedby={
                          errors.job ? "job-error" : undefined
                        }
                        {...register("job", {
                          required: "من فضلك اختار المهنة",
                        })}
                        className={`${inputClass} appearance-none pr-11`}
                      >
                        <option value="">اختر المهنة</option>
                        <option value="عامل">عامل</option>
                        <option value="فني كهرباء">فني كهرباء</option>
                        <option value="فني سباكة">فني سباكة</option>
                        <option value="نجار">نجار</option>
                        <option value="حداد">حداد</option>
                        <option value="نقاش">نقاش</option>
                        <option value="مبيض محارة">مبيض محارة</option>
                        <option value="سائق">سائق</option>
                        <option value="لحام">لحام</option>
                        <option value="عامل نظافة">عامل نظافة</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                    </div>

                    {errors.job && (
                      <p
                        id="job-error"
                        className="mt-2 text-xs text-red-600"
                      >
                        {errors.job.message}
                      </p>
                    )}

                  </div>


                  {/* EXPERIENCE */}

                  <div>

                    <label
                      htmlFor="experience"
                      className={labelClass}
                    >
                      سنوات الخبرة
                    </label>

                    <div className="relative">
                      <FaClock className={iconClass} />

                      <select
                        id="experience"
                        {...register("experience")}
                        className={`${inputClass} appearance-none pr-11`}
                      >
                        <option value="">اختر سنوات الخبرة</option>
                        <option value="بدون خبرة">بدون خبرة</option>
                        <option value="أقل من سنة">أقل من سنة</option>
                        <option value="1 - 3 سنوات">1 - 3 سنوات</option>
                        <option value="3 - 5 سنوات">3 - 5 سنوات</option>
                        <option value="أكثر من 5 سنوات">
                          أكثر من 5 سنوات
                        </option>
                      </select>
                    </div>

                  </div>

                </div>

              </div>


              {/* NOTES */}

              <div className="border-t border-slate-100 pt-8">

                <div className="mb-5 flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#071B3A] text-sm font-bold text-[#D6B76C]">
                    03
                  </span>

                  <div>
                    <h3 className="font-bold text-[#071B3A]">
                      معلومات إضافية
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      خطوة اختيارية
                    </p>
                  </div>

                </div>

                <label
                  htmlFor="notes"
                  className={labelClass}
                >
                  ملاحظات أو مهارات إضافية
                </label>

                <div className="relative">
                  <FaCommentAlt className="pointer-events-none absolute right-4 top-4 text-sm text-slate-400" />

                  <textarea
                    id="notes"
                    rows={4}
                    maxLength={700}
                    placeholder="مثال: عندي خبرة في المخازن، أو أقدر أبدأ العمل فورًا..."
                    {...register("notes")}
                    className={`${inputClass} min-h-[120px] resize-y pr-11 leading-7`}
                  />
                </div>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  اكتب أي تفاصيل تساعدنا على فهم خبرتك ومهاراتك.
                </p>

              </div>


              {/* SUBMIT BUTTON */}

              <div className="mt-8">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#071B3A] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#102F56] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      جاري إرسال البيانات...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-[#D6B76C]" />

                      إرسال طلب التقديم

                      <FaArrowLeft className="text-xs text-[#D6B76C] transition-transform duration-200 group-hover:-translate-x-1" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-6 text-slate-400">
                  بمشاركة بياناتك، فإنك توافق على استخدامها للتواصل
                  معك بخصوص فرص العمل المناسبة.
                </p>

              </div>

            </form>

          </motion.section>


          {/* =====================================
              SIDE INFORMATION
          ===================================== */}

          <aside className="space-y-5 lg:sticky lg:top-28">

            {/* Info Card */}

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-[#071B3A] p-6 text-white sm:rounded-3xl sm:p-8"
            >

              <div
                aria-hidden="true"
                className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-[#D6B76C]/20"
              />

              <div className="relative z-10">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6B76C]/10 text-xl text-[#D6B76C]">
                  <FaUsers />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold leading-relaxed">
                  ابدأ خطوتك المهنية مع إعمار مصر
                </h2>

                <p className="mt-4 text-sm leading-8 text-blue-100">
                  سجّل بياناتك ومجال عملك وخبراتك، لتكون معلوماتك
                  متاحة لفريق الشركة عند مراجعة طلبات التقديم
                  والفرص المتاحة.
                </p>

                <div className="mt-7 space-y-4">

                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#D6B76C]" />

                    <p className="text-sm leading-7 text-blue-50">
                      نموذج بسيط وسهل الاستخدام.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#D6B76C]" />

                    <p className="text-sm leading-7 text-blue-50">
                      إمكانية تسجيل الخبرة والمهنة.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#D6B76C]" />

                    <p className="text-sm leading-7 text-blue-50">
                      إمكانية إضافة مهارات ومعلومات إضافية.
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>


            {/* Privacy Note */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8F3E6] text-lg text-[#A78436]">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="font-bold text-[#071B3A]">
                    بياناتك مهمة
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    أدخل بيانات التواصل الصحيحة، وتجنب إضافة
                    معلومات شخصية غير مطلوبة داخل خانة الملاحظات.
                  </p>
                </div>

              </div>

            </div>


            {/* Contact Link */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <p className="font-bold text-[#071B3A]">
                عندك استفسار؟
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                تقدر تتعرف على خدمات إعمار مصر أو تتواصل مع الشركة
                من خلال صفحة التواصل.
              </p>

              <Link
                to="/services"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A78436] transition hover:text-[#071B3A]"
              >
                اكتشف خدماتنا

                <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
} 