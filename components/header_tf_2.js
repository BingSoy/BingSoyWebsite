class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  <a class="fixgame" href="fixgame">Fix Game</a>
  <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2868711419" target="blank">
    Strategy&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="thanks" href="thanks">Thanks</a>
  <a class="tribute" href="tribute">Tribute</a>
  <a class="timeline" href="timeline">Timeline</a>
  <a class="mods" href="mods">Mods</a>
  <a class="scoring" href="scoring">Scoring</a>
  <a class="faq" href="faq">FAQ</a>
  <a class="" href="https://gamebanana.com/members/2048161" target="_blank">
    <i>GameBanana</i>&nbsp;<i class="fas fa-external-link-alt"></i>
  </a>
  <a href="https://www.youtube.com/channel/UCXeVMuFXaP4juglhff4a3tQ" target="blank">
    Second Channel&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);