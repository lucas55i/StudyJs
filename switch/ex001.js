let info = "notification";
let option = "notification";
let isSuccess = false;
let type = "";

let newEvents = [];
let canaisComunicacao = [];
let tickets = [];
let automations = [];

if (info === "newEvent") {
  let newE = "Novo evento";
  newEvents.push(newE);
  console.log(newEvents);
  type = "info";
  console.log(type);
}

if (isSuccess === true) {
  if (option === "notification") {
    let notify = "Notificação ";
    type = "success";
    canaisComunicacao.push(notify);
    console.log(canaisComunicacao);
    console.log(type);
  }
  if (option === "automation") {
    let auto = "Automação ";
    type = "success";
    automations.push(auto);
    console.log(automations);
    console.log(type);
  }
  if (option === "ticket") {
    let auto = "Ticket ";
    type = "success";
    automations.push(auto);
    console.log(automations);
    console.log(type);
  }
}

// #################################################

// por switch case, preciso ver se esse formato é melhor para fazer o que preciso

// switch (info) {
//   case "newEvent":
//     let newE = "Novo evento";
//     newEvents.push(newE);
//     console.log(newEvents);
//     type = "info";
//     console.log(type);
//     break;
//   case "automation":
//     if (isSuccess === true) {
//       let auto = "Automação ";
//       type = "success";
//       automations.push(auto);
//       console.log(automations);
//       console.log(type);
//     } else {
//       let auto = "Automação ";
//       type = "error";
//       automations.push(auto);
//       console.log(automations);
//       console.log(type);
//     }
//     break;
//   case "notification":
//     if (isSuccess === true) {
//       let notify = "Notificação ";
//       type = "success";
//       canaisComunicacao.push(notify);
//       console.log(canaisComunicacao);
//       console.log(type);
//     } else {
//       let notify = "Notificação ";
//       type = "error";
//       canaisComunicacao.push(notify);
//       console.log(canaisComunicacao);
//       console.log(type);
//     }
//     break;
//   case "ticket":
//     if (isSuccess === true) {
//       let ticket = "Tickets";
//       type = "success";
//       tickets.push(ticket);
//       console.log(tickets);
//       console.log(type);
//     } else {
//       let ticket = "Tickets";
//       type = "error";
//       tickets.push(ticket);
//       console.log(tickets);
//       console.log(type);
//     }
//     break;

//   default:
//     console.log("Sem notificação selecionada!");
// }
