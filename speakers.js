const projectsC = document.querySelector('.speakers');
const LoadB = document.querySelector('.buttonM');
const LoadD = document.querySelector('.buttonL');
const speekerz = [
  {
    id: 'speaker1',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/45/23/180010_5e909ddd39d50a98c2216165a7ff4523.jpg&w=400&h=400',
    names: 'Aaron Albano',
    company: 'MINGs Music Enterprises LLC',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
  },
  {
    id: 'speaker2',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/5d/71/179495_90565705f8014d566989bf0b05d95d71.jpg&w=400&h=400',
    names: 'Abel Czupor',
    company: 'RadioShzck',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
  },
  {
    id: 'speaker3',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/6e/e1/179467_6a90eeb8035ffe76e468d859c8506ee1.jpg&w=400&h=400',
    names: 'Aaron Lane',
    company: 'MINGs Music Enterprises LLC',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker4',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/52/e5/180296_7f553e459f800d4de35b1d841d8e52e5.jpg&w=400&h=400',
    names: 'Adam Amin',
    company: 'CEO & Founder, Affectiva',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker5',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/16/09/179285_7d272ed485eb9f82b314eaf835201609.jpg&w=400&h=400',
    names: 'John Wolff',
    company: 'Run it Wild Founder Inc',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker6',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/aa/ba/179746_458d354d5149641fa54a0a3f0235aaba.jpg&w=400&h=400',
    names: 'Aaron Albano',
    company: 'President, Promzzy koncepts Inc',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker4',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/52/e5/180296_7f553e459f800d4de35b1d841d8e52e5.jpg&w=400&h=400',
    names: 'Adam Amin',
    company: 'CEO & Founder, Affectiva',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker5',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/16/09/179285_7d272ed485eb9f82b314eaf835201609.jpg&w=400&h=400',
    names: 'John Wolff',
    company: 'Run it Wild Founder Inc',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 'speaker6',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/aa/ba/179746_458d354d5149641fa54a0a3f0235aaba.jpg&w=400&h=400',
    names: 'Aaron Albano',
    company: 'President, Promzzy koncepts Inc',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker2',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/5d/71/179495_90565705f8014d566989bf0b05d95d71.jpg&w=400&h=400',
    names: 'Abel Czupor',
    company: 'RadioShzck',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker3',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/6e/e1/179467_6a90eeb8035ffe76e468d859c8506ee1.jpg&w=400&h=400',
    names: 'Aaron Lane',
    company: 'MINGs Music Enterprises LLC',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    id: 'speaker4',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/52/e5/180296_7f553e459f800d4de35b1d841d8e52e5.jpg&w=400&h=400',
    names: 'Adam Amin',
    company: 'CEO & Founder, Affectiva',
    description:
      "Lorem Ipsum is simply dummy company of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
];

let workCard = '';
let workCard1 = '';
const appendWorks = (speekerz, startt) => {
  for (let i = startt; i < startt + 6; i += 1) {
    workCard += ` <section class="speeker-card">
    <img class="spk-img" src="${speekerz[i].image}" alt="${speekerz[i].names}" />
    <div class="infor"><h3 class="namez">${speekerz[i].names}</h3>
    <p class="card-co">
    ${speekerz[i].company}
    </p> <hr class="hrp">
    <p class="card-description">
    ${speekerz[i].description}
    </p></div> 
      </section>  `;
  }
};
appendWorks(speekerz, 0);
projectsC.innerHTML += workCard;
/* eslint-disable no-unused-vars */
const appendWorksR = (speekerz, startt) => {
  for (let i = startt; i < startt + 11; i += 1) {
    workCard1 += ` <section class="speeker-card">
    <img class="spk-img" src="${speekerz[i].image}" alt="${speekerz[i].names}" />
    <div class="infor"><h3 class="namez">${speekerz[i].names}</h3>
    <p class="card-co">
    ${speekerz[i].company}
    </p>
    <p class="card-description">
    ${speekerz[i].description}
    </p></div> 
      </section>`;
  }
};
LoadD.classList.toggle('hide');
LoadB.addEventListener('click', () => {
  appendWorksR(speekerz, 1);
  projectsC.innerHTML = ' ';
  projectsC.innerHTML = workCard1;
  workCard1 = ' ';
  LoadB.classList.toggle('hide');
  LoadD.classList.remove('hide');
});
LoadD.addEventListener('click', () => {
  workCard = ' ';
  appendWorks(speekerz, 0);
  projectsC.innerHTML = ' ';
  projectsC.innerHTML = workCard;
  workCard = ' ';
  LoadD.classList.toggle('hide');
  LoadB.classList.remove('hide');
});