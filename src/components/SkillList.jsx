import React from "react";
import Skill from "./Skill";
import { skills } from "./constant/data";

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} emoji={skill.emoji} />
      ))}
    </div>
  );
}
