import { useEffect } from 'react'

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.querySelector('#my-canvas')
    const context = canvas.getContext('2d')
    const content = 'Whiskey Diego 是一名 Web 開發人員和資料工程師。'.split('')

    const matrixRain = () => {
      const { width, height } = canvas
      const fontSize = 16
      const columns = width / fontSize
      const drops = []

      for (let x = 0; x < columns; x++) {
        drops[x] = 1
      }

      const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.04)'
        context.fillRect(0, 0, width, height)

        context.fillStyle = '#0F0'
        context.font = `${fontSize}px arial`

        for (let i = 0; i < drops.length; i++) {
          const text = content[Math.floor(Math.random() * content.length)]
          context.fillText(text, i * fontSize, drops[i] * fontSize)

          if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0
          }

          drops[i]++
        }
      }

      const run = () => {
        setInterval(draw, 33)
      }

      return {
        run
      }
    }

    matrixRain({ canvas }).run()
  }, [])

  return <canvas id="my-canvas" width="700" height="500"></canvas>
}

export default MatrixRain
