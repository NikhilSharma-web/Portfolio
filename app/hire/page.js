"use client"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function Hire() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
            <motion.div
                className="max-w-lg w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                {/* Title */}
                <h2 className="text-3xl font-bold mb-4">Want a Website? 🚀</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    If you’re looking for a modern, fast, and responsive website for your
                    business or personal use, I’d love to help!
                    Let’s connect and bring your ideas to life. 💻✨
                </p>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/+916297142056"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
                >
                    <FaWhatsapp className="text-2xl" />
                    Chat on WhatsApp
                </a>
            </motion.div>
        </div>
    )
}
