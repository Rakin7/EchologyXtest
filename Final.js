var a=document.getElementById("shopify-section-footer-promotions");
var b=window.theme.recentlyViewed.recent;

var rv=document.createElement("div");
var rva=document.createAttribute("class");
rva.value="RV";
rv.setAttributeNode(rva);

var hr=document.createElement("hr");
rv.appendChild(hr);
hr.style.width = "80%";

var para=document.createElement("h3");
var parat=document.createTextNode("RECENTLY VIEWED");
para.appendChild(parat);
rv.appendChild(para);
rv.style.textAlign="center";
rv.style.paddingBottom = "15px";

a.appendChild(rv);

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
	a.style.fontSize = "small";
	a.style.textAlign="center";
	
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
		imgDiv2.style.width= "100%";
		imgDiv.style.flex = "0 0 25%";
		imgDiv.style.paddingRight = "10px";

		imgDiv2a.appendChild(imgDiv2);
		imgDiv.appendChild(imgDiv2a);
		slideDiv.appendChild(imgDiv);
	}

	containerDiv.appendChild(slideDiv);

	//<div class= "btn">
	var btn=document.createElement("div");
	var btna=document.createAttribute("class");
	btna.value="btn";
	btn.setAttributeNode(btna);

	//<BUTTON id = "prevbtn"><i class="arrow left"></BUTTON>
	var prevbtnDiv = document.createElement("BUTTON");
	var prevbtnDivA = document.createAttribute("id");
	prevbtnDivA.value = "prevbtn";
	prevbtnDiv.setAttributeNode(prevbtnDivA);
	
	var iconl=document.createElement("i");
	var iconla=document.createAttribute("class");
	iconla.value="arrow left";
	iconl.setAttributeNode(iconla);
	prevbtnDiv.appendChild(iconl);

	//<BUTTON id="nextbtn"><i class="arrow right"></BUTTON>
	var nextbtnDiv = document.createElement("BUTTON");
	var nextbtnDivA = document.createAttribute("id");
	nextbtnDivA.value = "nextbtn";
	nextbtnDiv.setAttributeNode(nextbtnDivA);

	var iconr=document.createElement("i");
	var iconra=document.createAttribute("class");
	iconra.value="arrow right";
	iconr.setAttributeNode(iconra);
	nextbtnDiv.appendChild(iconr);

	btn.appendChild(prevbtnDiv);
	btn.appendChild(nextbtnDiv);

	//styling 
	containerDiv.style.width = "80%";
	containerDiv.style.margin = "0 auto";
	containerDiv.style.overflow = "hidden";

	slideDiv.style.display = "flex"; 

	prevbtnDiv.style.cursor = "pointer";
	prevbtnDiv.style.borderRadius = "50%";
	nextbtnDiv.style.cursor = "pointer";
	nextbtnDiv.style.borderRadius = "50%";

	iconl.style.border = "solid black";
	iconl.style.borderWidth= "0 3px 3px 0";
	iconl.style.display= "inline-block";
	iconl.style.padding= "3px";
	iconl.style.transform= "rotate(135deg)";
    iconl.style.webkitTransform= "rotate(135deg)";

	iconr.style.border = "solid black";
	iconr.style.borderWidth= "0 3px 3px 0";
	iconr.style.display= "inline-block";
	iconr.style.padding= "3px";
	iconr.style.transform= "rotate(-45deg)";
    iconr.style.webkitTransform= "rotate(-45deg)";

    btn.style.position="absolute";
    btn.style.top = "3%";
    btn.style.right = "8%";
    btn.style.backgroundColor="white";

	a.appendChild(containerDiv);
	a.appendChild(btn);
	a.style.position="relative";


	//JS code for slider
	const carouselSlide = document.querySelector(".carousel-slide");
	const carouselImages = document.querySelectorAll(".carousel-slide img");

	//buttons
	const prevBtn = document.querySelector("#prevbtn");
	const nextBtn = document.querySelector("#nextbtn");

	//counter
	let counter = 0;
	const size = carouselImages[0].clientWidth;

	//Button listener
	nextBtn.addEventListener("click",()=>{
		if (counter >= carouselImages.length -4) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter++;
        carouselSlide.style.transform = "translateX(" + ((-size * counter) - (counter * 10)) + "px)";
	});
	prevBtn.addEventListener("click",()=>{
		if (counter <= 0) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter--;
		carouselSlide.style.transform = "translateX(" + ((-size * counter) - (counter * 10)) + "px)";
	});
}