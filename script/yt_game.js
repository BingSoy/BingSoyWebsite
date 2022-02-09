var arr = [
   {name:'Bing Soy Team Fortress',
    capt:'Free Team Fortress 2',
    desc:'TF2 videos.',
    link:"https://www.youtube.com/watch?v=JYrsXEwRk9k",
    imag:'https://yt3.ggpht.com/wKxbviK8PTsUYqAUIaUZhuoBbIibmmB06QUL9IAQr4TA_OWa8X2KWgrfgD93VThj4wLUozjDENc=s150',
    chid:'UCj5vCC_PuSuM8TqQKT9jGTQ'},
  
   {name:'Bing Soy Monster Hunter<sup>&nbsp;👶</sup>',
    capt:'Hunting virtual animals',
    desc:'Probably MH:FU and MH:W.',
    link:"https://www.youtube.com/watch?v=Q5HkWdJnX04",
    imag:'https://yt3.ggpht.com/ytc/AKedOLTmGCxwO4YunIB5-54VJkV3uRkwy-IGa8hsu3ul',
    chid:'UCkh_YNZ6Aobz0kwUVVBFniQ'},
    
    {name:'Bing Soy Guild Wars<sup>&nbsp;👶</sup>',
    capt:'Open world questing',
    desc:'Probably random quests.',
    link:"https://www.youtube.com/watch?v=jYFpttzovaI",
    imag:'https://yt3.ggpht.com/x-_UX6NmZLgjJwXoW7D_PLSaMhxvIZK6Dd0J5hgPTIlpQi6TnuoaK_8LL6POY2OcFIWtNg68jak',
    chid:'UCGnY3uuNFCGUdHwyvp4g2nQ'},
  
    {name:'Bing Soy TBoI<sup>&nbsp;👶</sup>',
    capt:'The Binding of Isaac',
    desc:'Probably random runs.',
    link:"https://www.youtube.com/watch?v=y5N4Fe9nyyk",
    imag:'https://yt3.ggpht.com/biV9j18v5sl8fQgimCME7B7eRpgEM3jrxvOFmWyrc5KLHQgBYU6KOTbC83bx77MMXf2TcloiTw',
    chid:'UCLvsF3lddHWyp9pyPpiojtw'},
  
];
var template = document.querySelector('#tmptri2');
for (var i = 0; i < arr.length; i++) {
	var trib = arr[i];
	var clone = template.content.cloneNode(true);
  
 var a = clone.querySelectorAll("a"); 
 a[0].className = "link";
 a[0].href = trib.link;
  
 var img = clone.querySelectorAll("img"); 
 img[0].className = "imag";
 img[0].src = trib.imag;

	var h4 = clone.querySelectorAll('h4');
	h4[0].className = "name";
	h4[0].innerHTML = trib.name;
  
 var h5 = clone.querySelectorAll('h5');
	h5[0].className = "capt";
	h5[0].innerHTML = trib.capt;
  
	var p = clone.querySelectorAll('p');
	p[0].className = "desc";
 p[0].innerHTML = trib.desc;

 var div = clone.querySelectorAll('div');
  
//IF CHID NOT EMPTY THEN DISPLAY SUB:
if (trib.chid !== "") {
  div[0].setAttribute("class", "g-ytsubscribe");}
  //console.log(trib.chid);
 div[0].setAttribute("data-channelid", trib.chid);
 div[0].setAttribute("data-layout", "full");
 div[0].setAttribute("data-theme", "dark");
 div[0].setAttribute("data-count", "default");
  
	template.parentNode.appendChild(clone);
}