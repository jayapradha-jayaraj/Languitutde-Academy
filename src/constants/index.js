import {
  Recurit,
  Manage,
  Training,
  logo,
} from "../assets";
import gmail from '../assets/media/gmail.png'
import linkedin from '../assets/media/linkedin.png'
import twitter from '../assets/media/twitter.png'
import instagram from '../assets/media/instagram.jpg'
import whatsapp from '../assets/media/whatsapp.jpg'

export const navLinks = [
  {
    id: "aboutUs",
    title: "Our Journey", //about
  },
  {
    id: "service",
    title: "Our Expertise", // Training and Courses
  },
  {
    id: "becomeateacher",
    title: "Desire to Teach", //becomeateacher
  },
  {
    id: "contact",
    title: "Contact Us", //contact
  },
  {
    id: "account",
    title: "Member Access", //Account
  },
  {
    id: "FAQs",
    title: "Need Help",  //FQA
  },
];
const AboutUsWhatWeDo = [
  {
    title: "We Train Teachers",
    icon: Training,
    content: " We provide training on how to Teach English Online to kids and Adults.",
  },
  {
    title: "We Recurit Teachers",
    icon: Recurit,
    content: "After Training our teachers are given access to premium clients across the globe. From Asia, to Europe, South America and Africa.",
  },
  {
    title: "We Manage Teachers",
    icon: Manage,
    content: "We manage all Languitude Teachers and ensure they are granted unlimited access to jobs in the market. We equally provide lifelong mentorship and a strong support system.",
  },
];

const testimonials = [
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/03/video_2023-03-22_23-46-45.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/01/video_2023-01-27_00-20-27.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/01/video_2023-01-27_00-20-23.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/03/video_2023-03-22_23-46-50.mp4",
    name: "XXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/01/video_2023-01-27_00-20-25.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/03/video_2023-03-22_23-46-45.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/03/video_2023-03-22_23-46-39.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
  {
    video:"https://languitudeacademy.com/wp-content/uploads/2023/03/video_2023-03-22_23-46-13.mp4",
    name: "XXXX",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    poster: logo,
  },
];

const MediaData = [
    {
      img:gmail,
      title: "facebook",
      href: "https://www.gmail.com"
    },
    {
      img:instagram,
      title: "instagram",
      href: "https://www.instagram.com/languitude/?igshid=MDM4ZDc5MmU%3D"
    },
    {
      img:twitter,
      title: "twitter",
      href: "https://twitter.com"
    },
    {
      img:linkedin,
      title: "twitter",
      href: "https://www.linkedin.com/company/languitude/"
    },
  
    {
      img:whatsapp,
      title: "whatsapp",
      href: "https://whatsapp.com"
    },
];
export { AboutUsWhatWeDo,testimonials,MediaData};
