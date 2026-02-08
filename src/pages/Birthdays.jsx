import { motion } from "framer-motion"
import Gallery from "../pages/Gallery"
import Game from "../components/Game"
import bgPhoto from "../assets/Fav.jpeg"

export default function Birthday() {
  return (
    <>
      {/* 🎂 HERO SECTION */}
   <div className="
  relative
  min-h-screen
  w-full
  flex flex-col items-center justify-center
  text-center
  overflow-hidden
">
        {/* 📸 Background Image */}
        <img
          src={bgPhoto}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🤍 White Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* ✨ CONTENT */}
        <div className="relative z-10 flex flex-col items-center">

          <motion.h1
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-black-600"
          >
            HAPPY BIRTHDAY MINE
          </motion.h1>

          <p className="mt-4 max-w-md text-gray-700">
            On your special day, I just want to say  
            you make my world brighter, happier & complete ✨
          </p>

        </div>
      </div>

      {/* 🎮 GAME & 📸 GALLERY */}
      <Game />
      <Gallery />
    </>
  )
}
