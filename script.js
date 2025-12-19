const expandEducation = document.getElementById('expand-education');
const expandExperience = document.getElementById('expand-experience');
const expandProjects = document.getElementById('expand-projects');
const expandSkills = document.getElementById('expand-skills');

const resumeContent = {
    education: `
        <strong>University of the Philippines</strong><br>
        B.S. in Computer Science | Expected Graduation: May 2027<br>
        GWA: 1.57<br>
        Concentrations: Software Development and Engineering, Computer Science Theory<br>
        <br>
        <strong>Philippine Science High School</strong><br>
        STEM Stream | Physics Core, Computer Science Elective
    `,
    experience: `
        <strong>Software Engineer Trainee | SAIB.inc</strong><br>
        Nov 2025 – Dec 2025<br>
        • Gained in-depth experience with Linux environment, Shell, Terminal, and STDIO<br>
        • Received skills training in C#, ASP.NET, and REST API development<br>
        <br>
        <strong>Computer Science Tutor | Upswing.com</strong><br>
        Nov 2024 – Current<br>
        • Taught over 200 students and developed learning materials for 30+ subjects<br>
        • Achieved 4.57/5.00 average learner rating<br>
        • Specialized in Data Structures, Operating Systems, and Software Engineering
    `,
    projects: `
        <strong>Self-Paced Review Website for UPCAT</strong><br>
        Lead Developer | June 2025 – Current<br>
        • Developing a platform to help students prepare for UPCAT<br>
        • Tech Stack: Next.js, PostgreSQL, TailwindCSS, Docker<br>
        <br>
        <strong>Farm-to-Table E-Commerce Platform</strong><br>
        Lead Developer | Jan 2025 – May 2025<br>
        • Developed full-stack web application for Department of Agriculture<br>
        • Managed user registration, product listings, inventory, and sales reporting<br>
        • Tech Stack: React.js, Node.js, Express.js, MongoDB (MERN)
    `,
    skills: `
        <strong>Programming:</strong> Java, Python, JavaScript, HTML/CSS, Node.js, React.js, C++, C, Git, Docker, Next.js<br>
        <br>
        <strong>Tools:</strong> Android Studio, IntelliJ, PyCharm, Eclipse, AWS, Jupyter Notebooks, Bootstrap, Spring Boot, Agile
    `
};

function toggleSection(sectionId, linkElement) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        section.innerHTML = resumeContent[sectionId];
        linkElement.textContent = ' v ';
    }
    else {
        section.style.display = 'none';
        section.innerHTML = '';
        linkElement.textContent = ' > ';
    }  
}

expandEducation.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection('education', expandEducation);
});

expandExperience.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection('experience', expandExperience);
});

expandProjects.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection('projects', expandProjects);
});

expandSkills.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection('skills', expandSkills);
});