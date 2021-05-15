import multipleTicketViewGenerator from "./multipleTicketViewGenerator.js";
import udpatePageButton from "./updatePageButton.js";
import api from "./utils/api.js";

//Get Ticket elements by ID
const showTicketList = () => {
  document.getElementById("show-all-tickets").onclick = getElementData;
  document.getElementById("next-page").onclick = getElementData;
  document.getElementById("previous-page").onclick = getElementData;
};

//Check if clicked button is a "Show All", "Next" or "Previous" button and set attr and url.
function getElementData() {
  let url = "";
  let attr = "";

  if (this.id === "show-all-tickets") {
    url = "/tickets";
  } else if (this.id === "next-page" || "previous-page") {
    attr = this.getAttribute("data-value");
    url = `/tickets/${this.id}/${attr}`;
  }
  getPageList(url);
}

//Make GET request, alter and display response
const getPageList = (url) => {
  api(url)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((resp) => {
      if (resp) {
        multipleTicketViewGenerator(resp);
        udpatePageButton(resp.meta, resp.tickets[0].id);

        const singleTicket = document.getElementById("single-ticket");
        const multipleTickets = document.getElementById("multiple-tickets");
        multipleTickets.style.display = "block";
        singleTicket.style.display = "none";
      }
    });
};

export default showTicketList;
