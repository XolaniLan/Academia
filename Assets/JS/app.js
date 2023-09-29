var typingEffect = new Typed(".multitext", {
  strings: [
    "Provide high quality education",
    "Prepare leaners for success in school, work and life",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 1500,
  showCursor: false,
  autoInsertCss: true,
});
var typingEffect = new Typed(".visionType", {
  strings: [
    "Ensure safety of learners",
    "Assist leaners to reach their full potential",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 1500,
  showCursor: false,
  autoInsertCss: true,
});

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
};
