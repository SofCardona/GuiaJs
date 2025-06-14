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

  //Ejercicio 8
  let numInput = document.getElementById("Numero");
  let calcularTablaButton = document.getElementById("CalcularTabla");
  let valueTabla;
  edadButton.addEventListener("click", calcularTabla);
  
//FUNTIONS 

function calcularTabla()
{
  valueTabla = Number(numInput.value);
  let table1Container = document.getElementById("answer1");
  let table2Container = document.getElementById("answer2");
  let table3Container = document.getElementById("answer3");
  let table4Container = document.getElementById("answer4");
  let table5Container = document.getElementById("answer5");
  let table6Container = document.getElementById("answer6");
  let table7Container = document.getElementById("answer7");
  let table8Container = document.getElementById("answer8");
  let table9Container = document.getElementById("answer9");
  let table10Container = document.getElementById("answer10");

  let answer1 = valueTabla * 1;
  table1Container.textContent = answer1;
  let answer2 = valueTabla * 2;
  table2Container.textContent = answer2;
  let answer3 = valueTabla * 3;
  table3Container.textContent = answer3;
  let answer4 = valueTabla * 4;
  table4Container.textContent = answer4;
  let answer5 = valueTabla * 5;
  table5Container.textContent = answer5;
  let answer6 = valueTabla * 6;
  table6Container.textContent = answer6;
  let answer7 = valueTabla * 7;
  table7Container.textContent = answer7;
  let answer8 = valueTabla * 8;
  table8Container.textContent = answer8;
  let answer9 = valueTabla * 9;
  table9Container.textContent = answer9;
  let answer10 = valueTabla * 10;
  table10Container.textContent = answer10;
}


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