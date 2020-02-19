import React, { useState } from 'react';
import styles from './App.module.css';
import SideMenu, { Section, SectionLink } from '../SideMenu';
import Main from '../Main';
import { Tab } from '../Tabs/Tabs';
import Sobre from '../Sobre';
import Competencias from '../Competencias';
import Experiencia from '../Experiencia';

const menu: Section[] = [{
  display: 'FELIPE CARVALHO',
  open: true,
  links: [{
    display: 'Sobre',
    key: 'sobre',
    component: <Sobre />
  }, {
    display: 'Competências',
    key: 'competencias',
    component: <Competencias />
  }, {
    display: 'Experiência',
    key: 'experiencia',
    component: <Experiencia />
  }, {
    key: 'blog',
    display: 'Blog',
    action: () => {
      console.log('blog');
    }
  }]
}];

const App: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const handleTabSelected = (link: SectionLink) => {
    let newTabs: Tab[] = [];

    if (tabs.length > 0)
      newTabs = [...tabs];

    newTabs.forEach(t => t.active = false);

    const foundTab = newTabs.find(t => t.key === link.key);

    if (!foundTab) {
      newTabs.push({ key: link.key, name: link.display, component: link.component!, active: true });
    } else {
      foundTab.active = true;
    }

    setTabs(newTabs);
  }

  const handleTabClosed = (tabs: Tab[]) => {
    setTabs(tabs);
  }

  return (
    <div className={styles.container}>
      <SideMenu menu={menu} onTabSelected={handleTabSelected} />
      <Main tabs={tabs} onTabClosed={handleTabClosed} />
    </div>
  );
}

export default App;
