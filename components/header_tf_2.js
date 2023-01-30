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
<a href="https://steamid.io/lookup/76561198057093383" target="_blank" title="look at that he finally put a more obvious link to his steam, still people might be unaware and go off the pfp only. open console > status, compare id or steam overlay and look at url 'bingsoy', good idea to verify before calling someone fake if even needed in first place. are you real? (also put on youtube steam link, now easier for people not call fake, but why need call fake anyway? maybe if scammer but why? important life lesson, at very least make sure you yourself i know you real)">
    REAL BING SOY ON STEAM&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a class="fixgame" href="fixgame">Fix Game</a>
  <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2868711419" target="_blank">
    Strategy&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a class="thanks" href="thanks">Thanks</a>
  <a class="tribute" href="tribute">Tribute</a>
  <a class="timeline" href="timeline">Timeline</a>
  <a class="scoring" href="scoring">Scoring</a>
  <a class="faq" href="faq">FAQ</a>
  <a class="" href="https://gamebanana.com/members/2048161" target="_blank">
    <i>GameBanana</i>&nbsp;<i class="fas fa-external-link-alt"></i>
  </a>
<a href="https://bingsoyteamfortress.blogspot.com/" target="_blank">
    Blog&nbsp;
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