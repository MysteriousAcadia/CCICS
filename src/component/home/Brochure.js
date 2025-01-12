import React from "react";
import { Link } from "react-router-dom";
import Generator from "../Committee/Generator";
import CardGen from "./CardGen";
import Data1 from "./Data1";
import Data2 from "./Data2";
import Swaper from "./Swaper";

const Brochure = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "white", padding: "1rem 0" }}>
      <div id="about" className="container mt-5 mb-5">
        <div className="row">
          <div className="col-4">
            <Link to="/brochure-detail">
              <img
                src="img/side_image.png"
                height="740px"
                width="300px"
                alt="brochure"
                style={{ cursor: "pointer", borderRadius: "7px" }}
              />
            </Link>
          </div>
          <div className="col-8 col-ab-ccics mb-0">
            <h2 className="FM1">About C3IT</h2>
            <br />
            <h4 className="FM4 mb-0">
              The 4th International Conference on Computer, Communication,
              Control & Information Technology 2024 [C3IT] is an endeavour to
              bring researchers, academicians, students and industrial experts
              under a single roof to explore latest developments, applications,
              results and innovative ideas in various domains of communication,
              control and intelligent computing systems. Many computational
              intelligence and learning methods, such as Machine Learning,
              neural networks, genetic algorithms, IoT and so on, have found
              success in a variety of control and automation fields. Intelligent
              Control, which differs from conventional approaches, is based on
              methodologies derived from Artificial Intelligence and soft
              computing techniques and is capable of dealing with problems in
              diverse computational and communication domains and, more
              recently, those related to renewable energy and mobile autonomous
              systems, where conventional methods were unsuccessful.
              Nevertheless, new technologies such as artificial intelligence,
              edge computing, and the Internet of Things have led to an
              unprecedented development of control and communication. The
              conference is devoted to intelligent systems that improve the
              control of nonlinear systems and its applications and also novel
              contributions in all aspects of automation and intelligent
              systems. This conference will provide a knowledge-building and
              experience-sharing platform for professionals from the industry,
              academia and research organizations. ICIC3 aims at facilitating
              multi-disciplinary conversations on current research that
              leverages Industry 4.0 technologies to stimulate and facilitate
              active exchange, interaction and comparison of approaches, methods
              and ideas related to specific topics, both theoretical and
              applied, in the general areas related to the Intelligent
              Computing, Communication, intelligent control techniques,
              computing technologies, Software Engineering and other
              contemporary issues like High Performance Computing, Distributed
              Computing and Grid Computing. The main aim of this International
              Conference is to contribute to the academic arena, business world,
              and industrial community and in turn to society.
            </h4>
            <Swaper />
          </div>

          <div className="mt-5 ">
            <Generator data={Data1} />
          </div>

          <div className="mt-5">
            <CardGen data={Data2} />
          </div>
          <img
            src="img/Call_for_papers.png"
            style={{ width: "70%", margin: "auto", padding: "25px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
