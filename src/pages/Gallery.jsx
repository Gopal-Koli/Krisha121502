import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import img1 from "../assets/Krisha1.jpeg";
import img2 from "../assets/Krisha2.jpeg";
import img3 from "../assets/Krisha3.jpeg";
import img4 from "../assets/Krisha4.jpeg";
import img5 from "../assets/Krisha5.jpeg";
import img6 from "../assets/Krisha6.jpeg";
import img7 from "../assets/Krisha8.jpeg";
import img8 from "../assets/Krisha9.jpeg";
import img9 from "../assets/Krisha10.jpeg";
const images = [img1, img2, img3,img4,img5,img6,img8,img9];

export default function CircleGallery() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative h-[300vh] bg-pink-50">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-80 h-[420px]">
          {images.map((img, i) => {
            const opacity = useTransform(
              scrollYProgress,
              [i / images.length, (i + 1) / images.length],
              [0, 1]
            );

            const y = useTransform(
              scrollYProgress,
              [i / images.length, (i + 1) / images.length],
              [80, -i * 20]
            );

            const rotate = useTransform(
              scrollYProgress,
              [i / images.length, (i + 1) / images.length],
              [-10, i * 8]
            );

            return (
              <motion.img
                key={i}
                src={img}
                style={{ opacity, y, rotate }}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
