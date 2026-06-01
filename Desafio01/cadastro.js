// Desafio 01 - cadastro de pessoa

/**
  crie um objeto chamdo pessoa contendo:
  - nome 
  - idade
  - cidade

  Após a criação:
  - Alterar a idade
  - Adicionar uma profissão
  - Remova a cidade
  
  no fim, exiba o objeto final
 */

  const pessoa = {
    nome: "vinícius",
    idade:16,
    cidade: "capanema/pr"
  }

  pessoa.profissao = "pedreiro";
  console.log(pessoa);

  pessoa.idade = 18;
  console.log(pessoa);

  delete pessoa.cidade;
  console.log(pessoa);