import React from 'react';
import reactDom from 'react-dom';
import Add from './components/addDefinition.jsx';


const App = () => {
  return (
    <div>
      <h1>GLOSSARY APP</h1>
      <Add />
    </div>
  );
}


reactDom.render(<App />, document.getElementById('root'))


