export interface ProfileData {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  blog: string;
}

const profileData: ProfileData = {
  name: "홍길동",
  title: "Frontend Developer & IoT Enthusiast",
  description: "Sejong University student majoring in Electronic Information Communication Engineering & Software Engineering. Passionate about AI, IoT, and web technologies.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  blog: "https://yourblog.com",
};

export default profileData;