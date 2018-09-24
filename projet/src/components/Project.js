import React from "react";

const projectStyles = {
  div: {
    cursor: "pointer"
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold"
  }
};

const Project = props => {
  const { name, idea, features, keywords, toggleModal, removeProject, isCorrectUser } = props;
  return (
    <div
      style={projectStyles.div}
      className="bg-black tc dib br3 pa3 ma2 dim bw2 shadow-3"      
    >
      <h2 style={projectStyles.title} onClick={() => toggleModal({ name, idea, features, keywords })}>{name}</h2>
      <p>{idea}</p>
      { isCorrectUser && (
      <a onClick={removeProject}>Delete</a>
      )}
    </div>
  );
};

export default Project;
