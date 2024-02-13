import React from "react";
import Layout from "./Layout";
import TeamMemberCard from "./components/TeamMemberCard";

const teamProfile = [
  {
    id: 1,
    pic: "http://placekitten.com/500/800",
    name: "KiKi",
    shortBio: "Lorem ipsum dolor sit amet",
    longBio:
      "Occaecat ullamco ex aliquip esse ea. Deserunt consequat magna do deserunt velit ullamco laborum non exercitation. Ullamco irure cupidatat excepteur excepteur incididunt commodo deserunt qui sunt. Officia esse esse duis Lorem ipsum ut irure deserunt quis laborum sunt veniam labore. Exercitation aliquip culpa ullamco dolor consequat nisi laboris et eu nulla cillum adipisicing.",
    gitHub: "https://github.com/mmmmmob",
    linkedIn: "https://linkedin.com/theppitak_m",
    personalSite: "https://theppitak.me",
  },
  {
    id: 2,
    pic: "http://placekitten.com/500/600",
    name: "Pete",
    shortBio: "Lorem ipsum dolor sit amet",
    longBio:
      "Occaecat ullamco ex aliquip esse ea. Deserunt consequat magna do deserunt velit ullamco laborum non exercitation. Ullamco irure cupidatat excepteur excepteur incididunt commodo deserunt qui sunt. Officia esse esse duis Lorem ipsum ut irure deserunt quis laborum sunt veniam labore. Exercitation aliquip culpa ullamco dolor consequat nisi laboris et eu nulla cillum adipisicing.",
    gitHub: "https://github.com/mmmmmob",
    linkedIn: "https://linkedin.com/mmmmmob",
    personalSite: "https://mmmmmob.me",
  },
  {
    id: 3,
    pic: "http://placekitten.com/500/600",
    name: "Mob",
    shortBio: "Lorem ipsum dolor sit amet",
    longBio:
      "Occaecat ullamco ex aliquip esse ea. Deserunt consequat magna do deserunt velit ullamco laborum non exercitation. Ullamco irure cupidatat excepteur excepteur incididunt commodo deserunt qui sunt. Officia esse esse duis Lorem ipsum ut irure deserunt quis laborum sunt veniam labore. Exercitation aliquip culpa ullamco dolor consequat nisi laboris et eu nulla cillum adipisicing.",
    gitHub: "https://github.com/mmmmmob",
    linkedIn: "https://linkedin.com/mmmmmob",
    personalSite: "https://mmmmmob.me",
  },
  {
    id: 4,
    pic: "http://placekitten.com/500/600",
    name: "Earth",
    shortBio: "Lorem ipsum dolor sit amet",
    longBio:
      "Occaecat ullamco ex aliquip esse ea. Deserunt consequat magna do deserunt velit ullamco laborum non exercitation. Ullamco irure cupidatat excepteur excepteur incididunt commodo deserunt qui sunt. Officia esse esse duis Lorem ipsum ut irure deserunt quis laborum sunt veniam labore. Exercitation aliquip culpa ullamco dolor consequat nisi laboris et eu nulla cillum adipisicing.",
    gitHub: "https://github.com/mmmmmob",
    linkedIn: "https://linkedin.com/mmmmmob",
    personalSite: "https://mmmmmob.me",
  },
  {
    id: 5,
    pic: "http://placekitten.com/500/600",
    name: "Vee",
    shortBio: "Lorem ipsum dolor sit amet",
    longBio:
      "Occaecat ullamco ex aliquip esse ea. Deserunt consequat magna do deserunt velit ullamco laborum non exercitation. Ullamco irure cupidatat excepteur excepteur incididunt commodo deserunt qui sunt. Officia esse esse duis Lorem ipsum ut irure deserunt quis laborum sunt veniam labore. Exercitation aliquip culpa ullamco dolor consequat nisi laboris et eu nulla cillum adipisicing.",
    gitHub: "https://github.com/mmmmmob",
    linkedIn: "https://linkedin.com/mmmmmob",
    personalSite: "https://mmmmmob.me",
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
