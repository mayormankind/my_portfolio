import { collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import {RiMailFill,RiWhatsappFill,RiGithubFill,RiTwitterFill, RiFacebookFill, RiLinkedinBoxFill, RiInstagramFill, RiYoutubeFill} from 'react-icons/ri';
import { db } from '../firebase';
import { FaGamepad, FaServer } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';


export const projectRef = collection(db,'mankind-projects');

export const Navs = [
  {lab:'Home',refr:'#home',alt:'/'},
  {lab:'About',refr:'#about',alt:'/#about'},
  {lab:'Portfolio',refr:'/projects', alt:'/projects'},
  {lab:'Socials',refr:'#contact', alt:'/#contact'}
];

export const Accounts=[
  {
    id:'1',
    Sname:'Github',
    icon:<RiGithubFill/>,
    ref:'https://github.com/mayormankind'
  },
  // {
  //   id:'2',
  //   Sname:'Twitter',
  //   icon:<RiTwitterFill/>,
  //   ref:'https://mobile.twitter.com/MakindeMayowaO5'
  // },
  // {
  //   id:'3',
  //   Sname:'Whatsapp',
  //   icon:<RiWhatsappFill/>,
  //   ref:'https://wa.me/+2347040829383'
  // },
  {
    id:'4',
    Sname:'Email',
    icon:<RiMailFill/>,
    ref:'mailto:mayowamakinde23@gmail.com?subject=SendMail&body=Description'
  },
  {
    id:'6',
    Sname:'Instagram',
    icon:<RiInstagramFill/>,
    ref:'https://www.instagram'
  },
  {
    id:'7',
    Sname:'LinkedIn',
    icon:<RiLinkedinBoxFill/>,
    ref:'https://www.linkedin.com/makinde-mayowa-4670a51bb'
  },
  {
    id:'8',
    Sname:'Youtube',
    icon:<RiYoutubeFill/>,
    ref:'https://www.youtube.com/mankindDev'
  }
]

export const projectList = [
  {pid:0, projectName:`EIT's Website`,projectDetails:'The official website of Essential Interlink Technologies (an engineering/electronics company)',projectImage:'images/etn.PNG',pref:'https://eit-website.vercel.app',github:'https://github.com/mayormankind/etn_website',frameworks:['react','chakraUI','react-icons'], category:'fe'},
  {pid:1, projectName:'FaithStream',projectDetails:'A central web app for a readers community where books, videos, and stories are stored for reading and learning purposes.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533485/portfolio/p4_wz6gxs.png',pref:'https://lightgram-app.vercel.app',github:'https://github.com/mayormankind/lightgramApp',frameworks:['react','chakraUI','react-icons'], category:'fs'},
  {pid:2, projectName:'HoistMe',projectDetails:'A CMS to create your own free business portfolio',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533483/portfolio/p3_oeeqme.png',pref:'https://hoistme.vercel.app',github:'https://github.com/mayormankind/HoistMe',frameworks:['react','chakraUI','react-icons'], category:'fs'},
  {pid:3, projectName:'ResCALC',projectDetails:'A resistor value calculator that uses the color band code for its calculation.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1674818587/portfolio/Screenshot_20230126-174704_1_fvjg0p.jpg',pref:'https://res-calc.vercel.app',github:'https://github.com/mayormankind/ResCALC',frameworks:['HTML5','CSS3','javascript'], category:'fe'},
  {pid:4, projectName:"Pick n' Toe",projectDetails:'A TIC-TAC-TOE multiplayer that you could play game with your friends. Designed with javascript',projectImage:'images/pnt1.PNG',pref:'https://tic-tac-toe-mayormankind.vercel.app',github:'https://github.com/mayormankind/TicTacToe',frameworks:['HTML','JavaScript','CSS/SCSS'], category:'gm'},
  {pid:5, projectName:`HillTop Snake`,projectDetails:'A snake game for PC. mobile version coming soon',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1678196514/portfolio/hillSnake_b6ngkk.png',pref:'https://hilltop-snake.vercel.app',github:'https://github.com/mayormankind/Hill-top_Snake',frameworks:['react','chakraUI','react-icons'], category:'gm'},
  {pid:6, projectName:`Mongfrens`,projectDetails:'An anonymous messaging app with timer for self-destructible messages.',projectImage:'images/mongfrens.PNG',pref:'https://mongFrens.vercel.app',github:'https://github.com/mayormankind/Amongfriends',frameworks:['react','chakraUI','react-icons'], category:'fs'},
  {pid:7, projectName:`WordList`,projectDetails:'A character randomizer that gives all possible combinations of a set of characters given.',projectImage:'images/wordlist.PNG',pref:'https://wordlist-rust.vercel.app',github:'https://github.com/mayormankind/wordList',frameworks:['HTML','CSS','javascript'], category:'fe'},
  {pid:8, projectName:`Todo App`,projectDetails:'A simple To-do app for personal use.',projectImage:'images/todo.PNG',pref:'https://todo-with-ts-rho.vercel.app',github:'https://github.com/mayormankind/todoWithTs',frameworks:['HTML','CSS','typescript','javascript'], category:'fe'},
];

export const getProjects = (setData)=>{
  onSnapshot(projectRef,(snapshot)=>{
    setData(
      snapshot.docs.map((docs)=>{
        return { ...docs.data()};
      })
    )
  })
}

export const updateProject = (id,projectInfo) =>{
  let document = doc(projectRef,id);
  updateDoc(document,{
    projectName: projectInfo.projectName,
    projectDetails: projectInfo.projectDetails,
    github: projectInfo.github,
    pref: projectInfo.pref,
    frameworks: projectInfo.frameworks,
    category: projectInfo.category,
  })
  .then(()=>{
    alert('This project has been updated successfully');
  })
  .catch((err)=>{
    alert("couldn't make changes to this project");
  })
}

export const deleteProject = (id) =>{
  let document = doc(projectRef,id);
  deleteDoc(document)
  .then(()=>{
    alert('This project has been deleted successfully');
  })
  .catch((err)=>{
    alert("couldn't delete this project");
  })
}

export const CategoryList= [
  {label: "Front-end", icon: <SiFrontendmentor/>, desc: "Frontend projects ranging from websites to SPA's", href:'/fe', arial:'fe'},
  {label: "Fullstack", icon: <FaServer/>, desc: 'A collection of game designs', href:'/fs', arial:'fs'},
  {label: "Games", icon: <FaGamepad/>, desc: 'A collection of game designs', href:'/games', arial:'gm'}
]