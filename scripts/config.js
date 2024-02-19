// open-close forms and overlays
function openPlayerConfig() {
  // get access to and overlay element and change css property display from none
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}
//in the next function, first of all, we have to prevent browser for sending an input data to the server
// this is done by event
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername");
  console.log(enteredPlayername);
}
