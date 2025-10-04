// Estrutura JSON com HQs fictícias
const dados = [
  {
    "id": 1,
    "titulo": "Batman: O Cavaleiro das Trevas",
    "categoria": "Heróis",
    "autor": "Frank Miller",
    "data": "1986-06-10",
    "imagem": "https://i.pinimg.com/736x/b6/3b/ac/b63bac84c98dad1f6ed129674548fb24.jpg",
    "conteudo": "Em Gotham, o vigilante Batman retorna após anos de aposentadoria para enfrentar o crime e seus antigos inimigos. Uma HQ sombria e aclamada que redefiniu o herói."
  },
  {
    "id": 2,
    "titulo": "Homem-Aranha: De Volta ao Lar",
    "categoria": "Heróis",
    "autor": "J. Michael Straczynski",
    "data": "2001-07-15",
    "imagem": "http://static.hq-now.com/hqs/hqs/uploads/picture/image/253125/De_Volta_ao_Lar_-_001.jpg",
    "conteudo": "Peter Parker tenta equilibrar sua vida como estudante e super-herói, enfrentando novos desafios em Nova York e redescobrindo sua identidade como o Amigão da Vizinhança."
  },
  {
    "id": 3,
    "titulo": "Superman: Entre a Foice e o Martelo",
    "categoria": "Heróis",
    "autor": "Mark Millar",
    "data": "2003-04-01",
    "imagem": "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
    "conteudo": "Nesta história alternativa, a nave de Superman cai na União Soviética em vez dos EUA. O resultado é um herói moldado pela ideologia comunista."
  },
  {
    "id": 4,
    "titulo": "Mulher-Maravilha: Renascimento",
    "categoria": "Heróis",
    "autor": "Greg Rucka",
    "data": "2016-09-21",
    "imagem": "https://hqrock.files.wordpress.com/2014/07/wonder-woman-36-cover-2014-by-david-finch.jpg",
    "conteudo": "Diana de Themyscira redescobre suas origens enquanto enfrenta antigas e novas ameaças, reafirmando seu papel como símbolo de força e compaixão."
  },
  {
    "id": 5,
    "titulo": "Homem de Ferro: Extremis",
    "categoria": "Heróis",
    "autor": "Warren Ellis",
    "data": "2005-01-01",
    "imagem": "https://hqrock.files.wordpress.com/2012/08/iron-man-1-cover-2012.jpg",
    "conteudo": "Tony Stark precisa enfrentar uma nova biotecnologia perigosa enquanto questiona o futuro da humanidade e das armas de destruição em massa."
  },
  {
    "id": 6,
    "titulo": "Invencível: Volume 1",
    "categoria": "Heróis",
    "autor": "Robert Kirkman",
    "data": "2003-01-22",
    "imagem": "https://i.pinimg.com/736x/5a/53/3c/5a533cfca69098347bb4b9d08edfd25f.jpg",
    "conteudo": "Mark Grayson descobre seus poderes e tenta seguir os passos de seu pai, o herói Omni-Man, enquanto enfrenta verdades sombrias sobre sua família."
  }
];

// Montagem dinâmica da home
const container = document.querySelector(".row.g-4");
if (container) {
  container.innerHTML = "";
  dados.forEach((hq) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card border border-4 border-dark shadow h-100">
          <img src="${hq.imagem}" class="card-img-top border-bottom border-4 border-dark" alt="${hq.titulo}">
          <div class="card-body text-center">
            <h5 class="card-title" style="font-family:'Bangers', cursive;">${hq.titulo}</h5>
            <p class="text-muted small">${hq.autor}</p>
            <a href="detalhes.html?id=${hq.id}" class="btn btn-warning border border-3 border-dark fw-bold">Ver Detalhes</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Página de detalhes
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id) {
  const hq = dados.find(item => item.id == id);
  if (hq) {
    document.body.innerHTML = `
      <div class="container text-center py-5">
        <h1 class="fw-bold mb-4" style="font-family:'Bangers', cursive;">${hq.titulo}</h1>
        <img src="${hq.imagem}" class="img-fluid border border-4 border-dark mb-3" style="max-width:400px;">
        <p class="lead mb-3">${hq.conteudo}</p>
        <p><strong>Autor:</strong> ${hq.autor}</p>
        <p><strong>Categoria:</strong> ${hq.categoria}</p>
        <p><strong>Data:</strong> ${hq.data}</p>
        <a href="index.html" class="btn btn-danger border border-3 border-dark fw-bold mt-3">Voltar</a>
      </div>
    `;
  }
}
