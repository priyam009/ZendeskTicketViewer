import updateTimestampToLocalDate from "./utils/updateTimestampToLocalDate.js";

const singleTicketViewGenerator = (response) => {
  const id = document.getElementById("ticket-id");
  const subject = document.getElementById("ticket-subject");
  const description = document.getElementById("ticket-description");
  const createdAt = document.getElementById("ticket-createdAt");
  const updatedAt = document.getElementById("ticket-updatedAt");
  const status = document.getElementById("ticket-status");
  const requesterId = document.getElementById("ticket-requesterId");
  const assigneeId = document.getElementById("ticket-assigneeId");

  id.textContent = response.ticket.id;
  subject.textContent = response.ticket.subject;
  description.textContent = response.ticket.description;
  createdAt.textContent = updateTimestampToLocalDate(
    response.ticket.created_at
  );
  updatedAt.textContent = updateTimestampToLocalDate(
    response.ticket.updated_at
  );
  status.textContent = response.ticket.status;
  requesterId.textContent = response.ticket.requester_id;
  assigneeId.textContent = response.ticket.assignee_id;
};

export default singleTicketViewGenerator;
