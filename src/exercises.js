   //Ejercicio 1
  let edadInput = document.getElementById("edadUsuario");
  let edadButton = document.getElementById("calcularEdad");
  let value;
  edadButton.addEventListener("click", calcularEdad);

  //Ejercicio 2
  let notaFinalButton = document.getElementById("calcularNota");
  let examInput = document.getElementById("Examen");
  let tarInput = document.getElementById("Tareas");
  let asisInput = document.getElementById("Asistencia");
  let invInput = document.getElementById("Investigacion");
  let carnetInput = document.getElementById("Carnet");
  let nomtInput = document.getElementById("NombreAlumno");
  let valueExam;
  let valueTar;
  let valAsis;
  let valInv;
  let valCar;
  let valNom;
  notaFinalButton.addEventListener("click", calcularNota);

  //Ejercicio 3
  let aumentoSalarioButton = document.getElementById("calcularAumento");
  let nombreInput = document.getElementById("Nombre");
  let salarioInput = document.getElementById("Salario");
  let categoriaInput = document.getElementById("Categoria");
  let valNombre;
  let valSalario;
  let valCategoria;
  aumentoSalarioButton.addEventListener("click", calcularAumento);

  //Ejercicio 4
  let compValorButton = document.getElementById("CompValor");
  let aInput = document.getElementById("ValorA");
  let bInput = document.getElementById("ValorB");
  let valA;
  let valB;
  compValorButton.addEventListener("click", compararValores);

  //Ejercicio 5
  let calculraTotalButton = document.getElementById("TotalCompra");
  let fiInput = document.getElementById("FordFiesta");
  let foInput = document.getElementById("FordFocus");
  let esInput = document.getElementById("FordEscape");
  let valFie = 7000;
  let valFo = 10000;
  let valEs = 15000;
  let totalFie;
  let totalFo;
  let totalEs;
  calculraTotalButton.addEventListener("click", calcularVenta);

  //Ejercicio 6
  let calcularTourButton = document.getElementById("TotalCompraTour");
  let costaInput = document.getElementById("CostaSol");
  let panchInput = document.getElementById("Panchimalco");
  let triuInput = document.getElementById("PuertoTriunfo");
  let valSol = 100;
  let valPan = 75;
  let valTri = 50;
  let totalSol;
  let totalPan;
  let totalTri;
  calcularTourButton.addEventListener("click", calcularTour);

//Ejercicio 7
const form = document.getElementById('numberForm');
const addInputBtn = document.getElementById('addInput');
const inputContainer = document.getElementById('inputContainer');
let inputCount = 1;
addInputBtn.addEventListener('click', addInput);
form.addEventListener('submit', processForm);

  //Ejercicio 8
  let numInput = document.getElementById("Numero");
  let calcularTablaButton = document.getElementById("CalcularTabla");
  let tBody = document.getElementById("TableBody");
  let valueTabla;
  calcularTablaButton.addEventListener("click", calcularTabla);

  //Ejercicio 9
  let tempInput = document.getElementById("Celsius");
  let tempButton = document.getElementById("calcularTemp");
  let temCel;
  let fareResult;
  tempButton.addEventListener("click", calcularTemp);
  
//FUNTIONS 


//Ejercicio 1
 function calcularEdad()
  {
  value = Number(edadInput.value);
  let answerContainer = document.getElementById("answer");
  let answer = value >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
  answerContainer.textContent = answer;
  }
//Ejercicio 2
  function calcularNota()
  {
    valueExam = Number(examInput.value) * 0.2;
    valueTar = Number(tarInput.value) * 0.4;
    valAsis = Number(asisInput.value) * 0.1;
    valInv = Number(invInput.value) * 0.3;
    valNom = nomtInput.value;
    valCar = carnetInput.value;
    let nombreAlumnoContainer = document.getElementById("nombreAlumno");
    let carnetAlumnoContainer = document.getElementById("carnetAlumno");
    let notaFinal = valueExam + valueTar + valAsis + valInv;
    let answerContainer = document.getElementById("notaFinal");
    answerContainer.textContent = notaFinal;
    nombreAlumnoContainer.textContent = valNom;
    carnetAlumnoContainer.textContent = valCar;
  }
