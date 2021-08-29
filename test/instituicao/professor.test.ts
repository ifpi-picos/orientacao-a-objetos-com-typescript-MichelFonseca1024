/* global  describe  expect it */
import { Professor } from '../../src/instituicao/professor'

const PROFESSOR = new Professor('Paulo Silva')

describe('teste Professor', () => {
  it('deve criar uma Professor com o nome Paulo Silva', () => {
    expect(PROFESSOR.getNome()).toBe('Paulo Silva')
  })
})
