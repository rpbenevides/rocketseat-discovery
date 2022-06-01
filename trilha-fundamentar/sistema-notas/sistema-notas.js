function notaFinal(nota) {
  const transform = transformarNotas(nota)
  console.log(`A nota final do aluno foi conceito ${transform}.`)
}

function transformarNotas(nota) {
  if (nota >= 90) {
    return (nota = 'A')
  } else if (nota <= 89 && nota >= 80) {
    return (nota = 'B')
  } else if (nota <= 79 && nota >= 70) {
    return (nota = 'C')
  } else if (nota <= 69 && nota >= 60) {
    return (nota = 'D')
  } else if (nota <= 60) {
    return (nota = 'F')
  } else {
    return 'Entrada inválida!'
  }
}

notaFinal(99)
