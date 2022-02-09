var arr = [
   {name:'Hannibal (TV Series)',
    capt:'A Lovers Quarrel',
    desc:'Outstanding cinematography and performance. Hugh Dancy&apos;s performance as Will Graham helped Bing Soy&apos;s self-esteem on his own empathy. Empathy is a powerful thing and it is not a weakness/sickness. Mads Mikkelsen&apos;s performance helped Bing Soy to be more honest to himself despite what others think, and to appreciate the finer things in life, such as good food and music. Helped Bing Soy move towards his own becoming (as an artist, of course).',
    link:"https://www.youtube.com/watch?v=Es3B24z8fdA",
    imag:'https://i.pinimg.com/originals/8c/f0/37/8cf0379101a68f058d1f4345d70b2693.jpg',
    chid:''},
  
    {name:'Les Misérables (2012)',
    capt:'The Miserable',
    desc:'A cathartic film. Misery of man imposed upon itself. People just trying to survive in the world. Standing up for something greater in the face of this misery. The world can be cruel and it is messed up. United, we can overcome or at least strive to resist the misery. Helped Bing Soy appreciate musicals more. Its short runtime (compared to the full live performance) serves as a good entry point into the world of Les Misérables, including the exemplary performanced of Colm Wilkinson and Philip Quast.<br />Vive la France.',
    link:"https://www.youtube.com/watch?v=jQDh2JKKqLg&list=PLosw7wOJsxXz5_5L6Wv7rxg_aQ6s2l0O3&index=21",
    imag:'https://i.pinimg.com/originals/61/cd/8e/61cd8ee773f0fc430a9fc2f8cee99efb.jpg',
    chid:''},
  
    {name:'Minecraft (2009)',
    capt:'Voxel-based Sandbox Game',
    desc:'An old classic. Created by Markus Alexej Persson a.k.a. "Notch".',
    link:"https://www.youtube.com/watch?v=QFIMnBQ1bH4",
    imag:'https://static.planetminecraft.com/files/resource_media/screenshot/1233/Minecraft-Steve_2298245_3301833.jpg',
    chid:''},
  
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