'use strict';

// write code here
const tableRows = document.querySelectorAll('tr');
const headers = tableRows[0].children;
const tBody = document.querySelector('tbody');


// console.log(rows);

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];

  header.addEventListener('click', () => {
    const rows = [...tBody.children];

    rows.sort((a, b) => {
      return a.children[i].textContent.localeCompare(
        b.children[i].textContent
      );
    });

    tBody.append(...rows);
  });
}
