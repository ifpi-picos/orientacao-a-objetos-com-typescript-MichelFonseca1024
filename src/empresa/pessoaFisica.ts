import { Funcionario } from "./funcionario"

export class PessoaFisica extends Funcionario {
	private cpf: string

	constructor(nome: string, salario: number, beneficios: Array<string>, cpf: string) {
		super(nome, salario, beneficios)
		this.cpf = cpf
	}

	getSalarioLiquido(): number {
		return super.getSalario() - super.getSalario() * 0.1;
	  }
}