import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"

import photo from "../assets/Krisha1.jpeg"
import endingVideo from "../assets/videos/endingVideo.mp4"

// ⚠️ Better if you rename to .mp3 later
import song from "../assets/videos/BarBar.mpeg"
import clickSound from "../assets/videos/BarBar.mpeg"
import fireworks from "../assets/videos/BarBar.mpeg"

const steps = [
  "Happy Birthday Mine ❤️",
  "Change the Mood 🎨",
  "Special Moment 📸",
  "Cheering Her Name 🎉",
  "Final Surprise 🎆",
]

export default function Game({ onFinish }) {
  const [step, setStep] = useState(0)
  const [bg, setBg] = useState("from-pink-100 to-yellow-100")

  // 🔊 Audio refs (VERY IMPORTANT)
  const musicRef = useRef(null)
  const sfxRef = useRef(null)

  const playSound = (ref, file, loop = false) => {
    if (ref.current) {
      ref.current.pause()
      ref.current.currentTime = 0
    }
    ref.current = new Audio(file)
    ref.current.loop = loop
    ref.current.play()
  }

  useEffect(() => {
    if (step === 1) {
      setBg("from-purple-500 to-pink-500")
    }

    // 🎆 FINAL STEP
    if (step === 4) {
      playSound(musicRef, song, true)      // song once (loop)
      playSound(sfxRef, fireworks, false)  // fireworks once

      setTimeout(() => {
        onFinish && onFinish()
      }, 20000)
    }

    // cleanup on unmount
    return () => {
      musicRef.current?.pause()
      sfxRef.current?.pause()
    }
  }, [step])

  const next = () => {
    playSound(sfxRef, clickSound)
    setStep((prev) => prev + 1)
  }

  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br ${bg} flex flex-col items-center justify-center text-center px-4 overflow-hidden`}
    >
      {step === 4 && <Confetti />}

      {/* 📸 PHOTO STEP */}
      {step === 2 && (
        <motion.img
          src={photo}
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="w-72 md:w-96 rounded-3xl shadow-2xl mb-6 z-10"
        />
      )}

      {/* 🎥 FINAL VIDEO */}
      {step === 4 && (
        <div className="fixed inset-0 w-screen h-[100svh] z-0">
    <video
      autoPlay
      playsInline
      muted={false}
      className="w-full h-full object-cover"
    >
      <source src={endingVideo} type="video/mp4" />
    </video>
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
          {step === 3 ? "🎉 Happy Birthday Spana 🎉" : steps[step]}
        </motion.h1>
      )}

      {/* ▶ NEXT BUTTON */}
      {step < steps.length - 1 && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="z-10 bg-white text-pink-600 px-8 py-4 rounded-full font-bold shadow-xl"
        >
          Next 💖
        </motion.button>
      )}
    </section>
  )
}
