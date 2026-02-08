import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Game from "../components/Game";
import { TbHandClick } from "react-icons/tb";
function Home() {
  return (
   <div className="
  fixed inset-0
  w-screen h-[100dvh]
  bg-gradient-to-br from-black via-gray-800 to-white
  flex flex-col items-center justify-center
  text-white text-center
  overflow-hidden
">

      <motion.h1
  initial={{ scale: 0.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.5, ease: "easein" }}
  className="text-4xl md:text-6xl font-bold"
>
  Heyy..! Mazi Awushi Awushi Poli 🤍
</motion.h1>


      <p className="mt-4 text-lg">I made something special for you…</p>

     <Link to="/birthday">
  <button
    className="
      bg-white
      text-black
      text-xl
      px-20
      py-20
      border-1
      shadow-gray-500 cursor-pointer
      rounded-full
      font-bold===
      tracking-wide
      shadow-[0_14px_30px_rgba(0,0,0,0.25)]
      hover:shadow-[0_22px_45px_rgba(0,0,0,0.35)]
      active:translate-y-1
      active:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
      transition-all
      duration-300
      flex
      items-center
      justify-center
      
    "
  >
Click ME 
  </button>
</Link>


  
    </div>
  );
}

export default Home;
