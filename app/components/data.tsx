
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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  cover?: string;
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
    image: "/assets/secretariat/samrat.jpg",
    bio: "Guiding the conference with vision, diplomacy, and a commitment to excellence.",
    // email: "secretariat@gcimun.org",
    gradient: "from-[#0f172a] to-[#1e40af]",
  },
  {
    id: 2,
    name: "Raunak Shrestha",
    role: "Secretary General",
    image: "/photos/secretariat.jpg",
    bio: "Overseeing operations to deliver a seamless and impactful MUN experience.",
    // email: "operations@gcimun.org",
    gradient: "from-[#1e3a8a] to-[#2563eb]",
  },
  {
    id: 3,
    name: "Bishesh Dahal",
    role: "Deputy Secretary General",
    image: "/assets/secretariat/bishesh.jpg",
    bio: "Ensuring every delegate is supported, informed, and ready to excel.",
    gradient: "from-[#1d4ed8] to-[#60a5fa]",
  },
  {
    id: 4,
    name: "Shasha Basnet",
    role: "Director General",
    image: "/assets/secretariat/shasha.jpg",
    bio: "Coordinating the secretariat and championing collaborative leadership.",
    gradient: "from-[#111827] to-[#312e81]",
  },
  {
    id: 5,
    name: "Anushriti Aryal",
    role: "Charge de Affairs",
    image: "/assets/secretariat/anushriti.jpg",
    bio: "Leading critical discussions on peace, security, and global stability.",
    gradient: "from-[#0f172a] to-[#fbbf24]",
  },
  {
    id: 6,
    name: "Prerak Pathak",
    role: "USG of Dais Affairs",
    image: "/assets/secretariat/prerak.jpg",
    bio: "Championing inclusive debate on the world’s most pressing issues.",
    gradient: "from-[#1e40af] to-[#93c5fd]",
  },
  {
    id: 7,
    name: "Aarishan Khadgi",
    role: "Head of IT",
    image: "/assets/secretariat/aarishan.jpg",
    bio: "Advocating for human rights and justice across every agenda.",
    gradient: "from-[#0f172a] to-[#1d4ed8]",
  },
  {
    id: 8,
    name: "Deepsa Ghimire",
    role: "USG of IT",
    image: "/assets/secretariat/deepsa.jpg",
    bio: "Amplifying youth voices and safeguarding the rights of children.",
    gradient: "from-[#1e3a8a] to-[#38bdf8]",
  },
  {
    id: 9,
    name: "Shaish Guni",
    role: "USG of IT",
    image: "/assets/secretariat/shaish.jpg",
    bio: "Driving evidence-based dialogue on global health priorities.",
    gradient: "from-[#0f172a] to-[#facc15]",
  },
  {
    id: 10,
    name: "Dibyangana Rai",
    role: "USG of IT",
    image: "/assets/secretariat/dibyangana.jpg",
    bio: "Exploring sustainable pathways for global development.",
    gradient: "from-[#1d4ed8] to-[#facc15]",
  },
  {
    id: 11,
    name: "Moulikata Joshi",
    role: "USG of Delegate Affairs",
    image: "/assets/secretariat/moulikta.jpg",
    bio: "Guiding conversations on human rights, culture, and social progress.",
    gradient: "from-[#1e40af] to-[#7dd3fc]",
  },
  {
    id: 12,
    name: "Saraya Adhikari",
    role: "USG of Delegate Affairs",
    image: "/assets/secretariat/saraya.jpg",
    bio: "Facilitating strategic debate on disarmament and international security.",
    gradient: "from-[#0f172a] to-[#3b82f6]",
  },
  
  {
    id: 13,
    name: "Abhipsa Sharma",
    role: "USG of Finance",
    image: "/assets/secretariat/abhipsaa.jpg",
    bio: "Centering gender equality and empowerment in every resolution.",
    gradient: "from-[#0f172a] to-[#facc15]",
  },
  {
    id: 14,
    name: "Hanshika Mishra",
    role: "USG of Finance",
    image: "/assets/secretariat/hanshika.jpg",
    bio: "Capturing the stories, insights, and highlights of the conference.",
    gradient: "from-[#1e3a8a] to-[#c4b5fd]",
  },
  {
    id: 15,
    name: "Amisha Basnet",
    role: "USG of Logistics",
    image: "/assets/secretariat/amisha.jpg",
    bio: "Crafting digital experiences that keep every delegate connected.",
    gradient: "from-[#111827] to-[#2563eb]",
  },
  {
    id: 16,
    name: "Nimisha Kharel",
    role: "USG of Logistics",
    image: "/assets/secretariat/nimisha.jpg",
    bio: "Aligning logistics with the conference vision from start to finish.",
    gradient: "from-[#1e40af] to-[#f59e0b]",
  },
  {
    id: 17,
    name: "Arunima Khanal",
    role: "USG of Operations",
    image: "/assets/secretariat/arunima.jpg",
    bio: "Ensuring every schedule, resource, and detail stays on tempo.",
    gradient: "from-[#312e81] to-[#2563eb]",
  },
  {
    id: 18,
    name: "Pranavi Regmi",
    role: "USG of Operations",
    image: "/assets/secretariat/abhipsa.jpg",
    bio: "Supporting delegates with reliable and responsive operations.",
    gradient: "from-[#1d4ed8] to-[#fde68a]",
  },
  {
    id: 19,
    name: "Ishneha Ishabyal Giri",
    role: "Media Team",
    image: "/assets/secretariat/ishneha.jpg",
    bio: "Bridging teams with clear communication and quick solutions.",
    gradient: "from-[#1e3a8a] to-[#0ea5e9]",
  },
  {
    id: 20,
    name: "Ardian Gurung",
    role: "Media Team",
    image: "/assets/secretariat/bhai.jpg",
    bio: "Keeping venues, materials, and people moving in harmony.",
    gradient: "from-[#0f172a] to-[#1e3a8a]",
  },
  {
    id: 21,
    name: "Rishim Mukarung Rai",
    role: "Media Team",
    image: "/assets/secretariat/rishim.jpg",
    bio: "Building resilient operational plans for every session.",
    gradient: "from-[#1d4ed8] to-[#3b82f6]",
  },
  {
    id: 22,
    name: "Bidhya Shrestha",
    role: "USG of Public Relations",
    image: "/assets/secretariat/bidhya.jpg",
    bio: "Elevating delegate experiences with thoughtful media support.",
    gradient: "from-[#0f172a] to-[#fbbf24]",
  },
  {
    id: 23,
    name: "Prashmi Shrestha",
    role: "USG of Public Relations",
    image: "/assets/secretariat/prashmi.jpg",
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
		icon: Shield,
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-blue-50 to-cyan-50",
	},
	{
		title: "UNHCR",
		fullName: "United Nations High Commissioner for Refugees",
		desc: "Protecting and supporting refugees and displaced persons",
		agenda: "To be declared",
		icon: Heart,
		gradient: "from-rose-500 to-red-500",
		bgGradient: "from-rose-50 to-red-50",
	},
	{
		title: "SPECPOL",
		fullName: "Special Political and Decolonization Committee",
		desc: "Addressing decolonization and special political issues",
		agenda: "To be declared",
		icon: Scale,
		gradient: "from-indigo-500 to-blue-500",
		bgGradient: "from-indigo-50 to-blue-50",
	},
	{
		title: "UNICEF",
		fullName: "United Nations Children’s Fund",
		desc: "Advancing children’s rights, health, and education",
		agenda: "To be declared",
		icon: Activity,
		gradient: "from-teal-500 to-emerald-500",
		bgGradient: "from-teal-50 to-emerald-50",
	},
	{
		title: "AU",
		fullName: "African Union",
		desc: "Promoting unity and development across Africa",
		agenda: "To be declared",
		icon: Globe,
		gradient: "from-yellow-500 to-orange-500",
		bgGradient: "from-yellow-50 to-orange-50",
	},
	{
		title: "ICJ",
		fullName: "International Court of Justice",
		desc: "Settling legal disputes between states and giving advisory opinions",
		agenda: "To be declared",
		icon: Building2,
		gradient: "from-slate-600 to-slate-400",
		bgGradient: "from-slate-50 to-slate-100",
	},
	{
		title: "IP",
		fullName: "International Press",
		desc: "Reporting on conference proceedings and press coverage",
		agenda: "To be declared",
		icon: Newspaper,
		gradient: "from-amber-500 to-orange-500",
		bgGradient: "from-amber-50 to-orange-50",
	},
];

export const galleryItems : GalleryItem[] = [
 { src: "/gallery/1.jpg" },
  { src: "/gallery/2.jpg" },
  { src: "/gallery/3.jpg" },
  { src: "/gallery/4.jpg" },
  { src: "/gallery/5.jpg" },
  { src: "/gallery/6.jpg" },
  { src: "/gallery/7.jpg" },
  { src: "/gallery/8.jpg" },
  { src: "/gallery/9.jpg" },
  { src: "/gallery/10.jpg" },
  { src: "/gallery/11.jpg" },
  { src: "/gallery/12.jpg" },
  { src: "/gallery/13.jpg" },
  { src: "/gallery/14.jpg" },
  { src: "/gallery/15.jpg" },
  { src: "/gallery/16.jpg" },
  { src: "/gallery/17.jpg" },
  { src: "/gallery/18.jpg" },
  { src: "/gallery/19.jpg" },
  { src: "/gallery/20.jpg" },
  { src: "/gallery/21.jpg" },
  { src: "/gallery/22.jpg" },
];




