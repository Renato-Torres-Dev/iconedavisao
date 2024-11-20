const hotelData = [
  {
  img: "../assets/imgs/hotels/mar-hotel.png",
  title: "Mar Hotel",
  distance: "2,4Km do Aeroporto Internacional dos Guararapes.",
  hospital: "Ao lado do ÍCONE.",
  way: "Rua Barão de Souza Leão, 451",
  district: "Boa Viagem, Recife - PE",
  tel: "(81) 3302-4444",
  url: "https://www.marhotel.com.br",
  },
  {
  img: "../assets/imgs/hotels/ramada-hotel.png",
  title: "Ramada Hotel",
  distance: "3,3Km do Aeroporto Internacional dos Guararapes.",
  hospital: "180m do ÍCONE.",
  way: "Av. Visconde de Jequitinhonha, 1228",
  district: "Boa Viagem, Recife - PE",
  tel: "(81) 3127-5700",
  url: "https://www.wyndhamhotels.com/pt-br/ramada",
  },
  {
  img: "../assets/imgs/hotels/plaza-hotel.png",
  title: "Atlante Plaza",
  distance: "3,1Km do Aeroporto Internacional dos Guararapes.",
  hospital: "750m do ÍCONE.",
  way: "Av. Boa Viagem, 5426",
  district: "Boa Viagem, Recife - PE",
  tel: "(81) 3302-3333",
  url: "https://www.atlanteplaza.com.br",
  },
  {
  img: "../assets/imgs/hotels/bugan-hotel.png",
  title: "Bugan Hotel",
  distance: "2,9Km do Aeroporto Internacional dos Guararapes.",
  hospital: "500m do ÍCONE.",
  way: "Av. Engenheiro Domingos Ferreira, 4661",
  district: "Boa Viagem, Recife - PE",
  tel: "(81) 3256-7700",
  url: "http://buganhotel.com.br",
  },
]

function hotelGrid(){
  const hotelContainer = document.querySelector('.hotel-grid-container');

  hotelData.forEach(hotel => {
    const card = document.createElement('div');
    card.classList.add('hotel-card');
    card.innerHTML = `
      <div class="hotel-card-img">
        <img src="${hotel.img}"/>
        <h2>${hotel.title}</h2>
      </div>
      <div class="hotel-card-distance">
        <p>${hotel.distance}</p>
        <p>${hotel.hospital}</p>
      </div>
      <br>
      <div class="hotel-card-address">
        <p>${hotel.way}</p>
        <p>${hotel.district}</p>
        <p>Telefone: ${hotel.tel}</p>
      </div>
      <a href="${hotel.url}" target="_blank">
        <div class="hotel-card-btn">
          SITE DO HOTEL
        </div>
      </a>
    `;
    hotelContainer.appendChild(card);
  });
}

window.onload = hotelGrid;