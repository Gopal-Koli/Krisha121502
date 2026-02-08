import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import img1 from "../assets/Krisha1.jpeg";
import img2 from "../assets/Krisha2.jpeg";
import img3 from "../assets/Krisha3.jpeg";

const images = [img1, img2, img3];

export default function CircleGallery() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="h-[300vh] bg-pink-50">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-80 h-96">
          {images.map((img, i) => {
            const start = i / images.length;
            const end = (i + 1) / images.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );

            const y = useTransform(
              scrollYProgress,
              [start, end],
              [100, -i * 10]
            );

            const rotate = useTransform(
              scrollYProgress,
              [start, end],
              [-10, i * 6]
            );

            return (
              <motion.img
                key={i}
                src={img}
                style={{ opacity, y, rotate }}
                className="absolute w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
