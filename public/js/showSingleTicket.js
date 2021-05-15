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

//Get Ticket details for ID from API
const getSingleTicket = (id) => {
  api(`/ticket/${id}`)
    .then((resp) => {
      return resp.json();
    })
    .then((res) => {
      if (res) {
        singleTicketViewGenerator(res);
      }
    });
};

export default showSingleTicket;
