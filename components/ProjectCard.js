// "use client"
// import { motion } from "framer-motion"
// import Image from "next/image"

// export default function ProjectCard({ project }) {
//     return (
//         <motion.div
//             className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
//             whileHover={{ y: -10 }}
//         >
//             {/* Project Image */}
//             <div className="p-4 bg-gray-900 rounded-t-xl">
//                 <Image
//                     src={project.image}       // single image
//                     alt={project.title}
//                     width={500}
//                     height={300}
//                     className="rounded-lg"
//                 />
//             </div>

//             {/* Project Info */}
//             <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <a
//                     href={project.link}
//                     target="_blank"
//                     className="text-blue-400 hover:underline"
//                 >
//                     View Project →
//                 </a>
//             </div>
//         </motion.div>
//     )
// }
"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            whileHover={{ y: -10 }}
        >
            {/* Project Image */}
            <div className="flex justify-center items-center p-4 bg-gray-800 rounded-t-xl">
                <Image
                    src={project.image}        // single image
                    alt={project.title}
                    width={400}                // same width
                    height={250}               // same height
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Project Info */}
            <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                >
                    View Project →
                </a>
            </div>
        </motion.div>
    )
}
