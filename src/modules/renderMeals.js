
const mealsContainer = document.querySelector('.meals-container');
const renderMeals = ({ meals }) => {
    if (!meals) {
        const titeMessage = document.createElement('h2');
        titeMessage.className = 'result-message';
        titeMessage.textContent = 'error message change it later';
        mealsContainer.innerHTML = null;
    }
    meals.forEach(meal => {
        const { idMeal, strMeal, strMealThumb } = meal;
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card';
        mealCard.id = idMeal;
        mealCard.style.backgroundImage = `url(${strMealThumb})`;
        const mealTitle = document.createElement('p');
        mealTitle.textContent = strMeal;
        const reactions = document.createElement('div');
        reactions.className = 'reactions';
        const commentBtn = document.createElement('button');
        commentBtn.className = 'commentBtn';
        const heartIcon = document.createElement('span');
        heartIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>`;
        reactions.appendChild(commentBtn);
        reactions.appendChild(heartIcon);
        mealCard.appendChild(mealTitle);
        mealCard.appendChild(reactions);
        mealsContainer.appendChild(mealCard);
    });
}

export default renderMeals;