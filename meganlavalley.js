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
	document.getElementById("floatLeftPic").src = "Megan2.jpg";
	//This function is used to change the picture on the home page when moused over on 
}
function changeBack(){
	document.getElementById("floatLeftPic").src = "Megan.jpg";
	//This function is used to change back the picture on the homepage when the mouse is no longer on it
}
function footerDungeon(){
	var userInput = document.getElementById("inputBox").value;
	// set a variable called userInput
 if (userInput === "hades"){
	 alert("I'm glad you're interested in Hades! I think you'll really like this game. " + 
	 "My favorite character to talk to whenever I die and go back to the House of Hades is Hypnos. " +
	 "Right now, Hades is probably on my top 10 games for all time. 10/10, currently playing it again." );
 }
 else if (userInput === "diablo"){
	 alert("Diablo is a good pick. There are quite a few diablo games out. There are so many classes to choose " +
	 "from. Personally I'm a fan of classes like assassin and necromancer. I hope you find a class that suits what you like!");
 }
 else if (userInput === "rune factory"){
	 alert("I'm a HUGE Rune Factory fan and I'm so happy you are interested in it. I don't know many people " +
	 "who have played Rune Factory so I'm excited to show it to others. If you want a game like this " +
	 "but is more simple and with less dungeons see Stardew Valley on the Indie page. Anyways, I hope you enjoy it!");
 }
 else if (userInput === "none"){
	 alert("I'm so sorry that none of the games on this page were for you. Be sure to check the other game " +
	 "categories to find a game that suits you!");
 }
 else {
	 alert("I don't believe that is one of the game choices on this page. Please try again!(Options are 'Hades', " +
	 "'Diablo', 'Rune Factory', or 'none').");
 }
   //above are conditional statements for each possible answer including answering something that isn't one of the choices
}
function footerRPG(){
	var userInput = document.getElementById("inputBox").value;
	// set a variable called userInput
 if (userInput === "the elder scrolls" || userInput === "skyrim" ){
	 alert("The Elder Scrolls games are games you can enjoy for years and still find new " + 
	 "things to love about them. They are definitely a great option to be interested in.");
 }
 else if (userInput === "legend of zelda: breath of the wild" || userInput === "breath of the wild"){
	 alert("Breath of the Wild is visually incredible and so much fun to play. There is so much to do and I am sure " +
	 "you will LOVE this open world Zelda game!");
 }
 else if (userInput === "fire emblem: three houses" || userInput === "fire emblem"){
	 alert("Ahhh, so you're interested in strategy. Well don't you worry, this game will challenge you and " +
	 "really make you think on how to progress. I hope you'll love this game as much as I do. " +
	 "Be sure to let me know which of the 3 houses you choose for your first playthrough by " +
	 "using the email link in the footer of this page!");
 } 
 else if (userInput === "none"){
	 alert("I'm so sorry that none of the games on this page were for you. Be sure to check the other game " +
	 "categories to find a game that suits you!");
 }
 else {
	 alert("I don't believe that is one of the game choices on this page. Please try again!(Options are 'The Elder Scrolls', " +
	 "'Breath of the Wild', 'Fire Emblem', or 'none').");
 }
  //above are conditional statements for each possible answer including answering something that isn't one of the choices
}
function footerIndie(){
	var userInput = document.getElementById("inputBox").value;
	// set a variable called userInput
 if (userInput === "stardew valley"){
	 alert("I think you will fall in love with this simple farming game. It has captivated the hearts of many, " + 
	 "myself included. I hope you enjoy playing this and if you want a game like this but with more " +
	 "dungeons and crafting then see Rune Factory on the Dungeon Crawler page!");
 }
 else if (userInput === "undertale"){
	 alert("Undertale is a game where I could go back to it a million times and play it over even though I would play it the " +
	 "same way I always do. I find so much comfort in this game and I hope that it makes you feel the same way. " +
	 "P.S. If you finish Undertale, the creator Toby Fox has started putting out a second game called Deltarune!");
 }
 else if (userInput === "celeste"){
	 alert("So you're down for the challenge? It will be a tough game but once you get used to it you will feel so " +
	 "accomplished everytime you finish a level. Enjoy and if you need a relaxing break be sure to play some " +
	 "Stardew Valley to destress while you think of how to beat that level. I'm rooting for you!");
 }
 else if (userInput === "none"){
	 alert("I'm so sorry that none of the games on this page were for you. Be sure to check the other game " +
	 "categories to find a game that suits you!");
 }
 else {
	 alert("I don't believe that is one of the game choices on this page. Please try again!(Options are 'Stardew Valley', " +
	 "'Undertale', 'Celeste', or 'none').");
 }
  //above are conditional statements for each possible answer including answering something that isn't one of the choices
}
function footerMultiplayer(){
	var userInput = document.getElementById("inputBox").value;
	// set a variable called userInput
 if (userInput === "super smash bros. ultimate" || userInput === "smash"){
	 alert("Smash is such a good choice! There are so many fighters to choose from and unlocking them " + 
	 "all can be really fun. My favorite character to use is Robin so be sure to email me when you " +
	 "find your favorite fighter! (An email link is in the footer of every webpage).");
 }
 else if (userInput === "jackbox party packs" || userInput === "jackbox"){
	 alert("With good company you will have a lot of laughs. I hope you enjoy this! I suggest trying the Quiplash Jackbox games " +
	 "in the party packs. Though every Jackbox game has instructions so don't worry about not knowing what each game is " +
	 "before starting. Just have fun and be prepared to laugh until you cry.");
 }
 else if (userInput === "left 4 dead 2"){
	 alert("I'm so happy that you want to try Left 4 Dead 2. This game may be older but it has a lot of charm and can " +
	 "still scare and challenge you even though it was made over a decade ago! Have fun and don't let the witch get you!");
 }
 else if (userInput === "none"){
	 alert("I'm so sorry that none of the games on this page were for you. Be sure to check the other game " +
	 "categories to find a game that suits you!");
 }
 else {
	 alert("I don't believe that is one of the game choices on this page. Please try again!(Options are 'Super Smash Bros. Ultimate', " +
	 "'Jackbox', 'Left 4 Dead 2', or 'none').");
 }
  //above are conditional statements for each possible answer including not one of the answers
}
//Every function that starts with footer is a question that the user answers in the footer of each webpage
//functions that don't start with footer have comments in the code telling you what they do
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
