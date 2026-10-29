import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaUsers,
  FaBuilding,
  FaHandshake,
  FaShieldAlt,
  FaSearch,
  FaClipboardList,
  FaUserCheck,
  FaHeadset,
  FaCheckCircle,
  FaBriefcase,
} from "react-icons/fa";

import e3marCover from "../assets/images/e3mar-about-cover.png";
import e3marBui from "../assets/images/e3mar-2.jpg";

import ScrollReveal from "../components/ScrollReveal";

/* =========================================
   COMPANY VALUES
========================================= */

const values = [
  {
    icon: <FaShieldAlt />,
    title: "الالتزام",
    desc: "نحرص على الالتزام بالمتطلبات والمواعيد والمعايير المتفق عليها مع عملائنا.",
  },
  {
    icon: <FaHandshake />,
    title: "المصداقية",
    desc: "نسعى لبناء علاقات عمل قائمة على الوضوح والثقة والتعاون المستمر.",
  },
  {
    icon: <FaUserCheck />,
    title: "الاختيار بعناية",
    desc: "نهتم بفهم احتياجات العمل واختيار الكوادر المناسبة لطبيعة كل وظيفة.",
  },
  {
    icon: <FaHeadset />,
    title: "المتابعة المستمرة",
    desc: "نؤمن بأهمية التواصل ومتابعة احتياجات العملاء خلال مراحل التعاون.",
  },
];

/* =========================================
   WORK PROCESS
========================================= */

const steps = [
  {
    number: "01",
    icon: <FaClipboardList />,
    title: "فهم الاحتياجات",
    desc: "نتعرف على طبيعة نشاط الشركة ومتطلبات التشغيل والمهارات المطلوبة.",
  },
  {
    number: "02",
    icon: <FaSearch />,
    title: "تحديد المتطلبات",
    desc: "نناقش التفاصيل ونحدد مواصفات العمالة المناسبة وفقًا لاحتياجات العميل.",
  },
  {
    number: "03",
    icon: <FaUserCheck />,
    title: "اختيار الكوادر",
    desc: "نعمل على تحديد المرشحين المناسبين وفقًا للمتطلبات المتفق عليها.",
  },
  {
    number: "04",
    icon: <FaHandshake />,
    title: "بدء التعاون والمتابعة",
    desc: "ننسق الخطوات التالية ونتابع احتياجات العمل وفقًا لطبيعة الاتفاق.",
  },
];

/* =========================================
   COMPANY HIGHLIGHTS
========================================= */

const highlights = [
  {
    icon: <FaUsers />,
    title: "عمالة ماهرة وغير ماهرة",
    desc: "حلول للقوى العاملة وفقًا لطبيعة الوظائف ومتطلبات التشغيل.",
  },
  {
    icon: <FaBuilding />,
    title: "حلول للشركات والمؤسسات",
    desc: "فهم احتياجات كل مؤسسة ومناقشة الحلول المناسبة لنشاطها.",
  },
  {
    icon: <FaHandshake />,
    title: "شراكات طويلة الأمد",
    desc: "تواصل واضح وتعاون مستمر لبناء علاقات عمل ناجحة.",
  },
];

/* =========================================
   CLIENTS & COMPANIES
========================================= */

// ضع ملفات الشعارات داخل public/partners.
// عدّل أسماء الشركات حسب أسمائها الرسمية قبل النشر.

const clients = [
  {
    name: "BETA ELECTRIC",
    logo: "/partners/beta-electric.jpg",
  },
  {
    name: "Eastern Company S.A.E.",
    logo: "/partners/eastern-company.png",
  },
  {
    name: "FINE",
    logo: "/partners/fine.png",
  },
  {
    name: "Amazon.eg",
    logo: "/partners/AMAZON.png",
  },
  {
    name: "الاهرام للصناعات الغذائية",
    logo: "/partners/al-ahram-food.png",
  },
  {
    name: "Cairopac",
    logo: "/partners/cairopak.png",
  },
  {
    name: "Carreir",
    logo: "/partners/Carreir.png",
  },
  {
    name: "aramex",
    logo: "/partners/aramex.png",
  },
  {
    name: "Suzuki",
    logo: "/partners/Suzuki.png",
  },
  {
    name: "Edita",
    logo: "/partners/edita.png",
  },
  {
    name: "يونيباك النيل",
    logo: "/partners/partner-nile.svg",
  },
  {
    name: "Serioplast",
    logo: "/partners/Serioplast.png",
  },
  {
    name:"Abrar Trading",
    logo: "/partners/Abrar.png",
  },
  {
    name: "ِdepak",
    logo: "/partners/debak.png",
  },
];

