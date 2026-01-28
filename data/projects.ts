export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "PetPal - Pet Adoption Management System",
    summary:
      "A centralized web application designed for the PSPCA to streamline pet adoptions, replacing manual paperwork with a secure relational database system.",
    description:
      "I built this full-stack solution to address the data management inefficiencies faced by the Philippine Society for the Prevention of Cruelty to Animals (PSPCA). The system allows adopters to browse pet profiles and schedule appointments while providing administrators with a comprehensive dashboard to manage users, adoption requests, and medical records. It features a normalized database architecture to ensure data integrity and robust role-based access control.",
    tech: [
      "Node.js",
      "Express.js",
      "Microsoft SQL Server",
      "HTML/CSS/JavaScript",
    ],
    image: "/projects/1ss1.png",

    screenshots: [
      "/projects/1ss1.png",
      "/projects/1ss3.png",
      "/projects/1ss2.png",
      "/projects/1ss4.png",
    ],
  },
  {
    slug: "project-2",
    title: "GoodBetterBread - Bakery E-Commerce Website",
    summary:
      "A responsive web application for a local bakery featuring a dynamic product catalog, shopping cart system, and streamlined checkout interface.",
    description:
      "I developed this frontend e-commerce solution to simulate a seamless ordering experience for 'GoodBetterBread', a coffee and pastry shop. The application features a responsive user interface built with Bootstrap 5, allowing users to browse distinct categories for pastries and drinks. I implemented complex JavaScript logic to handle a dynamic shopping cart (add/remove items, update quantities, calculate totals), real-time product search filtering, and interactive modals for user authentication and checkout simulation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    image: "/projects/2ss1.png",
    screenshots: ["/projects/2ss1.png", "/projects/2ss2.png"],
  },

  {
    slug: "project-3",
    title:"Flutter Mobile App",
     summary:
    "A beginner Flutter mobile app project built to practice core Flutter concepts and the standard project structure.",
  description:
    "This project is a first Flutter build created to explore the Flutter framework and mobile UI development using Dart. It follows the default Flutter project setup and serves as a foundation for learning widgets, layouts, navigation, and app structure across platforms (Android/iOS/Web).",
  tech: ["Flutter", "Dart", "C++"],
  image:"/projects/3ss3.png",
  screenshots:[

  ]
  }
];
