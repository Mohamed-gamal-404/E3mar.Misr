import JOBIMAGE from "../assets/images/job offers-bro.png";
import RESUME from "../assets/images/Resume folder-cuate.png";
import { FaArrowLeft } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import JobCard from "../components/JobCard";
import { VscGitStashApply } from "react-icons/vsc";
import { MdSecurity } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { GiGrowth } from "react-icons/gi";
import Benfits from "../components/Benfits";
export default function Home() {

  const jobs = [
    {
      id : 1 ,
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcP0ZcWRME2hXax1sPPgNtutzs7H0ZQv2vw&s" ,
      company : "facebook" , 
      title : "Social Media Specialist" , 
      type : "Full-Time" , 
      location : "Cairo" , 
      createAt : "منذ ساعتين"
    },
    {
      id : 2, 
      companyLogo : "https://cdn-icons-png.flaticon.com/128/281/281764.png", 
      company : "Google" , 
      title : "Frontend developer",
      type:"part-time" ,
      location: "Giza",
      createAt:"منذ 3 ساعات"
    }, 
    {
      id :3,
      companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AFaiMLS99z2XMDbDUW4G-ggleYqL8ICMvg&s",
      company : "juhayna" , 
      title : "فني تشغيل" , 
      type : "Full-Time",
      location : "giza , october city",
      createAt : "الان"
    },
    {
      id: 4 , 
      companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShrJ_M5EYSWRwkr5lFS1RDf23PQvI4j9Ig&s",
      company : "السويدي للكهرباء",
      title : "مهندس كهرباء" , 
      type : 'full-time',
      location : "Cairo , 5th statment",
      createAt : "منذ يومان"
    }
  ]
  const benfits = [
    {
      icon : <VscGitStashApply />,
      title : "سهولة في التقديم",
      Pragraph: "قدم على الوظائف في ضغطة واحدة", 
      iconbackground: "#3B83CB" ,
    } , 
    {
        icon : <MdSecurity />,
      title : "وظائف موثوقة",
      Pragraph: "كل الوظائف حقيقية وموثوقة", 
      iconbackground: "#18A444" ,
    },
    {
        icon : <MdOutlineStarOutline />,
      title : "الوصول الذكي",
      Pragraph: "جد كل الوظائف التي تناسبك", 
      iconbackground: "#FFAA00" ,
    }, 
    {
      icon :<SiReaddotcv />,
      title : "بناء الوثائق",
      Pragraph: "ابني وثيقة احترافيه في دقائق", 
      iconbackground: "#AA00FF" ,
    }, 
    {
            icon :<GiGrowth />,
      title : "تطوير مهاراتك",
      Pragraph: "نسرع تطورك المهني والوظيفي", 
      iconbackground: "#FA4444" ,
    }
  ]

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
        <div className="max-w-2xl text-center lg:text-right">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            إبحث عن وظيفة أحلامك
          </h1>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
            لبناء <span className="text-blue-900">مستقبلك!</span>
          </h1>

          <p className="text-gray-500 text-lg sm:text-xl mt-6 leading-8">
            نغطي العديد من فرص العمل من خلال أفضل الشركات
            والمصانع داخل مصر
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 duration-300 shadow-lg">
              ابحث عن وظيفة
            </button>

            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 duration-300">
              نشر وظيفة
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">+10K</h2>
              <p className="text-gray-500">وظيفة متاحة</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900">+5K</h2>
              <p className="text-gray-500">شركة موثوقة</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900">+50K</h2>
              <p className="text-gray-500">باحث عن عمل</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-md lg:max-w-xl"
            src={JOBIMAGE}
            alt="Job Search Illustration"
          />
        </div>
      </section>

      {/* Explore Jobs Section */}
      <section className="px-6 lg:px-16 py-10" dir="rtl">
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
              <div className="flex items-center gap-3 text-white">
                <IoMdCheckmark className="text-green-400 text-2xl" />
                <h3 className="text-lg">
                  تصفح مئات الوظائف بسهولة
                </h3>
              </div>

              <div className="flex items-center gap-3 text-white">
                <IoMdCheckmark className="text-green-400 text-2xl" />
                <h3 className="text-lg">
                  ارفع السيرة الذاتية الخاصة بك
                </h3>
              </div>

              <div className="flex items-center gap-3 text-white">
                <IoMdCheckmark className="text-green-400 text-2xl" />
                <h3 className="text-lg">
                  تواصل مع أفضل الشركات والمصانع
                </h3>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 duration-300">
              ابدأ الآن
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1">
            <img
              className="w-full max-w-sm lg:max-w-md"
              src={RESUME}
              alt="Resume Illustration"
            />
          </div>
        </div>
      </section>
  <div
  className="flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-sm"
  dir="rtl"
>
  {/* Title */}
  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
    أحدث الوظائف
  </h1>

  {/* Button */}
  <button
    className="flex items-center gap-2 text-blue-900 font-semibold 
    hover:text-blue-700 transition duration-200 group"
  >
    <span className="text-sm sm:text-base">شاهد كل الوظائف</span>

    <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
  </button>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-10 mt-7">
        {jobs.map((job)=>
        (
          <JobCard
          key={job.id}
          company={job.company}
          title={job.title}
          type={job.type}
          location={job.location}
          createAt={job.createAt}
          companyLogo={job.companyLogo}
          />
        )
        )}
      </div>
    <section
  className="w-full py-16 px-4 sm:px-6 lg:px-12 "
  dir="rtl"
>
  {/* Title */}
  <div className="text-center mb-12">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800">
      لماذا تختار إعمار مصر ؟
    </h1>

    <p className="text-gray-500 mt-3 text-sm sm:text-base">
      نوفر لك أفضل فرص العمل والخدمات بأحدث التقنيات
    </p>
  </div>

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
      <Benfits
        key={index}
        icon={benfit.icon}
        background={benfit.iconbackground}
        title={benfit.title}
        paragraph={benfit.Pragraph}
      />
    ))}
  </div>
</section>
 <section className="py-10 px-4" dir="rtl">
      <h1 className="mb-10 text-center font-extrabold text-3xl text-blue-800">
        كيف يعمل؟
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-64 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <div className="flex gap-2 items-center font-bold mb-2">
                <h1
                  className={`w-6 h-6 ${step.color} text-white rounded-full flex items-center justify-center text-sm`}
                >
                  {step.number}
                </h1>
                <h1>{step.title}</h1>
              </div>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>

            {index !== steps.length - 1 && (
              <FaArrowLeft className="text-gray-400 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>  
<section className="flex justify-center mt-10 px-4 mb-7" dir="rtl">
  <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-l from-blue-800 to-blue-600 p-6 md:p-8 rounded-2xl shadow-lg">

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
    <button className="bg-white text-blue-800 px-6 py-2 rounded-xl font-bold hover:bg-gray-100 transition">
      تصفح الوظائف
    </button>

  </div>
</section>
    </>
  );
}