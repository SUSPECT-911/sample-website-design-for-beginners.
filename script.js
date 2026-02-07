const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");
const blurOverlay = document.getElementById("blurOverlay");
const mainContent = document.querySelector(".main-content");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("show");
  blurOverlay.classList.toggle("show");
  mainContent.classList.toggle("blur");
});

menuList.addEventListener("click", (e) => {
  e.stopPropagation(); // 🔥 IMPORTANT
});

document.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  menuList.classList.remove("show");
  blurOverlay.classList.remove("show");
  mainContent.classList.remove("blur");
});

function setPage(name) {
  document.getElementById("navText").innerText = name;

  menuBtn.classList.remove("active");
  menuList.classList.remove("show");
  blurOverlay.classList.remove("show");
  mainContent.classList.remove("blur");
}
