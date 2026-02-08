import { motion } from "framer-motion"
import bgPhoto from "../assets/Fav.jpeg"
import { Link } from "react-router-dom"
import Game from "../components/Game"
export default function Birthday() {
  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden">

      {/* 📸 BACKGROUND IMAGE */}
      <img
        src={bgPhoto}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 🤍 WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/60 z-10"></div>

      {/* ✨ CONTENT */}
      <div className="
        relative z-20
        h-full
        grid place-items-center
        text-center
        px-4
      ">
        <div className="flex flex-col items-center">

          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-black"
          >
            HAPPY BIRTHDAY MINE 🤍
          </motion.h1>

          <p className="mt-4 max-w-md text-gray-700 text-base md:text-lg">
            On your special day, I just want to say  
            you make my world brighter, happier & complete ✨
          </p>

          {/* 🎁 BUTTON */}
          <Link to="/Game" className="mt-10">
            <button
              className="
                bg-white
                text-black
                text-lg md:text-xl
                px-14 py-6
                rounded-full
                font-bold
                tracking-wide

                shadow-[0_14px_30px_rgba(0,0,0,0.25)]
                hover:shadow-[0_22px_45px_rgba(0,0,0,0.35)]
                hover:-translate-y-1

                active:translate-y-1
                active:shadow-[0_10px_20px_rgba(0,0,0,0.3)]

                transition-all duration-300 ease-out
              "
            >
              Click Me 🎁
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}
