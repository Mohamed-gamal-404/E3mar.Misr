
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { VscGitStashApply } from "react-icons/vsc";
import { MdSecurity, MdOutlineStarOutline } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { GiGrowth } from "react-icons/gi";
import JOBIMAGE from "../assets/images/JobOffers-bro.png";
import RESUME from "../assets/images/Resume folder-cuate.png";
import Benfits from "../components/Benfits";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const benfits = [
    {
      icon: <VscGitStashApply />,
      title: "سهولة في التقديم",
      Pragraph: "قدم على الوظائف في ضغطة واحدة",
      iconbackground: "#3B83CB",
    },
    {
      icon: <MdSecurity />,
      title: "وظائف موثوقة",
      Pragraph: "كل الوظائف حقيقية وموثوقة",
      iconbackground: "#18A444",
    },
    {
      icon: <MdOutlineStarOutline />,
      title: "الوصول الذكي",
      Pragraph: "جد كل الوظائف التي تناسبك",
      iconbackground: "#FFAA00",
    },
    {
      icon: <SiReaddotcv />,
      title: "بناء الوثائق",
      Pragraph: "ابني وثيقة احترافيه في دقائق",
      iconbackground: "#AA00FF",
    },
    {
      icon: <GiGrowth />,
      title: "تطوير مهاراتك",
      Pragraph: "نسرع تطورك المهني والوظيفي",
      iconbackground: "#FA4444",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "سجل بياناتك",
      desc: "سجل بياناتك وكن جاهزاً في دقائق",
      color: "bg-blue-800",
    },
    {
      number: 2,
      title: "إرفع سيرتك الذاتيه",
      desc: "إرفع السيرة الذاتيه الخاصة بك وإبرز مهاراتك",
      color: "bg-blue-600",
    },
    {
      number: 3,
      title: "قدم & إبدأ العمل",
      desc: "قدم على العمل وكن جاهزاً للعمل في افضل الشركات",
      color: "bg-blue-500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        dir="rtl"
        className="min-h-screen px-6 lg:px-16 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
      >
        {/* Hero Content */}
        <ScrollReveal
          direction="right"
          className="w-full max-w-2xl"
        >
          <div className="text-center lg:text-right">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              إبحث عن وظيفة أحلامك
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2"
            >
              لبناء <span className="text-blue-900">مستقبلك!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-500 text-lg sm:text-xl mt-6 leading-8"
            >
              نغطي العديد من فرص العمل من خلال أفضل الشركات
              والمصانع داخل مصر
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 duration-300 shadow-lg"
              >
                ابحث عن وظيفة
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="border border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 duration-300"
              >
                نشر وظيفة
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  +10K
                </h2>
                <p className="text-gray-500">وظيفة متاحة</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  +5K
                </h2>
                <p className="text-gray-500">شركة موثوقة</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  +50K
                </h2>
                <p className="text-gray-500">باحث عن عمل</p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal
          direction="left"
          delay={0.2}
          className="flex justify-center w-full lg:flex-1"
        >
          <motion.div
            className="flex justify-center w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              className="w-full max-w-md lg:max-w-xl"
              src={JOBIMAGE}
              alt="Job Search Illustration"
            />
          </motion.div>
        </ScrollReveal>
      </section>

      {/* Explore Jobs Section */}
      <section className="px-6 lg:px-16 py-10" dir="rtl">
        <ScrollReveal>
          <div className="w-full bg-blue-900 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden">

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full">
                  <PiBagSimpleFill className="text-4xl text-blue-900" />
                </div>

                <div>
                  <h1 className="font-bold text-3xl text-white">
                    للباحثين عن وظائف
                  </h1>

                  <p className="text-blue-100 mt-2">
                    إبحث عن الوظيفة المناسبة لمهاراتك وخبراتك
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-5">
                {[
                  "تصفح مئات الوظائف بسهولة",
                  "ارفع السيرة الذاتية الخاصة بك",
                  "تواصل مع أفضل الشركات والمصانع",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    className="flex items-center gap-3 text-white"
                  >
                    <IoMdCheckmark className="text-green-400 text-2xl" />
                    <h3 className="text-lg">{feature}</h3>
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 duration-300"
              >
                ابدأ الآن
              </motion.button>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center flex-1"
            >
              <img
                className="w-full max-w-sm lg:max-w-md"
                src={RESUME}
                alt="Resume Illustration"
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      {/* Benefits Section */}
      <section
        className="w-full py-16 px-4 sm:px-6 lg:px-12"
        dir="rtl"
      >
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800">
              لماذا تختار إعمار مصر ؟
            </h1>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              نوفر لك أفضل فرص العمل والخدمات بأحدث التقنيات
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            place-items-center
          "
        >
          {benfits.map((benfit, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.12}
              direction="up"
              className="w-full"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                <Benfits
                  icon={benfit.icon}
                  background={benfit.iconbackground}
                  title={benfit.title}
                  paragraph={benfit.Pragraph}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 px-4" dir="rtl">
        <ScrollReveal>
          <h1 className="mb-10 text-center font-extrabold text-3xl text-blue-800">
            كيف يعمل؟
          </h1>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              delay={index * 0.18}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-64 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-2 items-center font-bold mb-2">
                  <h1
                    className={`w-6 h-6 ${step.color} text-white rounded-full flex items-center justify-center text-sm`}
                  >
                    {step.number}
                  </h1>

                  <h1>{step.title}</h1>
                </div>

                <p className="text-gray-500 text-sm">
                  {step.desc}
                </p>
              </motion.div>

              {index !== steps.length - 1 && (
                <FaArrowLeft className="text-gray-400 hidden md:block" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="flex justify-center mt-10 px-4 mb-7"
        dir="rtl"
      >
        <ScrollReveal className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-l from-blue-800 to-blue-600 p-6 md:p-8 rounded-2xl shadow-lg"
          >
            {/* Texts */}
            <div className="text-white text-center md:text-right">
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                جاهز لأخذ خطوتك التالية؟
              </h1>

              <p className="text-sm md:text-base text-white/90">
                انضم للعديد من المحترفين وجد وظيفتك اليوم.
              </p>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-blue-800 px-6 py-2 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              تصفح الوظائف
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </section>
    </>
  );
}