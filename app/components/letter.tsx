import { EB_Garamond } from "next/font/google";

const eb = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-eb",
});
<<<<<<< HEAD
const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
=======
>>>>>>> f04eedab3a85d21aa13803df4154630a8e09dfa1

export default function Letter() {
  return (
    <section
      className={`${eb.variable} font-[var(--font-eb)] max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 text-slate-600 text-sm sm:text-base leading-relaxed`}
    >
      <p className="mb-6">
        Distinguished Readers,
      </p>

      <p className="mb-6">
        I am delighted to share that the A-Levels Department of Global College
        International will be hosting the seventh edition of the Global College
        International Model United Nations (GCIMUN) from February 19th to 21st,
        2026. With immense passion and enthusiasm for Model United Nations, I
        warmly invite students from Grade 8 through undergraduate level to be
        part of three days of engaging debate, meaningful dialogue, and vibrant
        social events at GCIMUN 2026.
      </p>

      <p className="mb-6">
        GCIMUN serves as a dynamic platform for developing essential skills such
        as public speaking, diplomacy, teamwork, and interpersonal communication.
        Our primary objective is to equip participants with a comprehensive
        understanding of the ever-evolving global landscape, fostering critical
        thinking, insightful analysis, and effective advocacy to navigate
        today’s complex and competitive world. This year, we are proud to
        present a highly experienced panel of Executive Board members,
        reflecting our commitment to delivering the best possible experience
        for every delegate.
      </p>

      <p className="mb-6">
        Our theme, “The Global Rise of Political Instability,” reflects the
        realities of current world affairs and encourages delegates to engage
        with ongoing global tensions. To further elevate the conference
        experience, our Executive Board will include esteemed members from
        countries across Asia, each bringing expertise, professionalism, and
        excellence to their respective committees.
      </p>

      <p className="mb-6">
        Guided by our motto “न स्थैर्यं शक्त्या, स्थैर्यं न्यायेन।”, meaning
        “Not stability by power, but stability by justice,” GCIMUN 2026 is
        committed to addressing pressing contemporary global issues. By
        bringing together students from diverse schools and colleges, we aim
        to encourage meaningful advocacy and dialogue on both national and
        international matters, nurturing politically aware, socially
        responsible, and globally conscious individuals.
      </p>

      <p className="mb-10">
        I am confident that GCIMUN 2026 will be a source of immense pride for our
        institution and a truly rewarding experience for every participant
        involved.
      </p>

      <div>
        <p>Regards,</p>
        <p className="mt-4">Raunak Shrestha</p>
        <p className="mt-1">Secretary General</p>
      </div>
    </section>
  );
}
