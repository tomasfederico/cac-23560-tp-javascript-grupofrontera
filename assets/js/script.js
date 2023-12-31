// CONSTANTES PARA EL CALCULO DE TICKETS
const TICKET_VALUE = 200;
const STUDENT_DISCOUNT = 0.80;
const TRAINEE_DISCOUNT = 0.50;
const JUNIOR_DISCOUNT = 0.15;

// TRAER DATOS DEL HTML
let ticketsStudents = document.getElementById("tickets-students");
let ticketsTrainees = document.getElementById("tickets-trainees");
let ticketsJuniors = document.getElementById("tickets-juniors");
let ticketsGenerals = document.getElementById("tickets-generals");

let ticketsStudentsNumber = 0;
let ticketsTraineesNumber = 0;
let ticketsJuniorsNumber = 0;
let ticketsGeneralsNumber = 0;


// EVENTLISTENERS PARA OBSERVAR VALORES DE LOS SELECTORES DE TKTS AL CAMBIARLOS
ticketsStudents.addEventListener("change", function () {
    //console.log("tkts students: " + ticketsStudents.value);
    show_total_price();
});
ticketsTrainees.addEventListener("change", function () {
    //console.log("tkts trainees: " + ticketsTrainees.value);
    show_total_price();
});
ticketsJuniors.addEventListener("change", function () {
    //console.log("tkts juniors: " + ticketsJuniors.value);
    show_total_price();
});
ticketsGenerals.addEventListener("change", function () {
    //console.log("tkts generals: " + ticketsJuniors.value);
    show_total_price();
});

function reset_form() {
    //RESETEA EL FORMULARIO
    //MUESTRA UN 0 EN PANTALLA EN EL CALCULO DE TICKETS (HABRIA QUE REHACERLO X AUTOMATISMO)
    //OCULTA EL MENSAJE DE ERROR CON .hidden
    document.getElementById("form-ticket-purchase").reset();
    document.getElementById("total-cost-tickets").innerHTML = "Total a pagar: $" + 0;
    document.getElementById("error-message").hidden = true;
}

function show_total_price() {
    //FUNCION DE PRUEBA PARA CONTAR LOS TICKETS DE CADA ITEM Y MOSTRARLOS EN PANTALLA
    //RECIBE LA CANTIDAD DE TICKETS DE CADA CATEGORIA
    //CONTROLA SI LA SUMA DE LOS TICKETS SUPERA 5 UNIDADES
    //RETORNA VALOR TOTAL DE TODOS LOS TICKETS 
    //LA CUENTA ES LA SUMATORIA DE: 
    //VALOR TICKET TOTAL * (1-DESCUENTO DE ESA CATEGORIA) * CANTIDAD DE TICKETS DE ESA CATEGORIA
    //(TICKET_VALUE*(1-STUDENT_DISCOUNT)*ticketsStudents) + (TICKET_VALUE*(1-TRAINEE_DISCOUNT)*ticketsTrainees) + (TICKET_VALUE*(1-JUNIOR_DISCOUNT)*ticketsJuniors)

    ticketsStudentsNumber = parseInt(ticketsStudents.value);
    ticketsTraineesNumber = parseInt(ticketsTrainees.value);
    ticketsJuniorsNumber = parseInt(ticketsJuniors.value);
    ticketsGeneralsNumber = parseInt(ticketsGenerals.value);

    let total

    if (valid_total_ticket_number()) {
        let studentsTotal = TICKET_VALUE * (1 - STUDENT_DISCOUNT) * ticketsStudentsNumber;
        let traineesTotal = TICKET_VALUE * (1 - TRAINEE_DISCOUNT) * ticketsTraineesNumber;
        let juniorsTotal = TICKET_VALUE * (1 - JUNIOR_DISCOUNT) * ticketsJuniorsNumber;
        let generalsTotal = TICKET_VALUE * ticketsGeneralsNumber;
        total = (studentsTotal + traineesTotal + juniorsTotal + generalsTotal).toFixed(2);

        document.getElementById("error-message").innerHTML = "";
        document.getElementById("error-message").hidden = true;

    } else {
        total = "-"

        document.getElementById("error-message").innerHTML = "Error: La cantidad total de tickets no puede ser superior a 5";
        document.getElementById("error-message").hidden = false;
    }
    document.getElementById("total-cost-tickets").innerHTML = "Total a pagar: $" + total;
}

function valid_total_ticket_number() {
    //VALIDA QUE LA CANTIDAD TOTAL DE TICKETS SEA VALIDA
    //DEVUELVE TRUE EN CASO DE QUE LA CANTIDAD TOTAL DE TICKETS SEA MENOR O IGUAL A CINCO
    //EN CASO CONTRARIO DEVUELVE FALSE

    return (ticketsJuniorsNumber + ticketsStudentsNumber + ticketsTraineesNumber + ticketsGeneralsNumber) <= 5
}

