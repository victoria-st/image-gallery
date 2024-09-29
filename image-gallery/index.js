const url = "https://api.unsplash.com/photos/?client_id=_VSHgXLdm9Jt7rhh099EzGb8koVHaMPLZiDQ9osMk2k";
const galleryContainer = document.querySelector(".container");

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0]);
    showData(data)
  }
  getData();

  function showData(data) {
    const div = `<div class="gallery-img" style="background-image: url(data[0].urls.regular);">`;
  galleryContainer.insertAdjacentHTML("beforeend", div);
  }

  