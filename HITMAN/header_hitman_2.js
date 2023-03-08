class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  
  <!--<a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  <a class="faq" href="LINK HERE">gtgeulgtnhdt</a>-->

  <a class="" href="https://youtu.be/0K2JYq58ZxM" target="_blank">
    <i>Always online discussion</i>&nbsp;<i class="fas fa-external-link-alt"></i>
  </a>

  <a class="" href="https://youtu.be/YDdxQNHwujQ" target="_blank">
    <i>Modders try to save HITMAN 🦚</i>&nbsp;<i class="fas fa-external-link-alt"></i>
  </a>

  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);