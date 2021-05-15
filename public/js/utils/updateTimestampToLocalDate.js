//Udpate timestamp from UTC to AEST
let updateTimestampToLocalDate = (updateTimestamp) => {
  let date = new Date(updateTimestamp);
  return date.toLocaleString();
};

export default updateTimestampToLocalDate;
