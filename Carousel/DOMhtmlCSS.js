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

//<img src ="5.jpg" id="lastClone">
/*var imgDiv1a = document.createElement("a");
var imgDivA1a = document.createAttribute("href");
imgDivA1a.value = "";
imgDiv1a.setAttributeNode(imgDivA1a);
var imgDiv1 = document.createElement("img");
var imgDivA1 = document.createAttribute("src");
imgDivA1.value = "5.jpg";
imgDiv1.setAttributeNode(imgDivA1);
var imgDiv1Id = document.createAttribute("id");
imgDiv1Id.value = "lastClone";
imgDiv1.setAttributeNode(imgDiv1Id);
imgDiv1a.appendChild(imgDiv1);
slideDiv.appendChild(imgDiv1a);*/

//<img src ="1.jpg">
var imgDiv2a = document.createElement("a");
var imgDivA2a = document.createAttribute("href");
imgDivA2a.value = "";
imgDiv2a.setAttributeNode(imgDivA2a);
imgDiv2a.classList.add("linkC");
var imgDiv2 = document.createElement("img");
var imgDivA2 = document.createAttribute("src");
imgDivA2.value = "1.jpg";
imgDiv2.setAttributeNode(imgDivA2);
//style
imgDiv2.style.width="25%";
imgDiv2.style.border="1px solid black";

imgDiv2a.appendChild(imgDiv2);
slideDiv.appendChild(imgDiv2a);

//<img src ="2.jpg">
var imgDiv3a = document.createElement("a");
var imgDivA3a = document.createAttribute("href");
imgDivA3a.value = "";
imgDiv3a.classList.add("linkC");
var imgDiv3 = document.createElement("img");
var imgDivA3 = document.createAttribute("src");
imgDivA3.value = "2.jpg";
imgDiv3.setAttributeNode(imgDivA3);
//style
imgDiv3.style.width="25%";
imgDiv3.style.border="1px solid black";

imgDiv3a.appendChild(imgDiv3);
slideDiv.appendChild(imgDiv3a);

//<img src ="3.jpg">
var imgDiv4a = document.createElement("a");
var imgDivA4a = document.createAttribute("href");
imgDivA4a.value = "";
imgDiv4a.setAttributeNode(imgDivA4a);
imgDiv4a.classList.add("linkC");
var imgDiv4 = document.createElement("img");
var imgDivA4 = document.createAttribute("src");
imgDivA4.value = "3.jpg";
imgDiv4.setAttributeNode(imgDivA4);
//style
imgDiv4.style.width="25%";
imgDiv4.style.border="1px solid black";

imgDiv4a.appendChild(imgDiv4);
slideDiv.appendChild(imgDiv4a);

//<img src ="4.jpg">
var imgDiv5a = document.createElement("a");
var imgDivA5a = document.createAttribute("href");
imgDivA5a.value = "";
imgDiv5a.setAttributeNode(imgDivA5a);
imgDiv5a.classList.add("linkC");
var imgDiv5 = document.createElement("img");
var imgDivA5 = document.createAttribute("src");
imgDivA5.value = "4.jpg";
imgDiv5.setAttributeNode(imgDivA5);
//style
imgDiv5.style.width="25%";
imgDiv5.style.border="1px solid black";

imgDiv5a.appendChild(imgDiv5);
slideDiv.appendChild(imgDiv5a);

//<img src ="5.jpg">
var imgDiv6a = document.createElement("a");
var imgDivA6a = document.createAttribute("href");
imgDivA6a.value = "";
imgDiv6a.setAttributeNode(imgDivA6a);
imgDiv6a.classList.add("linkC");
var imgDiv6 = document.createElement("img");
var imgDivA6 = document.createAttribute("src");
imgDivA6.value = "5.jpg";
imgDiv6.setAttributeNode(imgDivA6);
//style
imgDiv6.style.width="25%";
imgDiv6.style.border="1px solid black";

imgDiv6a.appendChild(imgDiv6);
slideDiv.appendChild(imgDiv6a);

//<img src ="1.jpg" id="firstClone">
/*var imgDiv7a = document.createElement("a");
var imgDivA7a = document.createAttribute("href");
imgDivA7a.value = "";
imgDiv7a.setAttributeNode(imgDivA7a);
var imgDiv7 = document.createElement("img");
var imgDivA7 = document.createAttribute("src");
imgDivA7.value = "1.jpg";
imgDiv7.setAttributeNode(imgDivA7);
var imgDiv2Id = document.createAttribute("id");
imgDiv2Id.value = "firstClone";
imgDiv7.setAttributeNode(imgDiv2Id);
imgDiv7a.appendChild(imgDiv7);
slideDiv.appendChild(imgDiv7a);*/

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
slideDiv.style.height = "500px";

prevbtnDiv.style.cursor = "pointer";
prevbtnDiv.style.backgroundColor = "black";
prevbtnDiv.style.color = "white";
prevbtnDiv.style.padding = "10px 22px";

nextbtnDiv.style.cursor = "pointer";
nextbtnDiv.style.backgroundColor = "black";
nextbtnDiv.style.color = "white";
nextbtnDiv.style.padding = "10px 22px";
