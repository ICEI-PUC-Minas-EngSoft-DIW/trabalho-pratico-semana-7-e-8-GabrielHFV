// Estrutura JSON com HQs fictícias
const hqs = [
  {
    id: 1,
    titulo: "Batman",
    imagem: "https://i.pinimg.com/736x/b6/3b/ac/b63bac84c98dad1f6ed129674548fb24.jpg"
  },
  {
    id: 2,
    titulo: "Homem-Aranha",
    imagem: "http://static.hq-now.com/hqs/hqs/uploads/picture/image/253125/De_Volta_ao_Lar_-_001.jpg"
  },
  {
    id: 3,
    titulo: "Superman",
    imagem: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
  },
  {
    id: 4,
    titulo: "Mulher-Maravilha",
    imagem: "https://hqrock.files.wordpress.com/2014/07/wonder-woman-36-cover-2014-by-david-finch.jpg"
  },
  {
    id: 5,
    titulo: "Homem de Ferro",
    imagem: "https://hqrock.files.wordpress.com/2012/08/iron-man-1-cover-2012.jpg"
  },
  {
    id: 6,
    titulo: "Invencível",
    imagem: "https://i.pinimg.com/736x/5a/53/3c/5a533cfca69098347bb4b9d08edfd25f.jpg"
  }
];

// Montar cards dinamicamente
const container = document.querySelector(".row.g-4");
container.innerHTML = "";

hqs.forEach((hq) => {
  const card = `
    <div class="col-md-4">
      <div class="card border border-4 border-dark shadow h-100">
        <img src="${hq.imagem}" class="card-img-top border-bottom border-4 border-dark" alt="${hq.titulo}">
        <div class="card-body text-center">
          <h5 class="card-title" style="font-family:'Bangers', cursive;">${hq.titulo}</h5>
          <a href="detalhes.html?id=${hq.id}" class="btn btn-warning border border-3 border-dark fw-bold">Ver Detalhes</a>
        </div>
      </div>
    </div>
  `;
  container.innerHTML += card;
});
