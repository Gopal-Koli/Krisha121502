import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-pink-500 to-red-500 flex flex-col items-center justify-center text-white text-center p-4">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
      Heyy..! Mazi Awushi Awushi Poli🤍
      </motion.h1>

      <p className="mt-4 text-lg">I made something special for you…</p>

      <Link to="/birthday">
        <button className="mt-6 bg-white text-pink-600 px-6 py-3 rounded-full font-bold">
          Start 🎁
        </button>
      </Link>
    </div>
  );
}

export default Home;