/* =========================================
   ABOUT PAGE
========================================= */

export default function About() {
  return (
    <main
      dir="rtl"
      className="overflow-hidden bg-white text-[#071B3A]"
    >
      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#071B3A] sm:min-h-[420px] lg:min-h-[470px]">
        <img
          src={e3marCover}
          alt="فريق العمل وخدمات التشغيل في إعمار مصر"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#071B3A]/95 via-[#071B3A]/85 to-[#071B3A]/45" />

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
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 transition hover:border-[#D6B76C]/60 hover:bg-white/10"
              >
                <img
                  src="/e3mqr-icon.svg"
                  alt="شعار إعمار مصر"
                  className="h-9 w-9 rounded-full object-contain"
                />

                <span className="font-bold">إعمار مصر</span>

                <span className="text-[#D6B76C]">|</span>

                <span className="text-sm text-blue-100">
                  الرئيسية
                </span>
              </Link>

              <p className="mb-4 text-sm font-bold tracking-[0.15em] text-[#D6B76C]">
                ABOUT EMMAR MISR
              </p>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                من نحن
                <span className="mt-2 block text-[#D6B76C]">
                  إعمار مصر
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                شريكك في توفير العمالة الماهرة وغير الماهرة ودعم
                احتياجات التشغيل، من خلال حلول تتناسب مع طبيعة
                نشاط شركتك ومتطلباتها.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D6B76C] px-7 py-4 font-bold text-[#071B3A] transition duration-300 hover:-translate-y-1 hover:bg-[#E7CC8B]"
                >
                  اكتشف خدماتنا

                  <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>

                <Link
                  to="/jobs"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition duration-300 hover:border-[#D6B76C] hover:bg-white/5"
                >
                  انضم إلى فريق العمل

                  <FaArrowLeft />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================
          ABOUT EMMAR MISR
      ===================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}

          <ScrollReveal direction="right">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-2xl bg-[#D6B76C]/20" />

              <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-[#071B3A]/10" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-2 shadow-xl">
                <img
                  src={e3marBui}
                  alt="أنشطة وفريق عمل إعمار مصر"
                  loading="lazy"
                  className="h-[320px] w-full rounded-[1.3rem] object-cover sm:h-[440px]"
                />

                <div className="absolute bottom-6 right-6 left-6 rounded-2xl border border-white/15 bg-[#071B3A]/95 p-5 text-white shadow-xl backdrop-blur-sm sm:bottom-8 sm:right-8 sm:left-8">
                  <p className="text-sm text-[#D6B76C]">
                    EMMAR MISR
                  </p>

                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    العنصر البشري أساس النجاح
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    نفهم احتياجات العمل لنساعد في تحديد الكوادر
                    المناسبة لمتطلبات التشغيل.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Company Description */}

          <ScrollReveal direction="left" delay={0.12}>
            <div>
              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                WHO WE ARE
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-relaxed text-[#071B3A] sm:text-4xl">
                إعمار مصر
                <span className="block text-[#A78436]">
                  لخدمات المصانع والشركات
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  إعمار مصر شركة متخصصة في توفير العمالة الماهرة وغير
                  الماهرة للمصانع والشركات والمؤسسات، وفقًا لاحتياجات
                  العمل وطبيعة كل نشاط.
                </p>

                <p>
                  نؤمن بأن العنصر البشري من أهم مقومات نجاح المؤسسات،
                  لذلك نحرص على فهم متطلبات عملائنا ومناقشة احتياجاتهم
                  للوصول إلى الحلول المناسبة للقوى العاملة والتشغيل.
                </p>

                <p>
                  نعمل على بناء حلقة وصل بين أصحاب الأعمال والكوادر
                  المناسبة، مع الاهتمام بالوضوح في التواصل والالتزام
                  بالمتطلبات المتفق عليها ومتابعة مراحل التعاون.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "حلول تتناسب مع متطلبات كل شركة.",
                  "اهتمام بفهم طبيعة الوظائف والمهارات المطلوبة.",
                  "تواصل مستمر خلال مراحل التعاون.",
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
          CLIENTS & COMPANIES GRID
      ===================================== */}

      <section className="bg-[#F7F8FA] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                OUR CLIENTS
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#071B3A] sm:text-4xl">
                شركات نفخر بالتعاون معها
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500">
                نعتز بعلاقات العمل التي تجمعنا بالشركات والمؤسسات
                التي تعاملنا معها، ونسعى إلى بناء تعاون قائم على
                الثقة والوضوح.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
            {clients.map((client, index) => (
              <ScrollReveal
                key={client.name}
                delay={index * 0.06}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex h-full min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:border-[#D6B76C]/60 hover:shadow-lg sm:min-h-[180px] sm:p-6"
                >
                  <div className="flex h-[90px] w-full items-center justify-center sm:h-[100px]">
                    <img
                      src={client.logo}
                      alt={`شعار ${client.name}`}
                      loading="lazy"
                      className="max-h-full w-full object-contain transition duration-300 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="mt-4 h-px w-10 bg-[#D6B76C]/70 transition-all duration-300 group-hover:w-16" />

                  <p className="mt-3 text-center text-xs font-semibold leading-6 text-slate-600 sm:text-sm">
                    {client.name}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <p className="text-sm leading-7 text-slate-500">
                نتطلع إلى بناء علاقات تعاون جديدة مع المزيد من
                الشركات والمؤسسات.
              </p>

              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center justify-center gap-3 rounded-xl bg-[#071B3A] px-6 py-3.5 font-bold text-white transition duration-300 hover:bg-[#102F56]"
              >
                ناقش احتياجات شركتك

                <FaArrowLeft className="text-sm text-[#D6B76C] transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =====================================
          OUR ROLE
      ===================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                WHAT WE DO
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#071B3A] sm:text-4xl">
                كيف ندعم احتياجات شركتك؟
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                نبدأ بفهم احتياجات العمل، ثم نناقش الحلول التي
                تتناسب مع طبيعة الوظائف ومتطلبات التشغيل.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 0.1}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B3A] text-2xl text-[#D6B76C] transition-colors duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
                      {item.icon}
                    </div>

                    <span className="text-3xl font-extrabold text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#071B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {item.desc}
                  </p>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          OUR VALUES
      ===================================== */}

      <section className="bg-[#F7F8FA] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                OUR VALUES
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#071B3A] sm:text-4xl">
                المبادئ التي توجه عملنا
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                نؤمن أن نجاح التعاون يبدأ من فهم الاحتياجات،
                والوضوح في التعامل، والالتزام بالمتطلبات المتفق عليها.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={index * 0.08}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F3E6] text-2xl text-[#A78436]">
                    {value.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071B3A]">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {value.desc}
                  </p>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          HOW WE WORK
      ===================================== */}

      <section className="relative overflow-hidden bg-[#071B3A] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#D6B76C]/20"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#D6B76C]/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-bold tracking-[0.15em] text-[#D6B76C]">
                HOW WE WORK
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                خطوات واضحة نحو التعاون
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                نحرص على فهم احتياجات شركتك وتحديد الخطوات المناسبة
                وفقًا لمتطلبات العمل.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={index * 0.1}
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
                    {step.desc}
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
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[2rem] border border-slate-100 bg-[#F7F8FA] p-7 sm:p-10 lg:flex-row lg:items-center lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.15em] text-[#A78436]">
                BUILDING PARTNERSHIPS
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-relaxed text-[#071B3A] sm:text-3xl lg:text-4xl">
                نجاح أعمالك يبدأ بفهم احتياجاتك
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                سواء كنت تبحث عن دعم احتياجات القوى العاملة أو ترغب
                في التعرف على خدماتنا، يسعدنا أن تكون بداية التعاون
                مبنية على فهم واضح لمتطلباتك.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#071B3A] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#102F56]"
              >
                استكشف خدماتنا
                <FaArrowLeft />
              </Link>

              <Link
                to="/jobs"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#071B3A]/15 bg-white px-6 py-4 font-bold text-[#071B3A] transition duration-300 hover:border-[#D6B76C] hover:bg-[#F8F3E6]"
              >
                <FaBriefcase />
                فرص العمل
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}