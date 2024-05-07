import React, { useState, useEffect } from 'react'

const BinaryRain = () => {
  const [rainColor, setRainColor] = useState('#90EE90') // Estado para controlar el color de la lluvia
  const maxRainDrops = 73 // Limitamos el número máximo de gotas de lluvia

  useEffect(() => {
    generateRain() // Llama a la función para generar la lluvia cuando el componente se monta

    const interval = setInterval(() => {
      moveRainDrops() // Mueve las gotas de lluvia en cada intervalo
    }, 73)

    return () => clearInterval(interval) // Limpia el intervalo cuando el componente se desmonta
  })

  const createRainDrop = () => {
    const rainDrop = document.createElement('div')
    rainDrop.className = 'rain-drop'
    rainDrop.textContent = Math.random() < 0.5 ? '1' : '0'
    rainDrop.style.position = 'absolute'
    rainDrop.style.width = '23px'
    rainDrop.style.height = '23px'
    rainDrop.style.fontSize = '23px'
    rainDrop.style.textAlign = 'center'
    rainDrop.style.color = 'var(--rain-color)'
    rainDrop.style.left = `${Math.random() * window.innerWidth}px`
    rainDrop.style.top = '0px'
    document.getElementById('rain-container').appendChild(rainDrop)
  }

  const generateRain = () => {
    for (let i = 0; i < maxRainDrops; i++) {
      createRainDrop()
    }
  }

  const moveRainDrops = () => {
    const rainDrops = document.querySelectorAll('.rain-drop')
    rainDrops.forEach(rainDrop => {
      const currentTop = parseFloat(rainDrop.style.top) || 0
      const rainDropHeight = rainDrop.offsetHeight
      if (currentTop + rainDropHeight >= window.innerHeight) {
        rainDrop.style.top = '0px'
        rainDrop.style.left = `${Math.random() * window.innerWidth}px`
      } else {
        rainDrop.style.top = `${currentTop + 73}px`
      }
    })

    resolveRainCollision() // Resuelve la colisión de las gotas de lluvia
  }

  const resolveRainCollision = () => {
    const rainDrops = document.querySelectorAll('.rain-drop')
    rainDrops.forEach((dropA, index) => {
      for (let j = index + 1; j < rainDrops.length; j++) {
        const dropB = rainDrops[j]
        if (
          Math.abs(dropA.offsetLeft - dropB.offsetLeft) < 10 &&
          Math.abs(dropA.offsetTop - dropB.offsetTop) < 10
        ) {
          dropB.style.top = `${parseFloat(dropB.style.top) + 20}px`
        }
      }
    })
  }

  return (
    <div
      id="rain-container"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    >
      {/* Contenedor para las gotas de lluvia */}
    </div>
  )
}

export default BinaryRain
