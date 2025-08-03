import React from "react";

export default function Skills() {
  const skill = [
    "Javascript",
    "React",
    "NodeJS",
    "Express",
    "MongoDB",
    "Mysql",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "MaterialUI",
    "TailwindCSS",
    "Git",
    "GitHub",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
        gap: "28px",
        padding: "32px 12px",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        maxWidth: 1600,
        margin: "10px auto",
        borderRadius: 12,
        scrollbarWidth: "thin",
      }}
    >
      {skill.map((skill) => (
        <span
          key={skill}
          style={{
            padding: "10px 22px",
            backgroundColor: "#d8d4d4ff",
            borderRadius: "8px",
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.1rem",
            boxShadow: "0 1px 4px 0 rgba(107, 15, 107, 0.04)",
            textAlign: "center",
            minWidth: 90,
            whiteSpace: "nowrap",
            // color: "purple",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
