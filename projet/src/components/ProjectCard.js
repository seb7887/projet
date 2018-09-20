import React from 'react';

const cardStyles = {
  modal: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalClose: {
    fontSize: '15rem',
    fontStyle: 'bold',
    cursor: 'pointer',
  }
}

const ProjectCard = (props) => {
  const { name, idea, features, keywords, toggleModal } = props;
  return (
    <div className={cardStyles.modal}>
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center bg-black'>
        <main className='pa4'>
          <h1>{name}</h1>
          <p>Idea: {idea}</p>
          <p>Features: {features}</p>
          <hr />
          <p>Keywords: {keywords.join(', ')}</p>
        </main>
        <div className={cardStyles.modalClose} onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
