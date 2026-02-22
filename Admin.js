import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo)
  }

<<<<<<< HEAD
  // exibirInfos() {
  //   const infos = super.exibirInfos()
  //   return `admin - ${infos}`;
  // }

=======
>>>>>>> 5dbaf9428a627848d385683f255840f500c9a6d1
  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
  }
}

// console.log(novoAdmin.criarCurso('JavaScript', 20));