//Ejercicio 3
  function calcularAumento()
  {
    valCategoria = categoriaInput.value;
    let aumentoSalarioContainer = document.getElementById("aumentoPersona");
    let nombrePersonaContainer = document.getElementById("nombrePersona");
    console.log(valCategoria)

    switch(valCategoria.toUpperCase())
    {
      case "A":
        valSalario = Number(salarioInput.value) * 0.15;
        let salrioTotal1 = valSalario +  Number(salarioInput.value);
        aumentoSalarioContainer.textContent = salrioTotal1;
        valNombre = nombreInput.value;
        nombrePersonaContainer.textContent = valNombre;
        break;

        case "B":
        valSalario = Number(salarioInput.value) * 0.3;
        let salrioTotal2 = valSalario +  Number(salarioInput.value);
        aumentoSalarioContainer.textContent = salrioTotal2;
        valNombre = nombreInput.value;
        nombrePersonaContainer.textContent = valNombre;
        break;

        case "C":
        valSalario = Number(salarioInput.value) * 0.1;
        let salrioTotal3 = valSalario +  Number(salarioInput.value);
        aumentoSalarioContainer.textContent = salrioTotal3;
        valNombre = nombreInput.value;
        nombrePersonaContainer.textContent = valNombre;
        break;

        case "D":
        valSalario = Number(salarioInput.value) * 0.2;
        let salrioTotal4 = valSalario +  Number(salarioInput.value);
        aumentoSalarioContainer.textContent = salrioTotal4;
        valNombre = nombreInput.value;
        nombrePersonaContainer.textContent = valNombre;
        break;

    }
  }
//Ejercicio 4
    function compararValores()
{
  valA = Number(aInput.value);
  valB = Number(bInput.value);
  let reultContainer = document.getElementById("AvsB");
  if(valA > valB)
    {
      reultContainer.textContent = valA;
    }
    else 
    {
      reultContainer.textContent = valB;
    }
  }
    //Ejercicio 5
function calcularVenta()
{

  let ventaContainer = document.getElementById("TotalVenta");
  
  if(fiInput.checked)
  {
    totalFie = Number(valFie) - Number(valFie)*0.05;
    ventaContainer.textContent = totalFie;
  }
  else if(foInput.checked)
  {
  totalFo = Number(valFo) - Number(valFo)*0.1;
  ventaContainer.textContent = totalFo;
  }
  else if(esInput.checked)
  {
  totalEs = Number(valEs) - Number(valEs)*0.2;
  ventaContainer.textContent = totalEs;
  }
}
  
 //Ejercicio 6
function calcularTour()
{

  let tourContainer = document.getElementById("TotalVentaTour");
  
  if(costaInput.checked)
  {
    totalSol = Number(valSol) - Number(valSol)*0.05;
    tourContainer.textContent = totalSol;
  }
  else if(panchInput.checked)
  {
  totalPan = Number(valPan) - Number(valPan)*0.1;
  tourContainer.textContent = totalPan;
  }
  else if(triuInput.checked)
  {
  totalTri = Number(valTri) - Number(valTri)*0.15;
  tourContainer.textContent = totalTri;
  }
}

 //Ejercicio 7
function addInput() {
  if (inputCount < 10) {
    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.className = 'number-input';
    newInput.required = true;
    inputContainer.appendChild(newInput);
    inputCount++;
  }
  if (inputCount === 10) {
    addInputBtn.disabled = true;
  }
}

function processForm(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll('.number-input');
  const numbers = Array.from(inputs).map(input => parseInt(input.value));

  let negativeCount = 0;
  let positiveCount = 0;
  let multiple15Count = 0;
  let evenSum = 0;

  numbers.forEach(num => {
    if (num < 0) {
      negativeCount++;
    } else if (num > 0) {
      positiveCount++;
    }

    if (num % 15 === 0) {
      multiple15Count++;
    }

    if (num % 2 === 0) {
      evenSum += num;
    }
  });

  document.getElementById('negativeCount').textContent = negativeCount;
  document.getElementById('positiveCount').textContent = positiveCount;
  document.getElementById('multiple15Count').textContent = multiple15Count;
  document.getElementById('evenSum').textContent = evenSum;
}

//Ejercio 8
function calcularTabla()
{
  valueTabla = Number(numInput.value);
  tBody.innerHTML = "";
 for(let i = 1; i<=10; i++)
 {
  let trElement = document.createElement('tr');
  let tdElemnt1 = document.createElement('td');
  let tdElemnt2 = document.createElement('td');
  let tdElemnt3 = document.createElement('td');
  let result = valueTabla*i;
  tdElemnt1.textContent = valueTabla;
  trElement.appendChild(tdElemnt1);
  tdElemnt2.textContent = i;
  trElement.appendChild(tdElemnt2);
  tdElemnt3.textContent = result;
  trElement.appendChild(tdElemnt3);
  tBody.appendChild(trElement);
 }
}

//Ejercicio 9
function calcularTemp()
{
  temCel = Number(tempInput.value);
  let farenContainer = document.getElementById("Fahrenheit");
  let mensaje = document.getElementById("Mensaje");
  fareResult = (temCel * 9/5) + 32;
  farenContainer.textContent =fareResult;

  if(fareResult >= 14 && fareResult < 32 )
  {
mensaje.textContent = "Temperatura baja";
  }
  else if(fareResult >= 32 && fareResult < 68 )
  {
mensaje.textContent = "Temperatura adecuada";
  }
  else if(fareResult >= 68 && fareResult <= 96 )
  {
mensaje.textContent = "Temperatura alta";
  }
  else
  {
    mensaje.textContent = "Temperatura desconocida";
  }
}