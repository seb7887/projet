import React from 'react';

const footerStyles = {
  borderTop: '1px solid #00000',
  paddingTop: '1.5rem',
  width: '100%',
  textAlign: 'center',
};

const linkStyles = {
  textDecorationLine: 'none',
  fontWeight: 'bold',
  color: '#fdfcfb',
  cursor: 'pointer',
};

class Footer extends React.Component {  
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div style={footerStyles}>
        <p>Built by Sebastian Matias Segura. Copyright &copy;2018 by <a href="https://github.com/seb7887" style={linkStyles} >seb7887</a></p>
      </div>
    )
  }
}

export default Footer;
