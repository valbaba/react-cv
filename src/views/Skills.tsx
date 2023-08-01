import React from "react";
import { skills } from "../components/skills";
import {data} from "../components/data";
import {BulbOutlined} from '@ant-design/icons';
export default function Skills(language: { language: number }) {
    return (
        <section id="skills" className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 transition-all h-screen ">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    {/*<ChipIcon className="w-10 inline-block mb-4" />*/}
                    <BulbOutlined style={{ fontSize: '70px'}}/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black dark:text-white mb-4">

                        {data["Skills & Technologies"][language.language]}
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-900 dark:text-gray-300">
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill.id} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                {/*<BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />*/}
                                <span className="title-font font-medium text-white">
                  {skill.title}
                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}