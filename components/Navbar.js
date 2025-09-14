"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gray-800 fixed w-full z-10 top-0 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white">Nikhil</Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <Link href="/about" className="hover:text-blue-400">About</Link>
                    <Link href="/projects" className="hover:text-blue-400">Projects</Link>
                    <Link href="/skills" className="hover:text-blue-400">Skills</Link>
                    <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 px-6 py-4 space-y-4">
                    <Link href="/" className="block hover:text-blue-400">Home</Link>
                    <Link href="/about" className="block hover:text-blue-400">About</Link>
                    <Link href="/projects" className="block hover:text-blue-400">Projects</Link>
                    <Link href="/skills" className="block hover:text-blue-400">Skills</Link>
                    <Link href="/contact" className="block hover:text-blue-400">Contact</Link>
                </div>
            )}
        </nav>
    )
}
