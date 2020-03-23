"use strict";

var txtGetal;
var divFeedback, divScrollable;
var teller = 0;

window.addEventListener('load',Initieer);

function Initieer(){

  KoppelElementen();
  KoppelEvents();
  VulScrollable();
}

const KoppelElementen = () => {
  divFeedback = document.getElementById("divFeedback");
  divScrollable = document.getElementById("divScrollable");
  txtGetal = document.getElementById("txtGetal");

}

const KoppelEvents = () => {
  txtGetal.addEventListener('keypress', ShowKeyPress);
  txtGetal.addEventListener('focus', ShowFocus);
  txtGetal.addEventListener('blur', ShowBlur);
  divScrollable.addEventListener('scroll', ShowScroll);
  txtGetal.addEventListener('change', ShowChange);
}

const VulScrollable = () => {
  for (let index = 0; index < 50; index++) {
    divScrollable.innerText += index + '\n';
    
  }
}

const ShowKeyPress = (e) => {
  let ascii = e.keyCode;

  let feedback = `KeyPress: Ascii: ${ascii} - Teken: ${String.fromCharCode(ascii)} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowFocus = (e) => {
  let feedback = `Focus: focus op ${e.target.id} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowBlur = (e) => {
  let feedback = `Blur: focus weg van ${e.target.id} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowScroll = (e) => {
  teller++;
  let feedback = `Scroll op ${e.target.id}: <br/>Teller: ${teller}`;
  divFeedback.innerHTML = feedback;
}

const ShowChange = (e) => {
  let feedback = `MouseMove op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}






