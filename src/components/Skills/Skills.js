import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiNodeDotJs,
  SiMongodb,
  SiReact,
  SiRedux,
  SiTypescript,
  SiJest,
  SiStyledComponents,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaGithub, FaGitkraken, FaSass, FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className='skills-div'>
        <div className='skills-text-content'>
          <h1 className='skills-header'>Skills and Tools</h1>
          <h2 className='skills-subheader'>
            Languages and Technologies that I have learned and applied to my
            projects
          </h2>
          <div className='icons-div'>
            <ul className='icons-ul'>
              <li className='skills'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                  className='a-skill'
                >
                  <AiFillHtml5 className='one-skill' />
                </a>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                  className='a-skill'
                >
                  <DiCss3 className='one-skill' />
                </a>
                <a href='https://sass-lang.com/' className='a-skill'>
                  <FaSass className='one-skill' />
                </a>
                <a href='https://styled-components.com/' className='a-skill'>
                  <SiStyledComponents className='one-skill' />
                </a>
                <a href='https://jestjs.io/' className='a-skill'>
                  <SiJest className='one-skill' />
                </a>
              </li>
              <li className='skills'>
                <a href='https://www.javascript.com/' className='a-skill'>
                  <SiJavascript className='one-skill' />
                </a>
                <a href='https://www.typescriptlang.org/' className='a-skill'>
                  <SiTypescript className='one-skill' />
                </a>
                <a href='https://nodejs.org/en/' className='a-skill'>
                  <SiNodeDotJs className='one-skill' />
                </a>
                <a href='https://reactjs.org/' className='a-skill'>
                  <SiReact className='one-skill' />
                </a>
                <a href='https://redux.js.org/' className='a-skill'>
                  <SiRedux className='one-skill' />
                </a>
              </li>
              <li className='skills'>
                <a href='https://www.mongodb.com/' className='a-skill'>
                  <SiMongodb className='one-skill' />
                </a>
                <a href='https://graphql.org/' className='a-skill'>
                  <GrGraphQl className='one-skill' />
                </a>
                <a href='https://aws.amazon.com/' className='a-skill'>
                  <FaAws className='one-skill' />
                </a>
                <a href='https://github.com/' className='a-skill'>
                  <FaGithub className='one-skill' />
                </a>
                <a href='https://www.gitkraken.com/' className='a-skill'>
                  <FaGitkraken className='one-skill' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
