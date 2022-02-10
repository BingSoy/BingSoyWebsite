var arr = [
   {name:'Hannibal (TV Series 2013-2015)',
    capt:'A Lovers&apos; Quarrel',
    desc:'Outstanding cinematography and performance. Hugh Dancy&apos;s performance as Will Graham helped Bing Soy&apos;s self-esteem on his own empathy. Empathy is a powerful thing and it is not a weakness/sickness. Mads Mikkelsen&apos;s performance helped Bing Soy to be more honest to himself despite what others think, and to appreciate the finer things in life, such as good food and music. Helped Bing Soy move towards his own becoming (as a human and an artist, of course).',
    link:"https://www.youtube.com/watch?v=Es3B24z8fdA",
    imag:'https://i.pinimg.com/originals/8c/f0/37/8cf0379101a68f058d1f4345d70b2693.jpg',
    chid:''},
  
    {name:'Les Misérables (2012)',
    capt:'The Miserable',
    desc:'A cathartic film. Misery of man imposed upon itself. People just trying to survive in the world. Standing up for something greater in the face of this misery. The world can be cruel and it is messed up. United, we can overcome or at least strive to resist the misery. Helped Bing Soy appreciate musicals more. Its short runtime (compared to the full live performance) serves as a good entry point into the world of Les Misérables, including the exemplary performances of Colm Wilkinson and Philip Quast.<br />Vive la France.',
    link:"https://www.youtube.com/watch?v=jQDh2JKKqLg&list=PLosw7wOJsxXz5_5L6Wv7rxg_aQ6s2l0O3&index=21",
    imag:'https://i.pinimg.com/originals/61/cd/8e/61cd8ee773f0fc430a9fc2f8cee99efb.jpg',
    chid:'I had a'},
  
    {name:'Minecraft (2009)',
    capt:'I had a dream last night. I built the universe. Minecraft.',
    desc:'Voxel-based sandbox game. An old classic. Created by Markus Alexej Persson a.k.a. "Notch".',
    link:"https://www.youtube.com/watch?v=QFIMnBQ1bH4",
    imag:'https://static.planetminecraft.com/files/resource_media/screenshot/1233/Minecraft-Steve_2298245_3301833.jpg',
    chid:''},
  
    {name:'House (TV Series 2004-2012)',
    capt:'Life is pain',
    desc:'Helped Bing Soy see that you can still help people, even when in pain or with a neurotic personality. It matters more to objectively help than to be perceived to be a help. Outstanding performance by Hugh Laurie.',
    link:"https://www.youtube.com/watch?v=gsNUS7PaAP0",
    imag:'https://static.wikia.nocookie.net/house/images/c/c5/House-season-8-10.jpg',
    chid:''},
  
    {name:'Good Will Hunting (1997)',
    capt:'It&apos;s not your fault',
    desc:'Great performances by Matt Damon and Robin Williams. A dynamic where the both challenge each other, opening their hearts and minds. Helped Bing Soy see that they way people act can be largely defined by your childhood, and he is no exception. A degree of forgiveness for how you are due to others may help bring you some peace.',
    link:"https://www.youtube.com/watch?v=ZQht2yOX9Js",
    imag:'https://resizing.flixster.com/AaRRaFwjoYpgLJ8Ldijz3Az_z9o=/150x150/v2/https://flxt.tmsimg.com/assets/p20224_k_h9_aa.jpg',
    chid:''},
  
    {name:'Pulp Fiction (1994)',
    capt:'Step aside, Butch',
    desc:'Amazing film, refreshing, bold cinematography. Directed by Quentin Tarantino.',
    link:"https://www.youtube.com/watch?v=J3UyjlaBMcY",
    imag:'https://img.hmv.co.jp/image/jacket/400/01/8/8/045.jpg',
    chid:''},
  
    {name:'Breaking Bad (TV Series 2008-2013)',
    capt:'I was alive',
    desc:'A story of a man who wanted to feel alive and have his life amount to something. He descends into the ravenous underworld. Consequences ensue. Impactful, heavy cinematography and performances. Created by Vince Gilligan.',
    link:"https://www.youtube.com/watch?v=Beu8eDYc0RM",
    imag:'https://t2.genius.com/unsafe/300x300/https:%2F%2Fimages.genius.com%2F2562509e21b27429361d7b0ee4400040.600x600x1.jpg',
    chid:''},
  
    {name:'Better Call Saul (TV Series 2015-2022)',
    capt:'The winner takes it all',
    desc:'Set in the Breaking Bad universe. Fleshes out the morally ambiguous character that is Saul Goodman, played by Bob Odenkirk. Cinematography and performances on par with Breaking Bad. Created by Vince Gilligan and Peter Gould.',
    link:"https://www.youtube.com/watch?v=qll7hCYFNjs",
    imag:'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/19/1494327191-better-call-saul-season-3.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=200:*',
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