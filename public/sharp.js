const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const inputFolder = './images' // Reemplaza este directorio por el tuyo donde tengas las imágenes que deseas convertir
const extensionsToConvert = ['.png', '.gif', '.jpg']

async function convertToWebP(inputFilePath) {
  try {
    const image = sharp(inputFilePath)
    const imageInfo = path.parse(inputFilePath)
    const outputFilePath = path.join(imageInfo.dir, `${imageInfo.name}.webp`)

    await image.toFile(outputFilePath)
    console.log(`${inputFilePath} convertido a ${outputFilePath}`)
  } catch (err) {
    console.error(`Error conviertiendo ${inputFilePath} a WebP:`, err)
  }
}

function searchFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error leyendo el directorio:', err)
      return
    }

    files.forEach(file => {
      const filePath = path.join(directory, file)

      fs.stat(filePath, (statErr, stat) => {
        if (statErr) {
          console.error('Error al leer el fichero:', statErr)
          return
        }

        if (stat.isDirectory()) {
          searchFiles(filePath)
        } else {
          const fileExtension = path.extname(file).toLowerCase()
          if (extensionsToConvert.includes(fileExtension)) {
            convertToWebP(filePath)
          }
        }
      })
    })
  })
}

searchFiles(inputFolder)