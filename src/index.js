function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "As virtuous men pass mildly away,",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
