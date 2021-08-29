import { Curso } from './curso'
import { Disciplina } from './disciplina'
import { Professor } from './professor'

const professor1 = new Professor('Jesiel Viana')
const professor2 = new Professor('Aislan Rafael')

const web = new Disciplina('Programação para Web', 35, professor1)
const es = new Disciplina('Engenharia de Software I', 35, professor2)
const ads = new Curso('ADS')
ads.adicionaDisciplina(web)
ads.adicionaDisciplina(es)

console.log('Curso: ', ads.getNome())
