function esPalindromo(palabra) {
    const palabraNormalizada = palabra.toLowerCase();
  
    const palabraInvertida = palabraNormalizada.split('').reverse().join('');
  
    return palabraNormalizada === palabraInvertida;
  }

  const palabra = "oso";
  const resultado = esPalindromo(palabra);
  
  if (resultado) {
    console.log(`La palabra "${palabra}" es un palíndromo.`);
  } else {
    console.log(`La palabra "${palabra}" no es un palíndromo.`);
  }