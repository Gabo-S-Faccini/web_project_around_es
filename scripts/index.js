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

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

const profileAddButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");
const newCardForm = newCardPopup.querySelector("#new-card-form");
const newCardNameInput = newCardForm.querySelector('[name="place-name"]');
const newCardLinkInput = newCardForm.querySelector('[name="link"]');
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

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
function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("card__like-button_active");
}
function handleDeleteButtonClick(evt) {
  evt.target.closest(".card").remove();
}
function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", handleLikeButtonClick);
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", handleDeleteButtonClick);

  cardImage.addEventListener("click", function () {
    imagePopupCaption.textContent = name;
    imagePopupImage.src = link;
    imagePopupImage.alt = name;
    openModal(imagePopup);
  });

  return cardElement;
}

function renderCard(name, link, cardsContainer) {
  const cardElement = getCardElement(name, link);
  cardsContainer.prepend(cardElement);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(newCardNameInput.value, newCardLinkInput.value, cardsList);

  closeModal(newCardPopup);
  newCardForm.reset();
}

profileEditButton.addEventListener("click", function () {
  handleOpenEditModal();
});

editPopupCloseButton.addEventListener("click", function () {
  closeModal(editPopup);
});
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", function () {
  openModal(newCardPopup);
});

newCardPopupCloseButton.addEventListener("click", function () {
  closeModal(newCardPopup);
});
newCardForm.addEventListener("submit", handleCardFormSubmit);

imagePopupCloseButton.addEventListener("click", function () {
  closeModal(imagePopup);
});

initialCards.forEach((card) => renderCard(card.name, card.link, cardsList));
