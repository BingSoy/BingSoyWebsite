var arr = [
   {name:'Bing Soy Animations',
    capt:'Update video universe',
    desc:'Makes animated update videos. Could change in future.',
    link:"https://www.youtube.com/watch?v=XyjLdhZIy28",
    imag:'https://yt3.ggpht.com/ytc/AKedOLTwJxRPxgjfLfleGhZRzqp1Qj8-vS3eVQeis_iZ=s150',
    chid:'UCA9vSnD32g8fjswEs86uVIA'},
  
   {name:'Bing Soy Art',
    capt:'Drawing images',
    desc:'Yet to dedicate time to learn intricate anatomy.<br /><a href="https://drawception.com/player/492654/bing-soy/" target="_blank">Sometimes on Drawception, though, it is currently under maintenence.</a>',
    link:"https://www.deviantart.com/bingsoy",
    imag:'https://cdn.drawception.com/images/avatars/492654-E27.png',
    chid:'UChohCastO1W7lrSNHC6BEXQ'},
    
   {name:'Bing Soy Edits',
    capt:'Bending video reality',
    desc:'Yet to create more videos to learn editing to showcase more edit-driven videos.',
    link:"https://www.youtube.com/watch?v=KVHvihOxvCY",
    imag:'https://yt3.ggpht.com/ytc/AKedOLT6DQSdS2M7BUXh_0hKAm5gq5TAKwWbq0U9x-u_YQ=s150',
    chid:'UCI6eY-0Hl6whibQcN8pa7vA'},
    
   {name:'Bing Soy Music',
    capt:'Composiing music',
    desc:'Yet to dedicate more time towards composition.',
    link:"https://bingsoy.bandcamp.com/",
    imag:'https://yt3.ggpht.com/ytc/AKedOLRYjYUNSfU1w8tBhx-y-rngTAfvnmL6y256jjBnMw=s150',
    chid:'UCqCsNsJt43brrp28JQiEoiA'},
  
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