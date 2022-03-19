import "../../scss/aboutPage/About.scss";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    let thispage = document.querySelector(".about-container");
    thispage?.classList.add("fade-in");
  }, []);
  return (
    <div className="about-container">
      <div className="about-img-container">
        <img src={require("../../images/self-portrait.jpg")} alt="" />
      </div>
      <div className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt
        provident placeat temporibus magni accusantium autem quidem esse
        architecto. Quibusdam vel harum earum suscipit obcaecati officiis sunt
        eligendi, amet rem blanditiis repudiandae distinctio sequi autem
        temporibus cupiditate dolores delectus unde optio ratione quod
        provident, eveniet modi nihil asperiores! Deserunt, laborum! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius,
        dolorem cum ipsa quis error quos commodi alias soluta fuga, fugiat
        corporis natus in qui unde architecto obcaecati ipsum temporibus debitis
        deserunt. Sint exercitationem ullam harum iste doloribus laudantium,
        aspernatur laborum rerum eos, esse in incidunt asperiores autem! Vel
        nostrum nulla dolor doloribus hic possimus ut, magni ipsa esse
        accusantium perspiciatis dolores qui distinctio soluta delectus
        praesentium aut minus eos facilis dolore corporis vitae! Aut inventore
        tenetur error rerum obcaecati in voluptatem veritatis odio incidunt
        iste. Ipsam, reprehenderit adipisci voluptate numquam ea earum
        voluptatum quam natus, quis amet culpa. Nam!
      </div>
    </div>
  );
}

export default About;
