// task 1
const date = new Date();

function makeVote() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', 'vote.json', true);
  document.querySelector('#vote-button').innerHTML = "Your vote is accepted: " + new Date(); 
  ajaxRequest.send();
};

// task 2
function getAuthors() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'books.json', true);
    document.querySelector('#download-button').innerHTML = "#booklist" ; 
    ajaxRequest.send();
  };