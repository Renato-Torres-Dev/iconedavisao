const bannerData = [
  {
    id: 1,
    content: "Matéria 1",
    img: "https://placehold.co/600x400",
  },
  {
    id: 2,
    content: "Matéria 2",
    img: "https://placehold.co/600x400",
  },
  {
    id: 3,
    content: "Matéria 3",
    img: "https://placehold.co/600x400",
  },
  {
    id: 4,
    content: "Matéria 4",
    img: "https://placehold.co/600x400",
  },
];

const gridContainer = document.getElementById('banner-grid');

function renderBanner(matterList) {
  gridContainer.innerHTML = '';

  matterList.forEach((matter, index) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-6');

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('banner-item');
    itemDiv.innerHTML = matter.content;

    const img = document.createElement('img');
    img.src = matter.image;
    img.alt = matter.content;
    img.classList.add('banner-image');

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = matter.content;

    itemDiv.appendChild(img);
    itemDiv.appendChild(contentDiv);

    colDiv.appendChild(itemDiv);
    gridContainer.appendChild(colDiv);
  });
}

renderBanner(bannerData.slice(0,4));