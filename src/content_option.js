import profileImg from './assets/images/react-porfolio.png';
import ceoportfolioImg from './assets/images/ceoportfolio.png';
import bytecopiedImg from './assets/images/bytecopied.png';
import bytesyncedImg from './assets/images/bytesynced.png';
import bytecontestImg from './assets/images/bytecontest.png';

const logotext = "BYTEBUILDER";
const meta = {
    title: "ByteBuilder",
    description: "We're ByteBuilder, a data science and full stack development team currently working in Berlin",
};

const introdata = {
    title: "We're ByteBuilder",
    animated: {
        first: "We love coding",
        second: "We code cool websites",
        third: "We develop mobile apps",
    },
    description: "At ByteBuilder, we craft modern websites and mobile apps that help businesses grow and stand out in the digital world.",
    your_img_url: profileImg,
};

const dataabout = {
    title: "Who are we ?",
    aboutme: "We are ByteBuilder, a passionate team of developers and designers dedicated to building modern websites and mobile apps. Our mission is to help businesses and individuals thrive in the digital world with innovative, user-friendly solutions tailored to their needs.",};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [
    {
      title: "Website Design",
      description: "We craft modern, responsive websites that reflect your brand and engage your audience.",
    },
    {
      title: "UI & UX Design",
      description: "Our team designs intuitive and visually appealing interfaces to ensure a seamless user experience.",
    },
    {
      title: "Mobile App Development",
      description: "We develop high-quality mobile applications that bring your ideas to life on any device.",
    },
  ];

const dataportfolio = [
  {
    img: ceoportfolioImg,
    description: "CEO Portfolio: The personal portfolio of Jugal Vaghmashi, showcasing skills, experience, and projects. A modern, interactive developer portfolio.",
    link: "https://byte-folio.netlify.app/",
  },
  {
    img: bytecopiedImg,
    description: "ByteCopied: A code snippet management app with download code facility in PDF format, inactive student check facility for admin dashboard, and integrated with our web apps like ByteSynced and ByteContest.",
    link: "https://jugal-ahir.github.io/ByteCopied/",
  },
  {
    img: bytesyncedImg,
    description: "ByteSynced: A real-time collaboration platform designed for seamless team coding, project management, and live execution. Provides a synchronized, smart, and interactive environment for developers, educators, and students.",
    link: "https://byte-synced.vercel.app/",
  },
  {
    img: bytecontestImg,
    description: "ByteContest: A comprehensive online coding contest platform built with React, TypeScript, Node.js, and MongoDB.",
    link: "https://github.com/jugal-ahir/ByteContest",
  },
];

const contactConfig = {
    YOUR_EMAIL: "vaghmashijugal@gmail.com",
    YOUR_FONE: "+91 7405222505",
    description: "Have a project in mind or want to collaborate? Reach out to ByteBuilder—we're always excited to connect and help bring your ideas to life!",    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_jd5k67h",
    YOUR_TEMPLATE_ID: "template_69tl3u9",
    YOUR_USER_ID: "GQdpw9lHtMYmW1sOW",
};

const socialprofils = {
    github: "https://github.com/jugal-ahir",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/jugalvaghmashi",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};