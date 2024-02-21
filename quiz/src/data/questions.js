const data = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Tancredo Neves"],
    answer: "Deodoro da Fonseca",
  },
  {
    question: "Qual é a fórmula química da água?",
    options: ["H2O2", "CO2", "H2O", "CH4"],
    answer: "H2O",
  },
  {
    question: "Quem é considerado o pai da filosofia?",
    options: ["Sócrates", "Aristóteles", "Platão", "Heráclito"],
    answer: "Sócrates",
  },
  {
    question: "Qual é a capital da França?",
    options: ["Madrid", "Berlim", "Londres", "Paris"],
    answer: "Paris",
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "Monteiro Lobato", "Euclides da Cunha", "Cecília Meireles"],
    answer: "Machado de Assis",
  },
  {
    question: "Qual é a principal função do fígado no corpo humano?",
    options: ["Digestão", "Circulação", "Respiração", "Desintoxicação"],
    answer: "Desintoxicação",
  },
  {
    question: "Em que ano foi proclamada a República no Brasil?",
    options: ["1888", "1889", "1890", "1891"],
    answer: "1889",
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: "Júpiter",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Quem foi o autor da obra 'Grande Sertão: Veredas'?",
    options: ["Machado de Assis", "Carlos Drummond de Andrade", "Guimarães Rosa", "Clarice Lispector"],
    answer: "Guimarães Rosa",
  },
  {
    question: "Qual é o segundo maior país do mundo em área territorial?",
    options: ["Estados Unidos", "Canadá", "China", "Rússia"],
    answer: "Canadá",
  },
  {
    question: "Quem descobriu a penicilina?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Antoine Lavoisier"],
    answer: "Alexander Fleming",
  },
  {
    question: "Qual é o valor de π (pi) aproximadamente?",
    options: ["3.14", "2.71", "1.62", "4.20"],
    answer: "3.14",
  },
  {
    question: "Quem é conhecido como 'Pai da Computação'?",
    options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    answer: "Alan Turing",
  },
  {
    question: "Qual é o maior rio do mundo em volume de água?",
    options: ["Rio Nilo", "Rio Amazonas", "Rio Yangtzé", "Rio Mississipi"],
    answer: "Rio Amazonas",
  },
  {
    question: "Quem escreveu 'Os Lusíadas'?",
    options: ["Fernando Pessoa", "Luís de Camões", "José Saramago", "Eça de Queirós"],
    answer: "Luís de Camões",
  },
  {
    question: "Quem foi o autor da teoria da relatividade?",
    options: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Niels Bohr"],
    answer: "Albert Einstein",
  },
  {
    question: "Qual é o maior oceano do planeta Terra?",
    options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    answer: "Pacífico",
  },
  {
    question: "Quem é conhecido como o 'pai da informática'?",
    options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Mark Zuckerberg"],
    answer: "Alan Turing",
  },
  {
    question: "Qual é o país mais populoso do mundo?",
    options: ["Índia", "China", "Estados Unidos", "Brasil"],
    answer: "China",
  },
  {
    question: "Qual é a fórmula química do oxigênio?",
    options: ["O2", "CO2", "H2O", "N2"],
    answer: "O2",
  },
  {
    question: "Quem escreveu 'O Príncipe'?",
    options: ["Machiavelli", "Sun Tzu", "Aristóteles", "Platão"],
    answer: "Machiavelli",
  },
  {
    question: "Qual é a capital da Austrália?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: "Quem foi o primeiro homem a pisar na Lua?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    answer: "Neil Armstrong",
  },
  {
    question: "Em que ano ocorreu a Revolução Francesa?",
    options: ["1776", "1789", "1815", "1848"],
    answer: "1789",
  },
  {
    question: "Qual é o maior deserto do mundo?",
    options: ["Saara", "Atacama", "Gobi", "Antártica"],
    answer: "Antártica",
  },
  {
    question: "Quem foi o fundador da Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
    answer: "Bill Gates",
  },
  {
    question: "Qual é o rio mais longo do mundo?",
    options: ["Nilo", "Amazonas", "Yangtzé", "Mississipi"],
    answer: "Amazonas",
  },
  {
    question: "Quem é conhecido como o 'pai da medicina'?",
    options: ["Hipócrates", "Galen", "Avicena", "Paracelso"],
    answer: "Hipócrates",
  },
  {
    question: "Quem foi o líder sul-africano vencedor do Prêmio Nobel da Paz?",
    options: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "F.W. de Klerk"],
    answer: "Nelson Mandela",
  },
  {
    question: "Qual é a camada mais externa da atmosfera terrestre?",
    options: ["Estratosfera", "Mesosfera", "Ionosfera", "Exosfera"],
    answer: "Exosfera",
  },
  {
    question: "Quem escreveu 'Os Lusíadas'?",
    options: ["Camões", "Eça de Queirós", "Fernando Pessoa", "Machado de Assis"],
    answer: "Camões",
  },
  {
    question: "Qual é o maior animal terrestre?",
    options: ["Elefante africano", "Girafa", "Rinoceronte", "Hipopótamo"],
    answer: "Elefante africano",
  },
  {
    question: "Quem foi o pintor renascentista italiano conhecido por suas obras como 'O Nascimento de Vênus'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Sandro Botticelli"],
    answer: "Sandro Botticelli",
  },
  {
    question: "Qual é o elemento mais abundante na crosta terrestre?",
    options: ["Ferro", "Silício", "Alumínio", "Oxigênio"],
    answer: "Oxigênio",
  },
  {
    question: "Qual é a capital do Japão?",
    options: ["Pequim", "Seul", "Tóquio", "Bangcoc"],
    answer: "Tóquio",
  },
  {
    question: "Quem foi o cientista que desenvolveu a teoria da evolução das espécies?",
    options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Thomas Huxley"],
    answer: "Charles Darwin",
  },
  {
    question: "Qual é o maior planeta do sistema solar em termos de tamanho?",
    options: ["Júpiter", "Saturno", "Netuno", "Urano"],
    answer: "Júpiter",
  },
  {
    question: "Quem foi o primeiro imperador romano?",
    options: ["Júlio César", "Augusto", "Nero", "Trajano"],
    answer: "Augusto",
  },
  {
    question: "Quem foi o primeiro imperador romano?",
    options: ["Caio Júlio César", "Marco Aurélio", "Nero", "Augusto"],
    answer: "Augusto",
  },
  {
    question: "Qual é a unidade básica da estrutura de DNA?",
    options: ["Átomo", "Célula", "Gene", "Nucleotídeo"],
    answer: "Nucleotídeo",
  },
  {
    question: "Quem pintou 'A Noite Estrelada'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
    answer: "Vincent van Gogh",
  },
  {
    question: "Qual é a moeda oficial do Japão?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    question: "Quem é o autor de 'Cem Anos de Solidão'?",
    options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Isabel Allende"],
    answer: "Gabriel García Márquez",
  },
  {
    question: "Qual é o segundo planeta do sistema solar?",
    options: ["Vênus", "Marte", "Júpiter", "Saturno"],
    answer: "Vênus",
  },
  {
    question: "Quem foi a primeira mulher a ganhar dois prêmios Nobel?",
    options: ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Barbara McClintock"],
    answer: "Marie Curie",
  },
  {
    question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
    options: ["Fotossíntese", "Respiração celular", "Mitose", "Fermentação"],
    answer: "Fotossíntese",
  },
  {
    question: "Qual é a capital da Argentina?",
    options: ["Rio de Janeiro", "Buenos Aires", "Lima", "Santiago"],
    answer: "Buenos Aires",
  },
  {
    question: "Quem é considerado o pai da psicanálise?",
    options: ["Sigmund Freud", "Carl Jung", "Alfred Adler", "Erik Erikson"],
    answer: "Sigmund Freud",
  }
];

export default data;