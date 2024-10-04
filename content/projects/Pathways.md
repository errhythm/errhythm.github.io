---
date: '2024-08-18'
title: 'Pathways of Learning: A Website Redesign for Dr. Santosh Sali'
github: ''
external: 'https://www.santoshsali.com'
image: '/images/projects/Pathways.png'
tech:
  - WordPress
  - PHP
  - CSS
  - Elementor
company: 'RhyStart'
showInProjects: false
featured: true
featuredSort: 3
featuredCover: './images/Pathways.png'
---

Dr. Santosh Sali, an organizational behavior enthusiast and educator based in Tokyo, Japan, approached me to redesign his blog Pathways of Learning. A career convert from investment banking’s IT department to academia, Dr. Santosh has a passion for mentoring and teaching business planning, and he regularly shares his insights through his blog. In addition to writing about organizational behavior, he loves to read books and frequently posts book reviews. His goal for the redesign was to move the blog from Blogger to WordPress, maintaining its minimalist design while incorporating new features such as a "Currently Reading" tab, a reading challenge widget, a "Post of the Week" section, and a random post feature. Dr. Santosh wanted the blog to reflect his simple, content-focused vision while allowing him to share his journey in teaching and learning.

![Main page](/images/projects/Pathways1.png)

### Challenge: Migrating from Blogger to WordPress

Migrating the site from Blogger to WordPress proved to be a significant challenge. Blogger only provides an XML file with all posts during export, which requires thorough customization to make it compatible with WordPress. Additionally, the migration process was time-consuming as it needed to ensure that all media, links, and formatting transferred seamlessly into WordPress’s structure. The transition had to maintain the same minimalist design and ensure no data was lost.

### Challenge: Design Minimalism with Enhanced Functionality and Responsiveness

One of the most significant challenges was maintaining Dr. Santosh’s desire for a minimalist design while incorporating the new features like a "Post of the Week" section, a random post button, and the reading challenge widget. These elements needed to blend seamlessly into the site without disrupting its clean, writing-focused aesthetic. Ensuring that these features were both functional and aesthetically subtle required careful design decisions.

In addition, the site had to be fully responsive across all devices—desktops, tablets, and smartphones. With a large percentage of users accessing blogs via mobile devices, ensuring that the site remained fast, clean, and easy to navigate on smaller screens was crucial. I used CSS Media Queries to ensure responsiveness, adjusting the layout dynamically to maintain simplicity and usability on all screen sizes. Integrating enhanced functionality without compromising the minimalist, mobile-friendly design was a delicate balance, but the final product achieved both visual and practical goals.

![Responsive Design of Pathways of Learning](/images/projects/Pathways4.png)

### Challenge: Currently Reading Tab

Dr. Santosh sought to showcase his current reads on his website, seamlessly connected to his Goodreads account. To achieve this, I implemented a dynamic "Currently Reading" feature that automatically fetched and displayed his latest selections. By integrating the Goodreads HTML widget into his WordPress site, I ensured that any updates to his Goodreads profile were instantly reflected on his website. The minimalist design of the tab complemented the overall aesthetic of the site, providing a clean and unobtrusive way to highlight his current literary pursuits.

![Currently Reading Tab](/images/projects/Pathways5.png)

### Challenge: Reading Challenge Widget

Dr. Santosh also requested a widget to showcase his yearly reading goals, which is again linked to Goodreads. Creating this widget posed a challenge, as it needed to be visually appealing and seamlessly integrated with the site’s design. Using TailwindCSS, I designed a simple progress bar that updates dynamically based on his progress toward the goal. This widget fits naturally into the website’s sidebar, contributing to the site’s overall focus on learning and personal growth without overwhelming the visitor.

![Reading Challenge Widget](/images/projects/Pathways2.png)

### Challenge: Post of the Week and Random Post Feature

Dr. Santosh wanted to highlight one blog post each week to showcase either his favorite writing or a timely topic. This "Post of the Week" feature needed to be easy to update regularly. To solve this, I implemented a feature in WordPress where the system automatically selects a featured post each week. The simplicity of the back-end interface ensures Dr. Santosh can update it without technical assistance, while the front-end display remains sleek and unobtrusive. Moreover, A "Random Post" button was added to the navigation menu, allowing visitors to discover unexpected content with a single click. This feature not only increases engagement but also gives equal exposure to older, potentially overlooked posts, enhancing the overall user experience and content discoverability on the site.

<figure>
  <video width="100%" height="auto" autoplay loop muted playsinline>
    <source src="https://i.gyazo.com/272c918bb1f74d8ea9a9e402ad43b5dd.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Random Post Feature</figcaption>
</figure>

### Challenge: Managing the Label Cloud

During the migration, replicating Blogger’s Label Cloud feature in WordPress was a key challenge. Blogger’s label cloud automatically adjusts the font size of labels based on the number of posts associated with each tag. However, I had to modify WordPress’s tag cloud functionality to mirror Blogger’s, ensuring that tags with more posts appeared larger and provided a more intuitive navigation experience.

![Reading Challenge Widget](/images/projects/Pathways3.png)

The redesign of Pathways of Learning transformed Dr. Santosh’s blog into a streamlined, functional platform. By moving the site from Blogger to WordPress, adding custom features like the "Currently Reading" tab, reading challenge widget, and the random post function, I ensured that the site met his specific needs while maintaining simplicity. The final result is a minimalist, writing-focused blog that highlights Dr. Santosh's passion for organizational behavior, business planning, and teaching.
