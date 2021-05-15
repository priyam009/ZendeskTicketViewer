import updateTimestampToLocalDate from "./utils/updateTimestampToLocalDate.js";

const multipleTicketViewGenerator = (response) => {
  //Clear all the table row elements under table=>tbody element
  clearAllTickets();

  const table = document.getElementById("tickets-table");

  const tbody = document.createElement("tbody");
  tbody.setAttribute("id", "ticket-list");

  for (let i = 0; i < response.tickets.length; i++) {
    const tr = document.createElement("tr");

    const id = document.createElement("td");
    id.textContent = response.tickets[i].id;

    const subject = document.createElement("td");
    subject.textContent = response.tickets[i].subject;

    const createdAt = document.createElement("td");
    createdAt.textContent = updateTimestampToLocalDate(
      response.tickets[i].created_at
    );

    const updatedAt = document.createElement("td");
    updatedAt.textContent = updateTimestampToLocalDate(
      response.tickets[i].updated_at
    );

    const status = document.createElement("td");
    status.textContent = response.tickets[i].status;

    tr.appendChild(id);
    tr.appendChild(subject);
    tr.appendChild(createdAt);
    tr.appendChild(updatedAt);
    tr.appendChild(status);

    tr.setAttribute("id", response.tickets[i].id);

    tbody.appendChild(tr);
    table.appendChild(tbody);
  }
};

const clearAllTickets = () => {
  if (document.getElementById("ticket-list")) {
    document.getElementById("ticket-list").remove();
  }
};

export default multipleTicketViewGenerator;
