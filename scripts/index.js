Perfecto, vamos a lo seguro. Aquí tienes el archivo completo con el nombre exacto que pide el ejercicio (handleProfileFormSubmit), cambiado en los dos lugares donde aparece (la definición de la función y el addEventListener):

javascript
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
const profileEditButton = document.querySelector(".profile__edit-button");

const editPopup = document.querySelector("#edit-popup");

const editPopupCloseButton = editPopup.querySelector(".popup__close");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const editProfileForm = document.querySelector("#edit-profile-form");
const editProfileNameInput = editProfileForm.querySelector('[name="name"]');
const editProfileDescriptionInput = editProfileForm.querySelector(
  '[name="description"]',
);

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}
function fillProfileForm() {
  editProfileNameInput.value = profileTitle.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
}
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;

  closeModal(editPopup);
}

profileEditButton.addEventListener("click", function () {
  handleOpenEditModal();
});

editPopupCloseButton.addEventListener("click", function () {
  closeModal(editPopup);
});
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach(function (card) {});