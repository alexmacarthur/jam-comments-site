import { listen as quickLinkListen } from "quicklink";
import { toggle } from "slide-element";

document.getElementById("documentationNavigation").addEventListener("click", (e) => {
  toggle(document.getElementById("sidebar"), (opened => {
    e.currentTarget.querySelector('svg').style.transform = `scaleX(${opened ? -1 : 1});`;
  }));
});

const MenuController = () => {
  const nav = document.getElementById('nav');
  const navOpen = document.getElementById('navOpen');
  const navClose = document.getElementById('navClose');

  if(!nav) {
    return;
  }

  navOpen.addEventListener('click', (e) => {
    console.log(nav);
    nav.classList.add('menu-open');
    document.body.classList.add('body-menu-open');
  });

  navClose.addEventListener('click', (e) => {
    nav.classList.remove('menu-open');
    document.body.classList.remove('body-menu-open');
  });
}

MenuController();
quickLinkListen();
