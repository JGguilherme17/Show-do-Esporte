// Banco de perguntas com dificuldade progressiva
const questions = [
    // FÁCIL (1-40)
    {
        question: "Qual time ganhou a Copa de 2002?",
        options: ["Alemanha", "Brasil", "França", "Itália"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos anéis tem o logo da NBA?",
        options: ["3", "5", "7", "9"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Em qual esporte se usa uma peteca?",
        options: ["Vôlei", "Badminton", "Tênis", "Futebol"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de futebol em campo?",
        options: ["9", "10", "11", "12"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual destes NÃO é um esporte olímpico?",
        options: ["Golfe", "Cricket", "Natação", "Atletismo"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual o nome do maior estádio de futebol do Brasil?",
        options: ["Maracanã", "Morumbi", "Mineirão", "Arena Corinthians"],
        answer: 0,
        difficulty: "fácil"
    },
    {
        question: "Quantos sets tem uma partida de vôlei masculino?",
        options: ["3", "5", "7", "9"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual país inventou o futebol?",
        options: ["Brasil", "França", "Inglaterra", "Itália"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual esporte usa um 'birdie'?",
        options: ["Tênis", "Badminton", "Golfe", "Beisebol"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de basquete?",
        options: ["5", "6", "7", "8"],
        answer: 0,
        difficulty: "fácil"
    },
    {
        question: "Qual é o esporte mais popular do mundo?",
        options: ["Futebol", "Basquete", "Tênis", "Vôlei"],
        answer: 0,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores tem um time de vôlei em quadra?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual destes NÃO é um clube de futebol brasileiro?",
        options: ["Flamengo", "Barcelona", "Corinthians", "Palmeiras"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual país sediou as Olimpíadas de 2012?",
        options: ["China", "Brasil", "Reino Unido", "Rússia"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual esporte usa raquete e uma bola amarela?",
        options: ["Tênis", "Golfe", "Beisebol", "Hóquei"],
        answer: 0,
        difficulty: "fácil"
    },
    {
        question: "Quantos tempos tem uma partida de futebol?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual destes é um esporte de inverno?",
        options: ["Surfe", "Esqui", "Ciclismo", "Atletismo"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual animal representa a Juventus?",
        options: ["Leão", "Touro", "Girafa", "Zebra"],
        answer: 3,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de beisebol em campo?",
        options: ["7", "8", "9", "10"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual país ganhou mais Copas do Mundo?",
        options: ["Alemanha", "Brasil", "Itália", "Argentina"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual esporte usa um bastão e uma bola pequena?",
        options: ["Golfe", "Cricket", "Beisebol", "Hóquei"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Quantos pontos vale um touchdown no futebol americano?",
        options: ["3", "6", "9", "12"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual destes esportes usa rede?",
        options: ["Tênis", "Vôlei", "Basquete", "Futebol"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual é o nome do maior torneio de tênis do mundo?",
        options: ["US Open", "Wimbledon", "Roland Garros", "Australian Open"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de handebol?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual país inventou o basquete?",
        options: ["Canadá", "Estados Unidos", "Inglaterra", "França"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos buracos tem um campo de golfe padrão?",
        options: ["9", "18", "27", "36"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual destes esportes usa cavalos?",
        options: ["Polo", "Golfe", "Rúgbi", "Cricket"],
        answer: 0,
        difficulty: "fácil"
    },
    {
        question: "Qual time brasileiro é conhecido como 'Galo'?",
        options: ["Fluminense", "Atlético-MG", "Internacional", "Cruzeiro"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de futsal?",
        options: ["4", "5", "6", "7"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual esporte é conhecido como 'esporte rei' no Brasil?",
        options: ["Vôlei", "Futebol", "Basquete", "Tênis"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual país sediou as Olimpíadas de 2008?",
        options: ["Grécia", "China", "Austrália", "Estados Unidos"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos rounds tem uma luta de boxe profissional?",
        options: ["6", "8", "10", "12"],
        answer: 3,
        difficulty: "fácil"
    },
    {
        question: "Qual destes esportes usa uma bola oval?",
        options: ["Futebol", "Rúgbi", "Basquete", "Vôlei"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Qual time de futebol é conhecido como 'Peixe'?",
        options: ["Santos", "Fluminense", "Botafogo", "Vasco"],
        answer: 0,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de pólo aquático?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual destes NÃO é um esporte olímpico?",
        options: ["Judô", "Karatê", "Muay Thai", "Taekwondo"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual país ganhou a Copa do Mundo de 2018?",
        options: ["Alemanha", "Brasil", "França", "Croácia"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de críquete?",
        options: ["9", "10", "11", "12"],
        answer: 2,
        difficulty: "fácil"
    },
    {
        question: "Qual time de futebol é conhecido como 'Colorado'?",
        options: ["Grêmio", "Internacional", "Atlético-PR", "Coritiba"],
        answer: 1,
        difficulty: "fácil"
    },
    {
        question: "Quantos jogadores formam um time de hóquei no gelo?",
        options: ["4", "5", "6", "7"],
        answer: 2,
        difficulty: "fácil"
    },

    // MÉDIO (41-80)
    {
        question: "Quem tem mais títulos na F1?",
        options: ["Schumacher", "Hamilton", "Senna", "Prost"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual país sediou as Olimpíadas de 2016?",
        options: ["China", "Reino Unido", "Brasil", "Rússia"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Em que ano Ayrton Senna conquistou seu primeiro título na F1?",
        options: ["1988", "1990", "1991", "1994"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual time ganhou a primeira Copa do Mundo?",
        options: ["Brasil", "Uruguai", "Itália", "Alemanha"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Quantos Mundiais de Clubes tem o Barcelona?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual piloto detém o recorde de mais vitórias no GP do Brasil de F1?",
        options: ["Ayrton Senna", "Alain Prost", "Michael Schumacher", "Lewis Hamilton"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Em que ano o basquete se tornou esporte olímpico?",
        options: ["1936", "1948", "1952", "1960"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Qual jogador fez o gol mais rápido da história das Copas?",
        options: ["Hakan Şükür", "Bryan Robson", "Clint Dempsey", "Václav Mašek"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Quantos títulos mundiais tem a seleção alemã de futebol?",
        options: ["3", "4", "5", "6"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual tenista possui o recorde de mais títulos de Grand Slam?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual país venceu o primeiro Mundial de Clubes da FIFA?",
        options: ["Brasil", "Inglaterra", "Espanha", "Itália"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Em que ano o vôlei de praia estreou nas Olimpíadas?",
        options: ["1992", "1996", "2000", "2004"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual jogador brasileiro foi artilheiro da Champions League em 2012?",
        options: ["Neymar", "Kaká", "Adriano", "Júlio Baptista"],
        answer: 3,
        difficulty: "médio"
    },
    {
        question: "Quantos Mundiais de Clubes tem o Real Madrid?",
        options: ["4", "5", "6", "7"],
        answer: 3,
        difficulty: "médio"
    },
    {
        question: "Qual nadador brasileiro ganhou ouro nos 50m livre em 2016?",
        options: ["César Cielo", "Bruno Fratus", "Nicholas Santos", "Não houve ouro brasileiro"],
        answer: 3,
        difficulty: "médio"
    },
    {
        question: "Qual time venceu a primeira edição da Libertadores?",
        options: ["Peñarol", "Santos", "Independiente", "Olimpia"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Em que ano o Brasil ganhou sua primeira medalha de ouro olímpica no vôlei masculino?",
        options: ["1992", "1996", "2000", "2004"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual jogador fez 1000 gols no futebol?",
        options: ["Pelé", "Romário", "Messi", "Cristiano Ronaldo"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Quantos títulos da NBA tem o Chicago Bulls?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual país sediou a Copa do Mundo de 2010?",
        options: ["Alemanha", "África do Sul", "Brasil", "Rússia"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual tenista venceu o Golden Slam em 1988?",
        options: ["Steffi Graf", "Martina Navratilova", "Chris Evert", "Serena Williams"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Quantos jogadores brasileiros foram MVP da NBA?",
        options: ["1", "2", "3", "Nenhum"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual time ganhou a Libertadores de 2019?",
        options: ["River Plate", "Boca Juniors", "Flamengo", "Palmeiras"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Em que ano o skate se tornou olímpico?",
        options: ["2016", "2018", "2020", "2022"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual jogador marcou o gol do título brasileiro na Copa de 2002?",
        options: ["Ronaldo", "Rivaldo", "Ronaldinho Gaúcho", "Cafu"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Quantas vezes o Brasil venceu a Copa América?",
        options: ["7", "8", "9", "10"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual país venceu o primeiro Mundial de Clubes no formato atual?",
        options: ["Brasil", "Inglaterra", "Espanha", "Itália"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Em que ano o surfe estreou nas Olimpíadas?",
        options: ["2012", "2016", "2020", "2024"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual jogador foi o mais jovem a jogar uma Copa do Mundo?",
        options: ["Pelé", "Norman Whiteside", "Samuel Eto'o", "Lionel Messi"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Quantos títulos da Champions League tem o Bayern de Munique?",
        options: ["4", "5", "6", "7"],
        answer: 2,
        difficulty: "médio"
    },
    {
        question: "Qual país venceu o primeiro Mundial Feminino de Futebol?",
        options: ["Estados Unidos", "Noruega", "Alemanha", "Brasil"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Em que ano o Brasil conquistou o ouro no futebol feminino nas Olimpíadas?",
        options: ["2004", "2008", "2012", "Nunca conquistou"],
        answer: 3,
        difficulty: "médio"
    },
    {
        question: "Qual jogador tem o recorde de gols em uma única edição da Champions League?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Karim Benzema"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Quantas vezes a seleção brasileira perdeu uma final de Copa do Mundo?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual país sediou os Jogos Pan-Americanos de 2007?",
        options: ["Brasil", "Argentina", "México", "Canadá"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Qual tenista brasileiro chegou mais vezes às semifinais de Roland Garros?",
        options: ["Gustavo Kuerten", "Thomaz Bellucci", "Fernando Meligeni", "Carlos Alcaraz"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Quantos títulos mundiais tem a seleção argentina de futebol?",
        options: ["2", "3", "4", "5"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual jogador fez o gol mais rápido da história da Premier League?",
        options: ["Shane Long", "Ledley King", "Philippe Coutinho", "Toby Alderweireld"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Em que ano o Brasil conquistou o primeiro ouro olímpico no vôlei feminino?",
        options: ["2008", "2012", "2016", "2020"],
        answer: 1,
        difficulty: "médio"
    },
    {
        question: "Qual país tem mais títulos da Copa Davis?",
        options: ["Estados Unidos", "Austrália", "Espanha", "França"],
        answer: 0,
        difficulty: "médio"
    },
    {
        question: "Quantas vezes o Brasil chegou à final da Copa das Confederações?",
        options: ["3", "4", "5", "6"],
        answer: 1,
        difficulty: "médio"
    },

    // DIFÍCIL (81-100)
    {
        question: "Em qual Olimpíada o Brasil ganhou ouro no futebol?",
        options: ["2004", "2008", "2012", "2016"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Qual nadador possui o maior número de medalhas olímpicas?",
        options: ["Michael Phelps", "Mark Spitz", "Ian Thorpe", "César Cielo"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual time de futebol é conhecido como 'La Vecchia Signora'?",
        options: ["Milan", "Inter de Milão", "Juventus", "Roma"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Quantos títulos mundiais tem a seleção italiana de futebol?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Qual piloto brasileiro venceu o GP de Mônaco em 1989?",
        options: ["Senna", "Piquet", "Massa", "Barrichello"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual piloto liderou mais voltas na história da F1 sem vencer um GP?",
        options: ["Nick Heidfeld", "Chris Amon", "Stefan Bellof", "Romain Grosjean"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual jogador marcou o gol mais rápido em Copas (após 11 segundos)?",
        options: ["Hakan Şükür", "Clint Dempsey", "Václav Mašek", "Bryan Robson"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Quantos pontos Wilt Chamberlain marcou em seu jogo recorde de 100 pontos?",
        options: ["98", "100", "102", "104"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual clube brasileiro possui o maior jejum de rebaixamento?",
        options: ["Santos", "São Paulo", "Flamengo", "Cruzeiro"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual tenista venceu Roland Garros sem perder nenhum set em 2020?",
        options: ["Rafael Nadal", "Novak Djokovic", "Dominic Thiem", "Iga Świątek"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Quantas vezes o Brasil perdeu pênaltis em Copas do Mundo?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Qual jogador fez o gol mais rápido da Premier League (7.69 segundos)?",
        options: ["Shane Long", "Ledley King", "Philippe Coutinho", "Toby Alderweireld"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual país tem o recorde de medalhas em uma única Olimpíada (239 em 1980)?",
        options: ["URSS", "EUA", "China", "Alemanha Oriental"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual clube tem o maior jejum de títulos brasileiros?",
        options: ["Vasco", "Botafogo", "Fluminense", "Bahia"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Quantos jogadores marcaram 5 gols em uma partida da Champions League?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual piloto teve a maior diferença de idade para um companheiro de equipe na F1?",
        options: ["Juan Manuel Fangio", "Stirling Moss", "Kimi Räikkönen", "Fernando Alonso"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Qual jogador disputou mais finais de Champions sem nunca vencer?",
        options: ["Gianluigi Buffon", "Karl-Heinz Rummenigge", "Roberto Baggio", "Oliver Kahn"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Quantas vezes o Brasil perdeu para a Argentina em Copas?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual clube inglês foi campeão invicto por 3 temporadas consecutivas?",
        options: ["Manchester United", "Liverpool", "Arsenal", "Preston North End"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Qual tenista venceu mais jogos consecutivos em Grand Slams no século XXI?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Quantos jogadores marcaram em 3 Copas consecutivas pelo Brasil?",
        options: ["3", "4", "5", "6"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Qual país tem o recorde de pênaltis perdidos em Copas?",
        options: ["Espanha", "Inglaterra", "Itália", "Argentina"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual clube brasileiro tem o maior número de vice-campeonatos brasileiros?",
        options: ["Palmeiras", "Cruzeiro", "Internacional", "Grêmio"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Quantas vezes o Brasil perdeu para a França em Copas?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual jogador tem o recorde de gols em uma única edição da Copa América?",
        options: ["Zizinho", "Pelé", "Ronaldo", "Gabriel Batistuta"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Qual clube tem o recorde de invencibilidade no Brasileirão?",
        options: ["Flamengo", "Palmeiras", "Corinthians", "Cruzeiro"],
        answer: 3,
        difficulty: "difícil"
    },
    {
        question: "Quantos jogadores marcaram hat-tricks em Copas pelo Brasil?",
        options: ["4", "5", "6", "7"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual país tem o recorde de gols em uma única partida de Copa?",
        options: ["Hungria", "Brasil", "Alemanha", "Argentina"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual clube detém o recorde de títulos consecutivos da Libertadores?",
        options: ["Independiente", "Boca Juniors", "River Plate", "Estudiantes"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Quantos jogadores brasileiros marcaram em finais de Champions?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        difficulty: "difícil"
    },
    {
        question: "Qual seleção eliminou o Brasil mais vezes em Copas?",
        options: ["França", "Argentina", "Holanda", "Itália"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual clube tem o recorde de vitórias consecutivas na Libertadores?",
        options: ["Santos", "Flamengo", "Palmeiras", "São Paulo"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Quantos jogadores marcaram gols olímpicos em Copas?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        difficulty: "difícil"
    },
    {
        question: "Qual país tem o recorde de pênaltis defendidos em Copas?",
        options: ["Alemanha", "Argentina", "Brasil", "Itália"],
        answer: 0,
        difficulty: "difícil"
    },
    {
        question: "Qual clube brasileiro tem o melhor aproveitamento em uma edição do Brasileirão?",
        options: ["Corinthians 2017", "Palmeiras 2018", "Santos 2002", "Cruzeiro 2003"],
        answer: 3,
        difficulty: "difícil"
    }
];

// Variáveis do jogo
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let timer;
let timeLeft = 10;
let timerActive = false;

// Elementos DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const totalPointsElement = document.getElementById('total-points');
const messageElement = document.getElementById('message');
const timerBar = document.querySelector('.timer-bar');
const timerText = document.querySelector('.timer-text');

// Embaralha array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event Listeners
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartGame);

// Inicia o jogo
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    updateScore();

    // Embaralha e seleciona 10 perguntas
    const shuffled = [...questions];
    shuffleArray(shuffled);
    selectedQuestions = shuffled.slice(0, 10);

    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    showQuestion();
}

// Mostra a pergunta atual
function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    questionElement.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    feedbackElement.textContent = '';
    nextBtn.classList.add('hidden');
    startTimer();
}

// Inicia o timer
function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    updateTimerDisplay();
    timerActive = true;

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerActive = false;
            timeUp();
        }
    }, 1000);
}

// Atualiza a exibição do timer
function updateTimerDisplay() {
    timerBar.style.width = `${(timeLeft / 10) * 100}%`;
    timerText.textContent = `${timeLeft}s`;

    if (timeLeft <= 3) {
        timerBar.style.background = '#FF4500';
        timerText.classList.add('blink');
    } else {
        timerBar.style.background = 'linear-gradient(to right, #FFD700, #FF4500)';
        timerText.classList.remove('blink');
    }
}

function timeUp() {
    clearInterval(timer);
    timerActive = false;

    const question = selectedQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    options[question.answer].classList.add('correct');
    feedbackElement.textContent = "Tempo esgotado!";
    nextBtn.classList.remove('hidden');
}

// Processa a resposta selecionada
function selectAnswer(selectedIndex) {
    if (!timerActive) return;

    clearInterval(timer);
    timerActive = false;

    const question = selectedQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    if (selectedIndex === question.answer) {
        options[selectedIndex].classList.add('correct');
        correctAnswers++;

        switch(question.difficulty) {
            case 'fácil': score += 100; break;
            case 'médio': score += 300; break;
            case 'difícil': score += 500; break;
        }

        feedbackElement.textContent = "Correto!";
        updateScore();
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.answer].classList.add('correct');
        feedbackElement.textContent = "Errado!";
    }

    nextBtn.classList.remove('hidden');
}

// Próxima pergunta
function nextQuestion() {
    clearInterval(timer);
    currentQuestionIndex++;
    if (currentQuestionIndex < 10 && currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

// Finaliza o jogo
function endGame() {
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');

    correctCountElement.textContent = correctAnswers;
    totalPointsElement.textContent = score;

    if (correctAnswers === 10) {
        messageElement.textContent = "Perfeito! Você é um expert!";
    } else if (correctAnswers >= 7) {
        messageElement.textContent = "Muito bom! Quase perfeito!";
    } else if (correctAnswers >= 4) {
        messageElement.textContent = "Bom trabalho! Continue praticando!";
    } else {
        messageElement.textContent = "Você pode melhorar! Tente novamente!";
    }

    const name = prompt("Digite seu apelido:");
    saveScoreToCookie(name, score);

    showHighScores();
}

// Reinicia o jogo
function restartGame() {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Atualiza a pontuação
function updateScore() {
    scoreElement.textContent = score;
}

// Salva a pontuação no cookie (com expiração de 1 ano)
function saveScoreToCookie(name, score) {
    let highScores = getHighScoresFromCookie() || [];

    // Adiciona a nova pontuação à lista
    highScores.push({ name, score });

    // Ordena por pontuação (do maior para o menor)
    highScores.sort((a, b) => b.score - a.score);

    // Mantém apenas os top 10
    highScores = highScores.slice(0, 10);

    // Salva os dados no cookie, com expiração de 1 ano
    document.cookie = `highScores=${JSON.stringify(highScores)}; expires=${getExpirationDate(365)}; path=/`;
}

// Função para configurar a data de expiração (em dias)
function getExpirationDate(days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expira após "days" dias
    return date.toUTCString();
}

// Recupera os dados do cookie
function getHighScoresFromCookie() {
    const name = 'highScores=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length)); // Retorna o conteúdo do cookie como um array
        }
    }
    return null; // Retorna null caso não haja pontuações salvas
}

// Exibe o Top 10
function showHighScores() {
    const highScores = getHighScoresFromCookie() || [];
    const highScoresList = document.getElementById('high-scores');

    highScoresList.innerHTML = '';  // Limpa a lista existente

    highScores.forEach((score, index) => {
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `${index + 1}. ${score.name} - ${score.score} pontos`;
        highScoresList.appendChild(scoreItem);
    });
}
