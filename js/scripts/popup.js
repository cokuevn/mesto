///поиск элементов и присвоенеи переменных

let popupOpenBtn = document.querySelector(".profile__btn-edit");
let popup = document.querySelector(".popup");
let popupCloseBtn = document.querySelector(".popup__btn-close");


popupOpenBtn.addEventListener('click', function() {

    togglePopup();
});

popupCloseBtn.addEventListener('click', function() {

    togglePopup();
});


///Функция окрывающая и закрывающая popup

function togglePopup() {
    popup.classList.toggle('popup_opened');
}











let formElement = document.querySelector(".popup__form"); 
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");

let Name = document.querySelector('.profile__title');
let Profession = document.querySelector('.profile__description');
///Функция отправки формы

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;

    Name.textContent = nameInput.value;
    Profession.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);



let popupBtnSave = document.querySelector(".popup__btn-save")
popupBtnSave.addEventListener('click', function() {

    togglePopup();
});
