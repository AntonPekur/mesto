const editButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
let InputName = document.querySelector(".popup__input_info_name");
let InputDes = document.querySelector(".popup__input_info_description");
const editForm =  document.querySelector(".popup__form");
let infoName = document.querySelector(".profile__info-name");
let infoDes = document.querySelector(".profile__info-description");

editButton.addEventListener('click', () => {
    editPopup.classList.add('popup_open');
    InputName.value = infoName.textContent;
    InputDes.value = infoDes.textContent;
});

closePopup.addEventListener('click', () => {
    editPopup.classList.remove('popup_open');
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    infoName.textContent = InputName.value;
    infoDes.textContent = InputDes.value;

    editPopup.classList.remove('popup_open');
};

editForm.addEventListener('submit', handleFormSubmit);
