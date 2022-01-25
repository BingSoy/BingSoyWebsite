class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav2" id="myTopnav2">
  <a class="index" href="index.html">HOME</a>|
  <a class="aaa" href="https://www.deviantart.com/bingsoy" target="_blank">ART</a>
  <a class="aaa" href="https://bingsoy.bandcamp.com/" target="_blank">MUSIC</a>
  <a class="aaa" href="https://www.youtube.com/BingSoyAnimations" target="_blank">ANIMATIONS</a>|
  <a class="aaa" href="https://www.minecraft.net" target="_blank">MINECRAFT</a>
  <a class="aaa" href="https://www.youtube.com/results?search_query=monster+hunter" target="_blank">MONSTER HUNTER</a>
  <a class="aaa" href="https://www.youtube.com/watch?v=WHvwijT2ss8" target="_blank">TF2</a>|
  <a class="aaa" href="https://www.youtube.com/watch?v=vqCOss4hqnE" target="_blank">???</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-ctgy', Div);