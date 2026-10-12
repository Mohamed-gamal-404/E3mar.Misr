    import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwtjnzgMHCQjvckT464KhrEhkCxnZGO_Hbi8F60vzt_ZLiTDKSYNsMQIb4OetXMZrK_zQ/exec";

export default function JobApplication() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new URLSearchParams();

      formData.append("fullName", data.fullName || "");
      formData.append("phone", data.phone || "");
      formData.append("age", data.age || "");
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

      alert(
        "تم إرسال بياناتك بنجاح، وسيتواصل معك فريق إعمار مصر عند توفر فرصة مناسبة."
      );

      reset();
    } catch (error) {
      console.error("Submit Error:", error);

      alert("حدث خطأ أثناء إرسال البيانات، حاول مرة أخرى.");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-l from-blue-950 to-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <p className="text-blue-200 mb-3">
            الرئيسية ← للباحثين عن عمل
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ابحث عن فرصة عمل
          </h1>

          <p className="text-lg text-blue-100 max-w-2xl">
            سجّل بياناتك وسيتواصل معك فريق إعمار مصر عند توفر فرصة عمل
            مناسبة لخبراتك ومهاراتك.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                بياناتك الشخصية
              </h2>

              <p className="text-gray-500">
                من فضلك قم بإدخال بياناتك بشكل صحيح حتى نتمكن من التواصل
                معك.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    الاسم بالكامل *
                  </label>

                  <div className="relative">
                    <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      placeholder="اكتب اسمك بالكامل"
                      {...register("fullName", {
                        required: "الاسم بالكامل مطلوب",
                      })}
                      className="w-full pr-11 pl-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    رقم الهاتف *
                  </label>

                  <div className="relative">
                    <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      {...register("phone", {
                        required: "رقم الهاتف مطلوب",
                        pattern: {
                          value: /^01[0125][0-9]{8}$/,
                          message: "من فضلك أدخل رقم هاتف مصري صحيح",
                        },
                      })}
                      className="w-full pr-11 pl-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    السن
                  </label>

                  <input
                    type="number"
                    placeholder="مثال: 25"
                    {...register("age", {
                      min: {
                        value: 16,
                        message: "السن يجب أن يكون 16 سنة أو أكثر",
                      },
                      max: {
                        value: 70,
                        message: "السن غير صحيح",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    المحافظة / المنطقة
                  </label>

                  <div className="relative">
                    <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      placeholder="مثال: الجيزة"
                      {...register("location")}
                      className="w-full pr-11 pl-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Job */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    المهنة / المجال *
                  </label>

                  <div className="relative">
                    <FaBriefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />

                    <select
                      {...register("job", {
                        required: "من فضلك اختر المهنة",
                      })}
                      className="w-full pr-11 pl-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white appearance-none"
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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.job.message}
                    </p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    سنوات الخبرة
                  </label>

                  <div className="relative">
                    <FaClock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />

                    <select
                      {...register("experience")}
                      className="w-full pr-11 pl-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white appearance-none"
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

              {/* Notes */}
              <div className="mt-6">
                <label className="block mb-2 font-semibold text-gray-700">
                  ملاحظات إضافية
                </label>

                <div className="relative">
                  <FaCommentAlt className="absolute right-4 top-4 text-gray-400" />

                  <textarea
                    rows="5"
                    placeholder="اكتب أي معلومات إضافية ترغب في إخبارنا بها..."
                    {...register("notes")}
                    className="w-full pr-11 pl-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition"
              >
                <FaPaperPlane />

                {isSubmitting
                  ? "جاري إرسال البيانات..."
                  : "إرسال البيانات"}
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}