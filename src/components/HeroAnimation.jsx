import { motion } from "framer-motion"
import img1 from "../assets/Krisha1.jpeg"
import img2 from "../assets/Krisha2.jpeg"
import img3 from "../assets/Krisha3.jpeg"

const items = [
  { img: img1, size: 120, x: -120, y: -80 },
  { img: img2, size: 160, x: 140, y: -40 },
  { img: img3, size: 100, x: 60, y: 120 },
]

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full overflow-hidden shadow-2xl"
          style={{
            width: item.size,
            height: item.size,
            left: "50%",
            top: "50%",
            marginLeft: item.x,
            marginTop: item.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={item.img}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  )
}
