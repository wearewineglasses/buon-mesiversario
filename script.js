window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const page = document.querySelector(".page");
  const footer = document.querySelector(".footer");

  setTimeout(() => {
    loader.style.transition = "opacity .8s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      page.classList.remove("hidden");
      footer.classList.remove("hidden");

      page.style.transition = "opacity 1.2s ease";
      footer.style.transition = "opacity 1.2s ease";

      page.style.opacity = "1";
      footer.style.opacity = "1";
    }, 800);

  }, 3200);

});