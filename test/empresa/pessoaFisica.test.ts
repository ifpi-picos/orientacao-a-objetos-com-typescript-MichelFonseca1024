/* global describe it  */
import { PessoaFisica } from '../../src/empresa/pessoaFisica'

describe('teste pessoa fisica', () => {
  const NOME = 'Lucas Santos'
  const SALARIO = 3000
  const BENEFICIOS = Array<string>()
  BENEFICIOS.push("VR");
  BENEFICIOS.push("Férias");
  BENEFICIOS.push('plano de saúde')

  const CPF = '374627394'
  it('deve criar uma pessoa fisica', () => {
    const pf = new PessoaFisica(NOME, SALARIO, BENEFICIOS, CPF)
  })
})