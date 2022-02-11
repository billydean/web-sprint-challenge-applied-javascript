const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  // create elements in markup
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleCard = document.createElement("h1");
  const tempSpan = document.createElement("span");
  // add classes per markup
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");
  // element hierarchy
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleCard);
  headerDiv.appendChild(tempSpan);
  // text content
  dateSpan.textContent = `${date}`;
  titleCard.textContent = `${title}`;
  tempSpan.textContent = `${temp}`;
  // return
  return headerDiv;
}
console.log(Header("BloomTech Times","February 11, 2022", "57"));

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  const parent = document.querySelector(selector);
  const header = Header("BloomTech Times","February 11, 2022", "57");
  parent.appendChild(header);
};

export { Header, headerAppender }
