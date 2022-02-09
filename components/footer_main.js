class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  <a class="tribute-a" href="tributea">Tribute A</i></a>
  <a class="tribute-b" href="tributeb">Tribute B</i></a>
  <a class="tribute-c" href="tributec">Tribute C</i></a>
  <a class="credits" href="credits">Credits</i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()"></a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);