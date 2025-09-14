"use client"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
            <motion.img
                src="/profile.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full mb-6 border-4 border-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Hi, I’m <span className="text-blue-400">Nikhil Sharma</span>
            </motion.h1>
            <p className="text-xl text-gray-300 mb-6">Full Stack Developer | JavaScript | Next.js</p>
            <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
            >
                Download Resume
            </a>
        </section>
    )
}
