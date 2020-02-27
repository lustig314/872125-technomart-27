var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".write-popup");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var popupName = popup.querySelector(".popup-name_type_text");
var popupEmail = popup.querySelector(".popup-email_type_email");
var popupText = popup.querySelector(".popup-textarea_type_textarea");
var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("popupName");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!popupName.value || !popupEmail.value || !popupText.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("popupName", popupName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.add("popup-error");
    }
  }
});