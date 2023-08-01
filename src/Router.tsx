import Projects from './views/Projects';
import {Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import './views/content.css'
import './index.css'
import {DownloadOutlined} from '@ant-design/icons';
import {data} from "./components/data";
import Contact from "./views/Contact";
import Skills from "./views/Skills";

const Router: React.FC<{ language: string }> = ({language}) => {
    const final = language === "fr" ? 1 : language === "es" ? 2 : 0;
    const [darkMode, setDarkMode] = useState(false);
    const onButtonClick = () => {

        fetch('/briez-banuls-valentin.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'briez-banuls-valentin.pdf';
                alink.click();
            })
        })
    }
    return (
        <Routes>
            <Route path={`/${language}`} element={
                <div className={darkMode ? "dark" : ""}>
                    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-30 transition-all">
                        <section className="h-screen">
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
                                        <button
                                            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                            onClick={onButtonClick}
                                        >
                                            Curriculum Vitae <></>
                                            <DownloadOutlined/>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                            <div className="text-center p-10 py-10">
                                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-green-400 md:text-6xl">
                                    Valentin Briez-Bañuls
                                </h2>
                                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                                    {data["Developer, student and car enthusiast"][final]}

                                </h3>
                                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                                    {data["What is better than merging your passions together ?"][final]}
                                </p>
                                <div
                                    className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-green-400">
                                    <AiFillLinkedin className={darkMode ? "onHover-dark" : "onHover"}
                                                    onClick={() => {
                                                        window.open("https://www.linkedin.com/in/valentin-briez-banuls/")
                                                    }}/>
                                    <AiFillGithub className={darkMode ? "onHover-dark" : "onHover"} onClick={() => {
                                        window.open("https://github.com/valbaba")
                                    }}/>
                                </div>

                            </div>
                        </section>

                        <Projects language={final}/>
                        <Skills language={final}/>
                        <Contact language={final}/>

                    </main>
                </div>
            }/>
        </Routes>
    )
}

export default Router;