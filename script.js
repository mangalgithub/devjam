
/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById(
  "sidebar-container-navigation-id"
);
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById(
  "sidebar-navigation-close"
);

//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarCloseNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("slidebar-show");
});
