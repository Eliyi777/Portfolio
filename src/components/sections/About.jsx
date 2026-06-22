import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "HTML", "CSS", "JavaScript",
        "React", "Node.js", "Express",
        "MongoDB", "Tailwind CSS",
        "Git", "GitHub", "Bootstrap",
    ];

    return (
        <section id="about"
            className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
        >
            <RevealOnScroll>
                <div className="mt-40 max-w-3xl p-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-200 to-purple-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I am a passionate web developer with a love for creating beautiful and functional websites.
                            My journey in web development started with a curiosity about how websites are built,
                            and it has evolved into a full-fledged career.
                        </p>
                    </div>

                    {/* Frontend Skills */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education and Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Education Section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🎓 Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> JavaScript Course </strong> - Codecademy (2025)
                                </li>
                                <li>
                                    <strong> Web Development Bootcamp </strong> - CouderHouse (2024)
                                </li>
                                <li>
                                    <strong> Scrum Master </strong> - Certiprof (2024)
                                </li>
                                <li>
                                    <strong> MBA </strong> - UofPeople California (2023)
                                </li>
                                <li>
                                    <strong> Business Administration </strong> - UPTC (2017)
                                </li>
                            </ul>
                        </div>

                        {/* Work Experience Section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Product Manager at Scarlett Ropa y Accesorios (2023 - Present)</h4>
                                    <div>
                                        <div className="text-sm">
                                            Led the implementation of a project management framework across cross-functional teams, improving workflow efficiency and ensuring on-time delivery of key project milestones.
                                        </div>
                                        <ul className="list-disc list-inside">
                                            <li>Coordinated a large-scale project involving multiple stakeholders, managing timelines, budgets, and resources, ensuring alignment across teams and high-quality execution.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Customer Experience QA Analyst at IGT (2021 - 2023)</h4>
                                    <div>
                                        <div className="text-sm">
                                            Conducted detailed audits of customer service interactions, ensuring adherence to quality standards and best practices to provide an exceptional customer experience.
                                        </div>
                                        <ul className="list-disc list-inside">
                                            <li>Collected and analyzed customer satisfaction metrics, identifying areas for improvement in processes, and providing comprehensive reports to enhance the overall customer experience.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};