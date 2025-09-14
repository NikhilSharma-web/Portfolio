"use client"
import { motion } from "framer-motion"

export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
            <motion.div
                className="max-w-lg w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src="/profile.jpg" // 👉 apni photo "public/profile.jpg" me daal dena
                        alt="Nikhil Sharma"
                        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
                    />
                </div>

                {/* Intro Text */}
                <h2 className="text-3xl font-bold text-center mt-4">Nikhil Sharma</h2>
                <p className="text-blue-400 text-center mb-4">Full Stack Web Developer</p>

                <p className="text-gray-300 text-justify leading-relaxed">
                    Hi 👋, I’m <span className="text-white font-semibold">Nikhil Sharma</span>,
                    a passionate full-stack developer with experience in building dynamic web
                    applications using modern technologies like <span className="text-blue-400">Next.js, Node.js, and MongoDB</span>.
                    I love solving real-world problems and creating impactful digital experiences. 🚀
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-6">
                    <a
                        href="https://www.linkedin.com/in/nikhil-sharma-69111434a"
                        target="_blank"
                        className="text-blue-500 hover:text-blue-400 text-lg font-semibold"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/NikhilSharma-web"
                        target="_blank"
                        className="text-gray-300 hover:text-white text-lg font-semibold"
                    >
                        GitHub
                    </a>
                </div>
            </motion.div>
        </div>
    )
}
