const galleryContainer = document.querySelector(".container");
const SEARCHbtn = document.querySelector('.search-button');
const INPUT = document.querySelector('.search-field');
const url = "https://api.unsplash.com/photos/?client_id=_VSHgXLdm9Jt7rhh099EzGb8koVHaMPLZiDQ9osMk2k";

INPUT.focus();

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        showData(data[i]);
  }}

  getData();

  function showData(data) {
    const div = `<div class="container-img" style="background-image: url(${data.urls.regular});"></div>`;
  galleryContainer.insertAdjacentHTML("beforeend", div);
  }

  function searchImages (term) {
    console.log('search clicked');
    const url = `https://api.unsplash.com/search/photos?page=1&query=${term}`
    fetch(url)
        .then(data => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        showData(data[i]);
  }
  })};

SEARCHbtn.addEventListener('click', () => {console.log("clicked", searchImages(INPUT.value))});