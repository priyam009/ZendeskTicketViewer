const updatePageButton = (cursor, id) => {
  const nextPage = document.getElementById("next-page");
  const previousPage = document.getElementById("previous-page");

  // Get cursor value from button
  nextPage.setAttribute("data-value", cursor.after_cursor);
  previousPage.setAttribute("data-value", cursor.before_cursor);

  //check if more pages exist
  cursor.has_more
    ? (nextPage.style.display = "block")
    : (nextPage.style.display = "none");

  //check if this is the first page
  id === 1
    ? (previousPage.style.display = "none")
    : (previousPage.style.display = "block");

};

export default updatePageButton;
