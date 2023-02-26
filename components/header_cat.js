class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav2" id="myTopnav2">
  <a class="c-main" href="https://bingsoy.com">MAIN</a>|
  <a class="c-art" href="https://bingsoy.com/art/" target="_blank">ART&nbsp;</a>
  <a class="c-music" href="https://bingsoy.bandcamp.com/" target="_blank">MUSIC&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="c-anims" href="https://www.youtube.com/BingSoyAnimations" target="_blank">ANIMATIONS&nbsp;<span class="fas fa-external-link-alt"></span></a>
  <a class="c-games" href="https://bingsoy.com/games/">GAMES&nbsp;</a>
  |
  <a class="c-tf2" href="https://bingsoy.com/teamfortress/">TF2</a>
  |
  <a class="c-phi" href="https://bingsoy.com/philosophy/">Φ</a>
  |
  <a class="" href="https://bingsoy.com/threeconsecutivequestionmarks" target="_blank">???&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-ctgy', Div);