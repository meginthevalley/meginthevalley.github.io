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

//BUTTONS TO SHOW EACH PORTFOLIO SHOWPIECE

function Catastrophe(){
	if (document.getElementById("showCatSection").style.display === "block"){
		document.getElementById("showWineSection").style.display = "none";
		document.getElementById("showCatSection").style.display = "none";
		document.getElementById("showWolfSection").style.display = "none";
	}
	else{
		document.getElementById("showCatSection").style.display = "block";
		document.getElementById("showWineSection").style.display = "none";
		document.getElementById("showWolfSection").style.display = "none";
	}
}

function WineTime(){
	if (document.getElementById("showWineSection").style.display === "block"){
		document.getElementById("showWineSection").style.display = "none";
		document.getElementById("showCatSection").style.display = "none";
		document.getElementById("showWolfSection").style.display = "none";
	}
	else{
		document.getElementById("showWineSection").style.display = "block";
		document.getElementById("showCatSection").style.display = "none";
		document.getElementById("showWolfSection").style.display = "none";
	}
}
function Wolfjam(){
	if (document.getElementById("showWolfSection").style.display === "block"){
		document.getElementById("showWineSection").style.display = "none";
		document.getElementById("showCatSection").style.display = "none";
		document.getElementById("showWolfSection").style.display = "none";
	}
	else{
		document.getElementById("showWolfSection").style.display = "block";
		document.getElementById("showCatSection").style.display = "none";
		document.getElementById("showWineSection").style.display = "none";
	}
}


