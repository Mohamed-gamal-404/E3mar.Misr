import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/Home.css";

import {
  FaArrowLeft,
  FaUsers,
  FaHandshake,
  FaCheckCircle,
  FaClipboardCheck,
  FaBuilding,
  FaPhoneAlt,
  FaBullseye,
  FaRegLightbulb,
} from "react-icons/fa";

import WORKFORCE from "../assets/images/e3marworkforce.png";
import COMPANYIMAGE from "../assets/images/e3mar-2.jpg";
import RESUME from "../assets/images/Resume folder-cuate.png";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const partners = [
  {
    name: "BETA ELECTRIC",
    logo: "/partners/beta-electric.jpg",
  },
    {
    name: "AMAZON",
    logo: "/partners/AMAZON.png",
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
    name: "شركة يونيباك النيل",
    logo: "/partners/partner-nile.svg",
  },
  {
    name: "الأهرام للصناعات الغذائية",
    logo: "/partners/al-ahram-food.png",
  },
  {
    name: "أرامكس - ARAMEX",
    logo: "/partners/aramex.png",
  },
  {
    name: "Carreir",
    logo: "/partners/Carreir.png",
  },
  {
    name: "Suzuki",
    logo: "/partners/Suzuki.png",
  },
    {
    name: "dsepak",
    logo: "/partners/debak.png",
  },
    {
    name: "Serioplast",
    logo: "/partners/Serioplast.png",
  },
  {
    name: "ABRAR TRADING ",
    logo: "/partners/Abrar.png",
  },
  {
    name: "Edita ",
    logo: "/partners/edita.png",
  },
  
  {
    name: "Cairopak ",
    logo: "/partners/cairopak.png",
  },
  

];

  const services = [
    {
      number: "01",
      icon: <FaUsers />,
      title: "حلول القوى العاملة",
      description:
        "فهم احتياجات شركتك ومناقشة حلول القوى العاملة المناسبة لطبيعة نشاطك.",
    },
    {
      number: "02",
      icon: <FaBullseye />,
      title: "دعم احتياجات التشغيل",
      description:
        "التعرف على متطلبات التشغيل وتنسيق خطوات التعاون بما يتناسب مع احتياجات شركتك.",
    },
    {
      number: "03",
      icon: <FaHandshake />,
      title: "شراكات مستمرة",
      description:
        "تواصل واضح لفهم المتطلبات وبناء علاقة عمل قائمة على التعاون والثقة.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "شاركنا احتياجاتك",
      description:
        "تواصل معنا واشرح طبيعة نشاطك واحتياجات شركتك من القوى العاملة.",
    },
    {
      number: "02",
      title: "نحدد متطلباتك",
      description:
        "نتعرف على تفاصيل طلبك ونناقش الحلول المتاحة وفقًا لاحتياجاتك.",
    },
    {
      number: "03",
      title: "ابدأ التعاون",
      description:
        "نتفق على الخطوات التالية وآلية تنفيذ الخدمة وفقًا لما يتم الاتفاق عليه.",
    },
  ];

  return (
    <main
      dir="rtl"
      className="overflow-hidden bg-white text-slate-900"
    >
      {/* HERO SECTION */}

      <section className="hero-section relative isolate overflow-hidden bg-gradient-to-br from-[#071B3A] via-[#102F56] to-[#071B3A] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full border border-[#D6B76C]/20"
        />

        <div
          aria-hidden="true"
          className="hero-ring hero-ring-two pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full border border-[#D6B76C]/20"
        />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-20">
          {/* HERO TEXT */}

          <div className="hero-copy relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D6B76C]/30 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#D6B76C]" />

              <span className="text-sm font-medium text-[#E7D4A3]">
                EMMAR MISR · WORKFORCE SOLUTIONS
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.35] sm:text-5xl lg:text-6xl">
              القوة البشرية
              <br />
              المناسبة
              <span className="mr-3 inline-block text-[#D6B76C]">
                لنجاح أعمالك
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              إعمار مصر شريكك في مناقشة احتياجات القوى العاملة ودعم
              متطلبات التشغيل، من خلال حلول تتناسب مع طبيعة نشاط شركتك
              واحتياجاتها.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D6B76C] px-7 py-4 font-bold text-[#071B3A] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E7CC8B]"
              >
                اطلب خدمة لشركتك

                <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition duration-300 hover:border-[#D6B76C] hover:bg-white/5"
              >
                اكتشف خدماتنا
                <FaArrowLeft />
              </Link>
            </div>

            {/* HERO FEATURES */}

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
              <div className="hero-stat flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-[#D6B76C]">
                  <FaBuilding />
                </div>

                <div>
                  <p className="font-bold text-white">
                    حلول للشركات
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    وفقًا للاحتياجات
                  </p>
                </div>
              </div>

              <div className="hero-stat flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-[#D6B76C]">
                  <FaUsers />
                </div>

                <div>
                  <p className="font-bold text-white">
                    القوى العاملة
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    محور اهتمامنا
                  </p>
                </div>
              </div>

              <div className="hero-stat flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-[#D6B76C]">
                  <FaHandshake />
                </div>

                <div>
                  <p className="font-bold text-white">
                    التعاون
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    بداية كل شراكة
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="hero-visual relative mx-auto w-full max-w-xl lg:mr-auto">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D6B76C]/25 sm:-inset-6" />

            <div className="floating-glow absolute -bottom-5 -right-5 z-10 h-28 w-28 rounded-2xl bg-[#D6B76C]/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 p-2 shadow-2xl">
              <img
                src={WORKFORCE}
                alt="فريق العمل في إعمار مصر"
                className="hero-photo h-[350px] w-full rounded-[1.1rem] object-cover sm:h-[440px]"
                fetchPriority="high"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#071B3A]/90 p-5 shadow-xl backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D6B76C] text-xl text-[#071B3A]">
                    <FaUsers />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white sm:text-xl">
                      الإنسان أساس النجاح
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      نفهم احتياجات عملك لنناقش الحل المناسب.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-3 top-10 h-16 w-1 rounded-full bg-[#D6B76C] sm:-right-5"
            />
          </div>
        </div>
      </section>

{/* MOVING PARTNERS LOGOS */}
{partners.length > 1 && (
  <section className="reveal-on-scroll partners-section bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold tracking-[0.18em] text-[#A78436]">
          OUR CLIENTS & PARTNERS
        </p>

        <h2 className="mt-3 text-2xl font-extrabold text-[#071B3A] sm:text-3xl">
          نفخر بثقة عملائنا
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          شركاء نعتز بالعمل معهم، ونسعى لبناء علاقات ناجحة ومستدامة.
        </p>
      </div>
    </div>

    {/* Partenars-Line*/}
    <div
      className="partners-marquee"
      aria-label="شعارات عملاء وشركاء إعمار مصر"
    >
      <div className="partners-marquee-track">
        {/* المجموعة الأولى */}
        <div className="partners-marquee-group">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="partner-marquee-card"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* Infinty Moving Line*/}
        <div
          className="partners-marquee-group"
          aria-hidden="true"
        >
          {partners.map((partner) => (
            <div
              key={`${partner.name}-duplicate`}
              className="partner-marquee-card"
            >
              <img
                src={partner.logo}
                alt=""
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

{/* COMPANY STATISTICS */}

<section className="reveal-on-scroll relative overflow-hidden bg-[#071B3A] px-6 py-16 text-white sm:px-10 lg:px-12 lg:py-20">

  {/* Background decoration */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#D6B76C]/15"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#D6B76C]/10"
  />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="mx-auto mb-12 max-w-3xl text-center">

      <p className="text-sm font-bold tracking-[0.15em] text-[#D6B76C]">
        EMMAR MISR IN NUMBERS
      </p>

      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
        أرقام تعكس حجم أعمالنا
      </h2>

      <p className="mt-5 leading-8 text-blue-100">
        نعمل على دعم احتياجات الشركات والمشروعات من القوى العاملة،
        مع التركيز على بناء علاقات عمل مستمرة.
      </p>

    </div>

    {/* Statistics grid */}
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">

      {/* Workers */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D6B76C]/50 hover:bg-white/[0.07] sm:p-7">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B76C]/10 text-2xl text-[#D6B76C] transition duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
          <FaUsers />
        </div>

        <p className="mt-5 text-3xl font-extrabold text-[#D6B76C] sm:text-4xl">
  <CountUp end={5000} prefix="+" />
</p>

<h3 className="mt-3 text-sm font-semibold text-white sm:text-base">
  عامل تم توظيفهم
</h3>


      </div>

      {/* Companies */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D6B76C]/50 hover:bg-white/[0.07] sm:p-7">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B76C]/10 text-2xl text-[#D6B76C] transition duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
          <FaBuilding />
        </div>

        <p className="mt-5 text-3xl font-extrabold text-[#D6B76C] sm:text-4xl">
  <CountUp end={300} prefix="+" />
</p>

<h3 className="mt-3 text-sm font-semibold text-white sm:text-base">
  شركة عميلة
</h3>
      </div>

      {/* Experience */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D6B76C]/50 hover:bg-white/[0.07] sm:p-7">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B76C]/10 text-2xl text-[#D6B76C] transition duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
          <FaClipboardCheck />
        </div>

    <p className="mt-5 text-3xl font-extrabold text-[#D6B76C] sm:text-4xl">
  <CountUp end={10} prefix="+" />
</p>

<h3 className="mt-3 text-sm font-semibold text-white sm:text-base">
  سنوات من الخبرة
</h3>

      </div>

      {/* Customer relationships */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D6B76C]/50 hover:bg-white/[0.07] sm:p-7">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B76C]/10 text-2xl text-[#D6B76C] transition duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
          <FaHandshake />
        </div>

        <p className="mt-5 text-3xl font-extrabold text-[#D6B76C] sm:text-4xl">
          98%
        </p>

        <h3 className="mt-3 text-sm font-semibold text-white sm:text-base">
          رضا العملاء
        </h3>

      </div>

    </div>

  </div>
</section>

      {/* ABOUT SECTION */}

      <section className="reveal-on-scroll bg-[#F7F8FA] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-bold tracking-wide text-[#A78436]">
              ABOUT EMMAR MISR
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-relaxed text-[#071B3A] sm:text-4xl">
              نفهم احتياجاتك،
              <br />
              ونعمل معك للوصول للحل المناسب
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              تختلف احتياجات الشركات باختلاف أنشطتها وطبيعة أعمالها.
              لذلك تبدأ رحلة التعاون مع إعمار مصر بفهم متطلباتك ومناقشة
              الحلول التي تتوافق مع احتياجات شركتك.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              نؤمن بأهمية التواصل الواضح وبناء علاقات عمل تساعد على فهم
              المتطلبات وتحديد خطوات التعاون.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 font-bold text-[#102F56] transition hover:text-[#A78436]"
            >
              تعرف على إعمار مصر

              <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-2xl bg-[#D6B76C]/20" />

            <div className="relative rounded-[1.75rem] bg-white p-3 shadow-xl">
              <img
                src={COMPANYIMAGE}
                alt="من أعمال وأنشطة إعمار مصر"
                loading="lazy"
                className="h-[300px] w-full rounded-[1.25rem] object-cover sm:h-[410px]"
              />

              <div className="absolute bottom-7 right-7 left-7 rounded-xl border border-slate-100 bg-white/95 p-5 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FaHandshake className="shrink-0 text-3xl text-[#A78436]" />

                  <div>
                    <p className="font-bold text-[#071B3A]">
                      شراكة تبدأ بالفهم
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      لكل شركة احتياجاتها، ولكل تعاون خطواته.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="reveal-on-scroll services-section px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold tracking-wide text-[#A78436]">
              WHAT WE DO
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#071B3A] sm:text-4xl">
              حلول تدعم احتياجات أعمالك
            </h2>

            <p className="mt-4 leading-8 text-slate-500">
              نتعرف على احتياجاتك أولًا، ثم نناقش خدمات التعاون التي
              تتناسب مع طبيعة نشاطك ومتطلبات التشغيل.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="service-card group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#D6B76C]/50 hover:shadow-xl sm:p-8"
              >
                <div className="absolute left-0 top-0 h-1 w-full origin-right scale-x-0 bg-[#D6B76C] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B3A] text-2xl text-[#D6B76C] transition duration-300 group-hover:bg-[#D6B76C] group-hover:text-[#071B3A]">
                    {service.icon}
                  </div>

                  <span className="text-3xl font-extrabold text-slate-100">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#071B3A]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#102F56] transition hover:text-[#A78436]"
                >
                  تعرف على المزيد
                  <FaArrowLeft />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}

      <section className="reveal-on-scroll bg-[#071B3A] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold tracking-wide text-[#D6B76C]">
              HOW WE WORK
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              بداية واضحة لكل تعاون
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              خطوات تبدأ بفهم احتياجات شركتك، وتساعد على تحديد المسار
              المناسب للتعاون.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="process-card relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-[#D6B76C]/50 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6B76C] text-lg font-extrabold text-[#071B3A]">
                    {step.number}
                  </span>

                  {index === 0 && (
                    <FaClipboardCheck className="text-2xl text-[#D6B76C]" />
                  )}

                  {index === 1 && (
                    <FaBullseye className="text-2xl text-[#D6B76C]" />
                  )}

                  {index === 2 && (
                    <FaCheckCircle className="text-2xl text-[#D6B76C]" />
                  )}
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB SEEKERS */}

      <section className="reveal-on-scroll px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden rounded-[2rem] bg-[#F7F8FA] p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="text-sm font-bold tracking-wide text-[#A78436]">
              CAREER OPPORTUNITIES
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-relaxed text-[#071B3A] sm:text-4xl">
              بتدور على فرصة عمل جديدة؟
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              ابدأ خطوتك التالية وسجّل بياناتك من خلال صفحة الوظائف.
              يمكنك إرسال طلبك ليتم الرجوع إلى بياناتك عند توفر فرصة
              مناسبة.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-slate-700">
                <FaCheckCircle className="mt-1 shrink-0 text-[#A78436]" />
                <span>أدخل بياناتك الأساسية بوضوح.</span>
              </div>

              <div className="flex items-start gap-3 text-slate-700">
                <FaCheckCircle className="mt-1 shrink-0 text-[#A78436]" />
                <span>اذكر خبراتك ومهاراتك العملية.</span>
              </div>

              <div className="flex items-start gap-3 text-slate-700">
                <FaCheckCircle className="mt-1 shrink-0 text-[#A78436]" />
                <span>تابع فرص التقديم المتاحة من خلال الشركة.</span>
              </div>
            </div>

            <Link
              to="/jobs"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#071B3A] px-7 py-4 font-bold text-white transition duration-300 hover:bg-[#102F56]"
            >
              انتقل إلى صفحة الوظائف

              <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src={RESUME}
              alt="التقديم على فرص العمل"
              loading="lazy"
              className="resume-illustration max-h-[360px] w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="reveal-on-scroll px-6 pb-20 sm:px-10 lg:px-12 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-l from-[#102F56] to-[#071B3A] px-7 py-12 text-white sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full border border-[#D6B76C]/20"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[#D6B76C]">
                <FaRegLightbulb className="text-xl" />

                <p className="text-sm font-bold">
                  LET'S WORK TOGETHER
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold leading-relaxed sm:text-3xl lg:text-4xl">
                هل تبحث عن حلول تناسب احتياجات شركتك؟
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                تواصل مع إعمار مصر لمناقشة احتياجاتك والتعرف على خطوات
                التعاون الممكنة.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#D6B76C] px-7 py-4 font-bold text-[#071B3A] transition duration-300 hover:-translate-y-1 hover:bg-[#E7CC8B]"
            >
              <FaPhoneAlt />
              تواصل معنا
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;


    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let animationFrame;
    let observer;

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // اللوجيك بتاع السيكشن الي فيه ارقام ( عمال - شركات -رضا العملاء)
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentCount = Math.floor(
          end * easedProgress
        );

        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    // اللوجيك بتاع بداية الحركة بتاعت الرقم
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
} 