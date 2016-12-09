#!/usr/bin/env node
const rp = require('request-promise')
const Promise = require('bluebird')
const cheerio = require('cheerio')
// const talk = process.argv[process.argv.length-1]
let command = process.argv[process.argv.length-1]
// if (talk === 'fale') 
//   command = process.argv[process.argv.length-2]
const url = 'http://mdn.io/'

const SaySomehting = require('say-something')
saySomething = new SaySomehting({language: 'pt-br'})
console.log('command', command)

const consult = `${url}${command}`
let body = ''
console.log('consult', consult)

rp(consult)
  .then((html) => {
    // saySomething.now('Vai menino')
    let $ = cheerio.load(html)
    body = $('#wikiArticle > p').eq(1).text()
    return Promise.promisifyAll(saySomething)
  })
  .then((say) => { 
      console.log('Definição: ', body)
      say.now(body)
      // say.on('talking', function (text) {
      //   console.log('Im talking: ' + text);
      // });
   })
  .catch(console.log)