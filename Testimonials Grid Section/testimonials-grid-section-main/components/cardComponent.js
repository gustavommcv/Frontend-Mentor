export default function createCardComponent(userName, role, title, content, userImage, modifier) {
    const gridContainer = document.querySelector('.grid-container');

    const card = document.createElement('div');
    card.classList.add('card');
    modifier ? card.classList.add(`card--${modifier}`) : card.classList.add(`card--default`);

    const cardUserProfile = document.createElement('div');
    cardUserProfile.classList.add('card__user-profile');

    const cardUserInfo = document.createElement('div');
    cardUserInfo.classList.add('card__user-info');

    const cardUserImage = document.createElement('img');
    cardUserImage.src = userImage;
    cardUserImage.classList.add('card__user-image');
    cardUserImage.classList.add(`card__user-image--${modifier}`);
    
    const cardUserName = document.createElement('h2');
    cardUserName.textContent = userName;
    cardUserName.classList.add('card__user-name');
    cardUserName.classList.add(`card__user-name--${modifier}`);

    const cardUserRole = document.createElement('p');
    cardUserRole.textContent = role;
    cardUserRole.classList.add('card__user-role');
    cardUserRole.classList.add(`card__user-role--${modifier}`);

    const cardTitle = document.createElement('h1');
    cardTitle.textContent = title;
    cardTitle.classList.add('card__title');
    cardTitle.classList.add(`card__title--${modifier}`);
    
    const cardContent = document.createElement('p');
    cardContent.textContent = content;
    cardContent.classList.add('card__content');
    cardContent.classList.add(`card__content--${modifier}`);
    
    cardUserInfo.appendChild(cardUserName);
    cardUserInfo.appendChild(cardUserRole);
    cardUserProfile.appendChild(cardUserImage);
    cardUserProfile.appendChild(cardUserInfo);
    card.appendChild(cardUserProfile);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    gridContainer.appendChild(card);
}
