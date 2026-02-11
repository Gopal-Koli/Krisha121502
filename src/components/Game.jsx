import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"

import photo from "../assets/Saree2.jpeg"
import endingVideo from "../assets/videos/Ending.mp4"

const steps = [
  "Love uhhhh ",
  "",
  "MY MY My ",
  "Cheering Her Name 🎉",
  "Final Surprise 🎆",
]

export default function Game({ onFinish }) {
  const [step, setStep] = useState(0)
  const [bg, setBg] = useState("from-pink-100 to-yellow-100")
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    switch (step) {
      case 1:
        setBg("from-black via-gray-800 to-white")
        break
      case 2:
        setBg("from-black via-gray-800 to-white")
        break
      case 3:
        setBg("from-black via-gray-800 to-white")
        break
      default:
        setBg("from-indigo-700 to-black")
    }

    if (step === 4) {
      setShowVideo(true)
    }
  }, [step])

  const next = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <section
      className={`relative min-h-[100dvh] bg-gradient-to-br ${bg}
      flex flex-col items-center justify-center
      text-center px-4 overflow-hidden`}
    >
      {step === 4 && <Confetti />}

      {/* 📸 PHOTO STEP */}
      {step === 2 && (
        <motion.img
          src={photo}
          initial={{ opacity: 0, y: 120, rotate: -15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-72 md:w-96 rounded-3xl shadow-2xl mb-6 z-10"
        />
      )}

      {/* 🎥 FINAL VIDEO */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black">
          <video
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={endingVideo} type="video/mp4" />
          </video>

          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-5 right-5 text-white text-3xl bg-black/60 rounded-full px-4 py-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* 📝 TEXT */}
      {step < 4 && (
        <motion.h1
          key={step}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 z-10"
        >
          {step === 3 ? " Bundicha Ladu " : steps[step]}
        </motion.h1>
      )}

      {/* ▶ NEXT BUTTON */}
      {step < steps.length - 1 && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="z-10 bg-white text-pink-600 px-8 py-4 rounded-full font-bold shadow-xl"
        >
          Next 
        </motion.button>
      )}
    </section>
  )
}
