import React from "react";
import Layout from "./Layout";
import TeamMemberCard from "./components/TeamMemberCard";

const teamProfile = [
  {
    id: 1,
    pic: "https://img5.pic.in.th/file/secure-sv1/380543638_1301540627207233_4034796601921640776_n.jpeg",
    name: "Ananyalusk Sreesang (Kiki)",
    shortBio: "Sending my selfie to NASA, because I’m a star. ✨",
    longBio:
      "Hello, world! I'm Kiki, a junior software developer with a passion for coding and an artistic flair. Beyond the lines of code, I incorporate creativity, integrating artistry into the world of software development. Excited to combine technological and artistic elements to produce unique and impactful solutions.",
    gitHub: "https://github.com/kiki-ananyaluck",
    linkedIn: "https://www.linkedin.com/in/kiki-ananyaluck/",
    personalSite: "https://portfolio-kiki-ananyaluck.vercel.app/",
  },
  {
    id: 2,
    pic: "https://res.cloudinary.com/dsqstrzt5/image/upload/c_crop,g_auto,h_1200,w_800/xxdosbszxusz29e3zbnl.jpg",
    name: "Prut Mongkol (Pete)",
    shortBio: "Full-stack Dabbler - Professional Procrastinator",
    longBio:
      "Hey, I’m one of the coding ninjas of our team. Whether it's crafting pixel-perfect designs on the frontend or wrangling data in the backend, I'm your go-to person. Just doing my bit to keep the momentum rolling. Now, excuse me while I’m heading back to my coding den.",
    gitHub: "https://github.com/PrutMongkol",
    linkedIn: "https://www.linkedin.com/in/prut-mongkol/",
    personalSite: "https://prutmongkol.dev/",
  },
  {
    id: 3,
    pic: "https://i.imgur.com/CweGb4W.jpeg",
    name: "Theppitak Maneepong (Mob)",
    shortBio: "A newcomer at the crossroad of tech and creativity.",
    longBio:
      "Former creative copywriter and project manager, now on my way to becoming a developer. On the right side of my brain lies the love of fun and goofy ways to communicate things, while on the left is the love to find ways to manage unmanageable problems into the perfect march.",
    gitHub: "https://github.com/mmmmmob",
    linkedIn: "https://www.linkedin.com/in/theppitak-m/",
    personalSite: "https://theppitak.me",
  },
  {
    id: 4,
    pic: "https://i.pinimg.com/564x/08/bd/9c/08bd9c57b781422858bf115cb3c9c0ab.jpg",
    name: "Totsapol Piluk (Earth)",
    shortBio: "Sloth that loves to code in bed.",
    longBio:
      "Hello, my name is Earth. I'm someone who is passionate about coding, enjoys creating cool things for people to use. I dream of coding smoothly like a waterfall, but for now, it's more like dripping water.",
    gitHub: "https://github.com/Totsapol-Piluk",
    linkedIn: "https://www.linkedin.com/in/totsapol-piluk",
    personalSite: "#",
  },
  {
    id: 5,
    pic: "https://i.imgur.com/ANpVt2j.jpeg",
    name: "Vorapon Sirimahatham (Vee)",
    shortBio: "AI-powered machine that turns coffee into code.",
    longBio:
      "Seasoned in manufacturing IT and adept at cross-functional collaboration. Now delving into the exciting realm of coding.",
    gitHub: "#",
    linkedIn: "https://www.linkedin.com/in/vorapons/",
    personalSite: "#",
  },
];

const AboutUs = () => {
  return (
    <Layout>
      <main className="mx-auto md:container md:my-3 md:rounded-lg md:bg-white md:shadow-lg">
        <div>
          <p className="mb-1 mt-5 px-4 text-4xl font-bold">JSD6G8 Members</p>
        </div>
        <div>
          {teamProfile.map((profile) => (
            <TeamMemberCard key={profile.id} member={profile} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