function tickets_total_count() {
    //SE HACE LLAMADO DE LOS INPUTS DE NOMBRE, APELLIDO Y MAIL
    //SE GENERAN NUMEROS RANDOM PARA EL #DE TK
    //SE HACE UN RESUMEN TOTAL DEL VALOR REAL DE LOS BOLETOS
    //SE DESPLIEGAN DESCUENTOS POR BOLETO INDICANDO LO QUE SE RESTA AL TOTAL SI EL DESCUENTO APLICA
    //SE MUESTRA EL MONTO TOTAL DE LO QUE SE VA A PAGAR

    //Numero de PV
    const numramdom = [1596, 2586, 6574, 4586, 9658, 1452, 3652];
    const randomIndex = Math.floor(Math.random() * numramdom.length);
    const randomNumber = numramdom[randomIndex];
    let aleatorioPV = document.createTextNode(randomNumber);
    document.getElementById('numPV').appendChild(aleatorioPV);

    // Nombre, Apellido y Email
    let nombre = document.getElementById("input-name").value;
    let apellido = document.getElementById("input-lastname").value;
    let persona = nombre.toUpperCase() + " " + apellido.toUpperCase();
    let e_mail = document.getElementById("input-email").value.toUpperCase();
    let cliente = document.createTextNode(persona);
    let correo = document.createTextNode(e_mail);
    document.getElementById('comprador').appendChild(cliente);
    document.getElementById('emailComprador').appendChild(correo);

    //Fecha
    const fechaOutput = document.getElementById("fechaOutput");
    const fechaActual = new Date();
    const formatoFecha = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    };
    const fechaFormateada = fechaActual.toLocaleDateString(undefined, formatoFecha);
    fechaOutput.textContent = fechaFormateada;

    //hora
    const horaOutput = document.getElementById("horaOutput");
    const horaActual = new Date();
    const formatoHora = {
        hour: '2-digit',
        minute: '2-digit',
    };
    const horaFormateada = horaActual.toLocaleTimeString(undefined, formatoHora);
    horaOutput.textContent = horaFormateada + "h";

    //Numero de NR.T
    let aleatorioNR_T = document.createTextNode(randomNumber);
    document.getElementById('numNR').appendChild(aleatorioNR_T);

    //Cantidad de Boletos
    let cantidadBoletos = ticketsJuniorsNumber + ticketsStudentsNumber + ticketsTraineesNumber + ticketsGeneralsNumber;
    let boletos = document.createTextNode("(0" + cantidadBoletos + ")");
    document.getElementById('boletos').appendChild(boletos);

    //Precio Unitario
    let PrecioUnitario = document.getElementById("PrecioUnitario");
    PrecioUnitario.textContent = "$" + TICKET_VALUE + ",00";

    //Precio Total
    let PrecioTotal = document.getElementById("PrecioTotal");
    PrecioTotal.textContent = "($" + (TICKET_VALUE * cantidadBoletos) + ",00)";

    //Descuento Estudiante
    if (ticketsStudentsNumber > 0) {
        let dec1 = document.getElementById("dec1");
        dec1.textContent = "DESC. ESTUDIANTE";
        let desStudent = document.getElementById("desStudent");
        desStudent.textContent = "- $" + ((ticketsStudentsNumber * TICKET_VALUE) * STUDENT_DISCOUNT) + ",00";
        document.getElementById("secStudent").style.display = "block";
    }

    //Descuento Trainee
    if (ticketsTraineesNumber > 0) {
        let dec2 = document.getElementById("dec2");
        dec2.textContent = "DESC. TRAINEE";
        let desTrainee = document.getElementById("desTrainee");
        desTrainee.textContent = "- $" + ((ticketsTraineesNumber * TICKET_VALUE) * TRAINEE_DISCOUNT) + ",00";
        document.getElementById("secTrainee").style.display = "block";
    }

    //Descuento Junior
    if (ticketsJuniorsNumber > 0) {
        let dec3 = document.getElementById("dec3");
        dec3.textContent = "DESC. JUNIOR";
        let desJunior = document.getElementById("desJunior");
        desJunior.textContent = "- $" + ((ticketsJuniorsNumber * TICKET_VALUE) * JUNIOR_DISCOUNT) + ",00";
        document.getElementById("secJunior").style.display = "block";
    }

    //Monto Total
    let studentsTotal = TICKET_VALUE * (1 - STUDENT_DISCOUNT) * ticketsStudentsNumber;
    let traineesTotal = TICKET_VALUE * (1 - TRAINEE_DISCOUNT) * ticketsTraineesNumber;
    let juniorsTotal = TICKET_VALUE * (1 - JUNIOR_DISCOUNT) * ticketsJuniorsNumber;
    let generalsTotal = TICKET_VALUE * ticketsGeneralsNumber;
    let montoTotal = (studentsTotal + traineesTotal + juniorsTotal + generalsTotal);

    let totalPago = document.getElementById("totalPago");
    totalPago.textContent = "$" + montoTotal + ",00";
}