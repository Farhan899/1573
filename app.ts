// Define interface for Resume data
interface Resume {
    name: string;
    email: string;
    phone: string;
    education: { degree: string, school: string, year: string }[];
    skills: string[];
    workExperience: { title: string, company: string, duration: string }[];
}

// Create Resume Data
const resumeData: Resume = {
    name: 'Farhan Ashraf',
    email: 'farhan@example.com',
    phone: '+1234567890',
    education: [
        { degree: "Bachelor's Degree in Computer Science", school: 'XYZ University', year: '2020-2024' },
        { degree: 'High School', school: 'ABC School', year: '2018-2020' }
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git', 'Node.js', 'Express'],
    workExperience: [
        { title: 'Frontend Developer', company: 'Tech Company', duration: '2022-2023' },
        { title: 'Intern', company: 'Software Solutions', duration: '2021-2022' }
    ]
};

// Insert Data into HTML
document.addEventListener('DOMContentLoaded', () => {
    const personalInfo = document.querySelector('.personal-info')!;
    const educationSection = document.querySelector('.education ul')!;
    const skillsSection = document.querySelector('.skills ul')!;
    const workExperienceSection = document.querySelector('.work-experience ul')!;

    // Personal Information
    personalInfo.innerHTML = `
        <h1>${resumeData.name}</h1>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
    `;

    // Education
    resumeData.education.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${edu.degree}</strong> - ${edu.school} (${edu.year})`;
        educationSection.appendChild(li);
    });

    // Skills
    resumeData.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsSection.appendChild(li);
    });

    // Work Experience
    resumeData.workExperience.forEach(work => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${work.title}</strong> - ${work.company} (${work.duration})`;
        workExperienceSection.appendChild(li);
    });
});
