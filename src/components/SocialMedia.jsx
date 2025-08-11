import React from "react";
import { FaLinkedinIn, FaGithub, FaRegFilePdf } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <a
        data-tooltip-id="tooltip"
        data-tooltip-content="Github"
        href="https://github.com/edenma5"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        data-tooltip-id="tooltip"
        data-tooltip-content="Linkedin"
        href="https://www.linkedin.com/in/eden-maimon"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        data-tooltip-id="tooltip"
        data-tooltip-content="Eden Maimon CV"
        href="https://www.dropbox.com/scl/fi/1y2wiiabpi3wjlohxijfc/Eden-Maimon-CV-English.pdf?rlkey=06f0xdbbarf8w4p9x8z7xoxy9&dl=0"
        target="_blank"
      >
        <FaRegFilePdf />
        <ReactTooltip
          id="tooltip"
          effect="solid"
          place="right"
          className="skills-tooltip"
          style={{ background: "#fff", color: "black" }}
        ></ReactTooltip>
      </a>
    </div>
  );
}
