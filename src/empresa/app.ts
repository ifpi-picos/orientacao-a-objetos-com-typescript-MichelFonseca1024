import { Empresa } from "./empresa";
import { PessoaFisica } from "./pessoaFisica";
import { PessoaJuridica } from "./pessoaJuridica";

let beneficiosPF = new Array<string>();
beneficiosPF.push("plano de saúde");
beneficiosPF.push("VR");
beneficiosPF.push("Férias");

let beneficiosPJ = new Array();
beneficiosPJ.push('plano de saúde');

let empresa: Empresa = new Empresa('IFPI')

let pessoaFisica: PessoaFisica = new PessoaFisica('MIchel Fonseca', 1000, beneficiosPF, '62673918')
let pessoaJuridica: PessoaJuridica = new PessoaJuridica('Jose Gomes', 1500, beneficiosPJ, '2637218');

empresa.adicionaFuncionario(pessoaFisica);
empresa.adicionaFuncionario(pessoaJuridica);

console.log('Empresa: ' + empresa.getNome());

console.log('Funcionarios \n')
empresa.getFuncionarios().forEach(funcionario => {
    console.log('Nome:', funcionario.getnome());
    console.log('Salário:', funcionario.getSalario());
    console.log('Beneficios:', funcionario.getBeneficios().join())
});
