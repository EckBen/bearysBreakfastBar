import { contacts, info, menu, reviews, homeTitle, menuTitle, contactTitle } from './config';
import { loadHomePage, loadMenuPage, loadContactPage, wipeOut, viewWidth } from './page-load';

function changeBtnCover(oldTab, newTab) {
  let hide = document.getElementById(`cover${oldTab}`);
  let show = document.getElementById(`cover${newTab}`);
  
  hide.classList.add('hidden');
  show.classList.remove('hidden');

  currentTab = newTab;
}

// Get main div
let content = document.getElementById('content');

// Initial home page load
loadHomePage(content, reviews, homeTitle, info);

// Set click events for tab navigation (change classes and move button cover)
let currentTab = 1;
let homeBtn = document.getElementById('home');
let menuBtn = document.getElementById('menu');
let contactBtn = document.getElementById('contact');

homeBtn.addEventListener("click", () => {
  changeBtnCover(currentTab, 1);
  wipeOut(content);
  loadHomePage(content, reviews, homeTitle, info);
});

menuBtn.addEventListener("click", () => {
  changeBtnCover(currentTab, 2);
  wipeOut(content);
  loadMenuPage(content, menu, menuTitle);
});

contactBtn.addEventListener("click", () => {
  changeBtnCover(currentTab, 3);
  wipeOut(content);
  loadContactPage(content, contacts, contactTitle);
});