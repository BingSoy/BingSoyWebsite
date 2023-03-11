class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
.catcolArt {color: gold !important;}
.catcolGame {color: orangered !important;}
.catcolGamedev {color: orange !important;}
.catcolLife {color: lawngreen !important;}
.catcolInfo {color: skyblue !important;}
.catcolEtc {color: mediumpurple !important;}
</style>
 <div class="cnav2" id="myTopnav2">
  <a class="c-main" href="https://bingsoy.com">MAIN</a>|
  <a class="c-art catcolArt" href="https://bingsoy.com/art/">ART</a>
  <a class="c-music catcolArt" href="https://bingsoy.bandcamp.com/" target="_blank">MUSIC&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="c-anims catcolArt" href="https://www.youtube.com/BingSoyAnimations" target="_blank">ANIMATIONS&nbsp;<span class="fas fa-external-link-alt"></span></a>
  <a class="c-games catcolGamedev" href="https://bingsoy.com/games/">GAMES</a>
  |
  <a class="c-tf2 catcolGame" href="https://bingsoy.com/teamfortress/">TF2</a>
  <a class="c-hitman catcolGame" href="https://bingsoy.com/HITMAN/">HITMAN</a>
  |
  <a class="c-phi catcolInfo" href="https://bingsoy.com/philosophy/">Φ</a>
  |
  <a class="catcolEtc" href="https://bingsoy.com/threeconsecutivequestionmarks" target="_blank">???&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-ctgy', Div);