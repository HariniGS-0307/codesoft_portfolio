// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Skills data
const skills = [
  { name: "C", level: 90 },
  { name: "C++", level: 85 },
  { name: "Java", level: 80 },
  { name: "Communication", level: 95 },
  { name: "Leadership", level: 90 },
  { name: "Teamwork", level: 92 }
];

// Render skills with progress bars
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="skill-name">${skill.name}</div>
    <div class="skill-bar">
      <div class="skill-progress" style="width: ${skill.level}%"></div>
    </div>
  `;
  skillsList.appendChild(li);
});

// Projects data
const projects = [
  {
    title: "Placement Prepo",
    description: "A comprehensive platform for final year placement training. Includes aptitude tests, coding challenges, and mock interview preparation modules with performance analytics.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"]
  },
  {
    title: "Smart Campus Navigation",
    description: "Mobile application for campus navigation with AR features. Helps students find classrooms, departments, and facilities efficiently.",
    technologies: ["Java", "Android SDK", "Google Maps API", "ARCore"]
  }
];

// Render projects
const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="technologies">
      <strong>Technologies:</strong> ${project.technologies.join(', ')}
    </div>
  `;
  projectsList.appendChild(li);
});

// Resume button functionality
document.getElementById('resume-btn').addEventListener('click', function() {
  const email = 'harini@example.com';
  const subject = 'Resume Request - Harini GS Portfolio';
  const body = 'Hello Harini,\n\nI would like to request a copy of your resume.\n\nRegards,\n[Your Name]';
  
  const resumeText = document.getElementById('resume-text');
  resumeText.innerHTML = `Email sent to <strong>${email}</strong>!<br>You can also contact me directly at ${email}`;
  resumeText.style.color = '#4a6491';
  resumeText.style.fontWeight = '500';
  
  // Create mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open email client
  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 1000);
});