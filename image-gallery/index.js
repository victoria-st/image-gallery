const url = "https://api.unsplash.com/photos/?client_id=_VSHgXLdm9Jt7rhh099EzGb8koVHaMPLZiDQ9osMk2k";
const galleryContainer = document.querySelector(".container");

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
  galleryContainer.insertAdjacentHTML("beforeend", div1);
  }

  