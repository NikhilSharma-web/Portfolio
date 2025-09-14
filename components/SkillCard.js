export default function SkillCard({ skill }) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-400">{skill.level}</p>
        </div>
    )
}
