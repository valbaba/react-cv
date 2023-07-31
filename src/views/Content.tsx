import {
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import {BsFillMoonStarsFill} from "react-icons/bs";
import React, {useState} from "react";
import "./content.css"

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>

            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 transition-all">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl">developed by Valentin</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="#"
                                >
                                    Curriculum Vitae
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 py-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-green-400 md:text-6xl">
                            Valentin Briez-Bañuls
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                            Developer, student and car enthusiast
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            What's better than merging your passions together ?
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-green-400">
                            <AiFillLinkedin className={darkMode ? "onHover-dark" : "onHover"} onClick={() => {
                                window.open("https://www.linkedin.com/in/valentin-briez-banuls/")
                            }}/>
                            <AiFillGithub className={darkMode ? "onHover-dark" : "onHover"} onClick={() => {
                                window.open("https://github.com/valbaba")
                            }}/>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}