import React, { useState, useEffect } from 'react';
const $ = require('jquery');
import List from './list.jsx';


const Add = () => {

  const [list, updateList] = useState([]);

  useEffect(() => {
    loadingList()
  }, []);



  var loadingList = () => {
    $.ajax({
      type: 'GET',
      url: '/list',
      success: (success) => {
        console.log('success!', success)
        updateList(success);
      },
      error: (error) => {
        console.log('error', error)
      }
    })
  }

  var storingDefinition = () => {
    var word = document.getElementById('word').value;
    var definition = document.getElementById('definition').value;


    var seperatedWord = word.slice(1, word.length);
    var capitalLetter = word[0].toUpperCase();
    word = capitalLetter + seperatedWord;




    console.log(word.length) // shows whatever is typed in
    console.log(definition) // shows whatever is typed in

    if (word.length === 0 || definition.length === 0) {
      alert('Please fill out both word and definition')
    } else {
      $.ajax({
        type: 'POST',
        url: '/save',
        data: {
          word: word,
          definition: definition
        },
        success: (success) => {
          console.log('success!', success);
          loadingList();
        },
        error: (error) => {
          console.log('error', error);
        }
      });
    }
  }



  var filter = () => {
    var filteredSearch = document.getElementById('filter').value;


    var seperatedWord = filteredSearch.slice(1, filteredSearch.length);
    var capitalLetter = filteredSearch[0].toUpperCase();
    filteredSearch = capitalLetter + seperatedWord;


    console.log('----->>', filteredSearch)
    console.log('hello')


    $.ajax({
      type: 'POST',
      url: '/filter',
      data: {
        word: filteredSearch
      },
      success: (success) => {
        console.log('successful filter', success)
        updateList([success])
      },
      error: (error) => {
        console.log('failed filter', error)
      }

    })
  }





  return (
    <div>
      <div className='search'>
        <h3>FILTER</h3>
        <label htmlfor='filter'>Filter</label>
        <input className='button' id='filter'></input>
        <button className='button' onClick={() => { filter() }}>filter now</button>
      </div>
      <div className='search'>
        <h3>SEARCH</h3>
        <label htmlfor='word'>Word</label>
        <input type='text' id='word'></input>
        <label className='button' htmlfor='definition'>definition</label>
        <input type='text' id='definition'></input>
        <button className='button' onClick={storingDefinition}>Save Word</button>
      </div>
      <div>
        <List updatedList={list} loadingList={loadingList}/>
      </div>
    </div>

  )
}

export default Add;