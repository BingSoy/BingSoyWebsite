class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav2" id="myTopnav2">
  <a class="c-main" href="https://bingsoy.com">MAIN</a>|
  <a class="" href="https://www.deviantart.com/bingsoy" target="_blank">ART&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="" href="https://bingsoy.bandcamp.com/" target="_blank">MUSIC&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="" href="https://www.youtube.com/BingSoyAnimations" target="_blank">ANIMATIONS&nbsp;<i class="fas fa-external-link-alt"></i></a>|
  <a class="c-tf2" href="https://bingsoy.com/teamfortress/">TF2</a>|
  <a class="" href="https://bingsoy.com/threeconsecutivequestionmarks" target="_blank">???&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-ctgy', Div);