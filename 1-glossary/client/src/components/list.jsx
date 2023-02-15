import React from 'react';
var $ = require('jquery');


const List = (props) => {
  var deleteButton = (word) => {
    $.ajax({
      type: 'DELETE',
      url: '/delete',
      data: {
        delete: word
      },
      success: (success) => {
        console.log('success', success);
        props.loadingList();
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }


  var editButton = (word, def) => {
    console.log(word)

    var showDiv = document.getElementById(word);
    showDiv.classList.remove('popup');
    showDiv.classList.add('open-popup');
  }


  var submitChanges = (word, definition) => {
    var showDiv = document.getElementById(word);
    showDiv.classList.remove('open-popup');
    showDiv.classList.add('popup');



    var newDefinition = document.getElementById(definition).value


    if (newDefinition === '') {
      alert('Please fill in the blank');
      return;
    }


    $.ajax({
      type: 'PUT',
      url: '/edit',
      data: {
        word: word,
        definition: newDefinition
      },
      success: (success) => {
        console.log('sucessful edit', success);
        props.loadingList();
      },
      error: (error) => {
        console.log('failed edit', error);
        alert('failed to update word definition')
      }
    })



  }

  console.log(props.updatedList)

  return (
    <div>
      <h3>LIST</h3>
      <div>
        {props.updatedList.map((definition) => {
          return <div id='eachDefinition' key={definition.word}>
              <h2 id='def'>{definition.word}: </h2>
              <div>{definition.definition}</div>
              <div id='editAndDelete'>
                <button id='editButton' onClick={() => { editButton(definition.word, definition.definition) }}>edit</button>
                <button id='deleteButton' onClick={() => { deleteButton(definition.word) }}>delete</button>
              </div>
              <div className='popup' id={definition.word}>
                <input id={definition.definition}></input>
                <button className='button' onClick={() => { submitChanges(definition.word, definition.definition) }}>edit definition</button>
              </div>

            </div>

        })}
      </div>
    </div>


  )
}

export default List;