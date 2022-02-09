class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  <a class="tributea" href="tributea">Tribute A</i></a>
  <a class="tributeb" href="tributeb">Tribute B</i></a>
  <a class="tributec" href="tributec">Tribute C</i></a>
  <a class="credits" href="credits">Credits</i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()"></a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);