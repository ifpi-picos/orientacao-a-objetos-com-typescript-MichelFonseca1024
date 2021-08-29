import { Disciplina } from './disciplina'

export class Curso {
    private nome: string
    private disciplinas: Disciplina[]

    constructor(nome: string) {
        this.nome = nome
        this.disciplinas = []
    }

    getNome(): String {
        return this.nome
    }

    adicionaDisciplina(disciplina: Disciplina): void {
        this.disciplinas.push(disciplina)
    }

    getDisciplinas(): Disciplina[] {
        return this.disciplinas
    }

    removeDisciplina(nameDTO) {
        const index: number = this.disciplinas.findIndex((disciplina) => {
            return disciplina.getNome() === nameDTO
        })


        if (index >= 0) {
            this.disciplinas.splice(index, 1)
            return 'Disciplina removida com sucesso!'
        }
        else
            return 'Não foi possivel remover disciplina'

    }
}