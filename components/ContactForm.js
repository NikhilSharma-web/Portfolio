"use client"
import { useState } from "react"

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                alert("Message sent successfully!")
                setForm({ name: "", email: "", message: "" })  // reset form
            } else {
                alert("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error(error)
            alert("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-8 rounded-xl w-full max-w-md flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="p-3 rounded bg-gray-900 text-white focus:outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded bg-gray-900 text-white focus:outline-none"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="p-3 rounded bg-gray-900 text-white focus:outline-none h-32"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    )
}
