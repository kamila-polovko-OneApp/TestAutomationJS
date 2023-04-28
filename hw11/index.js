// task 1
const date = new Date();

function makeVote() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", "vote.json", true);
  document.querySelector("#vote-button").innerHTML = "Your vote is accepted: " + new Date();
  ajaxRequest.send();
}

// task 2
function loadAuthors() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', 'books.json', true);
  ajaxRequest.onreadystatechange = function() {
  if (ajaxRequest.readyState != 4) return; 
	if (ajaxRequest.status != 200) {
    alert(`Error ${ajaxRequest.status}: ${ajaxRequest.statusText}`);
  } else {
    const button = document.querySelector('#download-button');
    const list = document.createElement('ul');
    list.id = '#authors-list';
    const values = JSON.parse(ajaxRequest.responseText);
    for (const value of values) {
		const listItem = document.createElement('li');
		listItem.textContent = value.author;
		list.appendChild(listItem);
	}
	button.parentNode.replaceChild(list, button);
      } 
    }
    ajaxRequest.send();
};
