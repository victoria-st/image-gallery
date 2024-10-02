const galleryContainer = document.querySelector(".container");
const SEARCHbtn = document.querySelector('.search-button');
const INPUT = document.querySelector('.search-field');
const url = "https://api.unsplash.com/photos/";
const KEY = '?client_id=_VSHgXLdm9Jt7rhh099EzGb8koVHaMPLZiDQ9osMk2k'

INPUT.focus();

async function getData() {
  const url_1 = url+KEY;
    const res = await fetch(url_1);
    const data = await res.json();
    console.log(data[0]);
    showData(data);
  }

  getData();

  function showData(data) {
    for (let i = 0; i < data.length; i++) {
    const div = `<div class="container-img" style="background-image: url(${data[i].urls.regular});"></div>`;
  galleryContainer.insertAdjacentHTML("beforeend", div);
    }
  }

  async function searchImages (term) {
    console.log('search clicked');
    const url_1 = 'https://api.unsplash.com/search/photos'+KEY+`&page=1&query=${term}`;
    const res = await fetch(url_1);
    const data = await res.json();
    console.log(data.results);
    galleryContainer.innerHTML = '';
    showData(data.results);
  };

SEARCHbtn.addEventListener('click', () => {
  console.log("clicked", INPUT.value); 
  searchImages(INPUT.value)});