// Html'den elemanları javascript kısmına çek
const nav = document.querySelector(".nav_links");
const menuBtn = document.querySelector(".nav_menu_btn");
const menuIcon = document.querySelector("#menu-icon");

// menuBtn'e tıklandığında nav kısmını aç-kapa yapmak için bir class ekle

menuBtn.addEventListener("click", () => {
  // nav kısmına class ekle-çıkar
  nav.classList.toggle("open");

  // nav kısmının open classı içerip içermeme durumunu belirle
  const isOpen = nav.classList.contains("open");

  // isOpen değerine göre menuBtn'in içerisindeki ikonu belirle
  menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
