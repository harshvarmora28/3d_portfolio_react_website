import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    flutter,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    firebase,
    meta,
    starbucks,
    tesla,
    shopify,
    the_sparks_foundation,
    snc,
    carrent,
    jobit,
    tripguide,
    threejs,
    hiring_cell,
    wallet_me,
    target,
    timestack,
    disk_scheduling,
    keep_notes,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Nodejs Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "The Sparks foundation",
      icon: the_sparks_foundation,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Adding the razorpay payment gateway into the web application using api.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical head",
      company_name: "S & C PDEU",
      icon: snc,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Maintaining databases and creating web applications for college events.",
        "Improving and upgrading the existing web applications used by college.",
        "Learning new technologies while making web applications for college clubs.",
        "Working with other developers to improve team working.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a app as beautiful as our product, but Harsh proved me wrong.",
      name: "Neh Patel",
      designation: "Bug hunter",
      company: "Yogosha",
      image: "https://pbs.twimg.com/profile_images/1336388176684847104/Pfn9JuyP_400x400.jpg",
    },
    {
      testimonial:
        "I've never met a developer who truly cares about their clients' success like Harsh does.",
      name: "Pratik Patel",
      designation: "Analyst",
      company: "Wageningen",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Harsh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Vipul Chaudhary",
      designation: "Freelancer",
      company: "Fiverr",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hiring Cell",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hiring_cell,
      source_code_link: "https://github.com/harshvarmora28/pioneer",
    },
    {
      name: "wallet.me",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "ios",
          color: "pink-text-gradient",
        },
      ],
      image: wallet_me,
      source_code_link: "https://github.com/harshvarmora28/expense_tracker_flutter_app",
    },
    {
      name: "Target",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: target,
      source_code_link: "https://github.com/harshvarmora28/target_firebase_flutter_app",
    },
    {
      name: "Timestack",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: timestack,
      source_code_link: "https://github.com/harshvarmora28/time_stack_next_website",
    },
    {
      name: "Disk scheduling algo",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: disk_scheduling,
      source_code_link: "https://github.com/harshvarmora28/disk_scheduling_algorithm_react_website",
    },
    {
      name: "Keep notes",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: keep_notes,
      source_code_link: "https://github.com/harshvarmora28/keep_notes_react_website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };