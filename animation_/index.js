// Handle mouse movement on whole page

var bigDiv = document.getElementById("big");
var smallDiv = document.getElementsByClassName("small");

// Mouse Click
function handleMouseDownOnPage(props) {
  props.preventDefault();
  // x position
  const x = props.x;
  // y position
  const y = props.y;
  bigDiv.dataset.mouseDownAtX = x;
  bigDiv.dataset.mouseDownAtY = y;

  if (bigDiv.dataset.mouseDownAtX === "0") return;
  if (bigDiv.dataset.mouseDownAtY === "0") return;
}


// Mouse Movement
function handleMouseMovementOnPage(props) {
  props.preventDefault();
  if (bigDiv.dataset.mouseDownAtX === "0") return;
  if (bigDiv.dataset.mouseDownAtY === "0") return;
  if (bigDiv.dataset.prevPercentageX !== "0" || bigDiv.dataset.prevPercentageY !== "0") {
    // keyframes so that we can animate the movement
    const keyframes = {
      transform: `translate(${bigDiv.dataset.prevPercentageX}%, ${bigDiv.dataset.prevPercentageY}%)`,
    };
    bigDiv.animate(keyframes, { duration: 800, fill: "forwards" })
    return;
  }
  // x position
  const x = props.x;
  // y position
  const y = props.y;
  // Mouse Delta
  const mouseDeltaX = parseFloat(bigDiv.dataset.mouseDownAtX) - x;
  const mouseDeltaY = parseFloat(bigDiv.dataset.mouseDownAtY) - y;
  const maxDeltaX = window.innerWidth + ((window.innerWidth * 70) / 100);
  const maxDeltaY = window.innerHeight + ((window.innerHeight * 90) / 100);
  const px = (mouseDeltaX / maxDeltaX) * -100;
  const py = (mouseDeltaY / maxDeltaY) * -100;

  // limit offscreen
  if (px >= 20 || py >= 20 || px <= -20 || py <= -20) return;
  // keyframes so that we can animate the movement
  const keyframes = {
    transform: `translate(${px}%, ${py}%)`,
  };
  let i = 0;
  for (const element of smallDiv) {
    const keyframes = {
      top: `calc(${(-py * 50 * i / 100)}px + 50%)`,
      right: `calc(${(px * 50 * i / 100)}px + 50%)`,
      zIndex: i * 10,
    };
    element.animate(keyframes, { duration: 800, fill: "forwards" })
    i++;
  }
  bigDiv.animate(keyframes, { duration: 800, fill: "forwards" })
}

window.addEventListener("mousedown", handleMouseDownOnPage, false);
window.addEventListener("mousemove", handleMouseMovementOnPage, false);
window.addEventListener("mouseup", () => {
  bigDiv.dataset.mouseDownAtX = 0;
  bigDiv.dataset.mouseDownAtY = 0;
  // keyframes so that we can animate the movement
  const keyframes = {
    transform: `translate(0%, 0%)`,
  };
  bigDiv.animate(keyframes, { duration: 500, fill: "forwards" })

  for (const element of smallDiv) {
    element.animate({ top: "50%", right: "50%" }, { duration: 400, fill: "forwards" })
  }
}, false);
