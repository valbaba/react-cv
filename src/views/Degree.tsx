// DegreeComponent.tsx
import React from 'react';
import styles from './styles.module.css'
import {useSpring} from "@react-spring/web";

export interface Degree {
    degree?: string | null | undefined;
    institution?: string | null | undefined;
    date?: string | null | undefined;
    details?: string | null | undefined;

}

const DegreeComponent: React.FC<Degree> = ({degree, institution, date, details}) => {
    const props = useSpring({opacity: 1, from: {opacity: 0}, delay: 500}); // Add animation
    return (

        <div className={styles.degree}>
            <h2>{degree}</h2>
            <p>{institution}</p>
            <p>{date}</p>
            <p>{details}</p>
        </div>
    );
};

export default DegreeComponent;