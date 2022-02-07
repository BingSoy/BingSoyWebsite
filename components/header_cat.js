class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav2" id="myTopnav2">
  <a class="cMain" href="https://bingsoy.com">MAIN</a>|
  <a class="aaa" href="https://www.deviantart.com/bingsoy" target="_blank">ART&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="aaa" href="https://bingsoy.bandcamp.com/" target="_blank">MUSIC&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="aaa" href="https://www.youtube.com/BingSoyAnimations" target="_blank">ANIMATIONS&nbsp;<i class="fas fa-external-link-alt"></i></a>|
  <a class="aaa" href="https://www.youtube.com/channel/UCblns1vYuSaVRA3wbGonk6w" target="_blank">MINECRAFT&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="aaa" href="https://www.youtube.com/channel/UCkh_YNZ6Aobz0kwUVVBFniQ" target="_blank">MONSTER HUNTER&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="aaa" href="https://bingsoy.com/tf2/">TF2</a>|
  <a class="aaa" href="https://www.youtube.com/watch?v=vqCOss4hqnE" target="_blank">???&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-ctgy', Div);