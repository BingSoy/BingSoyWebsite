class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav2" id="myTopnav4">
  <a class="aaa" href="tributea">Tribute A</i></a>
  <a class="aaa" href="tributeb">Tribute B</i></a>
  <a class="aaa" href="credits">Credits</i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()"></a>
 </div>
    `;
  }
}

customElements.define('f-main', Div2);