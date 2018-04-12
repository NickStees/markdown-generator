var faker = require('faker')
var fs = require('fs')
var path = require('path')

var cnt = 0;

for (var i = 0; i < 1500; i++) {
  generateMD()
  cnt++;
}
// GRAV CMS wants folder like 01.path-name/default.md
function generateMD () {
  var fileName = faker.lorem.word() + '-' + faker.lorem.word()
  var fileContents = `---
title: "${faker.lorem.words()}"
layout: Page
---
${faker.lorem.paragraphs()}
${faker.lorem.paragraphs()}
`
var outputPath = path.join(__dirname, 'content/' + cnt + '.' + fileName +'/')
var outputPathFull = outputPath + `default.md`

// create directory
if (!fs.existsSync(outputPath)){
  fs.mkdirSync(outputPath);
}
  // Write contents to file
  fs.writeFile(outputPathFull, fileContents, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(outputPath + ' file generated')
  })
}