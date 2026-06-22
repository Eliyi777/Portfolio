import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    const textRef = useRef(null);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        const helloTimer = setTimeout(() => {
            setShowWelcome(true);
        }, 2500);

        return () => clearTimeout(helloTimer);
    }, []);

    useEffect(() => {
        if (!showWelcome || !textRef.current) return;

        requestAnimationFrame(() => {
            const length = textRef.current.getComputedTextLength();

            // Estilo inicial: solo borde
            textRef.current.style.strokeDasharray = length + 2;
            textRef.current.style.strokeDashoffset = length + 2;
            textRef.current.style.stroke = "white";
            textRef.current.style.strokeWidth = "1px";
            textRef.current.style.fill = "transparent";
            textRef.current.style.transition =
                "stroke-dashoffset 6s ease, fill 2s ease 6s";;

            // Animación: dibujar borde
            setTimeout(() => {
                textRef.current.style.strokeDashoffset = 0;
            }, 900);

            // Animación: rellenar después del borde
            setTimeout(() => {
                textRef.current.style.fill = "";
            }, 1200);
        });
    }, [showWelcome]);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center relative"
            style={{ background: "#0a0a0a" }}
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    {/* Primer efecto: Hello World */}
                    {!showWelcome && (
                        <h1 className="text-white text-6xl font-bold mb-8 animate-fade-in">
                            Hello World
                        </h1>
                    )}

                    {/* Segundo efecto: Wellcome */}
                    {showWelcome && (
                        <svg
                            viewBox="0 0 1000 200"
                            width="1000"
                            height="200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto mb-10"
                        >
                            <text
                                ref={textRef}
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{
                                    fontSize: "7rem",
                                    fontWeight: 300,
                                    strokeLinejoin: "round"
                                }}
                            >
                                Welcome
                            </text>
                        </svg>
                    )}

                    <h1 className="text-3xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-[#ffffff] to-[#9d4edd] bg-clip-text text-transparent leading-right">
                        Hi, I´m Eliana Yisel, This is My Portfolio.</h1>

                    <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
                        Front-end developer with a background in management, bringing a unique perspective to crafting user-friendly and engaging websites. Passionate about technology and continuous learning, now focused on building functional interfaces using HTML, CSS, and JavaScript. Certified Scrum Master with strong collaborative skills,
                        contributing to efficient project delivery and seamless team coordination.

                    </p>


                    <div className="flex justify-center z-10 px-4">
                        <a href="#projects"
                            className="text-sm bg-white text-black hover:bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                             hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            View My Work
                        </a>

                        <a href="#contact" className="text-sm border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                            hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Let's Connect</a>
                    </div>

                    <br />


                    <div className="flex justify-center items-center gap-1 mt-6">

                        <a
                            href="#contact"
                            className="text-blue-500 border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-200
                                hover:-translate-y-0.5 
                                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10"
                        >
                            elianayisel777@gmail.com
                        </a>

                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("elianayisel777@gmail.com");
                                alert("Email copied to clipboard");
                            }}
                            className="text-sm text-white bg-purple-600 hover:bg-purple-700 py-3 px-6  rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                             hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            Copy my email
                        </button>
                    </div>


                </div>
            </RevealOnScroll>
        </section>
    );
}