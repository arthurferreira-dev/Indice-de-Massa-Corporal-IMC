/*
   JavaScript Archive by: @arthurferreira-dev
*/

function calc() {
   let btn = document.getElementById('click');
   let resul = document.getElementById('res');

   /* Extração do Nome */
   let nameInput = document.getElementById('name');
   let nameValue = nameInput.value;
   let name = nameValue.toString(); /* Valor funcional (String) */
   
   /* Extração da Altura */
   let alturaInput = document.getElementById('altura');
   let alturaValue = alturaInput.value;
   let altura = Number(alturaValue);

   /* Extração do Peso */
   let pesoInput = document.getElementById('peso');
   let pesoValue = pesoInput.value;
   let peso = Number(pesoValue);

   if (name === '' && altura === '' && peso === '' || name === '' || altura === '' || peso === '') { 
      /* Verificação dados nulos */
      name = ''
      altura = ''
      peso = ''
      resul.style.display = 'block'
      resul.innerHTML = 'Porfavor preencha todos os dados!'
      resul.style.color = '#ff0000'
   } else if (name != '' && altura != '' && peso != '') {
      /* Verificação dados não nulos */
      resul.style.display = 'none'
      imc();
   }
}

function imc() {
   /* Extração do Nome */
   let nameInput = document.getElementById('name');
   let nameValue = nameInput.value;
   let name = nameValue.toString(); /* Valor funcional (String) */
   
   /* Extração da Altura */
   let alturaInput = document.getElementById('altura');
   let alturaValue = alturaInput.value;
   let altura = Number(alturaValue);

   /* Extração do Peso */
   let pesoInput = document.getElementById('peso');
   let pesoValue = pesoInput.value;
   let peso = Number(pesoValue);

   let resul = document.getElementById('res');

   let imc = peso / (altura ** 2)
   let imcFormat = imc.toFixed(1);

   if (imc < 18.5) { /* Magreza */
      resul.innerHTML = `Olá ${name}, você pesa ${peso}kg e tem ${altura}m. Seu IMC é ${imcFormat} . Você está magro coma mais!`
      resul.style.display = 'block'
      resul.style.color = '#000'
   } else if (imc >= 18.5 && imc <= 24.9) { /* Normal */
      resul.innerHTML = `Olá ${name}, você pesa ${peso}kg e tem ${altura}m. Seu IMC é ${imcFormat} . Você está normal continue assim.`
      resul.style.display = 'block'
      resul.style.color = '#000'
   } else if (imc >= 25.0 && imc <= 29.9) { /* Sobrepeso */
      resul.innerHTML = `Olá ${name}, você pesa ${peso}kg e tem ${altura}m. Seu IMC é ${imcFormat} . Você está com sobrepeso melhor sair de casa e correr um pouco`
      resul.style.display = 'block'
      resul.style.color = '#000'
   } else if (imc >= 30.0 && imc <= 39.9) { /* Obesidade */
      resul.innerHTML = `Olá ${name}, você pesa ${peso}kg e tem ${altura}m. Seu IMC é ${imcFormat} . Desculpe mais você está com <strong>obesidade</strong>, vá ao médico e tente fazer exercícios físicos.`
      resul.style.display = 'block'
      resul.style.color = '#000'
   } else if (imc > 40.0) { /* Obesidade Grave */
      resul.innerHTML = `Olá ${name}, você pesa ${peso}kg e tem ${altura}m. Seu IMC é ${imcFormat} . Meus pesames você está com <strong>obesidade grave</strong>, vá ao médico antes que seja tarde demais...`
      resul.style.display = 'block'
      resul.style.color = '#000'
   }

   //resul.innerHTML = `Olá ${name}, você pesa ${peso}kg e tem ${altura}m.`
}