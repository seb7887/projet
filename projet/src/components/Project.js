import React from 'react';

const Project = (props) => {
  const { name, idea, features, keywords, user } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{idea}</p>
      <p>{features}</p>
    </div>
  )
}

export default Project;
