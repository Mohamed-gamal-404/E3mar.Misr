import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaHardHat,
  FaSearch,
  FaFileAlt,
  FaHandshake,
  FaGlobe,
  FaBuilding,
  FaHeadset,
  FaBolt,
  FaBullseye,
  FaShieldAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaClipboardList,
  FaUserCheck,
} from "react-icons/fa";

import e3marHero from "../assets/images/servicr-hero.png";
import e3marHr from "../assets/images/E3mar-hr-ph.jpg";
import e3marempo from "../assets/images/e3mar-employees.jpg";

import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    number: "01",
    icon: <FaHardHat />,
    title: "توفير العمالة",
    description:
      "توفير العمالة الماهرة وغير الماهرة وفقًا لاحتياجات الشركات والمشروعات وطبيعة كل وظيفة.",
    featured: true,
  },
  {
    number: "02",
    icon: <FaSearch />,
    title: "استقطاب واختيار الكفاءات",
    description:
      "البحث عن المرشحين وفرزهم وتحديد مدى توافقهم مع متطلبات الوظائف المتاحة.",
  },
  {
    number: "03",
    icon: <FaFileAlt />,
    title: "التوظيف والتعيين",
    description:
      "المساعدة في إجراءات التوظيف وتنسيق الخطوات اللازمة للوصول إلى المرشحين المناسبين.",
  },
  {
    number: "04",
    icon: <FaGlobe />,
    title: "توفير العمالة للعمل بالخارج",
    description:
      "التوجه نحو توفير الكوادر للعمل في الأسواق الخارجية وفقًا للإجراءات والمتطلبات المعتمدة.",
    comingSoon: true,
  },
  {
    number: "05",
    icon: <FaBuilding />,
    title: "العمالة للمشروعات والشركات",
    description:
      "مناقشة احتياجات المشروعات من العمالة وتحديد حجم القوى العاملة المناسب لطبيعة التشغيل.",
  },
  {
    number: "06",
    icon: <FaHandshake />,
    title: "المتابعة والدعم",
    description:
      "التواصل مع العملاء لمتابعة احتياجاتهم وتنسيق متطلبات العمل خلال مراحل التعاون.",
  },
];

const features = [
  {
    icon: <FaBolt />,
    title: "الاستجابة للاحتياجات",
    description:
      "نبدأ بفهم احتياجات العميل ومتطلبات التشغيل لتحديد الخطوات المناسبة.",
  },
  {
    icon: <FaBullseye />,
    title: "اختيار مناسب",
    description:
      "التركيز على توافق مهارات المرشحين مع طبيعة الوظيفة ومتطلباتها.",
  },
  {
    icon: <FaShieldAlt />,
    title: "الوضوح والالتزام",
    description:
      "الاهتمام بوضوح المتطلبات والالتزام بما يتم الاتفاق عليه مع العملاء.",
  },
  {
    icon: <FaHeadset />,
    title: "التواصل والمتابعة",
    description:
      "الحفاظ على التواصل مع العميل ومتابعة احتياجاته خلال مراحل التعاون.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: <FaClipboardList />,
    title: "تحديد الاحتياجات",
    description:
      "نتعرف على طبيعة نشاط الشركة والوظائف والمهارات المطلوبة.",
  },
  {
    number: "02",
    icon: <FaSearch />,
    title: "البحث عن المرشحين",
    description:
      "نحدد متطلبات الاختيار ونبحث عن المرشحين المناسبين لها.",
  },
  {
    number: "03",
    icon: <FaUserCheck />,
    title: "الاختيار والتقييم",
    description:
      "نراجع مدى توافق المرشحين مع متطلبات العمل المتفق عليها.",
  },
  {
    number: "04",
    icon: <FaHandshake />,
    title: "بدء التعاون",
    description:
      "ننسق الخطوات التالية ونتابع الاحتياجات وفقًا لطبيعة الاتفاق.",
  },
];

