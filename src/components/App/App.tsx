import React from 'react';
import styles from './App.module.css';
import SideMenu, { Section } from '../SideMenu';
import Main from '../Main';

const menu: Section[] = [{
  display: 'FELIPE CARVALHO',
  links: [{
    display: 'Sobre',
    path: '/sobre'
  }, {
    display: 'Competências',
    path: '/competencias'
  }, {
    display: 'Experiência',
    path: '/experiencia'
  }, {
    display: 'Blog',
    action: () => {
      console.log('blog');
    }
  }]
}];

interface SideMenuProps {
  menu: Section[];
}

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <SideMenu menu={menu}/>
      <Main />
    </div>
  );
}

export default App;
