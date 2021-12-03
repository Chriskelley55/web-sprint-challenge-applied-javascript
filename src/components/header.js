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
  //
  const topCard = document.createElement('div');
  const topDate = document.createElement('span');
  const topTitle = document.createElement('h1');
  const topTemp = document.createElement('span');

  topCard.classList.add('header');
  topDate.classList.add('date');
  topTemp.classList.add('temp');

  topCard.appendChild(topTitle);
  topCard.appendChild(topDate);
  topCard.appendChild(topTemp);
  
  topTitle.textContent = title;
  topDate.textContent = date;
  topTemp.textContent = temp;
  
  return topCard;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const topDiv = document.querySelector(selector)
  topDiv.appendChild(Header('Bloom News', 'Stardate 99519.15','295 Kelvin' ));
  return topDiv;
}

export { Header, headerAppender }
