import React from 'react';
import Tabs from '../Tabs';
import { Tab } from '../Tabs/Tabs';
import styles from './Main.module.css';

interface MainProps {
    tabs: Tab[];
    onTabClosed: (tabs: Tab[]) => void;
}

const Main: React.FC<MainProps> = (props) => {
    const { tabs } = props;

    return (
        <div className={styles.main}>
            <Tabs tabs={tabs} onTabClosed={props.onTabClosed} />
        </div>
    )
}

export default Main;