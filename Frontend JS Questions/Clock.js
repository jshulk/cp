document.addEventListener("DOMContentLoaded", function () {
  const clock = document.getElementById("clock");

  function renderTime() {
    const time = new Date();
    clock.textContent = time.toLocaleString(navigator.language || "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  }
  setInterval(renderTime, 1000);
  //renderTime();
});
