const cardData = [
  {
    name: 'Tonic',
    heading: ['CANOPY', 'Back End Dev', '2015'],
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'javaScript'],
    image: 'images/Snapshoot Portfolio.svg',
    live_version: 'https://anshuman7negi.github.io/my-portfolio/',
    link_source: 'https://github.com/anshuman7negi/my-portfolio',
  },
  {
    name: 'Tonic',
    heading: ['CANOPY', 'Back End Dev', '2015'],
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'javaScript'],
    image: 'images/Multi-post-stories.svg',
  },
  {
    name: 'Tonic',
    heading: ['CANOPY', 'Back End Dev', '2015'],
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'javaScript'],
    image: 'images/third-card.svg',
  },
  {
    name: 'Tonic',
    heading: ['CANOPY', 'Back End Dev', '2015'],
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'javaScript'],
    image: 'images/fouth-card.svg',
  },
];

for (let i = 0; i < cardData.length; i += 1) {
  const worksection = document.getElementById('work-section');
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = cardData[i].image;
  card.appendChild(cardImage);

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  card.appendChild(cardText);

  const title = document.createElement('h2');
  title.textContent = cardData[i].name;
  cardText.appendChild(title);

  const cardPara = document.createElement('p');
  cardPara.innerHTML = ` <strong>${cardData[i].heading[0]}</strong>
  <i class="fa-solid fa-circle fa-2xs"></i> ${cardData[i].heading[1]}
  <i class="fa-solid fa-circle fa-2xs"></i> ${cardData[i].heading[2]}`;
  cardText.appendChild(cardPara);

  const cardProjectDetail = document.createElement('p');
  cardProjectDetail.textContent = cardData[i].cardDetail;
  cardProjectDetail.classList.add('detail');
  cardText.appendChild(cardProjectDetail);

  const technologies = document.createElement('ul');
  technologies.innerHTML = `<li>${cardData[i].skills[0]}</li><li>${cardData[i].skills[1]}</li><li>${cardData[i].skills[2]}</li>`;
  cardText.appendChild(technologies);

  const cardButtoncontainer = document.createElement('div');
  cardButtoncontainer.innerHTML = ' <input class="btn" type="button" value="See Project" />';
  cardButtoncontainer.classList.add('project-details-btn');
  cardText.appendChild(cardButtoncontainer);

  worksection.appendChild(card);
}

for (let i = 0; i < cardData.length; i += 1) {
  const cardContainer = document.createElement('div');
  cardContainer.id = `card-${i}`;
  cardContainer.classList.add('popup');

  const firstcardContainer = document.createElement('div');
  firstcardContainer.classList.add('firstcardcontainer');
  cardContainer.appendChild(firstcardContainer);

  const popname = document.createElement('h2');
  popname.textContent = cardData[i].name;
  popname.classList.add('popup-name');
  firstcardContainer.appendChild(popname);

  const closePopup = document.createElement('a');
  closePopup.id = `closepopup-${i}`;
  closePopup.innerHTML = '<img src="images/card-cancel-btn.svg">';
  closePopup.classList.add('close-popup');
  firstcardContainer.appendChild(closePopup);

  const heading = document.createElement('p');
  heading.innerHTML = ` <strong>${cardData[i].heading[0]}</strong>
    <i class="fa-solid fa-circle fa-2xs"></i> ${cardData[i].heading[1]}
    <i class="fa-solid fa-circle fa-2xs"></i> ${cardData[i].heading[2]}`;
  heading.classList.add('popup-heading');
  firstcardContainer.appendChild(heading);

  const projectImage = document.createElement('img');
  projectImage.src = cardData[i].image;
  projectImage.classList.add('popcardImage');
  firstcardContainer.appendChild(projectImage);

  const topcardContainer = document.createElement('div');
  topcardContainer.classList.add('popcard-top');
  firstcardContainer.appendChild(topcardContainer);

  const detail = document.createElement('p');
  detail.textContent = cardData[i].cardDetail;
  detail.classList.add('pop-card-projectDetail');
  topcardContainer.appendChild(detail);

  const bottomcardContainer = document.createElement('div');
  bottomcardContainer.classList.add('popcard-bottom');
  topcardContainer.appendChild(bottomcardContainer);

  const projectSkills = document.createElement('ul');
  projectSkills.innerHTML = `<li>${cardData[i].skills[0]}</li><li>${cardData[i].skills[1]}</li><li>${cardData[i].skills[2]}</li>`;
  projectSkills.classList.add('popup-list');
  bottomcardContainer.appendChild(projectSkills);

  const line = document.createElement('hr');
  bottomcardContainer.appendChild(line);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('popupbtns');
  bottomcardContainer.appendChild(btnContainer);

  const liveBtn = document.createElement('div');
  liveBtn.innerHTML = `<a href="${cardData[i].live_version}">See live</a> <img src="images/live-icon.svg" alt="Live project icon">`;
  liveBtn.classList.add('popcardbtn');
  btnContainer.appendChild(liveBtn);

  const liveSource = document.createElement('div');
  liveSource.innerHTML = `<a href="${cardData[i].link_source}">See source</a> <img src="images/sourcecode-git-icon.svg" alt="See source code icon">`;
  liveSource.classList.add('popcardbtn');
  btnContainer.appendChild(liveSource);

  document.body.appendChild(cardContainer);
}

const seeProject = document.querySelectorAll('.project-details-btn');
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    document.getElementById(`card-${i}`).classList.toggle('visible');
    const hideElements = document.querySelectorAll('section:not(.main)');
    for (let i = 0; i < hideElements.length; i += 1) {
      hideElements[i].classList.toggle('hidden');
    }
  });
}

// Card Cancel Button
const cardCloseBtn = document.querySelectorAll('.firstcardcontainer .close-popup');
for (let i = 0; i < cardCloseBtn.length; i += 1) {
  cardCloseBtn[i].addEventListener('click', () => {
    document.getElementById(`card-${i}`).classList.toggle('visible');
    const hideElements = document.querySelectorAll('section:not(.main)');
    for (let i = 0; i < hideElements.length; i += 1) {
      hideElements[i].classList.toggle('hidden');
    }
  });
}
