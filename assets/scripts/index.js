import { listen as quickLinkListen } from "quicklink";

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
