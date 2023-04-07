const editButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
let inputName = document.querySelector(".popup__input_info_name");
let inputDes = document.querySelector(".popup__input_info_description");
const editForm =  document.querySelector(".popup__form");
let infoName = document.querySelector(".profile__info-name");
let infoDes = document.querySelector(".profile__info-description");

editButton.addEventListener('click', () => {
    editPopup.classList.add('popup_opened');
    inputName.value = infoName.textContent;
    inputDes.value = infoDes.textContent;
});

closePopup.addEventListener('click', () => {
    editPopup.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    infoName.textContent = inputName.value;
    infoDes.textContent = inputDes.value;

    editPopup.classList.remove('popup_opened');
};

editForm.addEventListener('submit', handleFormSubmit);
