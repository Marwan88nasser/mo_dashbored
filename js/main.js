// Click tog-nav
if (document.querySelector(".tog-nav")) {
  let togNav = document.querySelectorAll(".tog-nav"),
    app = document.querySelector(".app");
  togNav.forEach((tog) => {
    tog.addEventListener("click", function () {
      app.classList.toggle("colse-and-open");
    });
  });

  //close click body
}
