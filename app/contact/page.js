import ContactForm from '../../components/ContactForm'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
    return (
        <section className="py-20">
            <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
            <ContactForm />
            <div className="mt-6 text-center">
                <p className="text-lg">
                    Feel free to connect with me on{" "}
                    <a href="https://www.linkedin.com/in/nikhil-sharma-69111434a" target="_blank" className="text-blue-400 underline">LinkedIn</a>
                    {" "}or check out my{" "}
                    <a href="https://github.com/sharmanikhil04" target="_blank" className="text-blue-400 underline">GitHub</a>.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center min-h-fit p-6">
                <a
                    href="https://wa.me/+916297142056"   // yaha apna number daal "91" ke sath
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                    <FaWhatsapp size={38} />
                    <span>Chat on WhatsApp</span>
                </a>
            </div>
        </section>
    )
}
