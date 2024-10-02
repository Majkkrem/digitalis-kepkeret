import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  const kepURL = document.getElementById('kep-url');
  const kepWidth = document.getElementById('szelesseg');
  const keretVastagsag = document.getElementById('keret-vastagsag');
  const keretSzin = document.getElementById('keret-szin');
  //const mehetGomb = document.getElementById('mehet');
  const kep = document.getElementById('kep');
  const darkMode = document.getElementById('darkmodeSwitch');

  // mehetGomb.addEventListener('click', () => {
  //   const url = kepURL.value;
  //   const width = kepWidth.value;
  //   const border = keretVastagsag.value;
  //   const borderColor = keretSzin.value;

  //   kep.src = url;
  //   kep.style.width = `${width}px`;

  //   kep.style.border = `${border}px solid ${borderColor}`;

  // });

  kepURL.addEventListener('change', () => {
    kep.src = kepURL.value;
  });

  kepWidth.addEventListener('input', () => {
    kep.style.width = `${kepWidth.value}px`;
  });

  keretVastagsag.addEventListener('input', () => {
    kep.style.border = `${keretVastagsag.value}px solid ${keretSzin.value}`;
  });

  keretSzin.addEventListener('input', () => {
    kep.style.border = `${keretVastagsag.value}px solid ${keretSzin.value}`;
  });

  darkMode.addEventListener('change', () => {
    document.body.classList.toggle('darkgrey');
  });



});