import { Funcionario } from './funcionario'

export class PessoaJuridica extends Funcionario {
    private cnpj: string

    constructor(
        nome: string,
        salario: number,
        beneficios: Array<string>,
        cnpj: string
    ) {
        super(nome, salario, beneficios)
        this.cnpj = cnpj
    }

    getSalarioLiquido(): number {
        return super.getSalario() - super.getSalario() * 0.05
    }
}
