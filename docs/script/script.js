
var barBox=document.querySelector(".topBarLeftMenu");
var barmenu=document.querySelector(".topBarLeftItems");
var midLine=barBox.querySelectorAll("div")[1];
midLine.style.marginLeft="-5px";
barmenu.style.left="-350px";
// console.log(midLine.style.marginLeft);
barBox.addEventListener("click", function(){

	if(midLine.style.marginLeft==="5px")
	{
		midLine.style.marginLeft="-5px";
		barmenu.style.left="-350px";
	}

	else if(midLine.style.marginLeft==="-5px")
	{
		midLine.style.marginLeft="5px";
		barmenu.style.left="";
	}

});