export abstract class Funcionario {
    private nome: string
    private salario: number
    private beneficios: Array<string>

    constructor(nome: string, salario: number, beneficios: Array<string>) {
        this.nome = nome
        this.salario = salario
        this.beneficios = beneficios
    }

    getnome(): string{
        return this.nome
    }

    getSalario(): number{
        return this.salario
    }

    abstract getSalarioLiquido(): number

    getBeneficios(): Array<string> {
        return this.beneficios
    }


}