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

//FUNCTIONS FOR SWITCHING BETWEEN RESUME PIECES

function profileFunction(){
	if (document.getElementById("Profile").style.display === "block"){
		document.getElementById("Profile").style.display = "none";
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Education").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
	else{
		document.getElementById("Profile").style.display ="block";
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Education").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
}

function skillsFunction(){
	if (document.getElementById("Skills").style.display === "block"){
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Profile").style.display = "none";
		document.getElementById("Education").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
	else{
		document.getElementById("Skills").style.display ="block";
		document.getElementById("Profile").style.display = "none";
		document.getElementById("Education").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
}

function educationFunction(){
	if (document.getElementById("Education").style.display === "block"){
		document.getElementById("Education").style.display = "none";
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Profile").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
	else{
		document.getElementById("Education").style.display ="block";
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Profile").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
}

function workFunction(){
	if (document.getElementById("Work").style.display === "block"){
		document.getElementById("Profile").style.display = "none";
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Education").style.display = "none";
		document.getElementById("Work").style.display = "none";
	}
	else{
		document.getElementById("Work").style.display ="block";
		document.getElementById("Skills").style.display = "none";
		document.getElementById("Education").style.display = "none";
		document.getElementById("Profile").style.display = "none";
	}
}

//FUNCTIONS FOR SWITCHING BETWEEN RESUME PIECES (FINISHED)

//UNHIDE AND HIDE GALLERY IMAGES

//CAT-ASTROPHE GALLERY

	//TURN ON PHOTO GALLERY
		function photoCat(){
			if (document.getElementById("photoCatGallery").style.display === "block"){
				document.getElementById("videoCatGallery").style.display = "none";
				document.getElementById("photoCatGallery").style.display = "none";
			}
			else{
				document.getElementById("photoCatGallery").style.display = "block";
				document.getElementById("videoCatGallery").style.display = "none";
			}
		}

	//TURN ON VIDEO GALLERY
		function videoCat(){
				if (document.getElementById("videoCatGallery").style.display === "block"){
					document.getElementById("photoCatGallery").style.display = "none";
					document.getElementById("videoCatGallery").style.display = "none";
				}
				else{
					document.getElementById("photoCatGallery").style.display = "none";
					document.getElementById("videoCatGallery").style.display = "block";
				}
			}
	//CAT PIC 1 GALLERY
		function showCat1(){
			document.getElementById("cat1pic").style.display = "block";
			document.getElementById("cat2pic").style.display = "none";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
		}

	//CAT PIC 2 GALLERY
		function showCat2(){
			document.getElementById("cat2pic").style.display = "block";
			document.getElementById("cat1pic").style.display = "none";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
		}

	//CAT PIC 3 GALLERY
		function showCat3(){
			document.getElementById("cat3pic").style.display = "block";
			document.getElementById("cat2pic").style.display = "none";
			document.getElementById("cat1pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
		}

	//CAT PIC 4 GALLERY
		function showCat4(){
			document.getElementById("cat4pic").style.display = "block";
			document.getElementById("cat2pic").style.display = "none";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat1pic").style.display = "none";
		}

