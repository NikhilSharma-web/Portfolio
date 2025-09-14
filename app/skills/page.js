import SkillCard from '../../components/SkillCard'

export default function SkillsPage() {
    const skills = [
        { name: "JavaScript", level: "Intermediate"},
        { name: "Next.js", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "ExpressJS", level: "Intermediate" },
        { name: "TailwindCSS", level: "Intermediate" },
        { name: "ReactJs", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" }
    ]

    return (
        <section className="py-20">
            <h1 className="text-4xl font-bold mb-10">Skills</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </section>
    )
}
