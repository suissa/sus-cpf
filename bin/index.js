#!/usr/bin/env node
const http = require('http')
const cpf = process.argv[2]
const url = 'http://dabsistemas.saude.gov.br/sistemas/sadab/js/buscar_cpf_dbpessoa.json.php?cpf='

const consult = `${url}${cpf}`
let body = ''

http.get(consult, (res) => 
  res
    .on('data', data => body += data)     
    .on('end', () => console.log(JSON.parse(body)))
)