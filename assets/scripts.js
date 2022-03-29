
window.addEventListener('load', (event) => {

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     console.log(this.nextElementSibling);
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

const accordionHeaders = document.querySelectorAll('[data-accordion-header]');
console.log(accordionHeaders);
Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
  let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = () => {
    let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    accordionHeader.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
  }
})

});