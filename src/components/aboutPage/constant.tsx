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