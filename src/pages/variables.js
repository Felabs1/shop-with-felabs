function mentionColor(){
	var color = document.getElementById("options").value;
	var statement = document.getElementById("answer");
	switch(color){
		case "green": statement.innerHTML = "you chose " + color;
		break;
		case "red": statement.innerHTML = "your fav is red " + color;
		break;
		case "pink": statement.innerHTML = "I love " + color;
		break;
		default:
			statement.innerHTML = "invalid color entered ";

	}
}