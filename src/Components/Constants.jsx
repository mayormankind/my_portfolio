import {RiMailFill,RiWhatsappFill,RiGithubFill,RiTwitterFill, RiFacebookFill, RiLinkedinBoxFill, RiInstagramFill, RiYoutubeFill} from 'react-icons/ri';
export const Navs = [
  {lab:'About',refr:'#about',id:'0'},
  {lab:'Portfolio',refr:'#projects',id:'1'},
  {lab:'Socials',refr:'#contact',id:'2'}
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
  {
    id:'3',
    Sname:'Whatsapp',
    icon:<RiWhatsappFill/>,
    ref:'https://wa.me/+2347040829383'
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