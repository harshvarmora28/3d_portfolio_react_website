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
    outturn,
    neh, 
    pratik,
    vipul,
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
      image: neh,
    },
    {
      testimonial:
        "I've never met a developer who truly cares about their clients' success like Harsh does.",
      name: "Pratik Patel",
      designation: "Analyst",
      company: "Wageningen",
      image: pratik,
    },
    {
      testimonial:
        "After Harsh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Vipul Chaudhary",
      designation: "Freelancer",
      company: "Fiverr",
      image: vipul,
    },
  ];
  
  const projects = [
    {
      name: "Hiring Cell",
      description:
        "Placement cells can showcase their profile to the companies. Companies can post the status for hiring purposes. Companies can list all hiring details in their profile. Companies and Placement cells can send autonomous emails to communicate.",
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
      preview_link: "https://pioneer-hiring-cell.web.app/",
      source_code_link: "https://github.com/harshvarmora28/pioneer",
    },
    {
      name: "wallet.me",
      description:
        "Designed and developed a clean and modern Expense tracker app using Flutter and SharedPreferences. Users can track their weekly expenses with dynamic chart visualization. Utilized responsive design to ensure compatibility across all devices. Published on google playstore with 5 star rating.",
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
      preview_link: "https://play.google.com/store/apps/details?id=com.harshcreations.wallet.io",
      source_code_link: "https://github.com/harshvarmora28/expense_tracker_flutter_app",
    },
    {
      name: "Target",
      description:
        "A Stock market community wherein traders can discuss about indian stocks. Traders can also view live charts of stocks trading in indian stock market. Plan is to include paper trading feature in the application for all segments of national stock exchange(NSE).",
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
      preview_link: "https://github.com/harshvarmora28/target_firebase_flutter_app",
      source_code_link: "https://github.com/harshvarmora28/target_firebase_flutter_app",
    },
    {
      name: "Timestack",
      description:
        "TimeStack is an open source pomodoro time management app, which helps managing distractions and control your time. The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study.",
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
      preview_link: "https://timestack-byharshcreations.netlify.app/",
      source_code_link: "https://github.com/harshvarmora28/time_stack_next_website",
    },
    {
      name: "Disk scheduling algo",
      description:
        "A comprehensive website on various disk scheduling algorithms present in the market, wherein you can calculate the shortest path and nodes along with graph by giving the input string for the required algorithm.",
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
      preview_link: "https://g4-team2-disk-scheduling-algo.web.app/",
      source_code_link: "https://github.com/harshvarmora28/disk_scheduling_algorithm_react_website",
    },
    {
      name: "Keep notes",
      description:
        "A React Web-app with modern UI experience to store your notes in the cloud. You can manage your notes from different devices seamlessly with realtime data fetching from cloud. ",
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
      preview_link: "https://github.com/harshvarmora28/keep_notes_react_website",
      source_code_link: "https://github.com/harshvarmora28/keep_notes_react_website",
    },
    {
      name: "Outturn - Track your Crypto Investment",
      description:
        "It shows Live Charts of all trending Cryptocurrencies out there including Live Price with change in percentage in 7 days of all trending Cryptocurrencies out there along with the Portfolio Screen for live tracking of your investment implemented with Modern Profile Section screen.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: outturn,
      preview_link: "https://github.com/harshvarmora28/outturn_react_native",
      source_code_link: "https://github.com/harshvarmora28/outturn_react_native",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };