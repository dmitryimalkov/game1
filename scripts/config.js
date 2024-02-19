// open-close forms and overlays
function openPlayerConfig() {
  // get access to and overlay element and change css property display from none
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
}
//in the next function, first of all, we have to prevent browser for sending an input data to the server
// this is done by event
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // '  mAx   '=> 'mAx' get rid of white spaces
  if (!enteredPlayername) {
    //or enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');// Here we added a class to style the error message
    errorsOutputElement.textContent = "Please enter a valid name.";
    return;
  }

}
