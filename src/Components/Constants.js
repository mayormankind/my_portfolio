import {RiMailFill,RiWhatsappFill,RiGithubFill,RiTwitterFill, RiFacebookFill, RiLinkedinBoxFill} from 'react-icons/ri';
export const Navs = [
  {lab:'About',refr:'#about',id:'0'},
  {lab:'Services',refr:'#services',id:'1'},
  {lab:'My Projects',refr:'#projects',id:'3'},
  {lab:'Social',refr:'#contact',id:'4'}
];
export const Accounts=[
  {
    id:'1',
    Sname:'Github',
    icon:<RiGithubFill/>,
    ref:'https://github.com/mayormankind'
  },
  {
    id:'2',
    Sname:'Twitter',
    icon:<RiTwitterFill/>,
    ref:'https://mobile.twitter.com/MakindeMayowaO5'
  },
  {
    id:'3',
    Sname:'Whatsapp',
    icon:<RiWhatsappFill/>,
    ref:'https://wa.me/07040829383'
  },
  {
    id:'4',
    Sname:'Email',
    icon:<RiMailFill/>,
    ref:'mailto:mayowamakinde23@gmail.com?subject=SendMail&body=Description'
  },
  {
    id:'5',
    Sname:'Facebook',
    icon:<RiFacebookFill/>,
    ref:'https://www.facebook.com/profile.php?id=100081687606178'
  },
  {
    id:'6',
    Sname:'LinkedIn',
    icon:<RiLinkedinBoxFill/>,
    ref:'https://www.facebook.com/profile.php?id=100081687606178'
  }
]