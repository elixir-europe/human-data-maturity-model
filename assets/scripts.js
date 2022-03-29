
window.addEventListener('load', (event) => {

  /* Accordion script for accessible accordions.
  *  Credit: https://www.aditus.io/patterns/accordion/
  */
  const accordionHeaders = document.querySelectorAll('[data-accordion-header]');
  Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
    let target = accordionHeader.parentElement.nextElementSibling;
    accordionHeader.onclick = () => {
      let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
      accordionHeader.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    }
  })

});