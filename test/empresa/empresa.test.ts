/* global describe it  */
import { Empresa } from '../../src/empresa/empresa'
import { Funcionario } from '../../src/empresa/funcionario'
import { PessoaFisica } from '../../src/empresa/pessoaFisica'
import { PessoaJuridica } from '../../src/empresa/pessoaJuridica'


describe('teste Empresa', () => {

  const BENEFICIOS_PF = Array<string>()
  BENEFICIOS_PF.push("VR");
  BENEFICIOS_PF.push('Férias');
  BENEFICIOS_PF.push('plano de saúde')

  const BENEFICIOS_PJ = Array<string>()
  BENEFICIOS_PJ.push('Plano de saúde');

  const funcionario_pf = new PessoaFisica('Roberto Sousa', 2000, BENEFICIOS_PF, '7326538')
  const funcionario_pj = new PessoaJuridica('Luis Felipe', 3000, BENEFICIOS_PJ, '73628473882')

  it('deve mostrar empresa', () => {
    const RIZE = new Empresa('Rize')

    expect(RIZE.getNome()).toBe('Rize')
  })

  it('deve mostrar os dados do funcionario PJ', () => {
    const funcionarios = Array<Funcionario>()
    funcionarios.push(funcionario_pf)

    const UNIDAS = new Empresa('Unidas', funcionarios)

    expect(UNIDAS.getFuncionarios()[0].getnome()).toBe('Roberto Sousa')

  })

  it('deve mostrar os dados do funcionario PF', () => {
    const funcionarios = Array<Funcionario>()
    funcionarios.push(funcionario_pj)

    const UNIDAS = new Empresa('Unidas', funcionarios)

    expect(UNIDAS.getFuncionarios()[0].getnome()).toBe('Luis Felipe')

  })


  it('deve mostrar os dados do funcionario PJ e PF', () => {
    const UNIDAS = new Empresa('Unidas')
    UNIDAS.adicionaFuncionario(funcionario_pf)
    UNIDAS.adicionaFuncionario(funcionario_pj)

    expect(UNIDAS.getFuncionarios()[0].getnome()).toBe('Roberto Sousa')
    expect(UNIDAS.getFuncionarios()[1].getnome()).toBe('Luis Felipe')
  })

  
})