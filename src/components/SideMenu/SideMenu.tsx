import React, { useState, useEffect } from 'react'
import styles from './SideMenu.module.css';

export interface Section {
    display: string;
    links: SectionLink[];
    open?: boolean;
}

export interface SectionLink {
    display: string;
    path?: string;
    action?: () => void;
}

interface SideMenuProps {
    menu: Section[];
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
    const [menu, setMenu] = useState<Section[]>([]);

    useEffect(() => {
        const newMenu = [...props.menu];
        newMenu.forEach(m => m.open = !!m.open);

        setMenu(newMenu);
    }, [props]);

    const toggleSection = (index: number) => {
        const newMenu = [...menu];
        newMenu[index].open = !newMenu[index].open;

        setMenu(newMenu);
    }

    return (
        <nav className={styles.sideMenu}>
            {menu?.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <div
                        className={styles.section}
                        onClick={() => {
                            toggleSection(sectionIndex);
                        }}
                    >
                        <i className={`${styles.arrow} ${!!section.open ? styles.down : styles.right}`} />
                        {section.display}
                    </div>

                    {!!section.open ? (
                        <ul>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.path}>{link.display}</a>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            ))};
        </nav>
    );
}

export default SideMenu;