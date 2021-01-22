import { contacts, info, menu, reviews, homeTitle, menuTitle, contactTitle } from './config';
import { loadMain, changeBtnCover } from './page-load';

// Set globals
let btnNames = ['home', 'menu', 'contact'];
let currentTab = btnNames[0];
let content = document.getElementById('content');

// Initial home page load
loadMain(currentTab, content, reviews, homeTitle, info);

// Set click events for tab navigation
btnNames.forEach(btnName => {
  let btn = document.getElementById(btnName);
  btn.addEventListener('click', () => {
    currentTab = changeBtnCover(currentTab, btnName);
    if (btnName == 'home') {
      loadMain(btnName, content, reviews, homeTitle, info);
    } else if (btnName == 'menu') {
      loadMain(btnName, content, menu, menuTitle);
    } else {
      loadMain(btnName, content, contacts, contactTitle);
    }
  });
})