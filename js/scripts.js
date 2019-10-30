var hamburger = document.querySelector('#pull');
var body = document.querySelector('body');

hamburger.addEventListener('click', showMenu);

function showMenu() {
  body.classList.toggle('show-nav');
  event.preventDefault();
}

//added above

document.addEventListener('click', clickHandlers);

var nyt =
  'https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';

var git = 'https://api.github.com/users/nshaiva';

function clickHandlers() {
  if (event.target.matches('button')) {
    getData();
  }
}

var addContent = function(data) {
  var looped = '';
  // for (let i = 0; i < 50; i++) {
  looped = `
    <div class="item">
    <h3>Git username: ${data.login}</h3>
    <h4>${data.name}</h4>
    <img src="${data.avatar_url}" />
    <p>${data.url}</p>
    </div>
    `;
  // }
  document.querySelector('.content div').innerHTML = looped;
};

var getData = function() {
  fetch(git)
    .then(response => response.json())
    .then(json => addContent(json));
  // .then(json => console.log(json));
};
