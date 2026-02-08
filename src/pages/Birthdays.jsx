import { motion } from "framer-motion"
import Gallery from '../pages/Gallery'
import Game from "../components/Game"
export default function Birthday() {
  return (
    <>
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold text-pink-600"
      >
        Happy Birthday 🎉❤️
      </motion.h1>

      <p className="mt-4 max-w-md text-gray-700">
        On your special day, I just want to say  
        you make my world brighter, happier & complete ✨
      </p>
     

    </div>
    <Game/>
<Gallery/>
    </>
  )
}
