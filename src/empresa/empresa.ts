import { Funcionario } from "./funcionario"

export class Empresa {
    private nome: string
    private funcionarios: Array<Funcionario>

   // constructor(nome: string)

    constructor(nome: string, funcionarios?: Array<Funcionario>) {
        this.nome = nome
        if (funcionarios) {
            this.funcionarios = funcionarios
        }
        else {
            this.funcionarios = new Array<Funcionario>()
        }
    }

    adicionaFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    getNome(): string {
        return this.nome;
    }

    getFuncionarios(): Array<Funcionario> {
        return this.funcionarios;
    }


}