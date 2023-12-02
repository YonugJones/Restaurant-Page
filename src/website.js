import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Nuovo Vesuvio';

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
};

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
};

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
};

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const author = document.createElement('p');
    author.textContent = 'created by Yonug Jones 2023'

    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/YonugJones';

    const gitHubIcon = document.createElement('img');
    gitHubIcon.classList.add('footer-img')
    gitHubIcon.src = 'imgs/github-mark.png';

    gitHubLink.appendChild(gitHubIcon);

    footer.appendChild(author);
    footer.appendChild(gitHubLink);

    return footer;
};

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nav-button"));
    loadHome();
};

export default initializeWebsite;