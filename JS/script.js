const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://example.com/images/aarav.jpg",
    profession: "Frontend Developer",
    description: "Passionate about building responsive user interfaces with modern JavaScript frameworks.",
    tags: ["JavaScript", "React", "CSS", "UI/UX"]
  },
  {
    fullName: "Sara Khan",
    image: "https://example.com/images/sara.jpg",
    profession: "Graphic Designer",
    description: "Creative designer with expertise in branding, illustration, and visual storytelling.",
    tags: ["Photoshop", "Illustrator", "Branding", "Creativity"]
  },
  {
    fullName: "Rohan Mehta",
    image: "https://example.com/images/rohan.jpg",
    profession: "Data Analyst",
    description: "Loves discovering insights from data and turning numbers into meaningful stories.",
    tags: ["Python", "Excel", "SQL", "Data Visualization"]
  },
  {
    fullName: "Priya Singh",
    image: "https://example.com/images/priya.jpg",
    profession: "Digital Marketer",
    description: "Specialist in SEO, content strategy, and social media marketing campaigns.",
    tags: ["SEO", "Content", "Marketing", "Analytics"]
  },
  {
    fullName: "Kabir Rao",
    image: "https://example.com/images/kabir.jpg",
    profession: "Mobile App Developer",
    description: "Builds smooth and scalable mobile apps with Flutter and React Native.",
    tags: ["Flutter", "Dart", "React Native", "Mobile Dev"]
  }
];

var main = document.querySelector('main')

var sum = 0;
users.forEach(function(elem){

    main.innerHTML = `<div class="card">
          <img src="${users.image}" alt="">
          <h3>${users.fullName}</h3>
          <h4>${users.profession}</h4>
          <p>${users.description}</p>
       </div>`;


})