const newsData = [
  {
    title: "Smile: a cirurgia refrativa mais segura",
    resume: "Desenvolvido pela empresa alemã Zeiss, o laser permite um...",
    img: "/assets/imgs/misc/smile.jpg",
    date: "27 de Ago",
    time: "5 min.",
  },
  {
    title: "10 anos sem casos de infecção hospitalar",
    resume: "O Ícone da Visão adquiriu o primeiro equipamento Opério...",
    img: "/assets/imgs/misc/medico-exame.jpg",
    date: "29 de Ago",
    time: "3 min.",
  },
  {
    title: "Conheça os tipos de lentes intraoculares",
    resume: "Ela é implantada no olho e pode melhorar a...",
    img: "/assets/imgs/misc/lente-intraocular-2.jpg",
    date: "30 de Ago",
    time: "4 min.",
  },
  {
    title: "Smile: a cirurgia refrativa mais segura",
    resume: "Desenvolvido pela empresa alemã Zeiss, o laser permite um...",
    img: "/assets/imgs/misc/smile.jpg",
    date: "27 de Ago",
    time: "5 min.",
  },
  {
    title: "10 anos sem casos de infecção hospitalar",
    resume: "O Ícone da Visão adquiriu o primeiro equipamento Opério...",
    img: "/assets/imgs/misc/medico-exame.jpg",
    date: "29 de Ago",
    time: "3 min.",
  },
  {
    title: "Conheça os tipos de lentes intraoculares",
    resume: "Ela é implantada no olho e pode melhorar a...",
    img: "/assets/imgs/misc/lente-intraocular-2.jpg",
    date: "30 de Ago",
    time: "4 min.",
  },
  {
    title: "Smile: a cirurgia refrativa mais segura",
    resume: "Desenvolvido pela empresa alemã Zeiss, o laser permite um...",
    img: "/assets/imgs/misc/smile.jpg",
    date: "27 de Ago",
    time: "5 min.",
  },
  {
    title: "10 anos sem casos de infecção hospitalar",
    resume: "O Ícone da Visão adquiriu o primeiro equipamento Opério...",
    img: "/assets/imgs/misc/medico-exame.jpg",
    date: "29 de Ago",
    time: "3 min.",
  },
  {
    title: "Conheça os tipos de lentes intraoculares",
    resume: "Ela é implantada no olho e pode melhorar a...",
    img: "/assets/imgs/misc/lente-intraocular-2.jpg",
    date: "30 de Ago",
    time: "4 min.",
  },
  {
    title: "Smile: a cirurgia refrativa mais segura",
    resume: "Desenvolvido pela empresa alemã Zeiss, o laser permite um...",
    img: "/assets/imgs/misc/smile.jpg",
    date: "27 de Ago",
    time: "5 min.",
  },
  {
    title: "10 anos sem casos de infecção hospitalar",
    resume: "O Ícone da Visão adquiriu o primeiro equipamento Opério...",
    img: "/assets/imgs/misc/medico-exame.jpg",
    date: "29 de Ago",
    time: "3 min.",
  },
  {
    title: "Conheça os tipos de lentes intraoculares",
    resume: "Ela é implantada no olho e pode melhorar a...",
    img: "/assets/imgs/misc/lente-intraocular-2.jpg",
    date: "30 de Ago",
    time: "4 min.",
  },
  {
    title: "Smile: a cirurgia refrativa mais segura",
    resume: "Desenvolvido pela empresa alemã Zeiss, o laser permite um...",
    img: "/assets/imgs/misc/smile.jpg",
    date: "27 de Ago",
    time: "5 min.",
  },
  {
    title: "10 anos sem casos de infecção hospitalar",
    resume: "O Ícone da Visão adquiriu o primeiro equipamento Opério...",
    img: "/assets/imgs/misc/medico-exame.jpg",
    date: "29 de Ago",
    time: "3 min.",
  },
  {
    title: "Conheça os tipos de lentes intraoculares",
    resume: "Ela é implantada no olho e pode melhorar a...",
    img: "/assets/imgs/misc/lente-intraocular-2.jpg",
    date: "30 de Ago",
    time: "4 min.",
  },
]

const itemsPerPage = 9;
let currPage = 1;

function renderNews(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedNews = newsData.slice(start, end);

  const newsGrid = document.getElementById('news-grid');
  newsGrid.innerHTML = '';

  paginatedNews.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
      <a href="/">
        <div>
          <img src=${news.img}
        </div>
        <div>
          <h3>${news.title}</h3>
          <p>${news.resume}</p>
        </div>
      </a>
    `;
    newsGrid.appendChild(newsItem);
  });

  document.getElementById('page-info').textContent = `${page}`;
  document.getElementById('prev-page').disabled = page === 1;
  document.getElementById('next-page').disabled = end >= newsData.length;
}

document.getElementById('prev-page').addEventListener('click', () => {
  if (currPage > 1) {
    currPage--;
    renderNews(currPage);
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  if (currPage * itemsPerPage < newsData.length) {
    currPage++;
    renderNews(currPage);
  }
});

renderNews(currPage);