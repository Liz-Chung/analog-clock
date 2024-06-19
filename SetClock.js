const SetClock = () => {

  let now = new Date();
  let hourRotation = now.getHours() * 30;
  let minuteRotation = now.getMinutes() * 6;
  let secondRotation = now.getSeconds() * 6;

  document.querySelectorAll(".hour").forEach(hand => {
    hand.style.setProperty('--deg', hourRotation);
});

document.querySelectorAll(".minute").forEach(hand => {
    hand.style.setProperty('--deg', minuteRotation);
});

document.querySelectorAll(".second").forEach(hand => {
    hand.style.setProperty('--deg', secondRotation);
});
};

export default SetClock;