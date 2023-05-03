import { listen as quickLinkListen } from "quicklink";
import { toggle } from "slide-element";
import { sendEvent } from "./utils";

const MobileMenuController = () => {
  const mobileMenuToggle = document.getElementById("documentationNavigation");

  if (!mobileMenuToggle) {
    return;
  }

  mobileMenuToggle.addEventListener("click", (e) => {
    toggle(document.getElementById("sidebar")).then((opened) => {
      mobileMenuToggle.querySelector('svg').style.transform = `scaleX(${opened ? -1 : 1})`;
    });
  });
}

const MenuController = () => {
  const nav = document.getElementById('nav');
  const navOpen = document.getElementById('navOpen');
  const navClose = document.getElementById('navClose');

  function close() {
    nav.classList.remove('menu-open');
    document.body.classList.remove('body-menu-open');
  }

  if (!nav) {
    return;
  }

  nav.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== "a") {
      return;
    }

    close();
  });

  navOpen.addEventListener('click', (e) => {
    nav.classList.add('menu-open');
    document.body.classList.add('body-menu-open');
  });

  navClose.addEventListener('click', close);
}

MenuController();
MobileMenuController();
quickLinkListen();

document.querySelectorAll('[data-sign-up-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    sendEvent('Sign Up', {
      page_location: e.target.dataset.signUpLink
    });
  });
});

let options = {
  rootMargin: '500px',
  threshold: 1.0
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.dataset.src) {
      entry.target.src = entry.target.dataset.src;
      entry.target.removeAttribute('data-src');
    }
  });
}, options);

document.querySelectorAll('img').forEach(img => {
  observer.observe(img);
});
