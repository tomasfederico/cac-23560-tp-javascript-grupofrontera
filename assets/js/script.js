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
// EVENTLISTENERS PARA OBSERVAR VALORES DE LOS SELECTORES DE TKTS AL CAMBIARLOS
ticketsStudents.addEventListener("change", function() {
    console.log("tkts students: " + ticketsStudents.value);
    tickets_total_count();
});
ticketsTrainees.addEventListener("change", function() {
    console.log("tkts trainees: " + ticketsTrainees.value);
    tickets_total_count();
});
ticketsJuniors.addEventListener("change", function() {
    console.log("tkts juniors: " + ticketsJuniors.value);
    tickets_total_count();
});
ticketsGenerals.addEventListener("change", function() {
    console.log("tkts generals: " + ticketsJuniors.value);
    tickets_total_count();
});

function tickets_total_count(){
//FUNCION DE PRUEBA PARA CONTAR LOS TICKETS DE CADA ITEM Y MOSTRARLOS EN PANTALLA
//RECIBE LA CANTIDAD DE TICKETS DE CADA CATEGORIA
//CONTROLA SI LA SUMA DE LOS TICKETS SUPERA 5 UNIDADES
//RETORNA VALOR TOTAL DE TODOS LOS TICKETS 
//LA CUENTA ES LA SUMATORIA DE: 
//VALOR TICKET TOTAL * (1-DESCUENTO DE ESA CATEGORIA) * CANTIDAD DE TICKETS DE ESA CATEGORIA
//(TICKET_VALUE*(1-STUDENT_DISCOUNT)*ticketsStudents) + (TICKET_VALUE*(1-TRAINEE_DISCOUNT)*ticketsTrainees) + (TICKET_VALUE*(1-JUNIOR_DISCOUNT)*ticketsJuniors)

    let ticketsStudents = parseInt(document.getElementById("tickets-students").value);
    let ticketsTrainees = +document.getElementById("tickets-trainees").value; 
    let ticketsJuniors = +document.getElementById("tickets-juniors").value; 
    let ticketsGenerals = +document.getElementById("tickets-generals").value; 

    console.log(ticketsStudents);
    console.log(ticketsTrainees);
    console.log(ticketsJuniors);
    console.log(ticketsGenerals);
    
    let total

    if (valid_total_ticket_number()){
        let studentsTotal = TICKET_VALUE*(1-STUDENT_DISCOUNT)*ticketsStudents;
        let traineesTotal = TICKET_VALUE*(1-TRAINEE_DISCOUNT)*ticketsTrainees;
        let juniorsTotal = TICKET_VALUE*(1-JUNIOR_DISCOUNT)*ticketsJuniors;
        let generalsTotal = TICKET_VALUE*ticketsGenerals;
        total = (studentsTotal+traineesTotal+juniorsTotal+generalsTotal).toFixed(2);

        document.getElementById("error-message").innerHTML = "";
        document.getElementById("error-message").hidden = true;
    } else {
        total = "-"

        document.getElementById("error-message").innerHTML = "Error: La cantidad total de tickets no puede ser superior a 5";
        document.getElementById("error-message").hidden = false;
    }
    console.log("resultado final: " + total);
    
    document.getElementById("total-cost-tickets").innerHTML = "Total a pagar: $" + total;
}

function reset_form(){
    //RESETEA EL FORMULARIO
    //MUESTRA UN 0 EN PANTALLA EN EL CALCULO DE TICKETS (HABRIA QUE REHACERLO X AUTOMATISMO)
    //OCULTA EL MENSAJE DE ERROR CON .hidden
    document.getElementById("form-ticket-purchase").reset();
    document.getElementById("total-cost-tickets").innerHTML = "Total a pagar: $" + 0;
    document.getElementById("error-message").hidden = true;
}

function valid_total_ticket_number() {
    //VALIDA QUE LA CANTIDAD TOTAL DE TICKETS SEA VALIDA
    //DEVUELVE TRUE EN CASO DE QUE LA CANTIDAD TOTAL DE TICKETS SEA MENOR O IGUAL A CINCO
    //EN CASO CONTRARIO DEVUELVE FALSE
    let ticketsStudents = parseInt(document.getElementById("tickets-students").value);
    let ticketsTrainees = +document.getElementById("tickets-trainees").value; 
    let ticketsJuniors = +document.getElementById("tickets-juniors").value;
    let ticketsGenerals = +document.getElementById("tickets-generals").value;

    return (ticketsJuniors + ticketsStudents + ticketsTrainees + ticketsGenerals) <= 5
}

//Funcion de fecha
function DateTk() {
    var f = new Date();
    document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
}



