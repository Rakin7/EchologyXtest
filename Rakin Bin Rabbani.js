var a=document.getElementById("shopify-section-footer-promotions");
var b=window.theme.recentlyViewed.recent;

if(Object.keys(b).length>0 || Object.keys(b).length<=3)
{
	for(var check=(Object.keys(b).length)-1;check>=0;check--)
	{
		var c1=Object.keys(b)[check];
		b[c1].featuredImage;
		var str1=b[c1].featuredImage
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
else{
	for(var check=(Object.keys(b).length)-1;check>=0;check--)
	{
		var c1=Object.keys(b)[check];
		b[c1].featuredImage;

		var str1=b[c1].featuredImage
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
	for(var guess=0;guess<Object.keys(b).length;guess++)
	{

		document.getElementsByClassName("colm")[guess].style.float="left";
		document.getElementsByClassName("colm")[guess].style.width="25%";
		document.getElementsByClassName("colm")[guess].style.padding="5px";
	}
}

a.style.fontSize = "small";
a.style.textAlign="center";
