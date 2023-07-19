class Div extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="navbarDD cnavNEW" id="myTopnavNEW">
  <a href="https://bingsoy.com/" class="homelinkinnav">MAIN</a>
  
  <div class="dropdownDD menuMedia">
    <button class="dropbtnDD">MULTIMEDIA&nbsp;<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-contentDD">
      <a href="https://bingsoy.com/media/art">
        Art&nbsp;🎨</a>
      <a href="https://www.youtube.com/@BingSoyAnimations" target="_blank">
        Animations&nbsp;🏃‍&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
      <a href="https://bingsoy.com/media/edits" target="_blank">
        Edits&nbsp;✂️</a>
      <a href="https://bingsoy.com/media/games" class="catCol_games">
        Games&nbsp;👾</a>
      <a href="https://bingsoy.bandcamp.com/" target="_blank">
        Music&nbsp;🎼&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
    </div>
  </div>
  
  <div class="dropdownDD menuGaming">
    <button class="dropbtnDD">GAMING&nbsp;<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-contentDD">
            <a href="https://www.youtube.com/@BingSoyBindingOfIsaac">
              Binding of Isaac&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="https://bingsoy.com/gaming/hitman">
              HITMAN</a>
            <a href="https://www.youtube.com/@BingSoyMinecraft">
              Minecraft&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="https://www.youtube.com/@BingSoyMonsterHunter">
              Monster&nbsp;Hunter&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="https://www.youtube.com/@BingSoyRhythm">
              Rhythm&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="https://bingsoy.com/gaming/teamfortress">
              Team Fortress</a>
    </div>
  </div>
  
  <div class="dropdownDD menuLife">
    <button class="dropbtnDD">LIFESTYLE&nbsp;<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-contentDD ">
      <a href="https://www.youtube.com/@JoeDelaneyy" target="_blank">
                    [PLACEHOLDER]&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
      <a href="https://www.youtube.com/@JoeDelaneyy" target="_blank">
                    [PLACEHOLDER]&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
      <a href="https://www.youtube.com/@JoeDelaneyy" target="_blank">
                    [PLACEHOLDER]&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
     </div>
  </div>
  
    <div class="dropdownDD menuInfo">
    <button class="dropbtnDD">INFORMATION&nbsp;<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-contentDD">
      <a href="https://bingsoy.com/info/philosophy">
                  Philosophy</a>
      <a href="javascript:alert('♾️')">ℹ️</a>
      <a href="javascript:alert('♾️')">ℹ️</a>
           </div>
  </div>
  
    <div class="dropdownDD menuEtc">
    <button class="dropbtnDD">ETCETERA&nbsp;<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-contentDD">
            <a href="https://www.youtube.com/@2bing2soy" target="_blank">
              2bing2soy&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="https://www.youtube.com/@3bing3soy" target="_blank">
              3bing3soy&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="https://www.youtube.com/@BingSoyLoops" target="_blank">
              Loops&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
            <a href="javascript:alert('🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚')">🦚</a>
            <a class="catcolEtc" href="https://bingsoy.com/threeconsecutivequestionmarks" target="_blank">
              ???&nbsp;<sup><i class="fas fa-external-link-alt"></i></sup></a>
       </div>
  </div>
  
  <a href="javascript:void(0);" class="iconNEW" onclick="myFunctionNEW()"><i class="fa fa-bars"></i>
  </a>
</div>
    `;
  }
}

customElements.define('h-ctgy', Div);