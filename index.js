var Escola = /** @class */ (function () {
    function Escola(aluno) {
        this.alunos = [];
        this.alunos.push(aluno);
    }
    Escola.prototype.getAlunos = function () {
        return this.alunos;
    };
    return Escola;
}());
var aluno = { nome: "João", idade: 20, matricula: 123, notas: [10, 9, 8] };
var escola = new Escola(aluno);
console.log(escola.getAlunos());
