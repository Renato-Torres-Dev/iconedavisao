const doencaData = [
  {
    img: "/assets/imgs/doencas/visao_catarata.jpg",
    title: "Catarata",
    resume: "Opacificação do cristalino, causando perda gradual da visão.",
    url: "../doencas-oculares/catarata.html",
  },
  {
    img: "/assets/imgs/doencas/visao_glaucoma.jpg",
    title: "Glaucoma",
    resume: "Aumento da pressão intraocular, podendo levar à cegueira.",
    url: "../doencas-oculares/glaucoma.html",
  },
  {
    img: "/assets/imgs/doencas/visao_miopia.jpg",
    title: "Doenças Refrativas",
    resume: "Problemas como miopia, hipermetropia e astigmatismo.",
    url: "../doencas-oculares/doencas-refrativas.html",
  },
  {
    img: "/assets/imgs/doencas/visao_vitreo.jpg",
    title: "Doenças de Retina e Vítreo",
    resume: "Afecções que comprometem a retina e o humor vítreo.",
    url: "../doencas-oculares/retina-e-vitreo.html",
  },
  {
    img: "/assets/imgs/doencas/visao_ceratocone.jpg",
    title: "Ceratocone",
    resume: "Doença progressiva que afina e distorce a córnea.",
    url: "../doencas-oculares/ceratocone.html",
  },
  {
    img: "/assets/imgs/doencas/visao_olho_seco.jpg",
    title: "Olho Seco",
    resume: "Falta de lubrificação adequada da superfície ocular.",
    url: "../doencas-oculares/olho-seco.html",
  },
  {
    img: "/assets/imgs/doencas/visao_palpebra.jpg",
    title: "Envelhecimento Palpebral",
    resume: "Perda de elasticidade e firmeza das pálpebras.",
    url: "../doencas-oculares/envelhecimento-palpebral.html",
  },
]

function sickGrid(){
  const sickContainer = document.querySelector('.doencas-grid-container');

  doencaData.forEach(doenca => {
    const card = document.createElement('div');
    card.classList.add('doencas-card');
    card.innerHTML = `
      <div class="doencas-card-title">
        <img src="${doenca.img}" alt="${doenca.title}"/>
        <h2 class="doenca-title">${doenca.title}</h2>
      </div>
      <div class="doencas-card-resume">
        <p>${doenca.resume}</p>
      </div>
      <a href="${doenca.url}">
        <div class="doenca-button">
          <h2 class="btn-title">SAIBA MAIS SOBRE A DOENÇA E COMO TRATAR</h2>
        </div>
      </a>
    `;
    sickContainer.appendChild(card);
  });
}

window.onload = sickGrid;