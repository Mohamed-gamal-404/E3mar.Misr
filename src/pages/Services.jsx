
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
  FaUsers,
} from "react-icons/fa";  

import { Link } from "react-router-dom";
import e3marHero from "../assets/images/servicr-hero.png"
import e3marHr from "../assets/images/E3mar-hr-ph.jpg"
import e3marempo from "../assets/images/e3mar-employees.jpg"
export default function Services() {
  return (
    <main dir="rtl" className="bg-white text-blue-950">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden">

        <img
          src={e3marHero}
          alt="خدمات إعمار مصر"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-blue-950/95 via-blue-950/75 to-blue-950/30" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center">

          <div className="text-white">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-blue-200 mb-4">
              <span>الرئيسية</span>
              <span>‹</span>
              <span>خدماتنا</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              خدماتنا
            </h1>

            <p className="text-base md:text-lg text-blue-100 max-w-xl leading-8">
              حلول متكاملة لتوفير الكفاءات والعمالة المناسبة
              لاحتياجات شركتك
            </p>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="py-16 md:py-20 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-blue-600"></span>

              <span className="text-blue-600 font-bold">
                نحن نوفر لك
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              حلول توظيف تناسب احتياجاتك
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              نقدم مجموعة متكاملة من خدمات توفير العمالة
              والكفاءات البشرية، مع الحرص على اختيار المرشحين
              المناسبين وفقًا لمتطلبات كل جهة واحتياجاتها.
            </p>

            <p className="text-gray-600 leading-8 mb-7">
              نعمل على بناء حلقة وصل قوية بين أصحاب الأعمال
              والكوادر المناسبة، بما يساعد الشركات على الوصول
              إلى أفضل الكفاءات بسهولة واحترافية.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-bold transition duration-300"
            >
              تواصل معنا
              <span>←</span>
            </Link>

          </div>


          {/* Image */}
          <div className="relative">

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>

            <img
              src={e3marHr}
              alt="خدمات التوظيف"
              className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-16 md:py-20 px-6 bg-blue-50/60">

        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-12">

            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[3px] bg-blue-600"></span>

              <span className="text-blue-600 font-bold">
                خدماتنا
              </span>

              <span className="w-8 h-[3px] bg-blue-600"></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              خدماتنا الرئيسية
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
              نقدم حلولًا متكاملة تساعد الشركات والمؤسسات
              على الوصول إلى العمالة والكفاءات المناسبة.
            </p>

          </div>


          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* Card 1 */}
            <ServiceCard
              icon={<FaHardHat />}
              title="توفير العمالة"
              description="توفير العمالة الماهرة وغير الماهرة وفقًا لاحتياجات الشركات والمشروعات المختلفة."
            />


            {/* Card 2 */}
            <ServiceCard
              icon={<FaSearch />}
              title="استقطاب واختيار الكفاءات"
              description="البحث عن المرشحين المناسبين وفرزهم واختيار الأفضل وفقًا لمتطلبات الوظيفة."
            />


            {/* Card 3 */}
            <ServiceCard
              icon={<FaFileAlt />}
              title="التوظيف والتعيين"
              description="إدارة إجراءات التوظيف ومساعدة الشركات في الوصول إلى المرشح المناسب."
            />


            {/* Card 4 */}
            <ServiceCard
              icon={<FaGlobe />}
              title="  توفير العمالة للعمل بالخارج (قريباً)"
              description="توفير الكوادر المناسبة للعمل في الأسواق الخارجية وفقًا للمتطلبات والإجراءات المعتمدة."
            />


            {/* Card 5 */}
            <ServiceCard
              icon={<FaBuilding />}
              title="العمالة للمشروعات والشركات"
              description="توفير فرق عمل متكاملة للمشروعات التي تحتاج إلى أعداد من العمالة خلال فترات زمنية محددة."
            />


            {/* Card 6 */}
            <ServiceCard
              icon={<FaHandshake />}
              title="المتابعة والدعم"
              description="متابعة العامل والجهة بعد التوظيف لضمان استقرار العلاقة وتحقيق أفضل نتيجة للطرفين."
            />

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}
      <section className="py-16 md:py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">


            {/* Image */}
            <div className="relative order-2 lg:order-1">

              <img
                src={e3marempo}
                alt="فريق إعمار مصر"
                className="w-full h-[350px] md:h-[430px] object-cover rounded-2xl"
              />

              <div className="absolute bottom-6 right-6 bg-blue-950 text-white rounded-xl px-6 py-4 shadow-xl">

                <p className="text-blue-200 text-sm">
                  إعمار مصر
                </p>

                <p className="font-bold text-lg">
                  شريكك في النجاح
                </p>

              </div>

            </div>


            {/* Content */}
            <div className="order-1 lg:order-2">

              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-blue-600"></span>

                <span className="text-blue-600 font-bold">
                  لماذا تختار خدماتنا؟
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                مميزات تجعلنا خيارك الأفضل
              </h2>

              <p className="text-gray-500 leading-8 mb-8">
                نحرص في إعمار مصر على تقديم خدمات توظيف
                تعتمد على الجودة والسرعة والدقة، مع الاهتمام
                باحتياجات كل عميل بشكل خاص.
              </p>


              <div className="grid sm:grid-cols-2 gap-6">

                <Feature
                  icon={<FaBolt />}
                  title="سرعة الاستجابة"
                  text="نوفر المرشحين المناسبين في أسرع وقت ممكن."
                />

                <Feature
                  icon={<FaBullseye />}
                  title="اختيار دقيق"
                  text="نعتمد على دراسة متطلبات الوظيفة قبل الترشيح."
                />

                <Feature
                  icon={<FaShieldAlt />}
                  title="خبرة في العمالة"
                  text="نفهم احتياجات الشركات والمشروعات المختلفة."
                />

                <Feature
                  icon={<FaHeadset />}
                  title="متابعة مستمرة"
                  text="نواصل دعم عملائنا ومتابعة احتياجاتهم."
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[3px] bg-blue-600"></span>

              <span className="text-blue-600 font-bold">
                كيف نقدم الخدمة؟
              </span>

              <span className="w-8 h-[3px] bg-blue-600"></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              خطوات بسيطة لسهولة التوظيف
            </h2>

            <p className="text-gray-500 mt-4">
              نعمل وفق خطوات واضحة لضمان الوصول إلى أفضل نتيجة.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <ProcessStep
              number="01"
              icon={<FaFileAlt />}
              title="تحديد احتياجاتك"
              text="نستمع إلى متطلباتك ونفهم احتياجاتك بدقة."
            />

            <ProcessStep
              number="02"
              icon={<FaSearch />}
              title="البحث عن الكفاءات"
              text="نقوم بالبحث عن أفضل المرشحين وفقًا لمتطلباتك."
            />

            <ProcessStep
              number="03"
              icon={<FaUsers />}
              title="الاختيار والتقييم"
              text="نختار المرشحين الأنسب ونقوم بتقييمهم."
            />

            <ProcessStep
              number="04"
              icon={<FaHandshake />}
              title="التوظيف والمتابعة"
              text="نضمن سهولة التوظيف والمتابعة بعد بدء العمل."
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-16">

        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-l from-blue-950 to-blue-800 p-8 md:p-12">

          {/* Background decoration */}
          <div className="absolute -left-20 -top-20 w-60 h-60 rounded-full bg-blue-500/10"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="text-white">

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                تبحث عن العمالة المناسبة لشركتك؟
              </h2>

              <p className="text-blue-100 leading-7">
                دعنا نساعدك في الوصول إلى الكفاءات التي تحتاج إليها.
              </p>

            </div>


            <Link
              to="/contact"
              className="shrink-0 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition duration-300"
            >
              تواصل معنا ←
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ================================================= */
/*                    COMPONENTS                     */
/* ================================================= */


function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white border border-blue-100 rounded-2xl p-7 min-h-[250px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-500 leading-7">
        {description}
      </p>

      <div className="text-blue-600 text-xl mt-5">
        ←
      </div>

    </div>
  );
}


function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">

      <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
        {icon}
      </div>

      <div>

        <h3 className="font-bold text-lg mb-1">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-6">
          {text}
        </p>

      </div>

    </div>
  );
}


function ProcessStep({ number, icon, title, text }) {
  return (
    <div className="relative text-center">

      {/* Number */}
      <div className="relative mx-auto w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">

        {icon}

        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
          {number}
        </span>

      </div>


      <h3 className="font-bold text-lg mt-5 mb-3">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-7 max-w-xs mx-auto">
        {text}
      </p>

    </div>
  );
}