export default function Services() {
  return (
    <main dir="rtl" className="overflow-hidden bg-white text-[#071B3A]">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#071B3A] sm:min-h-[420px] lg:min-h-[470px]">

        <img
          src={e3marHero}
          alt="خدمات القوى العاملة والتشغيل في إعمار مصر"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#071B3A]/95 via-[#071B3A]/80 to-[#071B3A]/40" />

        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-[#D6B76C]/20"
        />

        <div
          aria-hidden="true"
          className="absolute -left-8 -top-8 h-48 w-48 rounded-full border border-[#D6B76C]/20"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

          <ScrollReveal direction="right">

            <div className="max-w-3xl text-white">

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D6B76C]/30 bg-white/5 px-4 py-2">

                <span className="h-2 w-2 rounded-full bg-[#D6B76C]" />

                <span className="text-sm font-medium text-[#E7D4A3]">
                  EMMAR MISR · WORKFORCE SOLUTIONS
                </span>

              </div>

              <p className="mb-4 text-sm font-bold tracking-[0.15em] text-[#D6B76C]">
                OUR SERVICES
              </p>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                خدماتنا
                <span className="mt-2 block text-[#D6B76C]">
                  حلول للقوى العاملة والتشغيل
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                في إعمار مصر، نعمل على فهم احتياجات الشركات والمشروعات
                ومناقشة الحلول المناسبة لتوفير العمالة الماهرة وغير
                الماهرة وفقًا لطبيعة النشاط ومتطلبات التشغيل.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D6B76C] px-7 py-4 font-bold text-[#071B3A] transition duration-300 hover:-translate-y-1 hover:bg-[#E7CC8B]"
                >
                  ناقش احتياجات شركتك

                  <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition duration-300 hover:border-[#D6B76C] hover:bg-white/5"
                >
                  تعرف علينا

                  <FaArrowLeft />
                </Link>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================
          INTRO
      ===================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <ScrollReveal direction="right">

            <div className="relative mx-auto w-full max-w-xl">

              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-2xl bg-[#D6B76C]/20" />

              <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-[#071B3A]/10" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-2 shadow-xl">

                <img
                  src={e3marHr}
                  alt="خدمات التوظيف وتوفير الكوادر"
                  loading="lazy"
                  className="h-[320px] w-full rounded-[1.3rem] object-cover sm:h-[430px]"
                />

                <div className="absolute bottom-6 right-6 left-6 rounded-2xl border border-white/10 bg-[#071B3A]/95 p-5 text-white shadow-xl backdrop-blur-sm sm:bottom-8 sm:right-8 sm:left-8">

                  <p className="text-sm text-[#D6B76C]">
                    EMMAR MISR
                  </p>

                  <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                    العمالة المناسبة لاحتياجات عملك
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    نبدأ بفهم متطلباتك لتحديد الحل المناسب.
                  </p>

                </div>

              </div>

            </div>

          </ScrollReveal>


          <ScrollReveal direction="left" delay={0.12}>

            <div>

              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                WHAT WE OFFER
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-relaxed text-[#071B3A] sm:text-4xl">
                حلول تتناسب مع طبيعة
                <span className="block text-[#A78436]">
                  كل شركة ومشروع
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

                <p>
                  تختلف احتياجات الشركات حسب طبيعة النشاط وحجم التشغيل
                  ونوعية الوظائف المطلوبة. لذلك نبدأ بفهم المتطلبات
                  الفعلية قبل مناقشة الحلول المناسبة.
                </p>

                <p>
                  تشمل خدماتنا توفير العمالة الماهرة وغير الماهرة،
                  والمساعدة في استقطاب الكفاءات، ودعم احتياجات المشروعات
                  من القوى العاملة، مع الاهتمام بالتواصل والمتابعة.
                </p>

                <p>
                  هدفنا هو بناء تعاون واضح مع عملائنا، بحيث تكون
                  متطلبات العمل والخطوات التالية مفهومة ومتفقًا عليها.
                </p>

              </div>

              <div className="mt-8 space-y-4">

                {[
                  "فهم طبيعة النشاط ومتطلبات التشغيل.",
                  "تحديد احتياجات العمالة والمهارات المطلوبة.",
                  "مناقشة خطوات التعاون والمتابعة.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#A78436]" />

                    <p className="leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>

                ))}

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================
          SERVICES GRID
      ===================================== */}

      <section className="bg-[#F7F8FA] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <ScrollReveal>

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                OUR SERVICES
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#071B3A] sm:text-4xl">
                خدماتنا الرئيسية
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                تعرف على الخدمات التي نقدمها لمناقشة احتياجات القوى
                العاملة والتشغيل في شركتك.
              </p>

            </div>

          </ScrollReveal>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <ScrollReveal
                key={service.number}
                delay={index * 0.07}
              >

                <ServiceCard
                  icon={service.icon}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  comingSoon={service.comingSoon}
                  featured={service.featured}
                />

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          WHY EMMAR MISR
      ===================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <ScrollReveal direction="right">

            <div className="relative">

              <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#D6B76C]/20" />

              <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl">

                <img
                  src={e3marempo}
                  alt="فريق العمل في إعمار مصر"
                  loading="lazy"
                  className="h-[320px] w-full object-cover sm:h-[440px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/85 via-transparent to-transparent" />

                <div className="absolute bottom-0 right-0 left-0 p-6 text-white sm:p-8">

                  <p className="text-sm font-medium text-[#D6B76C]">
                    EMMAR MISR
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                    شريكك في احتياجات التشغيل
                  </h3>

                </div>

              </div>

            </div>

          </ScrollReveal>


          <ScrollReveal direction="left" delay={0.1}>

            <div>

              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                WHY EMMAR MISR
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-relaxed text-[#071B3A] sm:text-4xl">
                لماذا تختار خدماتنا؟
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                نحرص على تقديم تجربة تعاون واضحة تبدأ بفهم احتياجات
                الشركة، وتمر بتحديد متطلبات العمل ومناقشة الحلول
                المناسبة للقوى العاملة.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">

                {features.map((feature) => (

                  <motion.div
                    key={feature.title}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8F3E6] text-xl text-[#A78436]">
                      {feature.icon}
                    </div>

                    <div>

                      <h3 className="font-bold text-[#071B3A]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {feature.description}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================
          OUR PROCESS
      ===================================== */}

      <section className="relative overflow-hidden bg-[#071B3A] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">

        <div
          aria-hidden="true"
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#D6B76C]/20"
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          <ScrollReveal>

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="text-sm font-bold tracking-[0.15em] text-[#D6B76C]">
                HOW WE WORK
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                خطوات واضحة لبدء التعاون
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                نعمل على تنظيم خطوات التعاون وفقًا لاحتياجات العميل
                والمتطلبات التي يتم الاتفاق عليها.
              </p>

            </div>

          </ScrollReveal>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step, index) => (

              <ScrollReveal
                key={step.number}
                delay={index * 0.09}
              >

                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[#D6B76C]/50 hover:bg-white/[0.07] sm:p-7"
                >

                  <div className="flex items-center justify-between">

                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6B76C] text-lg font-extrabold text-[#071B3A]">
                      {step.number}
                    </span>

                    <span className="text-2xl text-[#D6B76C]">
                      {step.icon}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-blue-100/80">
                    {step.description}
                  </p>

                </motion.article>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

        <ScrollReveal>

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-l from-[#102F56] to-[#071B3A] px-7 py-12 text-white sm:px-12 sm:py-16">

            <div
              aria-hidden="true"
              className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-[#D6B76C]/20"
            />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

              <div className="max-w-2xl">

                <p className="text-sm font-bold tracking-[0.15em] text-[#D6B76C]">
                  LET'S WORK TOGETHER
                </p>

                <h2 className="mt-4 text-2xl font-extrabold leading-relaxed sm:text-3xl lg:text-4xl">
                  تبحث عن العمالة المناسبة لشركتك؟
                </h2>

                <p className="mt-4 leading-8 text-blue-100">
                  ابدأ بمناقشة احتياجاتك ومتطلبات التشغيل مع إعمار مصر
                  لتحديد الخطوات المناسبة للتعاون.
                </p>

              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#D6B76C] px-7 py-4 font-bold text-[#071B3A] transition duration-300 hover:-translate-y-1 hover:bg-[#E7CC8B]"
                >
                  تواصل معنا
                  <FaArrowLeft />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition duration-300 hover:border-[#D6B76C] hover:bg-white/5"
                >
                  تعرف علينا
                  <FaArrowLeft />
                </Link>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </section>

    </main>
  );
}


/* =========================================
   SERVICE CARD COMPONENT
========================================= */

function ServiceCard({
  icon,
  number,
  title,
  description,
  comingSoon = false,
  featured = false,
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group relative h-full min-h-[285px] overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8 ${
        featured
          ? "border-[#D6B76C]/60"
          : "border-slate-100 hover:border-[#D6B76C]/50"
      }`}
    >

      {/* Gold top line */}

      <div className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-[#D6B76C] transition-transform duration-300 group-hover:scale-x-100" />


      {/* Icon and Number */}

      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B3A] text-2xl text-[#D6B76C] transition-colors duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
          {icon}
        </div>

        <span className="text-3xl font-extrabold text-slate-100">
          {number}
        </span>

      </div>


      {/* Coming Soon */}

      {comingSoon && (
        <span className="mt-5 inline-flex rounded-full border border-[#D6B76C]/50 bg-[#F8F3E6] px-3 py-1 text-xs font-bold text-[#8A6B28]">
          قريبًا
        </span>
      )}


      {/* Content */}

      <h3 className="mt-6 text-xl font-bold leading-relaxed text-[#071B3A]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

        <span className="text-sm font-bold text-[#A78436]">
          إعمار مصر
        </span>

        <FaArrowLeft className="text-sm text-[#A78436] transition-transform duration-300 group-hover:-translate-x-1" />

      </div>

    </motion.article>
  );
}