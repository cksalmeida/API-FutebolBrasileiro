import express from 'express'
import mongoose from 'mongoose';
import Team from './models/teams.js';
const app = express();

// Iniciando a conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/API-FutebolBrasileiro")

//Config Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  const teams = [
    {
      "name": "Athletico-PR",
      "city": "Curitiba",
      "stadium": "Arena da Baixada",
      "foundation": "1924-02-26",
      "colors": ["Preto", "Vermelho"],
      "coach": "Martín Varini",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.athletico.com.br",
      "history": "O Club Athletico Paranaense é um dos clubes mais importantes do futebol paranaense."
    },
    {
      "name": "Atlético-GO",
      "city": "Goiânia",
      "stadium": "Estádio Antônio Accioly",
      "foundation": "1937-04-02",
      "colors": ["Vermelho", "Preto"],
      "coach": "Vagner Mancini",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.atleticogo.com.br",
      "history": "O Atlético Clube Goianiense é um clube de futebol da cidade de Goiânia."
    },
    {
      "name": "Atlético-Mineiro",
      "city": "Belo Horizonte",
      "stadium": "Arena MRV",
      "foundation": "1908-03-25",
      "colors": ["Preto", "Branco"],
      "coach": "Gabriel Milito",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://atletico.com.br",
      "history": "O Atlético Mineiro é um clube de futebol da cidade de Belo Horizonte."
    },
    {
      "name": "Botafogo",
      "city": "Rio de Janeiro",
      "stadium": "Estádio Nilton Santos",
      "foundation": "1904-07-01",
      "colors": ["Branco", "Preto"],
      "coach": "Artur Jorge",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.botafogo.com.br",
      "history": "O Botafogo de Futebol e Regatas é um clube de futebol do Rio de Janeiro."
    },
    {
      "name": "Bahia",
      "city": "Salvador",
      "stadium": "Arena Fonte Nova",
      "foundation": "1931-01-01",
      "colors": ["Branco", "Azul", "Vermelho"],
      "coach": "Rogério Ceni",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.ecbahia.com.br",
      "history": "O Esporte Clube Bahia é um clube de futebol da cidade de Salvador."
    },
    {
      "name": "Cuiabá",
      "city": "Cuiabá",
      "stadium": "Arena Pantanal",
      "foundation": "2001-12-12",
      "colors": ["Verde", "Amarelo"],
      "coach": "Bernardo Franco",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.cuiabaesporteclube.com.br",
      "history": "O Cuiabá Esporte Clube é um clube de futebol da cidade de Cuiabá."
    },
    {
      "name": "Corinthians",
      "city": "São Paulo",
      "stadium": "Neo Química Arena",
      "foundation": "1910-09-01",
      "colors": ["Preto", "Branco"],
      "coach": "Ramón Díaz",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.corinthians.com.br",
      "history": "O Sport Club Corinthians Paulista é um dos maiores clubes do Brasil."
    },
    {
      "name": "Criciúma",
      "city": "Criciúma",
      "stadium": "Estádio Heriberto Hülse",
      "foundation": "1947-05-13",
      "colors": ["Amarelo", "Preto"],
      "coach": "Claudio Tencati",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.criciumaec.com.br",
      "history": "O Criciúma Esporte Clube é um clube de futebol da cidade de Criciúma."
    },
    {
      "name": "Cruzeiro",
      "city": "Belo Horizonte",
      "stadium": "Mineirão",
      "foundation": "1921-01-02",
      "colors": ["Azul", "Branco"],
      "coach": "Fernando Seabra",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.cruzeiro.com.br",
      "history": "O Cruzeiro Esporte Clube é um dos clubes mais tradicionais do futebol brasileiro."
    },
    {
      "name": "Flamengo",
      "city": "Rio de Janeiro",
      "stadium": "Maracanã",
      "foundation": "1895-11-17",
      "colors": ["Vermelho", "Preto"],
      "coach": "Tite",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.flamengo.com.br",
      "history": "O Clube de Regatas do Flamengo é um dos clubes mais populares do Brasil, sediado no Rio de Janeiro."
    },
    {
      "name": "Fluminense",
      "city": "Rio de Janeiro",
      "stadium": "Maracanã",
      "foundation": "1902-07-21",
      "colors": [ "Verde", "Branco", "Grená"],
      "coach": "Mano Menezes",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.fluminense.com.br",
      "history": "O Fluminense Football Club é um dos clubes mais tradicionais do Rio de Janeiro."
    },
    {
      "name": "Fortaleza",
      "city": "Fortaleza",
      "stadium": "Arena Castelão",
      "foundation": "1918-10-18",
      "colors": [ "Azul", "Vermelho", "Branco"],
      "coach": "Juan Pablo Vojvoda",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.fortalezaec.com.br",
      "history": "O Fortaleza Esporte Clube é um clube de futebol da cidade de Fortaleza."
    },
    {
      "name": "Grêmio",
      "city": "Porto Alegre",
      "stadium": "Arena do Grêmio",
      "foundation": "1903-09-15",
      "colors": ["Azul", "Preto", "Branco"],
      "coach": "Renato Portaluppi",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.gremio.net",
      "history": "O Grêmio Foot-Ball Porto Alegrense é um clube de futebol brasileiro da cidade de Porto Alegre."
    },
    {
      "name": "Internacional",
      "city": "Porto Alegre",
      "stadium": "Beira-Rio",
      "foundation": "1909-04-04",
      "colors": ["Vermelho", "Branco"],
      "coach": "Eduardo Coudet",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.internacional.com.br",
      "history": "O Sport Club Internacional é um dos clubes mais tradicionais do Brasil, sediado em Porto Alegre."
    },
    {
      "name": "Juventude",
      "city": "Caxias do Sul",
      "stadium": "Estádio Alfredo Jaconi",
      "foundation": "1913-06-29",
      "colors": ["Verde", "Branco"],
      "coach": "Jair Ventura",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.juventude.com.br",
      "history": "O Esporte Clube Juventude é um clube de futebol da cidade de Caxias do Sul."
    },
    {
      "name": "Palmeiras",
      "city": "São Paulo",
      "stadium": "Allianz Parque",
      "foundation": "1914-08-26",
      "colors": ["Verde", "Branco"],
      "coach": "Abel Ferreira",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.palmeiras.com.br",
      "history": "A Sociedade Esportiva Palmeiras é um clube de futebol brasileiro com sede em São Paulo."
    },
    {
      "name": "Red Bull Bragantino",
      "city": "Bragança Paulista",
      "stadium": "Estádio Nabi Abi Chedid",
      "foundation": "1928-04-08",
      "colors": ["Vermelho", "Branco"],
      "coach": "Pedro Caixinha",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.redbullbragantino.com.br",
      "history": "O Red Bull Bragantino é um clube de futebol brasileiro da cidade de Bragança Paulista."
    },
    {
      "name": "São Paulo",
      "city": "São Paulo",
      "stadium": "Morumbi",
      "foundation": "1930-01-25",
      "colors": ["Branco", "Preto", "Vermelho"],
      "coach": "Luis Zubeldía",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.saopaulofc.net",
      "history": "O São Paulo Futebol Clube é um dos clubes mais tradicionais do futebol brasileiro."
    },
    {
      "name": "Vasco",
      "city": "Rio de Janeiro",
      "stadium": "São Januário",
      "foundation": "1898-08-21",
      "colors": ["Vermelho", "Preto"],
      "coach": "Rafael Paiva",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.vasco.com.br",
      "history": "O Club de Regatas Vasco da Gama é um dos clubes mais tradicionais do Rio de Janeiro."
    },
    {
      "name": "Vitória",
      "city": "Salvador",
      "stadium": "Estádio Barradão",
      "foundation": "1899-05-13",
      "colors": ["Vermelho", "Preto"],
      "coach": "Thiago Carpini",
      "titles": [],
      "logoUrl": "#",
      "officialWebsite": "https://www.ecvitoria.com.br",
      "history": "O Esporte Clube Vitória é um dos clubes de futebol mais tradicionais da Bahia."
    }
  ]
  res.json(teams);
});

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em localhost:${port}`);
});
