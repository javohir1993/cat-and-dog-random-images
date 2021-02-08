let elImgCat = document.getElementById('result-cat-img');
let elCatBtn = document.getElementById('js-cat-btn');
let elImgDog = document.getElementById('result-dog-img');
let elDogBtn = document.getElementById('js-dog-btn');

function getCat () {
  elImgCat.innerHTML = `<img src="img/tenor.gif" alt="" width="400" height="450">`
  fetch(`https://aws.random.cat/meow`)
    .then(response => response.json())
    .then(data => {
      elImgCat.innerHTML = `<img src="${data.file}" width="400" height="450"/>`;
    });
};

function getDog () {
  elImgDog.innerHTML = `<img src="img/tenor.gif" alt="" width="400" height="450">`;
  fetch(`https://random.dog/woof.json`)
    .then(response => response.json())
    .then(data => {
      elImgDog.innerHTML = `<img src="${data.url}" width="400" height="450"/>`;
    });
};

elCatBtn.addEventListener('click', getCat);
elDogBtn.addEventListener('click', getDog);