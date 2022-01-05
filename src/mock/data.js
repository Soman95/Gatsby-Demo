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
  subtitle: 'and I am a Front End Developer',
  cta: 'Find out more',
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
    img: 'TodoList.png',
    title: 'Todo List App',
    info: "Here's a simplistic todo app that will help you keep track of tasks you need to do. This app relies heavily upon React.js, utilising hooks, states and functional components.",
    info2: 'Styling was kept simple and clean. By leveraging and managing state the app remembers your todo list even after you refresh the page',
    url: 'https://todolist-soman95.netlify.app/',
    repo: 'https://github.com/Soman95/TodoList', // if no repo, the button will not show up
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
    img: 'cryptoapp.png',
    title: 'Crypto Watch',
    info: 'Here we have an easy on the eye app that is designed to help you keep track of prices and other info of crypto-currencies.',
    info2: 'A React heavy project that makes the most of the useEffect hook.',
    url: 'https://somancryptowatch.netlify.app',
    repo: 'https://github.com/Soman95/cryptowatch', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipeapp.png',
    title: 'Reci-app',
    info: 'Find your favourite recipe and other relevant info with this superb React based App.',
    info2: 'Through state manipulation and API utilisation, this App provides a pleasant experience for anyone looking for a good recipe to follow.',
    url: 'https://recipe-app-solo.netlify.app',
    repo: 'https://github.com/Soman95/recipeapp', // if no repo, the button will not show up
  },
];

// ABOUT DATA
export const aboutData = {
  paragraphOne: 'I am a passionate web developer who has experience and is proficient in HTML, CSS, JavaScript, Node.js, and React.JS. I pride myself in being able to deliver quality work and in an efficient manner. Marking my transition into the tech industry in 2020, I have thouroughly enjoyed the journey and can truly say I have found my passion.',
  paragraphTwo: 'I feel confident in my ability to build responsive, user-friendly websites and tackle problems associated with the process. As a result of my continous learning & development, alongside challenging myself consistently, I have been able to produce projects reflective of my ability, for both myself and clients.',
  paragraphThree: '',
  resume: 'https://shorturl.at/nwUW7', // if no resume, the button will not show up
};

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
