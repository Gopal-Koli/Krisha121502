import { useState } from "react"

export default function Proposal() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const moveNo = () => {
    setPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    })
  }

  return (
  <div className="
  relative
  min-h-[100dvh]
  w-full
  bg-gradient-to-br from-red-400 to-pink-600
  flex flex-col items-center justify-center
  text-white text-center
">
      <h1 className="text-4xl font-bold mb-6">
        Will You Be Mine Forever? 💍❤️
      </h1>

      <div className="flex gap-6 relative">
        <button
          className="bg-green-500 px-6 py-3 rounded-full font-bold text-lg"
          onClick={() => alert("Yaaay ❤️ I Love You!")}
        >
          YES 💖
        </button>

        <button
          onMouseEnter={moveNo}
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          className="bg-gray-300 text-black px-6 py-3 rounded-full font-bold absolute"
        >
          NO 😅
        </button>
      </div>
    </div>
  )
}
