import singleTicketViewGenerator from "./singleTicketViewGenerator.js";
import api from "./utils/api.js";

//Shows Ticket details when single ID is submitted
const showSingleTicket = () => {
  document
    .getElementById("ticket-id-submit")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const id = document.getElementById("ticket-id-input").value;

      getSingleTicket(id);
    });
};

//Validate Input Ticket id form for correct value
const validateForm = (resp) => {
  document.getElementById("ticket-id-form").reset();
  if (!resp.ok) {
    alert("ID doesnot exist. Try Again.");
    return false;
  }
  return true;
};

//Get Ticket details for ID from API
const getSingleTicket = (id) => {
  api(`/ticket/${id}`)
    .then((resp) => {
      if (validateForm(resp)) {
        return resp.json();
      }
    })
    .then((res) => {
      if (res) {
        singleTicketViewGenerator(res);

        const singleTicket = document.getElementById("single-ticket");
        const multipleTickets = document.getElementById("multiple-tickets");
        multipleTickets.style.display = "none";
        singleTicket.style.display = "block";
      }
    });
};

export default showSingleTicket;
