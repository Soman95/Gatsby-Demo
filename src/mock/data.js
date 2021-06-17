import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sulayman | Front End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi my name is',
  name: 'Sulayman Ibrahim',
  subtitle: 'and I am a self-taught Front End Developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic2.jpg',
  paragraphOne: 'I truly enjoy coding, I find it to be an amazing outlet for my creativity and passion for solving complex problems. I am a biochemistry graduate who has been in love with anything tech related ever since I was the size of watermelon.',
  paragraphTwo: 'The industry is one of high complexity and fast changes. In order to excel in such industry I need to be constantly learning and adapting, whether that be from improving my fluency with any of the current languages I know, or learning a new language, library or framework and implementing the knowledge as soon as I can.',
  paragraphThree: 'Having learnt and implemented HTML, CSS, JavaScript, Node.js, Gatsby.js and React.JS, I feel confident in my ability to build responsive, user-friendly websites and tackle problems associated with the process. As a result of my rigirous schedule in the last few months, I have been able to produce projects reflective of my ability and passion for web development. Please do find them below',
  resume: 'https://bit.ly/35EbFwx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'corona.png',
    title: 'COVID Figures Tracker',
    info: 'An app designed to track figures related to COVID-19 utilising data provided by an external API. React.js and a Material UI were the main engines for this useful project.',
    info2: 'Styling was meticulously organised via modules in order to keep them from overlapping. This project is hosted via Netlify.',
    url: 'https://solotech95-coronatracker.netlify.app/',
    repo: 'https://github.com/Soman95/coronaTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gatsbyblog.png',
    title: 'Gatsby Blog Site',
    info: 'Here is an exciting project I was working with recently. A simple website design with a minimalist theme, featuring a blog section. ',
    info2: 'The project features the usage of React.js, Gatsby.js, the Contentful CMS and hosting on Netlify. ',
    url: 'https://gatsbyblogsite.com/',
    repo: 'https://github.com/Soman95/gatsby-blog-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'YelpCamp.png',
    title: 'Yelp Camp',
    info: 'Created a yelp-like application from scratch. A website where users can create and review campgrounds. This project was created using JavaScript, Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.',
    info2: 'Delopyed with Heroku',
    url: 'https://glacial-tor-76055.herokuapp.com/',
    repo: 'https://github.com/Soman95/YelpCamp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TV Show Finder.png',
    title: 'TV SHOW SEARCHER',
    info: 'An app to help you search and find a TV series. API utilisation and async functions were core to the functionality of this. ',
    info2: 'I found DOM manipulation to be especially useful for the "reset" feature when beginning a new search.',
    url: 'https://codepen.io/soman95/full/jOMgKyZ',
    repo: 'https://github.com/Soman95/TVShows', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pingpong.png',
    title: 'Ping Pong Score Keeper',
    info: 'A fun way of keeping track of scores for a two player ping pong game. ',
    info2: 'This Javascript broswer game makes use of DOM manipulation and event listeners',
    url: 'https://codepen.io/soman95/full/RwGmOPX',
    repo: 'https://github.com/Soman95/PingPongScoreKeeper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'musuemcandy.png',
    title: 'Musuem of Candy',
    info: 'This static web page was created entirely with HTML and CSS (Bootstrap). A candy themed web page for a musuem of candy.',
    info2: 'Care was given to create the aesthetic but to keep the element of responsiveness.',
    url: 'https://codepen.io/soman95/full/vYXgjEL',
    repo: 'https://github.com/Soman95/Museum-of-Candy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfoliov1.png',
    title: 'Portfolio Version 1',
    info: 'Here is my previous version of my portfolio. Despite its functionality and effectiveness, the web page did not incorporate UX/UI principles properly. ',
    info2: 'I managed to manipulate CSS enough to create a typewriter effect for the page intro. Favicons were sourced from fontawesome.',
    url: 'https://sulaymanibrahim.com/',
    repo: 'https://github.com/Soman95/portfoliov1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/soman95',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sulaymanibrah/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Soman95',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
