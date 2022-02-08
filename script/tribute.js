var arr = [
   {name:'Grant&nbsp;Thompson<sup>&nbsp;&dagger;</sup>',
    capt:'The King of Random',
    desc:'Made cool random videos with a great learning philosophy.',
    link:"https://www.youtube.com/watch?v=fKIvrZ-gA1w",
    imag:'https://starsinformer.com/wp-content/uploads/2019/08/Grant-Thompson-photo.jpg',
    chid:'UC1zZE_kJ8rQHgLTVfobLi_g'},
  
   {name:'Colin Charles "Eliott" Wyckoff<sup>&nbsp;&dagger;</sup>',
    capt:'kitty0706',
    desc:"Made funny and creative Garry's Mod animations.",
    link:"https://www.youtube.com/watch?v=dzMq5_thk4o",
    imag:'https://static.wikia.nocookie.net/youtube/images/6/67/Kitty0706.jpeg',
    chid:'UChcBFcAWmGjN4DJdnnhz2mA'},
  
  {name:'Linus Åkesson',
    capt:'lft',
    desc:"Technical and passionate about chip music.",
    link:"https://www.youtube.com/watch?v=h42neZVvoMY",
    imag:'https://yt3.ggpht.com/ytc/AKedOLQjp4nxZmg-I_i4B0He2i1GGVgs-r5PXfby83Bb=s88-c-k-c0x00ffffff-no-rj',
    chid:'UC8ge7La_vq48PVEmR-DJ5Wg'},
  
  {name:'Marshall Bruce Mathers III',
    capt:'Eminem',
    desc:"Great rapper.",
    link:"https://www.youtube.com/watch?v=7bDLIV96LD4",
    imag:'https://pbs.twimg.com/profile_images/929030268043845633/ilS1ri2v.jpg',
    chid:'UCfM3zsQsOnfWNUppiycmBuw'},
  
  {name:'Markus Alexej Persson',
    capt:'Notch',
    desc:"Created Minecraft, a sandbox game where you can build anything you want.",
    link:"https://www.youtube.com/watch?v=BES9EKK4Aw4", imag:'http://img1.wikia.nocookie.net/__cb20130108185700/mojang/images/9/9a/Bfdbdbfdsbfbdjbsfs.jpg',
    chid:'UCoUVpbIvlbroqBxeS4S26GQ'},
  
  {name:'Bernard Hsu',
    capt:'Chubbyemu',
    desc:"Makes engaging, entertaining and digestable medical videos.",
    link:"https://www.youtube.com/watch?v=LKNfFm0QDXQ", imag:'https://biographytribune.com/wp-content/uploads/2019/06/27892801_332988287195038_223293915199963136_n-300x300.jpg',
    chid:'UCKOvOaJv4GK-oDqx-sj7VVg'},
  
    {name:'Emezie Okorafor',
    capt:'Emezie',
    desc:"Musician, animator unique.",
    link:"https://www.youtube.com/watch?v=OSXpWrVmPxM",
    imag:'https://vignette.wikia.nocookie.net/pcfs/images/a/a8/Hqdefault.jpg',
    chid:'UCd_C3U1GGQ3ECPzn47NzvYw'},
  
    {name:'Tyler Niknam',
    capt:'Trainwreckstv',
    desc:"A man living his life. Strives for less double standards.",
    link:"https://www.youtube.com/watch?v=uungwbbGipY",
    imag:'https://cdn.allfamous.org/people/headshots/trainwreckstv-8qx2-allfamous.org-6.jpg',
    chid:'UCbYVxiNJmsbhvlUmy4_JbXA'},
  
    {name:'Dane Kevin Cook',
    capt:'Uncle Dane',
    desc:"Helping revolutionize TF2 with a vision of what casual should be. Runs Uncletopia.",
    link:"https://www.youtube.com/watch?v=WHvwijT2ss8",
    imag:'https://static.wikia.nocookie.net/youtube/images/7/7b/Uncle_dane_irl.jpg',
    chid:'UCu0PSyLD5p_J5osLk5UD0pw'},
    
    {name:'Leonard Simon Nimoy',
    capt:'Spock',
    desc:"Helped Bing Soy more so realize the power of logic through his performance of Spock. 🖖‍‍",
    link:"https://www.youtube.com/watch?v=2vNBA8mHFf8",
    imag:'http://www.coronacomingattractions.com/sites/default/files/news/leonard_nimoy_spock_on_shoulder.jpg',
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

//DIV
 var div = clone.querySelectorAll('div');
 div[0].setAttribute("data-channelid", trib.chid);
 div[0].setAttribute("data-layout", "full");
 div[0].setAttribute("data-theme", "dark");
 div[0].setAttribute("data-count", "default");
  
//document.getElementsByTagName("data-channelid").removeAttribute("data-channelid");  
  
  
	template.parentNode.appendChild(clone);
}