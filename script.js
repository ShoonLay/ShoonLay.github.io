var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.querySelector('ul').addEventListener("click", function(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle("done");
	}
});

document.querySelector('ul').addEventListener("click", function(e) {
	if (e.target.tagName.toLowerCase() === 'button') {
		var rmv = e.target.parentNode;
		rmv.parentNode.removeChild(rmv);
	}
});