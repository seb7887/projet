import React from 'react';

const projectStyles = {
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
}

const Project = (props) => {
  const { name, idea, features, keywords, user } = props;
  return (
    <div className='bg-black tc dib br3 pa3 ma2 dim bw2 shadow-3'>
      <h2 style={projectStyles.title}>{name}</h2>
      <p>{idea}</p>
    </div>
  )
}

export default Project;
