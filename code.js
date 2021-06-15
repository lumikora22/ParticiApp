let boton;
let compuerta;
boton = document.querySelector(".buttom-menu");
addclass = document.getElementById("mobile-sidebar")
back = document.querySelector(".main-body");
navbar = document.querySelector(".mobile-navbar")
dropdown = document.querySelector(".dropdown-toggle")
dropdown2 = document.querySelector(".dropdown-toggle2")
// dropdown = document.querySelectorAll("li.dropdown-toggle")
submenu = document.querySelector(".submenu-item")
submenu2 = document.querySelector(".submenu-item2")

boton.addEventListener("click",()=>{
    navbar.classList.toggle("toggle-on");
   
    //alert(addclass.classList.toggle("toggle-on"));
    addclass.classList.toggle("toggle-on");
    back.classList.toggle("mobile-sidebar-active");
});

dropdown.addEventListener("click",()=>{
    dropdown.classList.toggle("toggled-on")
    submenu.classList.toggle("open-submenu")
})

dropdown2.addEventListener("click",()=>{
    dropdown2.classList.toggle("toggled-on")

    submenu2.classList.toggle("open-submenu2")
})


