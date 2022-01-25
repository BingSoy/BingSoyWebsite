class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav2" id="myTopnav2">
  <a class="index" href="index.html">HOME</a>|
  <a class="aaa" href="index.html">ART</a>
  <a class="aaa" href="index.html">MUSIC</a>
  <a class="aaa" href="index.html">ANIMATIONS</a>|
  <a class="aaa" href="index.html">MINECRAFT</a>
  <a class="aaa" href="index.html">MONSTER HUNTER</a>
  <a class="aaa" href="index.html">TF2</a>|
  <a class="aaa" href="https://www.youtube.com/watch?v=vqCOss4hqnE" target="_blank">???</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-ctgy', Div);