//BUTTONS TO SHOW EACH PORTFOLIO SHOWPIECE (FINISHED)

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

	//NEXT CAT PHOTO

		function nextPhotoCat(){
			if(document.getElementById("cat4pic").style.display === "block"){
			document.getElementById("cat1pic").style.display = "block";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
			document.getElementById("cat2pic").style.display = "none";
			}
			else if(document.getElementById("cat3pic").style.display === "block"){
				document.getElementById("cat4pic").style.display = "block";
				document.getElementById("cat1pic").style.display = "none";
				document.getElementById("cat3pic").style.display = "none";
				document.getElementById("cat2pic").style.display = "none";
			}
			else if(document.getElementById("cat2pic").style.display === "block"){
				document.getElementById("cat3pic").style.display = "block";
				document.getElementById("cat1pic").style.display = "none";
				document.getElementById("cat4pic").style.display = "none";
				document.getElementById("cat2pic").style.display = "none";
			}
			else{
				document.getElementById("cat2pic").style.display = "block";
				document.getElementById("cat3pic").style.display = "none";
				document.getElementById("cat4pic").style.display = "none";
				document.getElementById("cat1pic").style.display = "none";
			}
		}

	//PREVIOUS CAT PHOTO

	function previousPhotoCat(){
		if(document.getElementById("cat1pic").style.display === "block"){
			document.getElementById("cat4pic").style.display = "block";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat2pic").style.display = "none";
			document.getElementById("cat1pic").style.display = "none";
		}
		else if(document.getElementById("cat2pic").style.display === "block"){
			document.getElementById("cat1pic").style.display = "block";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
			document.getElementById("cat2pic").style.display = "none";
		}
		else if(document.getElementById("cat3pic").style.display === "block"){
			document.getElementById("cat2pic").style.display = "block";
			document.getElementById("cat1pic").style.display = "none";
			document.getElementById("cat3pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
		}
		else{
			document.getElementById("cat3pic").style.display = "block";
			document.getElementById("cat1pic").style.display = "none";
			document.getElementById("cat2pic").style.display = "none";
			document.getElementById("cat4pic").style.display = "none";
		}
	}

	//NEXT CAT VIDEO

	function nextVideoCat(){
		if(document.getElementById("cat3vid").style.display === "block"){
			document.getElementById("cat1vid").style.display = "block";
			document.getElementById("cat3vid").style.display = "none";
			document.getElementById("cat2vid").style.display = "none";
		}
		else if(document.getElementById("cat2vid").style.display === "block"){
			document.getElementById("cat3vid").style.display = "block";
			document.getElementById("cat1vid").style.display = "none";
			document.getElementById("cat2vid").style.display = "none";
		}
		else{
			document.getElementById("cat2vid").style.display = "block";
			document.getElementById("cat3vid").style.display = "none";
			document.getElementById("cat1vid").style.display = "none";
		}
	}
	
		//PREVIOUS CAT VIDEO
	
		function previousVideoCat(){
				if(document.getElementById("cat1vid").style.display === "block"){
				document.getElementById("cat3vid").style.display = "block";
				document.getElementById("cat2vid").style.display = "none";
				document.getElementById("cat1vid").style.display = "none";
				}
				else if(document.getElementById("cat2vid").style.display === "block"){
					document.getElementById("cat1vid").style.display = "block";
					document.getElementById("cat3vid").style.display = "none";
					document.getElementById("cat2vid").style.display = "none";
				}
				else{
					document.getElementById("cat2vid").style.display = "block";
					document.getElementById("cat1vid").style.display = "none";
					document.getElementById("cat3vid").style.display = "none";
				}
			}

//CAT-ASTROPHE GALLERY (FINISHED)

//WINE-TIME GALLERY

	//TURN ON PHOTO GALLERY

	function photoWine(){
		if (document.getElementById("photoWineGallery").style.display === "block"){
			document.getElementById("videoWineGallery").style.display = "none";
			document.getElementById("photoWineGallery").style.display = "none";
		}
		else{
			document.getElementById("photoWineGallery").style.display = "block";
			document.getElementById("videoWineGallery").style.display = "none";
		}
	}

	//TURN ON VIDEO GALLERY

	function videoWine(){
			if (document.getElementById("videoWineGallery").style.display === "block"){
				document.getElementById("photoWineGallery").style.display = "none";
				document.getElementById("videoWineGallery").style.display = "none";
			}
			else{
				document.getElementById("photoWineGallery").style.display = "none";
				document.getElementById("videoWineGallery").style.display = "block";
			}
		}

	//NEXT WINE PHOTO

	function nextPhotoWine(){
		if(document.getElementById("wine4pic").style.display === "block"){
			document.getElementById("wine1pic").style.display = "block";
			document.getElementById("wine3pic").style.display = "none";
			document.getElementById("wine4pic").style.display = "none";
			document.getElementById("wine2pic").style.display = "none";
		}
		else if(document.getElementById("wine3pic").style.display === "block"){
			document.getElementById("wine4pic").style.display = "block";
			document.getElementById("wine1pic").style.display = "none";
			document.getElementById("wine3pic").style.display = "none";
			document.getElementById("wine2pic").style.display = "none";
		}
		else if(document.getElementById("wine2pic").style.display === "block"){
			document.getElementById("wine3pic").style.display = "block";
			document.getElementById("wine1pic").style.display = "none";
			document.getElementById("wine4pic").style.display = "none";
			document.getElementById("wine2pic").style.display = "none";
		}
		else{
			document.getElementById("wine2pic").style.display = "block";
			document.getElementById("wine3pic").style.display = "none";
			document.getElementById("wine4pic").style.display = "none";
			document.getElementById("wine1pic").style.display = "none";
		}
	}

	//PREVIOUS WINE PHOTO

	function previousPhotoWine(){
		if(document.getElementById("wine1pic").style.display === "block"){
			document.getElementById("wine4pic").style.display = "block";
			document.getElementById("wine3pic").style.display = "none";
			document.getElementById("wine2pic").style.display = "none";
			document.getElementById("wine1pic").style.display = "none";
		}
		else if(document.getElementById("wine2pic").style.display === "block"){
			document.getElementById("wine1pic").style.display = "block";
			document.getElementById("wine3pic").style.display = "none";
			document.getElementById("wine4pic").style.display = "none";
			document.getElementById("wine2pic").style.display = "none";
		}
		else if(document.getElementById("wine3pic").style.display === "block"){
			document.getElementById("wine2pic").style.display = "block";
			document.getElementById("wine1pic").style.display = "none";
			document.getElementById("wine3pic").style.display = "none";
			document.getElementById("wine4pic").style.display = "none";
		}
		else{
			document.getElementById("wine3pic").style.display = "block";
			document.getElementById("wine1pic").style.display = "none";
			document.getElementById("wine2pic").style.display = "none";
			document.getElementById("wine4pic").style.display = "none";
		}
	}

	//NEXT WINE VIDEO

	function nextVideoWine(){
		if(document.getElementById("wine2vid").style.display === "block"){
			document.getElementById("wine1vid").style.display = "block";
			document.getElementById("wine2vid").style.display = "none";
		}
		else{
			document.getElementById("wine2vid").style.display = "block";
			document.getElementById("wine1vid").style.display = "none";
		}
	}

	//PREVIOUS WINE VIDEO

	function previousVideoWine(){
		if(document.getElementById("wine2vid").style.display === "block"){
			document.getElementById("wine1vid").style.display = "block";
			document.getElementById("wine2vid").style.display = "none";
		}
		else{
			document.getElementById("wine2vid").style.display = "block";
			document.getElementById("wine1vid").style.display = "none";
		}
	}
//WINE-TIME GALLERY FINISHED

//HIDE AND GO SQUEAK! GALLERY STARTED

	//TURN ON PHOTO GALLERY

	function photoSqueak(){
		if (document.getElementById("photoSqueakGallery").style.display === "block"){
			document.getElementById("videoSqueakGallery").style.display = "none";
			document.getElementById("photoSqueakGallery").style.display = "none";
		}
		else{
			document.getElementById("photoSqueakGallery").style.display = "block";
			document.getElementById("videoSqueakGallery").style.display = "none";
		}
	}

	//TURN ON VIDEO GALLERY

	function videoSqueak(){
			if (document.getElementById("videoSqueakGallery").style.display === "block"){
				document.getElementById("photoSqueakGallery").style.display = "none";
				document.getElementById("videoSqueakGallery").style.display = "none";
			}
			else{
				document.getElementById("photoSqueakGallery").style.display = "none";
				document.getElementById("videoSqueakGallery").style.display = "block";
			}
		}

	//NEXT SQUEAK PHOTO

	function nextPhotoSqueak(){
		if(document.getElementById("squeak4pic").style.display === "block"){
			document.getElementById("squeak5pic").style.display = "block";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
			document.getElementById("squeak1pic").style.display = "none";
		}
		else if(document.getElementById("squeak3pic").style.display === "block"){
			document.getElementById("squeak4pic").style.display = "block";
			document.getElementById("squeak1pic").style.display = "none";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
		}
		else if(document.getElementById("squeak5pic").style.display === "block"){
			document.getElementById("squeak1pic").style.display = "block";
			document.getElementById("squeak5pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
		}
		else if(document.getElementById("squeak2pic").style.display === "block"){
			document.getElementById("squeak3pic").style.display = "block";
			document.getElementById("squeak1pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
			document.getElementById("squeak5pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
		}
		else{
			document.getElementById("squeak2pic").style.display = "block";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
			document.getElementById("squeak5pic").style.display = "none";
			document.getElementById("squeak1pic").style.display = "none";
		}
	}

	//PREVIOUS SQUEAK PHOTO

	function previousPhotoSqueak(){
		if(document.getElementById("squeak1pic").style.display === "block"){
			document.getElementById("squeak5pic").style.display = "block";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
			document.getElementById("squeak1pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
		}
		else if(document.getElementById("squeak2pic").style.display === "block"){
			document.getElementById("squeak1pic").style.display = "block";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
			document.getElementById("squeak5pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
		}
		else if(document.getElementById("squeak3pic").style.display === "block"){
			document.getElementById("squeak2pic").style.display = "block";
			document.getElementById("squeak1pic").style.display = "none";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("sqeuak5pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
		}
		else if(document.getElementById("squeak5pic").style.display === "block"){
			document.getElementById("squeak4pic").style.display = "block";
			document.getElementById("squeak1pic").style.display = "none";
			document.getElementById("squeak3pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
			document.getElementById("squeak5pic").style.display = "none";
		}
		else{
			document.getElementById("squeak3pic").style.display = "block";
			document.getElementById("squeak1pic").style.display = "none";
			document.getElementById("squeak5pic").style.display = "none";
			document.getElementById("squeak2pic").style.display = "none";
			document.getElementById("squeak4pic").style.display = "none";
		}
	}

	//SQUEAK VIDEO

	function VideoSqueakButtons(){
		if(document.getElementById("squeak2vid").style.display === "block"){
			document.getElementById("squeak1vid").style.display = "block";
			document.getElementById("squeak2vid").style.display = "none";
		}
		else{
			document.getElementById("squeak2vid").style.display = "block";
			document.getElementById("squeak1vid").style.display = "none";
		}
	}

//HIDE AND GO SQUEAK! GALLERY (FINISHED)

//BUTTONS TO SHOW EACH WORK EXPERIENCE PIECE (STARTED)

function PeerEducator(){
	if (document.getElementById("peerSection").style.display === "block"){
		document.getElementById("peerSection").style.display = "none";
		document.getElementById("communitySection").style.display = "none";
		document.getElementById("internSection").style.display = "none";
	}
	else{
		document.getElementById("peerSection").style.display = "block";
		document.getElementById("communitySection").style.display = "none";
		document.getElementById("internSection").style.display = "none";
	}
}

function CommunityManager(){
	if (document.getElementById("communitySection").style.display === "block"){
		document.getElementById("peerSection").style.display = "none";
		document.getElementById("communitySection").style.display = "none";
		document.getElementById("internSection").style.display = "none";
	}
	else{
		document.getElementById("communitySection").style.display = "block";
		document.getElementById("peerSection").style.display = "none";
		document.getElementById("internSection").style.display = "none";
	}
}
function Intern(){
	if (document.getElementById("internSection").style.display === "block"){
		document.getElementById("peerSection").style.display = "none";
		document.getElementById("communitySection").style.display = "none";
		document.getElementById("internSection").style.display = "none";
	}
	else{
		document.getElementById("internSection").style.display = "block";
		document.getElementById("peerSection").style.display = "none";
		document.getElementById("communitySection").style.display = "none";
	}
}


//BUTTONS TO SHOW EACH WORK EXPERIENCE PIECE (FINISHED)