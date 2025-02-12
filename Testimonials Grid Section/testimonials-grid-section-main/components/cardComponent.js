export default function createCardComponent(userName, role, title, content, userImage, modifier) {
    const root = document.documentElement;

    const gridContainer = document.querySelector('.grid-container');

    const card = document.createElement('div');
    card.classList.add('card');
    modifier ? card.classList.add(`card--${modifier}`) : card.classList.add(`card--default`);

    const cardUserImage = document.createElement('img');
    cardUserImage.src = userImage;
    cardUserImage.classList.add('card__user-image');
    
    const cardUserName = document.createElement('h2');
    cardUserName.textContent = userName;
    cardUserName.classList.add('card__user-name');

    const cardUserRole = document.createElement('p');
    cardUserRole.textContent = role;
    cardUserRole.classList.add('card__user-role');

    const cardTitle = document.createElement('h1');
    cardTitle.textContent = title;
    cardTitle.classList.add('card__title');
    
    const cardContent = document.createElement('p');
    cardContent.textContent = content;
    cardContent.classList.add('card__content');
    
    card.appendChild(cardUserImage);
    card.appendChild(cardUserName);
    card.appendChild(cardUserRole);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    gridContainer.appendChild(card);
}

