var arr = [
   {name:'Muselk',
    capt:'Elliott Watkins',
    desc:'Helped Bing Soy see new ways to play TF2.',
    link:"https://www.youtube.com/watch?v=8uLf7V8-UmI",
    imag:'http://talkwithcelebs.com/wp-content/uploads/2018/01/Muselk.jpg',
    chid:'UCd534c_ehOvrLVL2v7Nl61w'},
  
    {name:'VAVLIE TF2',
    capt:'💥🔫',
    desc:'Provided pyro jump education.',
    link:"https://www.youtube.com/watch?v=hgSdBW9njK0",
    imag:'https://yt3.ggpht.com/ytc/AKedOLRVkPSX1xIZoAN1aCF76E2Cexf6hvIm1-VMgCep=s150',
    chid:'UCeQcliRzlVN4f6eRePQl8WQ'},
    
    {name:'SolarLight',
    capt:'demoknight tf2',
    desc:'Helped Bing Soy get into trimping and playing demoman in a more invested way (not sticky spam).',
    link:"https://www.youtube.com/watch?v=6kbF93KRN70",
    imag:'https://yt3.ggpht.com/ytc/AKedOLQ3oSl-9wvpLb1d62F3du9IcKsrgl9xLgjzHj0g2A=s150',
    chid:'UCTZ2ANUw7OHz2LGci_6H34A'},
      
    {name:'shounic',
    capt:'TF2 education',
    desc:'Informative videos about TF2 game mechanics.',
    link:"https://www.youtube.com/watch?v=kHKJ9Mf8UxU",
    imag:'https://yt3.ggpht.com/ytc/AKedOLRkFQKMXVvqJyyldWdXAqTl66kuEeGtDmp9vo_dDA=s150',
    chid:'UCHlTEt24Yb4ylJFuWz7hXIw'},
      
    {name:'Uncle Dane',
    capt:'Engineer Gaming',
    desc:'Good TF2 videos. Uncletopia.',
    link:"https://www.youtube.com/watch?v=WHvwijT2ss8",
    imag:'https://yt3.ggpht.com/ytc/AKedOLQozqxRhM8D9S0pIa02pFzTkY_IpdI2VfdxHnQsXQ=s150',
    chid:'UCu0PSyLD5p_J5osLk5UD0pw'},
  
];
var template = document.querySelector('#tmptri');
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