const agreeData = [
  {
    img: "../assets/imgs/convenios/campe.png",
    name: "CAMPE",
  },
  {
    img: "../assets/imgs/convenios/assefaz.png",
    name: "Fundação ASSEFAZ",
  },
  {
    img: "../assets/imgs/convenios/unimed.png",
    name: "Unimed",
  },
  {
    img: "../assets/imgs/convenios/caixa.png",
    name: "Saúde Caixa",
  },
  {
    img: "../assets/imgs/convenios/compesa.png",
    name: "CompesaPrev",
  },
  {
    img: "../assets/imgs/convenios/fusex.png",
    name: "FUSEX - Fundo de Saúde do Exército",
  },
]

function agreeGrid(){
  const agreeContainer = document.querySelector('.agree-grid-container');

  agreeData.forEach(agree => {
    const card = document.createElement('div');
    card.classList.add('agree-card');
    card.innerHTML = `
    <div class="agree-card-img">
      <img src=${agree.img} alt="${agree.name}"/>
    </div>
    <div class="agree-card-title">
      <h1>
        ${agree.name}
      </h1>
    </div>
    `;
    agreeContainer.appendChild(card);
  });
}

window.onload = agreeGrid;