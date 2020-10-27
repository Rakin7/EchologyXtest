//putting fontAwesome link in head
/*
var fontlinkE=document.createElement("link");
var fontlinkA1=document.createAttribute("rel");
fontlinkA1.value= "stylesheet";
var fontlinkA2=document.createAttribute("href");
fontlinkA2.value= "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
fontlinkE.setAttributeNode(fontlinkA1);
fontlinkE.setAttributeNode(fontlinkA2);
document.head.appendChild(fontlinkE);
*/

//creating body
var containerDiv=document.createElement("div");
var containerDivA=document.createAttribute("class");
containerDivA.value = "container";
containerDiv.setAttributeNode(containerDivA);

var leftDiv=document.createElement("div");
var leftDivA=document.createAttribute("class");
leftDivA.value = "left-btn";
leftDiv.setAttributeNode(leftDivA);

var iDiv=document.createElement("BUTTON");//changing icon into button
var iDivA=document.createAttribute("class");
iDivA.value = "fa fa-arrow-left fa-3x";
iDiv.setAttributeNode(iDivA);
iDiv.innerHTML="LEFT";
iDiv.style.cursor = "pointer";

leftDiv.appendChild(iDiv);
leftDiv.style.position = "absolute";
leftDiv.style.top = "100px";
leftDiv.style.left = "50px";

var carouselDiv=document.createElement("div");
var carouselDivA=document.createAttribute("class");
carouselDivA.value = "item-carousel";
carouselDiv.setAttributeNode(carouselDivA);
//.item-carousel
carouselDiv.style.position = "relative";
carouselDiv.style.right = "0";
carouselDiv.style.fontSize = "0";
carouselDiv.style.width = "200%"; /* holds twice as many items */
/*   transition: right 300ms ease-in; */
carouselDiv.style.transform = "translateX(-200px)";
//.item
carouselDiv.style.boxSizing = "border-box";
carouselDiv.style.display = "inline-block";
carouselDiv.style.height = "200px";
carouselDiv.style.width = "200px";
carouselDiv.style.backgroundColor = "steelblue";
carouselDiv.style.border = "5px solid white";
carouselDiv.style.fontSize = "36px";
carouselDiv.style.textAlign = "center";
carouselDiv.style.verticalAlign = "middle";
carouselDiv.style.lineHeight = "164px";
carouselDiv.style.userSelect = "none";

var rightDiv=document.createElement("div");
var rightDivA=document.createAttribute("class");
rightDivA.value = "right-btn";
rightDiv.setAttributeNode(rightDivA);


var riDiv=document.createElement("BUTTON");//changing icon into button
var riDivA=document.createAttribute("class");
riDivA.value = "fa fa-arrow-right fa-3x";
riDiv.setAttributeNode(riDivA);
riDiv.innerHTML="RIGHT";
riDiv.style.cursor = "pointer";

rightDiv.appendChild(riDiv);
rightDiv.style.position = "absolute";
rightDiv.style.top = "100px";
rightDiv.style.right = "50px";

containerDiv.appendChild(leftDiv);
containerDiv.appendChild(carouselDiv);
containerDiv.appendChild(rightDiv);
containerDiv.style.height = "200px";
containerDiv.style.width = "800px"; /* meant to hold 4 items */
containerDiv.style.margin = "20px auto";
containerDiv.style.overflow = "hidden";

a.appendChild(containerDiv);