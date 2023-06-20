const cardData=[
    {
        "name":"Tonic",
        "heading":["CANOPY","Back End Dev","2015"],
        "cardDetail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        "skills":["html","css","js"],
        "image":"images/third-card.svg"
    },
    {
        "name":"Tonic",
        "heading":["CANOPY","Back End Dev","2015"],
        "cardDetail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        "skills":["html","css","js"],
        "image":"images/third-card.svg"
    },
    {
        "name":"Tonic",
        "heading":["CANOPY","Back End Dev","2015"],
        "cardDetail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        "skills":["html","css","js"],
        "image":"images/third-card.svg"
    },
    {
        "name":"Tonic",
        "heading":["CANOPY","Back End Dev","2015"],
        "cardDetail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        "skills":["html","css","js"],
        "image":"images/third-card.svg"
    }
];

const cards=document.querySelectorAll('.card');

for(let i = 0;i < cards.length;i++) {
    let cardContainer=document.createElement("div");
    cardContainer.id=`card-${i}`;
    cardContainer.classList.add("popup");

    let closePopup = document.createElement('a');
    closePopup.innerHTML = '<img src="images/Icon - Cancel.svg">';
    closePopup.classList.add("close-popup");
    cardContainer.appendChild(closePopup);

    let name=document.createElement("h2");
    name.textContent=cardData[i].name;
    name.classList.add("ab")
    cardContainer.appendChild(name);

    let heading=document.createElement("p");
    heading.innerHTML=` <strong>${cardData[i].heading[0]}</strong>
    <i class="fa-solid fa-circle fa-2xs"></i> ${cardData[i].heading[1]}
    <i class="fa-solid fa-circle fa-2xs"></i> ${cardData[i].heading[2]}`
    heading.classList.add("abc");
    cardContainer.appendChild(heading);

    let projectImage = document.createElement("img");
    projectImage.src = cardData[i].image;
    projectImage.classList.add("aa");
    cardContainer.appendChild(projectImage);

    let detail=document.createElement("p");
    detail.textContent=cardData[i].cardDetail;
    detail.classList.add("abc");
    cardContainer.appendChild(detail);

    let projectSkills = document.createElement('ul');
    projectSkills.innerHTML = `<li>${cardData[i].skills[0]}</li><li>${cardData[i].skills[1]}</li><li>${cardData[i].skills[2]}</li>`
    projectSkills.classList.add("abc");
    cardContainer.appendChild(projectSkills);

    document.body.appendChild(cardContainer);
}

const seeProject=document.querySelectorAll('.project-details-btn');
for(let i = 0;i < seeProject.length;i +=1) {
  seeProject[i].addEventListener('click' , ()=> {
    document.getElementById(`card-${i}`).classList.toggle('visible');
    const hideElements = document.querySelectorAll('section:not(.main)');
    for (let i = 0; i < hideElements.length; i += 1) {
        hideElements[i].classList.toggle('hidden');
    }
    document.querySelector('.main').classList.toggle('blurred');
    document.querySelector('header').classList.toggle('blurred');
 });
}
