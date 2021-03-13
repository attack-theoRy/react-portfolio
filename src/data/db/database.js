import Mock from "../mock";

const database = {
  information: {
    name: 'Pirooz Wallace',
    aboutContent: "I am a full-stack web developer. I love the creative side of code.",
    phone: '(510) 684-8821',
    language: 'English',
    email: 'PiroozWallace@outlook.com',
    address: 'Lake Merrit, Oakland',
    freelanceStatus: 'Available',
    socialLinks: {
   //   facebook: 'https://facebook.com',
   //   twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/piroozwallace',
      dribbble: '',
      github: 'https://github.com/attack-theoRy'
    },
    brandImage: 'images/profilepic.PNG',
    aboutImage: 'images/profilepic.PNG',
    aboutImageLg: 'images/profilepic.PNG',
    cvfile: 'https://www.visualcv.com/piroozw/pdf/'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Project Wknd",
      subtitle: "Find something to do on the weekend",
      imageUrl: "images/unsplash.jpg",
      largeImageUrl: ["images/unsplash.jpg"],
      url: 'https://attack-theory.github.io/ProjectWknd/homePage.html'
    },
    {
      id: 2,
      title: "Project WORM Updates",
      subtitle: "Find books and create your own bookshelf",
      imageUrl: "images/SampleBookShelf.png",
      largeImageUrl: [
        "images/SampleBookShelf.png",
        "images/SampleBookShelf.png"
      ],
      url: 'https://gentle-sands-52914.herokuapp.com/'
    },
    {
      id: 3,
      title: "Weather Dashboard",
      subtitle: "Search weather / forecast for your city",
      imageUrl: "images/WeatherSample.png",
      largeImageUrl : ["images/WeatherSample.png"],
      url: 'https://attack-theory.github.io/06WeatherDashPW/'
    },
    {
      id: 4,
      title: "Budget Tracker",
      subtitle: "Keep track of your budget offline (mobile install)",
      imageUrl: "images/Sample2Standalone.png",
      largeImageUrl: ["images/Sample2Standalone.png"],
      url: 'https://secret-chamber-01910.herokuapp.com/'
    },
    {
      id: 5,
      title: "Day Planner",
      subtitle: "Plan your day! Save events for later.",
      imageUrl: "images/plannerScreen.png",
      largeImageUrl: ["images/plannerScreen.png"],
      url: "https://attack-theory.github.io/05Planner/Develop"
    },
    {
      id: 6,
      title: "Password Generator",
      subtitle: "Generate a random password based on your criteria",
      imageUrl: "images/passwordGenScreen.png",
      largeImageUrl: ["images/passwordGenScreen.png"],
      url: "https://attack-theory.github.io/03Password_Gen/index.html"
    },

    /*
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }

    */
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Wordpress Web Developer",
        company: "Numbulary",
        details: "Website in-progess. Daily entries about interesting numbers everyone should know about",
      },
      {
        id: 2,
        year: "2020 - Present",
        position: "Property Manager / Social Worker",
        company: "Options Recovery Services",
        details: "Housing advocate for low-income and those in need. Help clients sign up for section-8 housing and transitional / homeless into permanent housing. Also provide tutoring for those that need help with technology."
      },
      {
        id: 3,
        year: "2016-2017",
        position: "UI/UX Designer",
        company: "Herbal Relief Alternative",
        details: "Created e-commerce site for medical marijuana dispensary."
      },
      {
        id: 4,
        year: "2013",
        position: "IT Consultant",
        company: "Bay Computing Group",
        details: "Managed IT Service provider for 50+ Bay Area Companies."
      },

    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Coding Bootcamp",
        university: "UC Davis",
        details: "Updating my coding skills. Learning HTML, Javascript, CSS, Node.js, React, MySQL."
      },
      {
        id: 2,
        graduation: "Bachelor of Science",
        university: "Full Sail University",
        details: "Accelerated Bachelor's Degree Program. Worked mainly with C++, MFC and C. Final project was a full 3-D video game. My role was gameplay programmer"
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['(510) 684 8821', '(341) 333 9113'],
    emailAddress: ['PiroozWallace@outlook.com', 'PiroozWallace@gmail.com'],
    address: "Lake Merrit, Oakland"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

/*
Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});


Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});
*/

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});



Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});