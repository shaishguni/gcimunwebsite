interface TeamMember {
  id: number;
  name: string;
  role: string;

  image: string;
  bio: string;
  instagram?: string;
  email?: string;
  gradient: string;
}

const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Samrat Gurung",
      role: "Chief Advisor",
      image: "/assets/secretariat/samrat.jpg",
      bio: "Guiding the conference with vision, diplomacy, and a commitment to excellence.",
      email: "secretariat@gcimun.org",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 2,
      name: "Raunak Shrestha",
      role: "Secretary General",
      image: "/images/team/raunak-shrestha.jpg",
      bio: "Overseeing operations to deliver a seamless and impactful MUN experience.",
      email: "operations@gcimun.org",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Bishesh Dahal",
      role: "Deputy Secretary General",
      image: "/images/team/bishesh-dahal.jpg",
      bio: "Ensuring every delegate is supported, informed, and ready to excel.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      name: "Shasha Basnet",
      role: "Director General",
      image: "/images/team/shasha-basnet.jpg",
      bio: "Coordinating the secretariat and championing collaborative leadership.",
      gradient: "from-rose-500 to-red-500",
    },
    {
      id: 5,
      name: "Anushriti Aryal",
      role: "Charge de Affairs",
      image: "/images/team/anushriti-aryal.jpg",
      bio: "Leading critical discussions on peace, security, and global stability.",
      gradient: "from-indigo-500 to-sky-500",
    },
    {
      id: 6,
      name: "Prerak Pathak",
      role: "USG of Dais Affairs",
      image: "/images/team/prerak-pathak.jpg",
      bio: "Championing inclusive debate on the world’s most pressing issues.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 7,
      name: "Aarishan Khadgi",
      role: "Head of IT",
      image: "/images/team/aarishan-khadgi.jpg",
      bio: "Advocating for human rights and justice across every agenda.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 8,
      name: "Deepsa Ghimire",
      role: "USG of IT",
      image: "/images/team/deepsa-ghimire.jpg",
      bio: "Amplifying youth voices and safeguarding the rights of children.",
      gradient: "from-fuchsia-500 to-purple-500",
    },
    {
      id: 9,
      name: "Shaish Guni",
      role: "USG of IT",
      image: "/images/team/shaish-guni.jpg",
      bio: "Driving evidence-based dialogue on global health priorities.",
      gradient: "from-lime-500 to-green-500",
    },
    {
      id: 10,
      name: "Dibyangana Rai",
      role: "USG of IT",
      image: "/images/team/dibyangana-rai.jpg",
      bio: "Exploring sustainable pathways for global development.",
      gradient: "from-sky-500 to-cyan-500",
    },
    {
      id: 11,
      name: "Saraya Adhikari",
      role: "USG of Delegate Affairs",
      image: "/images/team/saraya-adhikari.jpg",
      bio: "Facilitating strategic debate on disarmament and international security.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 12,
      name: "Moulikata Joshi",
      role: "USG of Delegate Affairs",
      image: "/images/team/moulikata-joshi.jpg",
      bio: "Guiding conversations on human rights, culture, and social progress.",
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      id: 13,
      name: "Abhipsa Sharma",
      role: "USG of Finance",
      image: "/images/team/abhipsa-sharma.jpg",
      bio: "Centering gender equality and empowerment in every resolution.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 14,
      name: "Hanshika Mishra",
      role: "USG of Finance",
      image: "/images/team/hanshika-mishra.jpg",
      bio: "Capturing the stories, insights, and highlights of the conference.",
      gradient: "from-slate-500 to-blue-500",
    },
    {
      id: 15,
      name: "Amisha Basnet",
      role: "USG of Logistics",
      image: "/images/team/amisha-basnet.jpg",
      bio: "Crafting digital experiences that keep every delegate connected.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 16,
      name: "Nimisha Kharel",
      role: "USG of Logistics",
      image: "/images/team/nimisha-kharel.jpg",
      bio: "Aligning logistics with the conference vision from start to finish.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      id: 17,
      name: "Arunima Khanal",
      role: "USG of Operations",
      image: "/images/team/arunima-khanal.jpg",
      bio: "Ensuring every schedule, resource, and detail stays on tempo.",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      id: 18,
      name: "Pranavi Regmi",
      role: "USG of Operations",
      image: "/images/team/pranavi-regmi.jpg",
      bio: "Supporting delegates with reliable and responsive operations.",
      gradient: "from-amber-400 to-orange-400",
    },
    {
      id: 19,
      name: "Ishneha Ishabyal Giri",
      role: "Media Team",
      image: "/images/team/ishneha-giri.jpg",
      bio: "Bridging teams with clear communication and quick solutions.",
      gradient: "from-rose-400 to-red-400",
    },
    {
      id: 20,
      name: "Ardian Gurung",
      role: "Media Team",
      image: "/images/team/ardian-gurung.jpg",
      bio: "Keeping venues, materials, and people moving in harmony.",
      gradient: "from-indigo-400 to-blue-400",
    },
    {
      id: 21,
      name: "Rishim Mukarung Rai",
      role: "Media Team",
      image: "/images/team/rishim-rai.jpg",
      bio: "Building resilient operational plans for every session.",
      gradient: "from-emerald-400 to-teal-400",
    },
    {
      id: 22,
      name: "Bidhya Shrestha",
      role: "USG of Public Relations",
      image: "/images/team/bidhya-shrestha.jpg",
      bio: "Elevating delegate experiences with thoughtful media support.",
      gradient: "from-sky-400 to-cyan-400",
    },
    {
      id: 23,
      name: "Prashmi Shrestha",
      role: "USG of Public Relations",
      image: "/images/team/prashmi-shrestha.jpg",
      bio: "Amplifying GCIMUN stories through creative PR and outreach.",
      gradient: "from-fuchsia-400 to-purple-400",
    },
    ];



export default teamMembers;