export const CAT = {
  ALL: 'All Projects',
  WEB: 'Web Development',
  MOBILE: 'Mobile Apps',
  OTHER: 'Other'
};

export const CATEGORY_TABS = Object.values(CAT);

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "To-DO-List App",
    desc: "Front-end UI",
    tags: ["React", "CSS"],
    category: CAT.WEB,
    image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/puthearithkeng/to-do-list-app.git"
  },
  {
    id: 2,
    title: "Music Web",
    desc: "Build Front-end and Back-end with real time music playing",
    tags: ["React", "TailwindCSS", "Nodejs" , "MySQL", "FireBase"],
    category: CAT.WEB,
    image: "https://images.squarespace-cdn.com/content/v1/58125982e58c62bc08948096/1502130562840-XIPRQ7TNS7VUH25ZGLF6/image-asset.jpeg",
    github: "https://github.com/puthearithkeng/MusicWebApp.git"
  },
  {
    id: 3,
    title: "Study Flow",
    desc: "Build a Flutter app for study and learn by playing",
    tags: ["Flutter"],
    category: CAT.MOBILE,
    image: "https://res.cloudinary.com/db1go1uyh/image/upload/v1774203332/photo_2026-03-23_01-14-56_iesar1.jpg",
    github: "https://github.com/Kengpu/Flutter-Project.git"
  },
  {
    id: 4,
    title: "Traffic-Sign-Detection-and-Classification",
    desc: "Built a web app to detect and classify traffic signs in Cambodia for improved road safety.",
    tags: ["React" , "TailwindCSS" , "Flask" , "ML"],
    category: CAT.WEB,
    image: "https://res.cloudinary.com/db1go1uyh/image/upload/v1774203697/logo_x89abt.png",
    github: "https://github.com/RiRith69/Traffic-Sign-Detection-and-Classification.git"
  },
  
];