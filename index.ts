interface Pessoa {
    nome: string;
    idade: number;
    matricula: number;
    notas: number[];
}

class Escola {
    private alunos: Pessoa[] = [];

    constructor(aluno: Pessoa) {
        this.alunos.push(aluno);
    }

    getAlunos() {
        return this.alunos;
    }
}
const aluno = {nome: "João", idade: 20, matricula: 123, notas:[10, 9, 8]}
const escola = new Escola(aluno);
console.log(escola.getAlunos());