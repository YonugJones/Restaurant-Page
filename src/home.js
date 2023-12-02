function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const paraOne = document.createElement('p');
    paraOne.textContent = 'With deep roots in tradition and family';
    paraOne.classList.add('home-text');

    const paraTwo = document.createElement('p');
    paraTwo.textContent = 'and passion for authentic Italian cuisine';
    paraTwo.classList.add('home-text');

    const artiBucco = document.createElement('img');
    artiBucco.classList.add('home-img');
    artiBucco.src = 'imgs/artie-bucco.jpeg';
    artiBucco.alt = 'artisan de cuisie: Artie Bucco';

    const paraThree = document.createElement('p');
    paraThree.textContent = 'Established by Artie Bucco';
    paraThree.classList.add('home-text');


    home.appendChild(paraOne);
    home.appendChild(paraTwo);
    home.appendChild(artiBucco);
    home.appendChild(paraThree);

    return home;
};

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
};

export default loadHome;