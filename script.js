window.onload = function(){
	computerGenerate();
	userEventListener();
};

var arr = ["rock", "paper", "scissors"];
var computerPass;
var winningPattern  = ["paperrock", "rockscissors", "scissorspaper"];

function computerGenerate(){
	computerPass = arr[_.random(0,2)];
	document.getElementById("1").innerText = "Computer's Pass is: " +computerPass;
}

function userEventListener(){
	Array.prototype.slice.call(document.querySelectorAll("button")).forEach(function(el){
		el.addEventListener("click", myFunction);
	});
}

function myFunction(){
	var userPass = this.getAttribute("id");
	document.getElementById("2").innerText = "User's Pass is: " +userPass;
	var resultComputerWin = computerPass.concat(userPass);
	if(userPass === computerPass){
		var newDiv = document.createElement("h3");
		newDiv.innerText = "TIE!!";
		document.getElementById("words").appendChild(newDiv);
	}else if(winningPattern.indexOf(resultComputerWin) !== -1){
		var newDiv1 = document.createElement("h3");
		newDiv1.innerText = "Computer Wins!!";
		document.getElementById("words").appendChild(newDiv1);
	}else{
		var newDiv2 = document.createElement("h3");
		newDiv2.innerText = "User Wins!!";
		document.getElementById("words").appendChild(newDiv2);
	}
}

