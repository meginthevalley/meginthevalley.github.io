//FUNCTIONS FOR CHANGING PICTURES
function changePicture(){
	document.getElementById("floatLeftPic").src = "Megan3.jpg";
	//This function is used to change the picture on the EDUCATION page when moused over on 
}

function changeBack(){
	document.getElementById("floatLeftPic").src = "Megan2.jpg";
	//This function is used to change back the picture on the EDUCATION when the mouse is no longer on it
}

function changeAboutPicture(){
	document.getElementById("floatRightPic").src = "Megan.jpg";
	//This function is used to change the picture on the ABOUT page when moused over on 
}

function changeAboutBack(){
	document.getElementById("floatRightPic").src = "Megan4.jpg";
	//This function is used to change back the picture on the ABOUT when the mouse is no longer on it
}

//FUNCTIONS FOR CHANGING PICTURES (FINISHED)

//FUNCTIONS FOR SWITCHING BETWEEN PORTFOLIO PIECES

function unityFunction(){
	if (document.getElementById("Unity").style.display === "block"){
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
	else{
		document.getElementById("Unity").style.display ="block";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
}

function unrealFunction(){
	if (document.getElementById("Unreal").style.display === "block"){
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
	else{
		document.getElementById("Unreal").style.display ="block";
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
}

function websitesFunction(){
	if (document.getElementById("Websites").style.display === "block"){
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
	else{
		document.getElementById("Websites").style.display ="block";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
}

function artFunction(){
	if (document.getElementById("Art").style.display === "block"){
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
	else{
		document.getElementById("Art").style.display ="block";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
}

function miscFunction(){
	if (document.getElementById("Misc").style.display === "block"){
		document.getElementById("Unity").style.display = "none";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Misc").style.display = "none";
	}
	else{
		document.getElementById("Misc").style.display ="block";
		document.getElementById("Unreal").style.display = "none";
		document.getElementById("Websites").style.display = "none";
		document.getElementById("Art").style.display = "none";
		document.getElementById("Unity").style.display = "none";
	}
}

//FUNCTIONS FOR SWITCHING BETWEEN PORTFOLIO PIECES (FINISHED)
