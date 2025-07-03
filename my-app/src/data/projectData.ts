export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

const projectData: Project[] = [
  {
    title: "IoT Smart Home System",
    description: "Developed an integrated smart home monitoring and control system using Raspberry Pi and MQTT.",
    techStack: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    github: "https://github.com/yourusername/smart-home",
    demo: "https://smart-home-demo.vercel.app",
  },
  // 더 추가 가능
];

export default projectData;