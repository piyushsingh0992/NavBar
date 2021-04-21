let toggleButton = document.querySelector(".navbar-menu-icon");
let optionTab = document.querySelector(".navbar-right");

toggleButton.addEventListener("click", function () {
  let show = optionTab.classList.contains("navbar-show");
  let hide = optionTab.classList.contains("navbar-hide");

  if (show) {
    optionTab.classList.remove("navbar-show");
    optionTab.classList.add("navbar-hide");
  } else if (hide) {
    optionTab.classList.remove("navbar-hide");
    optionTab.classList.add("navbar-show");
  }
  console.log({ show });
  console.log({ hide });
});
