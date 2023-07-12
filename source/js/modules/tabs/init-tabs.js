import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});
