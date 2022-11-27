// Permite crear archivos que se pueden importar en otros archivos
// para ejecutarlo, los modulos y los archivos que los usan deben guardarse como .mjs o 
// agregamos al diccionario de package.json debajo de lisence "type": "module"  

import hello from './module.mjs'

hello();