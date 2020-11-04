var a=document.getElementById("shopify-section-footer-promotions");
var b=window.theme.recentlyViewed.recent;

if(Object.keys(b).length>0 && Object.keys(b).length<=3)
{
	for(var check=(Object.keys(b).length)-1;check>=0;check--)
	{
		var c1=Object.keys(b)[check];
		var str1=b[c1].featuredImage;
		var res1=str1.replace("{width}", "360");

		var d1=document.createElement("div");
		var e1=document.createAttribute("class");
		e1.value="colm";
		d1.setAttributeNode(e1);

		var lin=document.createElement("a");
		var attru=document.createAttribute("href");
		attru.value=b[c1].url;
		lin.setAttributeNode(attru);
		

		var f1=document.createElement("img");
		var g1=document.createAttribute("src");
		g1.value=res1;
		f1.setAttributeNode(g1);
		lin.appendChild(f1);
		d1.appendChild(lin);

		var h1=document.createElement("p");
		var i1=document.createTextNode(c1);
		h1.appendChild(i1);
		d1.appendChild(h1);
		a.appendChild(d1);

	}
	for(var guess=0;guess<3;guess++)
	{

		document.getElementsByClassName("colm")[guess].style.float="left";
		document.getElementsByClassName("colm")[guess].style.width="33.33%";
		document.getElementsByClassName("colm")[guess].style.padding="5px";
	}
	
}
else
{
	//<div class="carousel-container">
	var containerDiv = document.createElement("div");
	var containerDivA = document.createAttribute("class");
	containerDivA.value = "carousel-container";
	containerDiv.setAttributeNode(containerDivA);

	//<div class="carousel-slide">
	var slideDiv = document.createElement("div");
	var slideDivA = document.createAttribute("class");
	slideDivA.value = "carousel-slide";
	slideDiv.setAttributeNode(slideDivA);

	for(var check=(Object.keys(b).length)-1;check>=0;check--)
	{
		var c1=Object.keys(b)[check];
		b[c1].featuredImage;
		var str1=b[c1].featuredImage;
		var res1=str1.replace("{width}", "360");

		var imgDiv=document.createElement("div");
		var imgDiva=document.createAttribute("class");
		imgDiva.value="colm";
		imgDiv.setAttributeNode(imgDiva);

		
		var imgDiv2a = document.createElement("a");
		imgDiv2a.classList.add("linkC");
		var imgDivA2a = document.createAttribute("href");
		imgDivA2a.value = b[c1].url;
		imgDiv2a.setAttributeNode(imgDivA2a);
		

		//<img src ="1.jpg">
		var imgDiv2 = document.createElement("img");
		var imgDivA2 = document.createAttribute("src");
        imgDivA2.value = res1;
		imgDiv2.setAttributeNode(imgDivA2);

		//style
		imgDiv.style.width= "25%"
		imgDiv.style.border="1px solid white";

		imgDiv2a.appendChild(imgDiv2);
		imgDiv.appendChild(imgDiv2a);
		slideDiv.appendChild(imgDiv);
	}

	containerDiv.appendChild(slideDiv);

	//<BUTTON id = "prevbtn">PREV</BUTTON>
	var prevbtnDiv = document.createElement("BUTTON");
	var prevbtnDivA = document.createAttribute("id");
	prevbtnDivA.value = "prevbtn";
	prevbtnDiv.setAttributeNode(prevbtnDivA);
	prevbtnDiv.innerHTML="PREV";

	//<BUTTON id="nextbtn">NEXT</BUTTON>
	var nextbtnDiv = document.createElement("BUTTON");
	var nextbtnDivA = document.createAttribute("id");
	nextbtnDivA.value = "nextbtn";
	nextbtnDiv.setAttributeNode(nextbtnDivA);
	nextbtnDiv.innerHTML="NEXT";

	//styling
	containerDiv.style.width = "60%"; 
	containerDiv.style.margin = "auto";
	containerDiv.style.border = "5px solid black";
	containerDiv.style.overflow = "hidden";

	slideDiv.style.display = "flex";
	slideDiv.style.width = "100%"; 
	slideDiv.style.height = "100%"; 

	prevbtnDiv.style.cursor = "pointer";
	prevbtnDiv.style.backgroundColor = "black";
	prevbtnDiv.style.color = "white";
	prevbtnDiv.style.padding = "10px 22px";

	nextbtnDiv.style.cursor = "pointer";
	nextbtnDiv.style.backgroundColor = "black";
	nextbtnDiv.style.color = "white";
	nextbtnDiv.style.padding = "10px 22px";

	a.appendChild(containerDiv);
	a.appendChild(prevbtnDiv);
	a.appendChild(nextbtnDiv);

	//JS code for slider
	const carouselSlide = document.querySelector(".carousel-slide");
	const carouselImages = document.querySelectorAll(".carousel-slide img");

	//buttons
	const prevBtn = document.querySelector("#prevbtn");
	const nextBtn = document.querySelector("#nextbtn");

	//counter
	let counter = 1;
	//const size=carouselImages[0].clientWidth;
	//const size=carouselImages[0].getElementsByTagName("img")[0].clientWidth;
	//const size=97;


	//carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

	//Button listener
	nextBtn.addEventListener("click",()=>{
		if (counter >= carouselImages.length -1) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter++;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	});
	prevBtn.addEventListener("click",()=>{
		if (counter <= 0) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter--;
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	});
}
    a.style.fontSize = "small";
	a.style.textAlign="center";