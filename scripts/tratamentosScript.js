const tratamentoData = [
  {
    img: "assets/imgs/doencas/visao_catarata.jpg",
    title: "Tratamento de Catarata",
    resume: "A catarata é uma das principais causas de perda de visão no mundo, mas felizmente, possui um tratamento eficaz: a cirurgia de remoção do cristalino opaco e a substituição por uma lente intraocular. No Hospital Ícone da Visão, essa cirurgia é realizada com precisão e tecnologia de ponta, oferecendo segurança e recuperação rápida. Nossos especialistas utilizam técnicas avançadas que proporcionam resultados superiores e uma experiência confortável e segura para os pacientes.",
    url: "tratamentos/tratamento-catarata.html",
  },
  {
    img: "assets/imgs/doencas/visao_miopia.jpg",
    title: "Cirurgias de Correção de Grau",
    resume: "As cirurgias para correção de grau são uma solução eficiente para pacientes com miopia, hipermetropia e astigmatismo que buscam mais independência dos óculos e lentes de contato. No Hospital Ícone da Visão, nossos especialistas realizam procedimentos como LASIK, PRK e inserção de lentes intraoculares, cada um cuidadosamente indicado de acordo com o perfil visual do paciente. Com tecnologia de ponta e acompanhamento especializado, nossa equipe proporciona resultados precisos e uma recuperação rápida, sempre priorizando a segurança e o conforto do paciente.",
    url: "tratamentos/cirurgias-de-correcao-grau.html",
  },
  {
    img: "assets/imgs/doencas/visao_glaucoma.jpg",
    title: "Tratamento de Glaucoma",
    resume: "O glaucoma, uma das principais causas de cegueira irreversível, pode ser controlado com o tratamento adequado. No Hospital Ícone da Visão, oferecemos uma abordagem completa para o controle do glaucoma, com colírios, tratamentos a laser e cirurgias de última geração, como a trabeculectomia e implantes de drenagem. Nosso objetivo é preservar a visão dos pacientes, monitorando de perto cada caso para prevenir a progressão da doença.",
    url: "tratamentos/tratamento-glaucoma.html",
  },
  {
    img: "assets/imgs/doencas/visao_ceratocone.jpg",
    title: "Tratamento de Ceratocone",
    resume: "O ceratocone, uma doença progressiva que afeta a curvatura da córnea, pode ser controlado e até corrigido com tratamentos como o crosslinking e lentes especiais. No Hospital Ícone da Visão, nossos profissionais especializados realizam esses procedimentos com tecnologia de última geração, oferecendo uma abordagem personalizada para estabilizar o ceratocone e melhorar a qualidade de visão. Além disso, trabalhamos com técnicas inovadoras para promover a saúde ocular e o conforto visual dos nossos pacientes.",
    url: "tratamentos/tratamentos/ceratocone.html",
  },
  {
    img: "assets/imgs/doencas/visao_vitreo.jpg",
    title: "Tratamento de Doenças de Retina e Vítreo",
    resume: "O tratamento das doenças de retina e vítreo exige tecnologia de alta precisão e experiência médica especializada. No Hospital Ícone da Visão, nossa equipe realiza diagnósticos e tratamentos avançados para condições como a retinopatia diabética, o descolamento de retina e a degeneração macular. Com métodos modernos de cirurgia vitreorretiniana e acompanhamento contínuo, oferecemos aos nossos pacientes o melhor cuidado para preservar e restaurar a visão.",
    url: "tratamentos/tratamento-retina-vitreo.html",
  },
  {
    img: "assets/imgs/doencas/olho-scaled.png",
    title: "SPA da Visão",
    resume: "O Spa da Visão é um espaço voltado ao bem-estar e cuidado integral dos olhos, oferecendo terapias e tratamentos que ajudam a aliviar o cansaço visual e preservar a saúde ocular. No Hospital Ícone da Visão, nossos serviços incluem massagens relaxantes para os olhos, tratamentos hidratantes e sessões terapêuticas com tecnologia moderna para o alívio do olho seco e do estresse ocular. Este espaço foi criado para proporcionar uma experiência única de relaxamento e conforto, com foco em melhorar a qualidade de vida visual dos nossos pacientes.",
    url: "tratamentos/spa-da-visao.html",
  },
  {
    img: "assets/imgs/doencas/visao_olho_seco.jpg",
    title: "Tratamento de Olho Seco",
    resume: "O tratamento do olho seco no Hospital Ícone da Visão é completo e abrange desde lágrimas artificiais até procedimentos para melhorar a qualidade das lágrimas. Utilizando equipamentos modernos, nossa equipe identifica a causa do ressecamento e oferece opções personalizadas, como colírios, plugs lacrimais e tratamentos térmicos para as glândulas de Meibômio. Nosso compromisso é proporcionar alívio duradouro e bem-estar para os pacientes com olho seco.",
    url: "tratamentos/tratamento-olho-seco.html",
  },
  {
    img: "assets/imgs/doencas/visao_sem_palpebra.jpg",
    title: "Estética",
    resume: "A estética ocular vai além da visão – ela contribui para a expressão e autoestima. No Hospital Ícone da Visão, nossos serviços incluem procedimentos como blefaroplastia para a remoção de excesso de pele nas pálpebras, aplicação de toxina botulínica para suavizar rugas, e preenchimentos que restauram o contorno da região ocular. Com uma equipe especializada e técnicas seguras, nosso objetivo é garantir resultados naturais, que valorizam a aparência e a saúde da área dos olhos, sempre com uma abordagem cuidadosa e personalizada.",
    url: "tratamentos/estetica.html",
  },
]

function sickGrid(){
  const sickContainer = document.querySelector('.tratamentos-grid-container');

  tratamentoData.forEach(tratamento => {
    const card = document.createElement('div');
    card.classList.add('tratamentos-card');
    card.innerHTML = `
      <div class="tratamentos-card-title">
        <img src="${tratamento.img}" alt="${tratamento.title}"/>
        <h2 class="tratamento-title">${tratamento.title}</h2>
      </div>
      <div class="tratamentos-card-resume">
        <p>${tratamento.resume}</p>
      </div>
      <a href="${tratamento.url}">
        <div class="tratamento-button">
          <h2 class="btn-title">SAIBA MAIS SOBRE O TRATAMENTO</h2>
        </div>
      </a>
    `;
    sickContainer.appendChild(card);
  });
}

window.onload = sickGrid;