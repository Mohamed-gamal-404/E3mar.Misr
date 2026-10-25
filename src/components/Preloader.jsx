
import { motion } from "framer-motion";
import "../preloader.css";
import e3marlogo from "../../public/e3mqr-icon.svg"
function Preloader() {
  return (
    
<motion.div
  className="preloader"
  initial={{ opacity: 1 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0, scale: 1.02 }}
  transition={{ duration: 0.7, ease: "easeInOut" }}
>
      <motion.img
        src={e3marlogo}
        alt="Emmar Misr Logo"
        className="preloader-logo"
        initial={{ opacity: 0, scale: 0.7, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      <motion.div
        className="preloader-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      />

      <motion.p
        className="preloader-text"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
<span className="text-2xl font-bold">        شركة إعمار مصر لخدمات المصانع والشركات
</span>      </motion.p>
    </motion.div>
  );
}

export default Preloader;