import React from "react";
import StoryCard from "./StoryCard";

const Stories = () => {
  const stories = [
    {
      name: "Haruna Faruk",
      src: "https://media.licdn.com/dms/image/D4D03AQEuiGeEmjJ-Sg/profile-displayphoto-shrink_800_800/0/1672912946884?e=1679529600&v=beta&t=g32mdKsENuUHf5oeA7KqSiv6pUPANyr3gDtmrKwBQvs",
      profile:
        "https://firebasestorage.googleapis.com/v0/b/facebook-v23.appspot.com/o/posts%2F7Mo6j8xShoav5mk2kWja?alt=media&token=fa089e1a-382e-43e6-a529-758d60f69229",
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/kxk",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark Zukerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];
  return (
    <div className="flex justify-center space-x-3 mx-auto overflow-x-scroll scrollbar-hide">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          src={story.src}
          profile={story.profile}
          name={story.name}
        />
      ))}
    </div>
  );
};

export default Stories;
