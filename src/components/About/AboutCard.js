import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Mhatre </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently Btech Computer Science student at <span className="purple"> MIT-ADT University</span>.I am from Navi Mumbai, Maharashtra.I have done my schooling from St Mary's Convent High School, Uran
            and done my Higher Secondary Education from RJCS, Kharghar.I have keen intrest in Web Development and Machine Learning. Currently I am proficient in Java and Python.And have a good knowledge of OOPS , DBMS and
            CS Fundamentals.I also have Hands-on experience in Mern-Stack Web Development, and have worked with frameworks such as Spring Boot and Machine Learning as well as Deep Learning algoritms .
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
