
import { Scale, Globe, Building2, Heart, Shield, Activity, Newspaper } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  // instagram?: string;
  // email?: string;
  gradient: string;
}
interface Committee {
  title: string;
  fullName: string;
  desc: string;
  agenda: string;
  icon: string;
  cover: string;
  logo?: string;
  gradient: string;
  bgGradient: string;
}


type GalleryItem = {
    src: string
}


const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Samrat Gurung",
    role: "Chief Advisor",
    image: "/assets/member-photos/samrat.JPG",
    bio: "Guiding the conference with vision, diplomacy, and a commitment to excellence.",
    // email: "secretariat@gcimun.org",
    gradient: "from-[#0f172a] to-[#1e40af]",
  },
  {
    id: 2,
    name: "Raunak Shrestha",
    role: "Secretary General",
    image: "/assets/member-photos/raunak.JPG",
    bio: "Overseeing operations to deliver a seamless and impactful MUN experience.",
    // email: "operations@gcimun.org",
    gradient: "from-[#1e3a8a] to-[#2563eb]",
  },
  {
    id: 3,
    name: "Bishesh Dahal",
    role: "Deputy Secretary General",
    image: "/assets/member-photos/bishesh.JPG",
    bio: "Ensuring every delegate is supported, informed, and ready to excel.",
    gradient: "from-[#1d4ed8] to-[#60a5fa]",
  },
  {
    id: 4,
    name: "Shasha Basnet",
    role: "Director General",
    image: "/assets/member-photos/shasha.JPG",
    bio: "Coordinating the secretariat and championing collaborative leadership.",
    gradient: "from-[#111827] to-[#312e81]",
  },
  {
    id: 5,
    name: "Anushriti Aryal",
    role: "Charge de Affairs",
    image: "/assets/member-photos/anushriti.JPG",
    bio: "Leading critical discussions on peace, security, and global stability.",
    gradient: "from-[#0f172a] to-[#fbbf24]",
  },
  {
    id: 6,
    name: "Prerak Pathak",
    role: "USG of Dais Affairs",
    image: "/assets/member-photos/prerak.JPG",
    bio: "Championing inclusive debate on the world’s most pressing issues.",
    gradient: "from-[#1e40af] to-[#93c5fd]",
  },
  {
    id: 7,
    name: "Aarishan Khadgi",
    role: "Head of IT",
    image: "/assets/member-photos/aarishan.JPG",
    bio: "Advocating for human rights and justice across every agenda.",
    gradient: "from-[#0f172a] to-[#1d4ed8]",
  },
  {
    id: 8,
    name: "Deepsa Ghimire",
    role: "USG of IT",
    image: "/assets/member-photos/deepsa.JPG",
    bio: "Amplifying youth voices and safeguarding the rights of children.",
    gradient: "from-[#1e3a8a] to-[#38bdf8]",
  },
  {
    id: 9,
    name: "Shaish Guni",
    role: "USG of IT",
    image: "/assets/member-photos/shaish.JPG",
    bio: "Driving evidence-based dialogue on global health priorities.",
    gradient: "from-[#0f172a] to-[#facc15]",
  },
  {
    id: 10,
    name: "Dibyangana Rai",
    role: "USG of IT",
    image: "/assets/member-photos/dibyangana-rai.JPG",
    bio: "Exploring sustainable pathways for global development.",
    gradient: "from-[#1d4ed8] to-[#facc15]",
  },
  {
    id: 11,
    name: "Moulikata Joshi",
    role: "USG of Delegate Affairs",
    image: "/assets/member-photos/moulikta.JPG",
    bio: "Guiding conversations on human rights, culture, and social progress.",
    gradient: "from-[#1e40af] to-[#7dd3fc]",
  },
  {
    id: 12,
    name: "Saraya Adhikari",
    role: "USG of Delegate Affairs",
    image: "/assets/member-photos/saraya.JPG",
    bio: "Facilitating strategic debate on disarmament and international security.",
    gradient: "from-[#0f172a] to-[#3b82f6]",
  },
  
  {
    id: 13,
    name: "Abhipsa Sharma",
    role: "USG of Finance",
    image: "/assets/member-photos/abhipsa.JPG",
    bio: "Centering gender equality and empowerment in every resolution.",
    gradient: "from-[#0f172a] to-[#facc15]",
  },
  {
    id: 14,
    name: "Hanshika Mishra",
    role: "USG of Finance",
    image: "/assets/member-photos/hanshika.JPG",
    bio: "Capturing the stories, insights, and highlights of the conference.",
    gradient: "from-[#1e3a8a] to-[#c4b5fd]",
  },
  {
    id: 15,
    name: "Amisha Basnet",
    role: "USG of Logistics",
    image: "/assets/member-photos/amisha.JPG",
    bio: "Crafting digital experiences that keep every delegate connected.",
    gradient: "from-[#111827] to-[#2563eb]",
  },
  {
    id: 16,
    name: "Nimisha Kharel",
    role: "USG of Logistics",
    image: "/assets/member-photos/nimisha.JPG",
    bio: "Aligning logistics with the conference vision from start to finish.",
    gradient: "from-[#1e40af] to-[#f59e0b]",
  },
  {
    id: 17,
    name: "Arunima Khanal",
    role: "USG of Operations",
    image: "/assets/member-photos/arunima.JPG",
    bio: "Ensuring every schedule, resource, and detail stays on tempo.",
    gradient: "from-[#312e81] to-[#2563eb]",
  },
  {
    id: 18,
    name: "Pranavi Regmi",
    role: "USG of Operations",
    image: "/assets/member-photos/pranavi.JPG",
    bio: "Supporting delegates with reliable and responsive operations.",
    gradient: "from-[#1d4ed8] to-[#fde68a]",
  },
  {
    id: 19,
    name: "Ishneha Ishabyal Giri",
    role: "Media Team",
    image: "/assets/member-photos/issneha.JPG",
    bio: "Bridging teams with clear communication and quick solutions.",
    gradient: "from-[#1e3a8a] to-[#0ea5e9]",
  },
  {
    id: 20,
    name: "Ardian Gurung",
    role: "Media Team",
    image: "/assets/member-photos/ardian.JPG",
    bio: "Keeping venues, materials, and people moving in harmony.",
    gradient: "from-[#0f172a] to-[#1e3a8a]",
  },
  {
    id: 21,
    name: "Rishim Mukarung Rai",
    role: "Media Team",
    image: "/assets/member-photos/rishim.JPG",
    bio: "Building resilient operational plans for every session.",
    gradient: "from-[#1d4ed8] to-[#3b82f6]",
  },
  {
    id: 22,
    name: "Bidhya Shrestha",
    role: "USG of Public Relations",
    image: "/assets/member-photos/bidhya-shrestha.JPG",
    bio: "Elevating delegate experiences with thoughtful media support.",
    gradient: "from-[#0f172a] to-[#fbbf24]",
  },
  {
    id: 23,
    name: "Prashmi Shrestha",
    role: "USG of Public Relations",
    image: "/assets/member-photos/prashmi.JPG",
    bio: "Amplifying GCIMUN stories through creative PR and outreach.",
    gradient: "from-[#1e3a8a] to-[#60a5fa]",
  },
];

