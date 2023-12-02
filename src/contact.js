function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '201.555.0157';

    const email = document.createElement('p');
    email.textContent = 'nuovovesuvio@fakeEmail.com';

    const contactImg = document.createElement('img');
    contactImg.classList.add('contact-img')
    contactImg.src = 'imgs/contactImg.jpeg'; 
    contactImg.alt = 'Chef Artie Bucco entertaining his guests';

    const hoursOne = document.createElement('p');
    hoursOne.textContent = 'Thurs - Sat : 4pm - 10pm';
    const hoursTwo = document.createElement('p');
    hoursTwo.textContent = 'Sun: 11am - 5pm';

    contact.appendChild(phoneNumber);
    contact.appendChild(email);
    contact.appendChild(contactImg);
    contact.appendChild(hoursOne);
    contact.appendChild(hoursTwo);

    return contact;
};

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
};

export default loadContact;