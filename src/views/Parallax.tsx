import * as React from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import styles from './styles.module.css'
import Home from "./Content";
import DegreeComponent, {Degree} from './Degree';


const degrees: Degree[] = [
    {
        degree: 'Master of Business Administration',
        institution: 'ABC Business School',
        date: 'December 2019',
        details: 'Specialization: Marketing',
    },
    {
        degree: 'Master of Business Administration',
        institution: 'ABC Business School',
        date: 'December 2019',
        details: 'Specialization: Marketing',
    },
    {
        degree: 'Master of Business Administration',
        institution: 'ABC Business School',
        date: 'December 2019',
        details: 'Specialization: Marketing',
    },
    {
        degree: 'Master of Business Administration',
        institution: 'ABC Business School',
        date: 'December 2019',
        details: 'Specialization: Marketing',
    },
    {
        degree: 'Master of Business Administration',
        institution: 'ABC Business School',
        date: 'December 2019',
        details: 'Specialization: Marketing',
    },
];
export default function App() {
    return (
        <div>
            <div className={styles.background}/>

            <Parallax pages={5}>
                <ParallaxLayer offset={0} speed={0.5} style={{justifyContent: 'center'}}>
                    {/*<p className={styles.scrollText}></p>*/}
                    <Home/>
                </ParallaxLayer>

                <ParallaxLayer sticky={{start: 1, end: 5}} style={{justifyContent: 'center'}}>
                    <div className={`${styles.card} ${styles.sticky}`}>
                        <p>School</p>
                    </div>
                </ParallaxLayer>

                {/*<ParallaxLayer offset={1.2} sticky={{start: 2, end: 3}} speed={0.5}*/}
                {/*               style={{justifyContent: 'flex-end'}}>*/}
                {/*    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>*/}
                {/*        <DegreeComponent  {...degrees.at(1)} />*/}
                {/*    </div>*/}
                {/*</ParallaxLayer>*/}
                {/*<ParallaxLayer offset={2.2} sticky={{start: 3, end: 4}} speed={0.5}*/}
                {/*               style={{justifyContent: 'flex-end'}}>*/}
                {/*    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>*/}
                {/*        <DegreeComponent  {...degrees.at(2)} />*/}
                {/*    </div>*/}
                {/*</ParallaxLayer>*/}
                {/*<ParallaxLayer offset={3.2} sticky={{start: 4, end: 5}} speed={0.5}*/}
                {/*               style={{justifyContent: 'flex-end'}}>*/}
                {/*    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>*/}
                {/*        <DegreeComponent  {...degrees.at(3)} />*/}
                {/*    </div>*/}
                {/*</ParallaxLayer>*/}
                {degrees.map((degree, index) => (
                    <ParallaxLayer sticky={{start: index +1, end: 5}} key={index + 1} offset={index + 1} speed={0.5} style={{ justifyContent: 'flex-end', paddingTop: `${60 + (index * 180)}px` }}>
                        <div className={`${styles.card} ${styles.parallax} ${styles.purple} `}>
                            <DegreeComponent {...degree} />
                        </div>
                    </ParallaxLayer>
                ))}

                {/*<ParallaxLayer offset={1.2} speed={0.5} style={{ justifyContent: 'flex-end' }}>*/}
                {/*    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>*/}
                {/*        <p>I'm not</p>*/}
                {/*    </div>*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1} speed={0.5}>*/}
                {/*    /!* Timeline section *!/*/}
                {/*    <div className={styles.timeline}>*/}
                {/*        {degrees.map((degree, index) => (*/}
                {/*            <DegreeComponent key={index} {...degree} />*/}
                {/*        ))}*/}
                {/*    </div>*/}

                {/*</ParallaxLayer>*/}

            </Parallax>
        </div>
    )
}