export default teamMembers;


export const committees: Committee[] = [
  {
    title: "UNSC",
    fullName: "United Nations Security Council",
    desc: "Maintaining international peace and security",
    agenda: "To be declared",
    icon: "/assets/committee-logos/unsc-Logo.png",
    cover: "/assets/committees-bg/unsc.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "UNHCR",
    fullName: "United Nations High Commissioner for Refugees",
    desc: "Protecting and supporting refugees and displaced persons",
    agenda: "To be declared",
    icon: "/assets/committee-logos/UNHCR-Logo.png",
    cover: "/assets/committees-bg/unhcr.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "SPECPOL",
    fullName: "Special Political and Decolonization Committee",
    desc: "Addressing decolonization and special political issues",
    agenda: "To be declared",
    icon: "/assets/committee-icons/specpol.png",
    cover: "/assets/committees-bg/specpol.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "UNICEF",
    fullName: "United Nations Children’s Fund",
    desc: "Advancing children’s rights, health, and education",
    agenda: "To be declared",
    icon: "/assets/committee-icons/unicef.png",
    cover: "/assets/committees-bg/unicef.webp",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "AU",
    fullName: "African Union",
    desc: "Promoting unity and development across Africa",
    agenda: "To be declared",
    icon: "/assets/committee-icons/au.png",
    cover: "/assets/committees-bg/au.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "ICJ",
    fullName: "International Court of Justice",
    desc: "Settling legal disputes between states",
    agenda: "To be declared",
    icon: "/assets/committee-icons/icj.png",
    cover: "/assets/committees-bg/icj.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "IP",
    fullName: "International Press",
    desc: "Reporting on conference proceedings and press coverage",
    agenda: "To be declared",
    icon: "/assets/committee-icons/ip.png",
    cover: "/assets/committees-bg/internationalPress.webp",
    gradient: "",
    bgGradient: "",
  },
];



export const galleryItems : GalleryItem[] = [

  { src: "/gallery/7.jpg" },
  { src: "/gallery/3.jpg" },
  { src: "/gallery/20.jpg" },
  { src: "/gallery/14.jpg" },
  { src: "/gallery/5.jpg" },
  { src: "/gallery/1.jpg" },
  { src: "/gallery/12.jpg" },
  { src: "/gallery/18.jpg" },
  { src: "/gallery/19.jpg" },
  { src: "/gallery/21.jpg" },
  { src: "/gallery/16.jpg" },
  { src: "/gallery/2.jpg" },
  { src: "/gallery/17.jpg" },
  { src: "/gallery/11.jpg" },
  { src: "/gallery/4.jpg" },
  { src: "/gallery/8.jpg" },
  { src: "/gallery/10.jpg" },
  { src: "/gallery/6.jpg" },
  { src: "/gallery/13.jpg" },
  { src: "/gallery/9.jpg" },
  { src: "/gallery/15.jpg" },
  


];




