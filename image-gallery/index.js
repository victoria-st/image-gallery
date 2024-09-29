const url = "https://api.unsplash.com/photos/?client_id=_VSHgXLdm9Jt7rhh099EzGb8koVHaMPLZiDQ9osMk2k";

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0].urls.regular);
  }
  getData();


  const galleryContainer = document.querySelector(".container");

  const img = `<img class="gallery-img" src="https://images.unsplash.com/photo-1719937206589-d13b6b008196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkxMjh8MXwxfGFsbHwxfHx8fHx8fHwxNzI3NjA0NTc1fA&ixlib=rb-4.0.3&q=80&w=1080" alt="image">`;
galleryContainer.insertAdjacentHTML("beforeend", img);