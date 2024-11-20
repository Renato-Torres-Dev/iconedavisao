const techData = [
  {
    title: "Zeiss Artevo 800 – Pioneirismo em Microscopia Digital 3D",
    resume: "Somos o primeiro hospital da América do Sul a utilizar o Zeiss Artevo 800, o microscópio digital tridimensional mais avançado do mundo, com tomografia OCT em tempo real. Essa tecnologia proporciona maior precisão e segurança em cirurgias de catarata, retina, córnea, glaucoma e correção de grau. Com imagens de alta definição, o procedimento é realizado com mais conforto tanto para o cirurgião quanto para o paciente.",
  },
  {
    title: "Catalys Precision Laser System – Precisão em Cirurgias de Catarata",
    resume: "O Catalys é um sistema de laser de femtossegundos utilizado em cirurgias de catarata a laser. Ele combina um escaneamento ocular detalhado com incisões precisas, minimizando o trauma operatório e os riscos. Essa tecnologia revolucionária oferece recuperação mais rápida e maior segurança para os pacientes.",
  },
  {
    title: "Suíte Refrativa Zeiss – Soluções Inovadoras em Cirurgias Refrativas",
    resume: "Nossa suíte refrativa integra o laser de femtossegundos VisuMax, ideal para a técnica SMILE, e o laser excimer Mel 80, utilizado em procedimentos PRK e Femtolasik. Essa combinação permite corrigir erros refrativos com eficiência, segurança e resultados superiores, adaptados às necessidades individuais de cada paciente.",
  },
  {
    title: "NGENUITY – Imagens 3D de Alta Definição para Cirurgias",
    resume: "O sistema NGENUITY permite que os cirurgiões realizem procedimentos oftalmológicos com imagens de altíssima resolução, exibidas em um monitor 3D. Além de melhorar a definição das estruturas oculares, o sistema reduz a intensidade de luz necessária, proporcionando maior conforto ao paciente e ao cirurgião.",
  },
  {
    title: "Ora System – Inteligência Artificial para Cirurgias de Catarata",
    resume: "O Ora System é uma tecnologia inovadora que utiliza inteligência artificial para selecionar, em tempo real, a lente intraocular ideal para cada paciente durante a cirurgia de catarata. Essa precisão aumenta significativamente as chances de independência de óculos após o procedimento.",
  },
  {
    title: "MIGS – Cirurgias de Glaucoma Miniinvasivas",
    resume: "As técnicas MIGS (Minimally Invasive Glaucoma Surgery) combinam o implante de stents oculares, como o i-Stent, e o laser de endoscopia (ECP), proporcionando redução eficaz da pressão ocular com menor risco de complicações. Também contamos com os lasers MP3 e SLT, que são procedimentos não invasivos e podem ser repetidos conforme necessário para o controle do glaucoma.",
  },
  {
    title: "Crosslinking Avedro – Tratamento Avançado para Ceratocone",
    resume: "O sistema Crosslinking Avedro utiliza luz ultravioleta pulsada para fortalecer o colágeno da córnea, sem a necessidade de remoção do epitélio corneano. Essa técnica moderna oferece mais conforto, menor risco de complicações e uma recuperação mais rápida para pacientes com ceratocone.",
  },
  {
    title: "Smile – Cirurgia Refrativa Avançada e Menos Invasiva",
    resume: "A técnica SMILE, realizada com exclusividade pelo VisuMax, é uma inovação em cirurgia refrativa a laser. Menos invasiva que o LASIK, não utiliza cortes de lâmina, reduz os riscos de complicações e oferece maior conforto e recuperação rápida. Além disso, corrige graus mais elevados sem causar olho seco definitivo, uma vantagem significativa para o paciente.",
  },
  {
    title: "Zeiss VisuMax – O Laser de Femtosegundos Mais Sofisticado",
    resume: "O Zeiss VisuMax é uma tecnologia versátil e de alta precisão, utilizada em transplantes de córnea, implantes de anéis para ceratocone, cirurgia de Femtolasik e, especialmente, na exclusiva técnica SMILE. É o equipamento mais avançado para correção visual com segurança e eficiência.",
  },
  {
    title: "Spa da Visão – Bem-Estar e Estética Ocular",
    resume: "No Spa da Visão, oferecemos tratamentos inovadores para o olho seco e procedimentos estéticos faciais. Entre os serviços estão plástica não cirúrgica de pálpebras com Plexr, aplicação de botox, preenchimentos e a blefaroplastia cirúrgica. Em um ambiente confortável e acolhedor, nossos pacientes recebem cuidados que aliam saúde ocular e estética, promovendo bem-estar e autoestima.",
  },
]

function techGrid(){
  const techContainer = document.querySelector('.tech-grid-container');

  techData.forEach(tech => {
    const card = document.createElement('div');
    card.classList.add('tech-card');
    card.innerHTML = `
      <div class="tech-card-title">
        <h2 class="tech-card-title">${tech.title}</h2>
      </div>
      <div class="tech-card-resume">
        <p>${tech.resume}</p>
      </div>
    `;
    techContainer.appendChild(card);
  });
}

window.onload = techGrid;