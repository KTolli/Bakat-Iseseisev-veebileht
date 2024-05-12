
/*Allpool oleva koodi inspiratsiooniks on kasutatud järgnevat videot: 
https://youtu.be/AF6vGYIyV8M?si=Q5Q2y_yMvkMm3x0T */


function openPopup(nimi) {
  let popup = document.getElementById(`popup-${nimi}`);
  popup.classList.add("open-popup");

}
function closePopup(nimi) {
  let popup = document.getElementById(`popup-${nimi}`);
  popup.classList.remove("open-popup");
}

