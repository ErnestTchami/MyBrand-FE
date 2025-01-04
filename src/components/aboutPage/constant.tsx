import React from "react";
import {
  Code,
  Cpu,
  Database,
  GitBranch,
  Server,
  Terminal,
  BookOpen,
  Edit,
  Monitor,
  Shield,
  Globe,
  Command,
  Activity,
  Box,
  Compass,
  Slack,
} from "lucide-react"; // Importing icons from Lucide

export const programmingItems = [
  { text: "React", icon: <Code size={24} /> },
  { text: "Node.js", icon: <Cpu size={24} /> },
  { text: "Database", icon: <Database size={24} /> },
  { text: "Git", icon: <GitBranch size={24} /> },
  { text: "Server", icon: <Server size={24} /> },
  { text: "Terminal", icon: <Terminal size={24} /> },
  { text: "Documentation", icon: <BookOpen size={24} /> },
  { text: "Edit Code", icon: <Edit size={24} /> },
  { text: "Monitor", icon: <Monitor size={24} /> },
  { text: "Security", icon: <Shield size={24} /> },
  { text: "Web Development", icon: <Globe size={24} /> },
  { text: "CLI Tools", icon: <Command size={24} /> },
  { text: "Activity Logs", icon: <Activity size={24} /> },
  { text: "Package", icon: <Box size={24} /> },
  { text: "Navigation", icon: <Compass size={24} /> },
  { text: "Collaboration", icon: <Slack size={24} /> },
];
export const professionalExperiences = [
  {
    company: "SevenX",
    logo: "SevenX logo",
    role: "Full-stack Developer",
    duration: "Jul 2024 - Present ",
    location: "Kigali City, Rwanda",
    workType: "Full-time",
    startDate: "Jul 2024",
    description: `
      🚀 Passionate about creating impactful digital solutions with Next.js and various other technologies.
      At SevenX, I collaborate with talented professionals, honing my skills in front-end and back-end development.
      Dedicated to solving complex problems and delivering seamless user experiences.
      Let's connect and explore new opportunities!
    `,
    skills: ["Next.js", "PostgreSQL", "+3 other skills"],
  },
  {
    company: "Andela (ATLP)",
    logo: "Andela logo",
    role: "Junior Software Developer - ATLP",
    duration: "Dec 2023 - Sep 2024 · 10 mos",
    location: "Rwanda · Remote",
    workType: "Internship",
    startDate: "Dec 2023",
    description: `
      🚀 Andela 9-Month Learner | Full-Stack Developer in Progress 🚀
      🌐 Currently mastering back-end and front-end development at Andela.
      🛠️ Skills: MongoDB, CSS, HTML, TypeScript, JavaScript, Postman API, Node.js, React.js, Redux.js, Socket.io, 
      Pivotal Tracker, Tailwind CSS, Next.js, GitHub.
      💼 Proven experience in back-end and front-end projects.
      🔗 Let's connect and talk all things tech! #FullStackDeveloper
    `,
    skills: [
      "MongoDB",
      "CSS",
      "HTML",
      "TypeScript",
      "JavaScript",
      "Postman API",
      "Node.js",
      "React.js",
      "Redux.js",
      "Socket.io",
      "Pivotal Tracker",
      "Tailwind CSS",
      "Next.js",
      "GitHub",
    ],
  },
  {
    company: "MTN Rwanda",
    logo: "MTN Rwanda logo",
    role: "Intern",
    duration: "Mar 2023 - May 2023 · 3 mos",
    location: "Kigali City, Rwanda · On-site",
    workType: "Full-time",
    startDate: "Mar 2023",
    description: `
      An Internship focusing on day-to-day operation of a telecommunication network,
      including field work and configuration tasks.
    `,
  },
  {
    company: "Smart Carte Organization",
    logo: "Data Labels logo",
    role: "Satellite Image Labeler",
    duration: "Mar 2023 - Apr 2023 · 2 mos",
    location: "United States · Remote",
    workType: "Freelance",
    startDate: "Mar 2023",
    description: `
      As a "Satellite Image Labeler," my role was to annotate and label satellite images 
      to train applications. This helped improve the accuracy and functionality of map, 
      navigation, and earth observation software.
    `,
    skills: ["AI trainers"],
  },
];
