const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
});

//submenu
const subMenuBtn = document.querySelectorAll(".submenu_btn");

for(let i=0; i<subMenuBtn.length; i++) {

    subMenuBtn[i].addEventListener("click", function(){

        if(window.innerWidth < 960) {
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if (subMenu.classList.contains("desplegar") ) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
                
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}