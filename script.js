const navId = document.querySelector(".nav_menu"),
  ToggleBtnId = document.querySelector(".toggle_btn"),
  CloseBtnId = document.querySelector(".close_btn"),
  buttons = document.querySelectorAll('button');

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.style.right = "0";
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.style.right = "-100%";
});

//====show hide faq (question and answer)=====

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];
        
        //show answer and change icon
        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
        
    })
} )