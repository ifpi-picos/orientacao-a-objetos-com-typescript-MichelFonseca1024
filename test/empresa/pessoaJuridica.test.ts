/* global describe it  */
import { PessoaJuridica } from '../../src/empresa/pessoaJuridica'

describe('teste pessoa juridica', () => {
  const NOME = 'Lucas Santos'
  const SALARIO = 3000
  const BENEFICIOS = Array<string>()
  BENEFICIOS.push('plano de saúde')
  const CNPJ = '6352891623'
  it('deve criar uma pessoa juridica', () => {
    const pf = new PessoaJuridica(NOME, SALARIO, BENEFICIOS, CNPJ)
  })
})
