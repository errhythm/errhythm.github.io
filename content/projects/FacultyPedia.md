---
date: '2023-05-22'
title: 'Facultypedia: A Faculty Review and Consultation Platform'
github: 'https://github.com/errhythm/facultypedia'
external: 'https://myfacultypedia.errhythm.me'
image: 'https://cdn.errhythm.me/projects/Facultypedia.png'
tech:
  - Laravel
  - PHP
  - TailwindCSS
  - MySQL
  - DaisyUI
company: 'BracU'
showInProjects: false
featured: true
featuredSort: 2
featuredCover: 'https://cdn.errhythm.me/projects/Facultypedia.png'
---

FacultyPedia is a comprehensive faculty review and consultation platform designed to empower students to make informed decisions about their education. The platform aims to provide a transparent and reliable source of information for students seeking guidance on faculty members, courses, and academic institutions.

### Project Overview:

Facultypedia was developed as part of my [CSE470](https://cse.sds.bracu.ac.bd/course/view/CSE470) course, using Laravel for its powerful back-end capabilities and TailwindCSS for a clean, responsive design. The goal was to create a platform where students could seamlessly search for faculty, leave reviews, and schedule consultations. The platform needed to balance modern design with strong functionality, and it was essential that it met the academic needs of both students and faculty.

![Faculty Search by Course](https://cdn.errhythm.me/projects/Facultypedia3.png)

### Challenge: Faculty Profile & Search System

One of the major hurdles was implementing an efficient search system, where students could find faculty based on criteria such as department, initials, or courses. Creating profiles with essential details like emails and course information was necessary to enhance usability. Using Laravel’s eloquent querying system, I built a search feature that filters results dynamically based on user input, making it easy for students to locate faculty. TailwindCSS enabled me to design a responsive and accessible interface, ensuring students could use the search system smoothly across devices.

![Faculty Profile with Reviews](https://cdn.errhythm.me/projects/Facultypedia4.png)

### Challenge: Faculty Review System

The need for anonymity in student reviews posed an interesting challenge. Students needed the ability to leave anonymous feedback while still ensuring that faculty would not be biased by knowing the reviewer’s identity. I developed an anonymous review feature where students could opt to hide their identity, but all reviews required admin approval before becoming visible. Laravel’s role-based permissions system was crucial here, ensuring that faculty always saw reviews anonymously, while admins had the ability to manage and moderate the content. TailwindCSS helped me create a minimalistic, distraction-free review submission interface.

![Faculty Review Form with Anonymous Option](https://cdn.errhythm.me/projects/Facultypedia5.png)

### Challenge: Review Approval & Management

Managing the review approval process was another challenge, as anonymous feedback required careful moderation to prevent misuse. I built a custom dashboard using Laravel, where admins could quickly approve, reject, or manage reviews. This admin panel became the cornerstone of ensuring the system remained transparent and constructive. By combining Laravel’s authentication and database capabilities, I was able to implement a streamlined process for review management without overwhelming the system.

![Admin Dashboard with Review Approval System](https://cdn.errhythm.me/projects/Facultypedia6.png)

### Challenge: Consultation Management System

Facilitating consultations between students and faculty required developing a system for scheduling, approval, and notification handling. Students needed a way to request meetings, and faculty needed an intuitive system to accept or reject them. Using Laravel’s built-in email system, I created automated notifications for both students and faculty. When consultations were approved, the system generated meeting links and sent them directly via email, simplifying the coordination process. TailwindCSS helped ensure the consultation management pages remained clean and easy to use for both parties.

### Challenge: Scheduling & Availability Management

Handling faculty availability posed a challenge, as I needed to provide a flexible, yet easy-to-manage system for setting consultation times. I implemented a dynamic scheduling system where faculty could set their availability, and students could view open slots in real-time. Laravel’s database system handled the dynamic nature of these schedules, while TailwindCSS provided a user-friendly interface, ensuring the scheduling process was straightforward on any device.

### Additional Features:

- **Faculty Dashboard:** I developed a personalized dashboard for faculty to view and manage all consultation requests in one place, streamlining the process.
- **Student Profile:** Students can view their submitted reviews, except for anonymous ones, in their personal profile.
- **Domain-Restricted Registration:** I implemented an email verification system, ensuring that only users with bracu.ac.bd or g.bracu.ac.bd domains could register, maintaining the platform’s integrity.

### Demo Accounts:

| **Account** | **Email**                           | **Password** |
| ----------- | ----------------------------------- | ------------ |
| **Student** | ehsanur.rahman.rhythm@g.bracu.ac.bd | 12345678     |
| **Faculty** | juston.conn@bracu.ac.bd             | 12345678     |
| **Admin**   | facultypedia@errhythm.me            | 12345678     |

Facultypedia represents a fully functional platform that addresses the key challenges of faculty-student interaction. By building the platform in Laravel and using TailwindCSS for the front-end, I was able to create a user-friendly, responsive system that meets the academic needs of both students and faculty. The project provided valuable experience in handling complex requirements like anonymity, scheduling, and user-role management, and has successfully delivered a scalable and secure platform.
