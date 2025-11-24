import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Alan Chris ",
  lastName: "Dsilva",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "alanchrisdisilva@gmail.com",
  location: "India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam","Hindi","tamil","arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Just in case yall wanna be kept updated with my latest projects and thoughts.
      <br />
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alan61503",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alan-chris-disilva/",
  },
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Alan — Full Stack Developer & AIML Specialist</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">PDF Splitter</strong></>,
    href: "/work/pdf-divider-smart-printing",
  },
  subline: (
    <>
      I'm Alan, a software engineer at <b>Christ (Deemed to be University)</b>, where I craft intuitive
      <br />powerful digital products that merge intelligence with design. Let's create something impactful.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science Engineering (Hons) student specializing in Artificial Intelligence & Machine Learning at Christ University. With a strong foundation in full-stack development and AI/ML, I am passionate about building intuitive user interfaces and leveraging machine learning to solve real-world problems.


      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Apex Motion",
        timeframe: "2025 April - Present",
        role: "Web Technology Lead",
        achievements: [
          <>
            Architected, designed, and built the entire apexmotion.in platform, owning both the front-end experience and supporting infrastructure.
          </>,
          <>
            Lead the ongoing roadmap for performance, accessibility, and deployment automation so new initiatives ship in hours instead of days.
          </>,
          <>
            Partner with design, marketing, and leadership to convert business briefs into data-backed product releases.
          </>,
        ],
        images: [
          {
            src: "/images/apex.png",
            alt: "Apex Motion logo",
            width: 16,
            height: 9,
            kind: "logo",
          },
        ],
      },
      {
        company: "Matrix BMS Technologies",
        timeframe: "2024 April - June",
        role: "SDE",
        achievements: [
          <>
            system Integration Test   
          </>,
          <>
            - Involved in UAT
          </>,
          <>
          - Developing Forms in our No/Low Code Application</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Center of Excellence in E-Mobility",
        timeframe: "2025 june - present",
        role: "Software Engineer",
        achievements: [
          <>
            built a fullstack website for a company that provides solutions for electric vehicle charging infrastructure.
          </>,
          <>
            currently developing a fullstack application for a company and doing research
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Christ (Deemed to be University)",
        description: <>Currently pursueing software engineering. <br />
        3rd year Btech Computer Science and Engineering (Hons. AIML)</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      
    
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Thoughts and insights by ${person.name}`,
};

const work = {
  path: "/project",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /project routes
};

const services = {
  path: "/services",
  label: "Services",
  title: `Services – ${person.name}`,
  description: `Services and expertise offered by ${person.name}`,
};

const caseStudies = {
  path: "/case-studies",
  label: "Case Studies",
  title: `Case Studies – ${person.name}`,
  description: `Real projects and results by ${person.name}`,
};

const tools = {
  path: "/tools",
  label: "Tools",
  title: `Tools & Setup – ${person.name}`,
  description: `Development tools and setup used by ${person.name}`,
};

const achievements = {
  path: "/achievements",
  label: "Achievements",
  title: `Achievements – ${person.name}`,
  description: `Certifications, awards, and milestones of ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Photo gallery by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, services, caseStudies, tools, achievements, gallery };
