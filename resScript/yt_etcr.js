var arr = [
   {name:'2bing2soy',
    capt:'Whatever',
    desc:'Uploads whatever.',
    link:"https://www.youtube.com/watch?v=EbzxD_31kP0",
    imag:'https://yt3.ggpht.com/ytc/AKedOLSuwfEqwBw1Ugj7MS1yBKodtd7O96BJysKtCfgU=s150',
    chid:'UCFkMdSw-Dhxw0_6tCGL5xcQ'},
  
     {name:'3bing3soy',
    capt:'Whatever, whatever',
    desc:'Uploads whatever, whatever.',
    link:"https://www.youtube.com/watch?v=1IV--XKsQsY",
    imag:'https://yt3.ggpht.com/ytc/AKedOLSWJexuSuoINUDKJuth4ZqN05aDBRY_YoNLXuDg=s150',
    chid:'UCGLRSQvTm-v_j8VSN29zJXQ'},
  
];
var template = document.querySelector('#tmptri3');
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