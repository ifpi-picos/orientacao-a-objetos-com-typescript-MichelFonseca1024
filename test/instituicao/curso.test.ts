/* global  describe expect it */

import { Curso } from '../../src/instituicao/curso'
import { Disciplina } from '../../src/instituicao/disciplina'
import { Professor } from '../../src/instituicao/professor'

describe('teste curso', () => {
  const NOME_CURSO_ADS = 'ADS'

  const NOME_DISCIPLINA_WEB = 'Web'
  const CH_DISCIPLINA_WEB = 64
  const PROFESSOR_WEB = new Professor('Jesiel Vianna')

  const NOME_DISCIPLINA_ES = 'Engenharia de Software I'
  const CH_DISCIPLINA_ES = 64
  const PROFESSOR_ES = new Professor('Aislan Rafael')

  it('deve criar um curso com o nome ADS', () => {
    const curso = new Curso(NOME_CURSO_ADS)

    expect(curso.getNome()).toBe(NOME_CURSO_ADS)
    expect(curso.getDisciplinas().length).toBe(0)
  })

  it('deve adicionar uma disciplina ao curso', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH_DISCIPLINA_WEB, PROFESSOR_WEB)

    curso.adicionaDisciplina(web)
    expect(curso.getDisciplinas().length).toBe(1)
    expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB)
  })

  it('deve adicionar duas disciplina ao curso', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH_DISCIPLINA_WEB, PROFESSOR_WEB)
    const es = new Disciplina(NOME_DISCIPLINA_ES, CH_DISCIPLINA_ES, PROFESSOR_ES)

    curso.adicionaDisciplina(web)
    curso.adicionaDisciplina(es)
    expect(curso.getDisciplinas().length).toBe(2)
  })

  it('deve mostrar erro ao tentar remover uma disciplina quando não tem disciplina', () => {
    const curso = new Curso('ADS')
    expect(curso.removeDisciplina('POO')).toBe('Não foi possivel remover disciplina')
  })

  it('deve remover a unica disciplina que tem no curso', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH_DISCIPLINA_WEB, PROFESSOR_WEB)

    curso.adicionaDisciplina(web)

    expect(curso.removeDisciplina('Web')).toBe('Disciplina removida com sucesso!')
  })

  it('deve remover a segunda disciplina que tem no curso', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH_DISCIPLINA_WEB, PROFESSOR_WEB)
    const es = new Disciplina(NOME_DISCIPLINA_ES, CH_DISCIPLINA_ES, PROFESSOR_ES)

    curso.adicionaDisciplina(web)
    curso.adicionaDisciplina(es)

    expect(curso.removeDisciplina('Engenharia de Software I')).toBe('Disciplina removida com sucesso!')
  })
})
