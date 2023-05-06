console.log('funguju');

const Email = (data) => {
  return `
        <div class="email">
          <div class="email__head">
            <button class="email__icon email__icon--closed"></button>
            <div class="email__info">
              <div class="email__sender">${data.sender.name}</div>
              <div class="email__subject">${data.subject}</div>
            </div>
             <div class="email__time">${data.time}</div>
          </div>
          <div class="email__body"></div>
        </div>
  `;
};

const renderEmails = (items) => {
  const inboxElm = document.querySelector('#inbox');
  inboxElm.innerHTML = items.emails.map((item) => Email(item)).join('');
};

const renderData = async () => {
  const resp = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/emails',
  );
  const data = await resp.json();
  renderEmails(data);
};

renderData();
