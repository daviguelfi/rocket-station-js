// DESAFIO 1
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function retornaEndereco() {
  return local = `O usuário mora em ${endereco.cidade}/${endereco.uf}, 
        no bairro ${endereco.bairro}, na rua ${endereco.rua}, com nº ${endereco.numero}.`
}

console.log(retornaEndereco())

// DESAFIO 2
function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
pares(32, 321);


// DESAFIO 3
function temHabilidade(skills) {
  return skills.indexOf("Javascript") !== -1;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

// DESAFIO 4
function experiencia(anos) {
  if (anos <= 1) {
    return 'Iniciante';
  } else if (anos <= 3) {
    return 'Intermediário';
  } else if (anos <= 6) {
    return 'Avançado';
  } else {
    return 'Jedi Master';
  }
}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));


// DESAFIO 5
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function userAbility() {
  for (let user of usuarios) {
    let result = `O ${user.nome} possui as habilidades: ${user.habilidades.join(", ")}`
    console.log(result);
  }
};
userAbility();