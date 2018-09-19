import React from 'react';

const ProjectCard = (props) => {
  const { name, idea, features, keywords, toggleModal } = props;
  return (
    <div className='profile-modal'>
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center bg-black'>
        <main className='pa4 black-80 w-80'>
          <h1>{name}</h1>
          <p>Idea: {idea}</p>
          <p>Features: {features}</p>
          <hr />
          <p>Keywords:</p>
        </main>
        <div className='modal-close' onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
