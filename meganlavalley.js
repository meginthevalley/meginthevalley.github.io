function footerHomepage(){
	var userInput = document.getElementById("inputBox").value;
	// set a variable called userInput
 if (userInput === "dungeon crawler"){
	 window.alert("That's a really great choice! Delving in dungeons is definitely a fun hobby to have.");
 }
 else if (userInput === "rpg"){
	 window.alert("Wonderful! RPG's do a great job of immersing you into their world. I love getting lost in a good RPG.");
 }
 else if (userInput === "indie"){
	 window.alert("A very unique choice! I feel Indie games are under appreciated. There are so many indie games to be " + 
	 "discovered and I always love finding a game that isn't by a large company and supporting small creators");
 }
 else if (userInput === "multiplayer"){
	 window.alert("Playing with others is always a fun time. It's nice to be able to share a fun experience with the people in your life. " + 
	 "Even competing against others can be quite entertaining and rewarding!");
 }
 else {
	 window.alert("I don't believe that is one of the game categories on this page. " + 
	 "Be sure to pick between 'Dungeon Crawler', 'RPG', 'Indie', or 'Multiplayer'.");
 }
  //above are conditional statements for each possible answer including answering something that isn't one of the choices
}

function lowerCase(){
	var userInput = document.getElementById("inputBox");
	userInput.value = userInput.value.toLocaleLowerCase();
	//This function changes text the user types to lowercase
}

function changePicture(){
	document.getElementById("floatLeftPic").src = "Megan3.jpg";
	//This function is used to change the picture on the home page when moused over on 
}

function changeBack(){
	document.getElementById("floatLeftPic").src = "Megan2.jpg";
	//This function is used to change back the picture on the homepage when the mouse is no longer on it
}

function changeAboutPicture(){
	document.getElementById("floatRightPic").src = "Megan.jpg";
	//This function is used to change the picture on the home page when moused over on 
}

function changeAboutBack(){
	document.getElementById("floatRightPic").src = "Megan4.jpg";
	//This function is used to change back the picture on the homepage when the mouse is no longer on it
}

function unityFunction(){
	document.getElementById("Unity").style.display = "block";
	document.getElementById("Unreal").style.display = "none";
}
function unrealFunction(){
	document.getElementById("Unreal").style.display = "block";
	document.getElementById("Unity").style.display = "none";
}

function changeText(){
	var blueLions = "Currently I am playing through the " +
	"Blue Lions route on this game. So far of the 2 houses I have played Blue Lions is my " +
	"favorite. The other house I have played is the Golden Deer route and I have not yet tried the " +
	"Black Eagles route. I love recruiting my favorite characters from other houses to come to my house " +
	"Right now my favorite characters are Claude, Dimitri, Felix, Sylvain, and Mercedes. " +
	"If you decide to try this game be sure to let me know which house you choose and if you " +
	"have already played this game then tell me some of your favorite characters via email or discord! " +
	"I'm excited to share this game with all of you and I really hope you enjoy it. Oh, and the DLC adds " +
	"a few really cool aspects to the game. If you find yourself interested in the game and don't want " +
	"to buy the DLC without knowing more then be sure to contact me and we can talk about aspects of " +
	"the DLC without giving away any major plot points.";
	if (document.getElementById("fireEmblem").innerHTML === blueLions){
		document.getElementById("fireEmblem").innerHTML = "Maybe you're looking for more of a strategy based RPG, " + 
		"if so then Fire Emblem: Three Houses is the game you want. Towards the beginning of the game you have to make a " +
		"choice of which of the three school houses you want to be in. This choice will affect the rest of your game and " +
		"give a different story than if you chose one of the other houses. That means you can play the game 3 separate " + 
		"times and get 3 different stories/viewpoints. I am only in my 2nd runthrough of the game but I can't wait to " + 
		"experience all 3 houses. You can also choose to add an option where if your party members die in combat they " +
		"will be gone for the rest of the game!This is my favorite way to play because it makes the game more challenging. " +
        "This game is one of the best strategy rpg's I've ever played and I would highly recommend playing it! This game " +
		"is only available on Nintendo Switch.";
	}
	else{
		document.getElementById("fireEmblem").innerHTML = blueLions;
	}
}
//This function changes the text in the Fire Emblem section of RPG's and changes it back if clicked again.
