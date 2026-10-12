
import {
  FaUsers,
  FaBuilding,
  FaHandshake,
  FaShieldAlt,
  FaSearch,
  FaClipboardList,
  FaUserCheck,
  FaHeadset,
} from "react-icons/fa";

import { MdWork, MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";

import e3marCover from "../assets/images/e3mar-about-cover.png";
import e3marBui from "../assets/images/e3mar-2.jpg";

import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  const statistics = [
    {
      icon: <FaUsers className="text-2xl text-blue-600" />,
      value: "+5000",
      label: "عامل تم توظيفهم",
    },
    {
      icon: <FaBuilding className="text-2xl text-blue-600" />,
      value: "+300",
      label: "شركة عميلة",
    },
    {
      icon: <MdWork className="text-2xl text-blue-600" />,
      value: "+10",
      label: "سنوات من الخبرة",
    },
    {
      icon: <MdVerifiedUser className="text-2xl text-blue-600" />,
      value: "%98",
      label: "نسبة رضا العملاء",
    },
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-2xl text-blue-600" />,
      title: "الالتزام",
      desc: "نلتزم بالمواعيد والمعايير المتفق عليها مع عملائنا.",
    },
    {
      icon: <FaHandshake className="text-2xl text-blue-600" />,
      title: "المصداقية",
      desc: "نبني علاقات طويلة الأمد قائمة على الثقة والشفافية.",
    },
    {
      icon: <FaUserCheck className="text-2xl text-blue-600" />,
      title: "الاحترافية",
      desc: "نختار الكوادر بعناية وفق أعلى معايير الجودة والكفاءة.",
    },
    {
      icon: <FaHeadset className="text-2xl text-blue-600" />,
      title: "الدعم المستمر",
      desc: "نواصل دعم عملائنا ومتابعة احتياجاتهم حتى بعد إتمام عملية التوظيف.",
    },
  ];

  const steps = [
    {
      icon: <FaClipboardList className="text-3xl text-blue-600" />,
      title: "تحديد الاحتياج",
      desc: "نستمع إلى احتياجاتك ونفهم متطلبات الوظيفة بدقة.",
    },
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: "اختيار المرشحين",
      desc: "نبحث عن أفضل الكفاءات ونرشح المناسب وفقًا لمتطلباتك.",
    },
    {
      icon: <MdVerifiedUser className="text-3xl text-blue-600" />,
      title: "المقابلات والتقييم",
      desc: "نقوم بتقييم المرشحين واختيار الأفضل لضمان الجودة.",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "التعيين والمتابعة",
      desc: "نضمن سهولة التوظيف ونستمر في دعمك بعد بدء العمل.",
    },
  ];

  return (
    <main dir="rtl" className="bg-white text-blue-950">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px] overflow-hidden">

        <img
          src={e3marCover}
          alt="إعمار مصر"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-blue-950/95 via-blue-950/75 to-blue-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center">
          <ScrollReveal direction="right">
            <div className="text-white">

              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-200 mb-3 sm:mb-4">
                <span>الرئيسية</span>
                <span>‹</span>
                <span>من نحن</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                من نحن
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-blue-100">
                شريكك الموثوق في توفير الكفاءات البشرية
              </p>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative">

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />

              <img
                src={e3marBui}
                alt="إعمار مصر"
                className="w-full h-[490px] object-cover rounded-2xl shadow-xl"
              />

              <div className="absolute bottom-6 right-6 bg-blue-950 text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-sm text-blue-200">
                  أكثر من مجرد توظيف
                </p>

                <p className="font-bold text-lg">
                  نبني مستقبل أفضل
                </p>
              </div>

            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="left" delay={0.15}>
            <div>

              <span className="text-blue-600 font-bold text-lg">
                ← من نحن
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                إعمار مصر
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                إعمار مصر هي شركة متخصصة في توفير العمالة الماهرة
                وغير الماهرة للمؤسسات والشركات في مختلف القطاعات
                داخل مصر وخارجها.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
                نؤمن بأن العنصر البشري هو أهم أصول أي مؤسسة،
                لذلك نحرص على اختيار أفضل الكفاءات وتوفيرها
                وفقًا لاحتياجات عملائنا، مع الالتزام بأعلى معايير
                الجودة والمصداقية.
              </p>

              <p className="text-gray-600 leading-8">
                من خلال خبرتنا الواسعة وفريق العمل المتخصص،
                نعمل على بناء حلقة وصل قوية بين أصحاب الأعمال
                والكوادر المناسبة، بما يضمن تحقيق النجاح للطرفين.
              </p>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="px-6 pb-20">

        <ScrollReveal>
          <div className="max-w-7xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-10">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

              {statistics.map((stat, index) => (
                <ScrollReveal
                  key={stat.label}
                  delay={index * 0.12}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className={`text-center ${
                      index !== 3
                        ? "border-l border-blue-200"
                        : ""
                    }`}
                  >

                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      {stat.icon}
                    </div>

                    <h3 className="text-3xl font-bold text-blue-950">
                      {stat.value}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {stat.label}
                    </p>

                  </motion.div>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </ScrollReveal>

      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-gray-50 px-6">

        <div className="max-w-7xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-14">

              <span className="text-blue-600 font-bold">
                ← قيمنا
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                ما الذي يميزنا؟
              </h2>

              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                نلتزم بتقديم خدمات توظيف احترافية تعتمد على
                الشفافية والسرعة والجودة، لنكون دائمًا الشريك
                الأول لعملائنا.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={index * 0.12}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-xl duration-300 h-full"
                >

                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    {value.icon}
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-500 leading-7">
                    {value.desc}
                  </p>

                </motion.div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-14">

              <span className="text-blue-600 font-bold">
                ← كيف نعمل؟
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                خطوات بسيطة نحو التوظيف
              </h2>

            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {steps.map((step, index) => (
              <ScrollReveal
                key={step.title}
                delay={index * 0.12}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="relative text-center p-6 h-full"
                >

                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    {step.icon}
                  </div>

                  <span className="absolute top-2 right-1/2 translate-x-1/2 bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>

                  <h3 className="font-bold text-lg mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-7">
                    {step.desc}
                  </p>

                </motion.div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <ScrollReveal>
          <div className="max-w-7xl mx-auto bg-gradient-to-l from-blue-950 to-blue-800 rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8">

            <div>
              <h2 className="text-3xl font-bold mb-3">
                هل تبحث عن موظفين؟
              </h2>

              <p className="text-blue-100">
                تواصل معنا الآن وسنساعدك في العثور على
                الكفاءات المناسبة لعملك.
              </p>
            </div>

            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-xl font-bold whitespace-nowrap"
            >
              تواصل معنا ←
            </motion.button>

          </div>
        </ScrollReveal>

      </section>

    </main>
  );
}