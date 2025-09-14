// import ProjectCard from '../../components/ProjectCard'

// export default function ProjectsPage() {
//     const projects = [
//         {
//             title: "CrunchHaus",
//             description: "Food ordering web app with cart and checkout functionality",
//             image: "/projects/Project1.png",  // single image
//             link: "https://github.com/yourgithub/crunchhaus"
//         },
//         {
//             title: "Dance Academy",
//             description: "Backend system for managing academy classes and students",
//             image: "/projects/Project2.png",  // single image
//             link: "https://github.com/yourgithub/dance-academy"
//         }
//     ]

//     return (
//         <section className="py-20">
//             <h1 className="text-4xl font-bold mb-10">Projects</h1>
//             <div className="grid md:grid-cols-2 gap-10">
//                 {projects.map((project, index) => (
//                     <ProjectCard key={index} project={project} />
//                 ))}
//             </div>
//         </section>
//     )
// }
import ProjectCard from '../../components/ProjectCard'

export default function ProjectsPage() {
    const projects = [
        {
            title: "CrunchHaus",
            description: "Food ordering web app with cart and checkout functionality",
            image: "/projects/Project1.png",   // single image
            link: "https://crunchhaus-startup.onrender.com/"
        },
        {
            title: "Dance Academy",
            description: "Backend system for managing academy classes and students",
            image: "/projects/Project2.png",        // single image
            link: "https://dance-academy-n4av.onrender.com/"
        }
    ]

    return (
        <section className="py-20">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}
