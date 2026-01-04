import { Scale, Globe, Building2, Heart, Shield, Activity, Newspaper } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
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
    bio: "Mr. Samrat is someone whose vision extends to even the smallest details, because he understands that every minor task contributes to something greater. Beyond strategy and structure, what truly sets him apart is how deeply he cares for every individual in the Organizing Committee, always ensuring that everyone feels heard, supported, and valued. From his time as USG of Logistics in 2024 and Secretary-General of GCIMUN 2025, his leadership has been defined by presence, patience, and purpose. This marks his fourth year with GCIMUN, a return driven by even more dedication, discipline, and passion. With experience as an Executive Board member across 40+ conferences, his guidance is both grounded and inspiring.",
    gradient: "from-[#0f172a] to-[#1e40af]",
  },
  {
    id: 2,
    name: "Raunak Shrestha",
    role: "Secretary General",
    image: "/assets/member-photos/raunak.JPG",
    bio: "The journey Raunak acclaimed within GCI MUN, from an Organizing Committee to Secretary General, is evidence of how one when passionate, can achieve everything. Raunak has proven himself to be an epitome of the 3C's; Creation, Conduct and Collaboration. Artistic, yet academically prodigious, he realization that leadership is not about mere power but about benevolence, resilience and co-operation. His unfiltered guidance feels like a ray that guides you to light, ensuring GCIMUN 2026 is led with purpose.",
    gradient: "from-[#1e3a8a] to-[#2563eb]",
  },
  {
    id: 3,
    name: "Bishesh Dahal",
    role: "Deputy Secretary General",
    image: "/assets/member-photos/bishesh.JPG",
    bio: "Bishesh has made remarkable contributions to the world of debate and delegation, including serving as the Director-General of the last edition of GCI MUN and a key member of the Organizing Committee for over three years. Leading debate teams and fostering fair adjudication, he embodies the essence of our vision. His ability to light up a room with cheerfulness while driving meaningful discussions has made a lasting impact. We are proud to have Bishesh Dahal ensuring the event’s smooth execution through grounded humility and magic.",
    gradient: "from-[#1d4ed8] to-[#60a5fa]",
  },
  {
    id: 4,
    name: "Shasha Basnet",
    role: "Director General",
    image: "/assets/member-photos/shasha.JPG",
    bio: "Shasha brings a strong foundation in leadership, communication, and youth engagement. Her involvement in initiatives such as Toastmasters and UNESCO’s The Next 50 dialogue helps her be the best debater in the room. While she may look intimidating at first, she is one of the most helpful people ever, ensuring everyone keeps up with her. As Director General, Shasha brings clarity of vision, professionalism, and a collaborative spirit that will guide the conference towards impactful discourse.",
    gradient: "from-[#111827] to-[#312e81]",
  },
  {
    id: 5,
    name: "Anushriti Aryal",
    role: "Charge de Affairs",
    image: "/assets/member-photos/anushriti.JPG",
    bio: "A highly professional individual who brings dedication and warmth to every space. With years of experience as an award-winning delegate and Vice Chair, she has developed a solid understanding of diplomacy and political research. While she often reflects deeply on her work, it is this very self-awareness that drives her to prepare thoroughly. Anushriti balances professionalism with approachability, bringing heart, honesty, and a commitment to excellence to GCIMUN 2026.",
    gradient: "from-[#0f172a] to-[#fbbf24]",
  },
  {
    id: 6,
    name: "Prerak Pathak",
    role: "USG of Dais Affairs",
    image: "/assets/member-photos/prerak.JPG",
    bio: "Prerak has made impressive progress over the past few years in academics, extracurriculars, and MUNs. His journey reflects a well-rounded individual who is always eager to learn and grow. Having participated as a delegate in last year’s GCIMUN, he has now stepped into the role of USG of Dais Affairs for GCIMUN 2026, which speaks volumes about his dedication, growth, and commitment to the conference.",
    gradient: "from-[#1e40af] to-[#93c5fd]",
  },
  {
    id: 7,
    name: "Aarishan Khadgi",
    role: "Head of IT",
    image: "/assets/member-photos/aarishan.JPG",
    bio: "With extensive experience handling diverse graphic displays in previous editions, Aarishan previously served as the USG of IT. His technical expertise and creativity have played a vital role in the conference’s success. Dedicated and highly skilled, he is committed to ensuring every digital program runs smoothly and is truly fruitful for the delegates.",
    gradient: "from-[#0f172a] to-[#1d4ed8]",
  },
  {
    id: 8,
    name: "Deepsa Ghimire",
    role: "USG of IT",
    image: "/assets/member-photos/deepsa.JPG",
    bio: "A dedicated and creative member of the IT Team whose calm presence and positive attitude bring balance to every task. With a strong passion for design, she skillfully crafts engaging visuals on Canva, helping the team communicate ideas clearly. Deepsa handles responsibilities with focus, patience, and quiet confidence—making her a reliable part of the team.",
    gradient: "from-[#1e3a8a] to-[#38bdf8]",
  },
  {
    id: 9,
    name: "Shaish Guni",
    role: "USG of IT",
    image: "/assets/member-photos/shaish.JPG",
    bio: "Web dev, graphic designer, and digital problem-solver. Shaish turns ideas into websites, chaos into clean designs, and MUN into an experience you can actually feel. Passionate about tech and creativity, he makes things happen fast, smooth, and with style.",
    gradient: "from-[#0f172a] to-[#facc15]",
  },
  {
    id: 10,
    name: "Dibyangana Rai",
    role: "USG of IT",
    image: "/assets/member-photos/dibyangana-rai.JPG",
    bio: "A dedicated member of the IT Team whose technical skills and composed mindset ensure everything runs seamlessly. Known for her calm approach under pressure, she handles challenges with precision. Her ability to coordinate effortlessly strengthens overall efficiency and helps create a smooth-running environment where the team can perform at their best.",
    gradient: "from-[#1d4ed8] to-[#facc15]",
  },
  {
    id: 11,
    name: "Moulikata Joshi",
    role: "USG of Delegate Affairs",
    image: "/assets/member-photos/moulikta.JPG",
    bio: "Moulikta brings dedication, intensity, and focus to everything she undertakes. Known for her confidence and ability to thrive under pressure, she brings positive energy wherever she goes. Her extensive experience in handling high-stress events highlights her leadership and sincerity. With her sharp wit and attention to detail, she is an indispensable asset to the organizing committee.",
    gradient: "from-[#1e40af] to-[#7dd3fc]",
  },
  {
    id: 12,
    name: "Saraya Adhikari",
    role: "USG of Delegate Affairs",
    image: "/assets/member-photos/saraya.JPG",
    bio: "Saraya is committed to representing delegate interests, ensuring effective communication, and fostering an environment of collaboration and mutual respect. Serving as a vital link between delegates and leadership, she focuses on advocacy, organization, and ensuring meaningful participation for all.",
    gradient: "from-[#0f172a] to-[#3b82f6]",
  },
  {
    id: 13,
    name: "Abhipsa Sharma",
    role: "USG of Finance",
    image: "/assets/member-photos/abhipsa.JPG",
    bio: "With a MUN journey beginning in 2022, Abhipsa values teamwork and practical planning. She believes finance is about managing money with reality. Organized, calm, and reliable, she brings a friendly and confident presence to the committee while working quietly to keep everything running smoothly.",
    gradient: "from-[#0f172a] to-[#facc15]",
  },
  {
    id: 14,
    name: "Hanshika Mishra",
    role: "USG of Finance",
    image: "/assets/member-photos/hanshika.JPG",
    bio: "Hanshika is the backbone of the conference’s financial planning. With numbers as her favorite characters, she handles budgets with precision and clarity. Cheerful and hardworking, she balances responsibility with positivity, making even the most demanding financial work feel organized and smooth.",
    gradient: "from-[#1e3a8a] to-[#c4b5fd]",
  },
  {
    id: 15,
    name: "Amisha Basnet",
    role: "USG of Logistics",
    image: "/assets/member-photos/amisha.JPG",
    bio: "Amisha brings unparalleled organizational skills and a keen eye for detail, ensuring every aspect of event planning is flawlessly executed. Calm under pressure and always composed, she thrives in high-stakes situations. Her dedication and vision make her an indispensable pillar of the MUN family, fostering seamless success.",
    gradient: "from-[#111827] to-[#2563eb]",
  },
  {
    id: 16,
    name: "Nimisha Kharel",
    role: "USG of Logistics",
    image: "/assets/member-photos/nimisha.JPG",
    bio: "Nimisha exemplifies efficiency and reliability. Known for her calm yet commanding presence, she ensures every logistical detail is managed with precision. Her problem-solving skills and commitment to excellence make her an indispensable part of the secretariat, driving GCI MUN 2026 to new heights.",
    gradient: "from-[#1e40af] to-[#f59e0b]",
  },
  {
    id: 17,
    name: "Arunima Khanal",
    role: "USG of Operations",
    image: "/assets/member-photos/arunima.JPG",
    bio: "Arunima’s journey from being unfamiliar with MUN a year ago to serving on the Organizing Committee reflects her quiet determination. Known for her reliability and hands-on mindset, she is focused on ensuring seamless execution and a smooth conference experience for every delegate.",
    gradient: "from-[#312e81] to-[#2563eb]",
  },
  {
    id: 18,
    name: "Pranavi Regmi",
    role: "USG of Operations",
    image: "/assets/member-photos/pranavi.JPG",
    bio: "Pranavi naturally keeps things on track. Organized and dependable, she handles responsibilities with care and ensures everything runs smoothly. Even during stressful moments, she stays calm and focuses on practical solutions, bringing stability and dedication to the operations team.",
    gradient: "from-[#1d4ed8] to-[#fde68a]",
  },
  {
    id: 19,
    name: "Ishneha Ishabyal Giri",
    role: "Media Team",
    image: "/assets/member-photos/issneha.JPG",
    bio: "Ishneha’s creativity and positive energy set her apart. With a strong work ethic and keen eye for detail, she plays a vital role in presenting the conference impactfully. From managing coverage to supporting the team with insight, she ensures every achievement shines brighter.",
    gradient: "from-[#1e3a8a] to-[#0ea5e9]",
  },
  {
    id: 20,
    name: "Ardian Gurung",
    role: "Media Team",
    image: "/assets/member-photos/ardian.JPG",
    bio: "A dedicated member of the media team with a deep interest in storytelling and visual communication. Aardin helps capture moments and create engaging content. Their teamwork, reliability, and willingness to learn make them a valuable asset to the media department.",
    gradient: "from-[#0f172a] to-[#1e3a8a]",
  },
  {
    id: 21,
    name: "Rishim Mukarung Rai",
    role: "Media Team",
    image: "/assets/member-photos/rishim.JPG",
    bio: "Rishim is a cheerful member of the Media Team whose jolly nature brings positivity to every workspace. Extremely hardworking and focused, she balances fun with responsibility effortlessly, keeping the team motivated, united, and productive.",
    gradient: "from-[#1d4ed8] to-[#3b82f6]",
  },
  {
    id: 22,
    name: "Bidhya Shrestha",
    role: "USG of Public Relations",
    image: "/assets/member-photos/bidhya-shrestha.JPG",
    bio: "Bidhya supports outreach and marketing by focusing on clear communication and delegate engagement. Fluent in multiple languages, she ensures communication is inclusive and professional, managing promotional platforms to support the conference’s credibility.",
    gradient: "from-[#0f172a] to-[#fbbf24]",
  },
  {
    id: 23,
    name: "Prashmi Shrestha",
    role: "USG of Public Relations",
    image: "/assets/member-photos/prashmi.JPG",
    bio: "The unstoppable force behind PR and Marketing. Prashmi brings passion and creativity to everything she does. From perfecting aesthetics to brainstorming fresh ideas at odd hours, she pours her heart into making sure every post feels exciting and relatable.",
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
    icon: "/assets/committee-logos/SPECPOL.jpeg",
    cover: "/assets/committees-bg/specpol.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "UNICEF",
    fullName: "United Nations Children’s Fund",
    desc: "Advancing children’s rights, health, and education",
    agenda: "To be declared",
    icon: "/assets/committee-logos/UNICEF.jpeg",
    cover: "/assets/committees-bg/unicef.webp",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "AU",
    fullName: "African Union",
    desc: "Promoting unity and development across Africa",
    agenda: "To be declared",
    icon: "/assets/committee-logos/AU.jpeg",
    cover: "/assets/committees-bg/au.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "ICJ",
    fullName: "International Court of Justice",
    desc: "Settling legal disputes between states",
    agenda: "To be declared",
    icon: "/assets/committee-logos/ICG.jpeg",
    cover: "/assets/committees-bg/icj.jpg",
    gradient: "",
    bgGradient: "",
  },
  {
    title: "IP",
    fullName: "International Press",
    desc: "Reporting on conference proceedings and press coverage",
    agenda: "To be declared",
    icon: "/assets/committee-icons/IP.jpeg",
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