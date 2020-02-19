import React, { useState, useEffect } from 'react';
import styles from './Tab.module.css';

interface FullTab extends Tab {
    active?: boolean;
}

export interface Tab {
    key: string;
    name: string;
    component: JSX.Element;
    active?: boolean;
}

export interface TabsProps {
    tabs: Tab[];
    onTabClosed: (tabs: Tab[]) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
    const [tabs, setTabs] = useState<FullTab[]>();
    const [active, setActive] = useState<JSX.Element>();

    useEffect(() => {
        if (!!props.tabs && props.tabs.length > 0) {
            let newTabs = [...props.tabs] as FullTab[];

            const activeTab = newTabs.find(t => !!t.active);

            setTabs(newTabs);
            setActive(activeTab!.component);
        } else {
            setTabs([]);
            setActive(<></>);
        }
    }, [props.tabs]);

    const activateTab = (index: number) => {
        let newTabs = tabs!.slice();

        newTabs.forEach(t => t.active = false);
        newTabs[index].active = true;

        setTabs(newTabs);
        setActive(newTabs[index].component);
    }

    const closeTab = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) => {
        e.stopPropagation();
        if (!!tabs) {
            const changeActive = !!tabs[index].active;

            const newTabs = tabs.slice();
            newTabs.splice(index, 1);

            if (newTabs.length > 0 && changeActive) {
                const newActiveTab = newTabs[newTabs.length - 1];

                newTabs.forEach(t => t.active = false);
                newActiveTab.active = true;

                setActive(newActiveTab.component);
            } else if (newTabs.length === 0) {
                setActive(<></>);
            }

            setTabs(newTabs);
            props.onTabClosed(newTabs as Tab[]);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs?.map((t, index) => (
                    <div
                        key={index}
                        className={`${styles.tab} ${!!t.active ? styles.active : ''}`}
                        onClick={(e) => {
                            activateTab(index);
                        }}
                    >
                        {t.name}
                        <span
                            className={styles.closeTab}
                            onClick={(e) => closeTab(e, index)}
                        >
                            x
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.content}>
                {active}
            </div>
        </div>
    )
}

export default Tabs;