import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto p-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-200 to-purple-400 bg-clip-text text-transparent text-center">
                        {" "}
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-300/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Plataform</h3>
                            <p className="text-gray-400 mb-4">

                                Descripcion del proyecto
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node-js", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-purple-200 transition-colors">
                                    <i className="fa-solid fa-eye"></i>
                                    <span className="ml-2">View Project</span>
                                    View Project
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-300/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">

                            <h3 className="text-xl font-bold mb-2">Cloud Plataform</h3>
                            <p className="text-gray-400 mb-4">

                                Descripcion del proyecto
                            </p>
                            <div>
                                {["React", "Node-js", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-purple-200 transition-colors">
                                    <i className="fa-solid fa-eye"></i>
                                    <span className="ml-2">View Project</span>
                                    View Project
                                </a>
                            </div>

                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-300/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Plataform</h3>
                            <p className="text-gray-400 mb-4">

                                Descripcion del proyecto
                            </p>
                            <div>
                                {["React", "Node-js", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-purple-200 transition-colors">
                                    <i className="fa-solid fa-eye"></i>
                                    <span className="ml-2">View Project</span>
                                    View Project
                                </a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-300/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Plataform</h3>
                            <p className="text-gray-400 mb-4">

                                Descripcion del proyecto
                            </p>
                            <div>
                                {["React", "Node-js", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-purple-200 transition-colors">
                                    <i className="fa-solid fa-eye"></i>
                                    <span className="ml-2">View Project</span>
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    );
};