import React from "react";
import faceImage from "../assets/images/about.png";
import IconHtml from '../assets/images/iconhtml.png';
import Iconcss from '../assets/images/Iconcss.png';
import IconJavascript from '../assets/images/Iconjavascript.png';
import Icontailwind from '../assets/images/icontailwindcss.png';
import IconReact from "../assets/images/React-icon.png"
import IconBootrap from "../assets/images/iconbootstrap.png"
import "../assets/css/About.css"

const skills = [
  {
    id: 1,
    name: "HTML",
    url: IconHtml,
  },
  {
    id: 2,
    name: "CSS",
    url: Iconcss,
  },
  {
    id: 3,
    name: "Javascript",
    url: IconJavascript,
  },
  {
    id: 4,
    name: "React",
    url: IconReact,
  },
  {
    id: 5,
    name: "Bootstrap",
    url: IconBootrap,
  },
  {
    id: 6,
    name: "TailWindcss",
    url: Icontailwind,
  },
];
function About() {
  return (
    <div className="">
      <div className="flex">
        <div className="w-1/3 flex justify-end ">
          <img src={faceImage} alt="" srcset="" className="w-full" />
        </div>
        <div
          className="w-2/3  flex "
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="text-center  ">
            <h3 className="text-3xl font-semibold">Know Who I'M</h3>
            <p className="text-2xl text-justify ">
              Allow me to introduce myself, my name is Nhut Truong and I am
              currently a student of Information Technology at Can Tho
              University. I have a strong interest in front-end development and
              am passionate about creating aesthetically pleasing and intuitive
              interfaces using HTML, CSS, and JavaScript. As a front-end
              developer, I strive to continuously develop my skills and stay
              updated with the latest trends and technologies in the field. I am
              excited to contribute my knowledge and creativity to real-world
              applications and make a positive impact through my work.
            </p>
          </div>
        </div>
      </div>
      <p className="text-4xl my-3 font-bold">Professional Skillset</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
        {skills.map((skill) => (
          <div className="flex justify-center items-center my-8 mx-8 border-4 rounded-2xl" key={skill.id}>
           <div className="">
           <img src={skill.url} alt={skill.name} className="w-40 my-8 mx-8 zoom " />
            <p className="text-3xl my-3 font-semibold">{skill.name}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
