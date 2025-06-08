import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cropify"
              description="Cropify is a farmer-centric platform built to empower farmers by allowing them to sell their produce directly to customers. It integrates smart features like crop prediction, price forecasting, and a real-time chat system to connect farmers and buyers efficiently For Login Use Email-messi@gmail.com & Password: 123456789."
              ghLink="https://github.com/Yashxxp/Cropify"
              demoLink="https://cropify-v1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Brain Tumor Detection using 3D Segmentation"
              description="Brain Tumor Detection using 3D Segmentation is a deep learning-based medical imaging project that accurately identifies and segments brain tumors from 3D MRI scans. Leveraging volumetric data and advanced neural networks, the system enables precise tumor localization, which can assist radiologists in faster diagnosis and treatment planning."
              ghLink="https://github.com/Yashxxp/Brain-Tumor-Detection-using-3D-segmentation-UNet"
              demoLink="https://drive.google.com/file/d/1siCHPu4czBTIpUxsctBhO8_JbLnli2qc/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Email-Assistant"
              description="Built using NLP , Springboot , Spring AI and Gemini API, the Email Assistant analyzes email content to auto-generate replies, filter spam, and organize inboxes for efficient task management.It enhances communication efficiency with smart suggestions and adaptive response logic."
              ghLink="https://github.com/Yashxxp/Email-Assistant"
              demoLink="https://drive.google.com/file/d/1lS0DcGFuEOEi88kLv6SPYpzXElAivJa1/view?usp=drive_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Fit-Pocket"
              description="Fit Pocket is a smart fitness tracking app designed to fit seamlessly into your daily routine. It helps users monitor their physical activity, set personalized fitness goals, and track progress through intuitive dashboards. With features like step counting, BMI Calculator, workout reminders, and integration with Google Maps API, as well as an SOS feature Fit Pocket empowers users to stay healthy and motivated—right from their pocket."
              ghLink="https://github.com/Yashxxp/Fitpocket"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="College Predictor"
              description="College Predictor is a JavaScript-based web application that helps students find the best-fit colleges based on their entrance exam scores, category, and preferences. Using past admission data and cut-off trends, it delivers accurate and personalized college recommendations, simplifying and streamlining the admission decision-making process."
              ghLink="https://github.com/Yashxxp/Collge-Predictor"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
