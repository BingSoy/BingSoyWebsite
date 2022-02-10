class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  <a class="thank-you" href="thank-you">Thank You</i></a>
  <a class="tribute" href="tribute">Tribute</i></a>
  <a class="" href="https://gamebanana.com/members/2048161" target="_blank">GameBanana</i>&nbsp;<i class="fas fa-external-link-alt"></i></a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);