import React from 'react';
import Competencias from '../Competencias';
import Sobre from '../Sobre';
import Tabs from '../Tabs';
import { Tab } from '../Tabs/Tabs';
import styles from './Main.module.css';

const Main: React.FC = () => {
    const tabs: Tab[] = [
        { name: 'Sobre', component: <Sobre /> },
        { name: 'Sobre', component: <Sobre /> },
        { name: 'Sobre', component: <Sobre /> },
        { name: 'Competências', component: <Competencias /> }
    ];

    return (
        <div className={styles.main}>
            <Tabs tabs={tabs} />
        </div>
    )
}

export default Main;