import { Professor } from "./professor"

export class Disciplina {
	private nome: string
	private ch: number
	private professor: Professor

	constructor(nome: string, ch: number, professor: Professor) {
		this.nome = nome
		this.ch = ch
		this.professor = professor
	}

	getNome() {
		return this.nome
	}

	getCH() {
		return this.ch
	}

	getProfessor() {
		return this.professor
	}

	setProfessor(professor: Professor){
		this.professor = professor
	}
}