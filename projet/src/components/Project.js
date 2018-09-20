import React from 'react';

const projectStyles = {
  div : {
    cursor: 'pointer',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
}

const Project = (props) => {
  const { name, idea, features, keywords, toggleModal } = props;
  return (
    <div
      style={projectStyles.div}
      className='bg-black tc dib br3 pa3 ma2 dim bw2 shadow-3'
      onClick={() => toggleModal({ name, idea, features, keywords })}
    >
      <h2 style={projectStyles.title}>{name}</h2>
      <p>{idea}</p>
    </div>
  )
}

export default Project;
