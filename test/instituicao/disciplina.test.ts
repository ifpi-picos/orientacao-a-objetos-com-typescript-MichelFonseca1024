/* global  describe expect it */

import { Disciplina } from '../../src/instituicao/disciplina'
import { Professor } from '../../src/instituicao/professor'

describe('teste disciplina', () => {
  const NOME_DISCIPLINA = 'Web'
  const CH_DISCIPLINA = 64
  const PROFESSOR = new Professor('Jesiel Vianna')
  const disciplina = new Disciplina(NOME_DISCIPLINA, CH_DISCIPLINA, PROFESSOR)

  it('deve criar uma disciplina com o nome web', () => {
    expect(disciplina.getNome()).toBe(NOME_DISCIPLINA)
  })

  it('deve criar uma disciplina com o nome web', () => {
    const NOME_DISCIPLINA = 'Web'
    const CH_DISCIPLINA = 64
    const PROFESSOR = new Professor('Jesiel Vianna')

    const disciplina = new Disciplina(NOME_DISCIPLINA, CH_DISCIPLINA, PROFESSOR)
    expect(disciplina.getNome()).toBe(NOME_DISCIPLINA)
  })

  it('deve alterar professor da disciplina', () => {
    const PROFESSOR = new Professor('Palo Silva')
    disciplina.setProfessor(PROFESSOR)
    expect(disciplina.getProfessor().getNome()).toBe('Palo Silva')
  })
})
