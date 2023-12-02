function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-section');
    menuTitle.setAttribute('id', 'menu-title');
    menuTitle.textContent = 'Dinner Menu';

    const primi = document.createElement('div');
    primi.classList.add('menu-section');
    primi.setAttribute('id', 'primi');

    primi.appendChild(createSectionTitle('primi', 'Primi'));
    primi.appendChild(createMenuItem('Zucchini Fritti', 'Oregano, Red Pepper Almond Dip'));
    primi.appendChild(createMenuItem('Arancini', 'Smoked Scamorza, Pomodoro'));
    primi.appendChild(createMenuItem('Ricotta Gnudi', 'Pesto Genovese, Parmesan'));

    const secondi = document.createElement('div');
    secondi.classList.add('menu-section');
    secondi.setAttribute('id', 'secondi');

    secondi.appendChild(createSectionTitle('secondi', 'Secondi'));
    secondi.appendChild(createMenuItem('Veal Chop Milanese', 'alla Parmigiana or Marsala'));
    secondi.appendChild(createMenuItem('Dover Sole Piccata', 'Sicilian Artichokes, Capers, Brown Butter'));
    secondi.appendChild(createMenuItem('Eggplant Parmesan alla Billi', 'Seasoned Breadcrumbs'));

    const zuppa = document.createElement('div');
    zuppa.classList.add('menu-section');
    zuppa.setAttribute('id', 'zuppa');

    zuppa.appendChild(createSectionTitle('zuppa', 'Zuppa'));
    zuppa.appendChild(createMenuItem('Broccolini cheddartini', 'broccoli with aged cheddar'));
    zuppa.appendChild(createMenuItem('Tomato tortellini', 'tomoato puree with pork tortellini'));

    const insalate = document.createElement('div');
    insalate.classList.add('menu-section');  
    insalate.setAttribute('id', 'insalate');

    insalate.appendChild(createSectionTitle('insalate', 'Insalate'));
    insalate.appendChild(createMenuItem("Giuliana's Italian", 'Fresh Mozzarella, Salumi, Pepperocini'));
    insalate.appendChild(createMenuItem('Burrata Panzanella', 'Heirloom Tomatoes, Focaccia Croutons'));
    
    const dolce = document.createElement('div');
    dolce.classList.add('menu-section');  
    dolce.setAttribute('id', 'dolce');

    dolce.appendChild(createSectionTitle('dolce', 'Dolce'));
    dolce.appendChild(createMenuItem('Pistachio Gelato al Minuto', 'Wild Italian Strawberries, Sicilian Pistachios'));
    dolce.appendChild(createMenuItem('Tartufo Sundae', 'Hazelnut, Milk Chocolate'));

    menu.appendChild(menuTitle);
    menu.appendChild(primi);
    menu.appendChild(secondi);
    menu.appendChild(zuppa);
    menu.appendChild(insalate);
    menu.appendChild(dolce);

    return menu;
};

function createSectionTitle(sectionId, title) {
    const section = document.createElement('div');
    section.setAttribute('id', sectionId);

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('menu-section-title');
    sectionTitle.textContent = title;

    section.appendChild(sectionTitle);
    
    return section;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h3');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
};

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
};

export default loadMenu;