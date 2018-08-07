import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
const uuid = require('uuid/v1');
import CreateNoteForm from './note-create-form/index.js';
import NotesList from './note-list/index.js';
import NoteItem from './note-list/note-item/index.js';
export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes:[],
      isMounted:false,
      currentNote:'',
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }
  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }
  
  addNote(data){
    let notes = this.state.notes;
    let newNote = new Note(data);
    notes.push(newNote);
    this.setState({notes});
  }

  removeNote(id){
    let notes = this.state.notes;
    for(var i in notes){
      let item = notes[i];
      if(item['id']===id){
        notes.splice(i,1);
        this.setState({notes});
      }
    }
  }

  findNote(id){
    let notes = this.state.notes;
    for(var i in notes){
      let item = notes[i];
      if(item['id']===id){
        let currentNote = notes.splice(i,1);
        this.setState({currentNote});
        return currentNote;
      }
      else{
        let currentNote = '';
        this.setState({currentNote});
      }
    }
  } 

  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <CreateNoteForm createMethod={this.addNote} /> 
          <NotesList notes={this.state.notes} deleteMethod={this.removeNote}/>
          <Route exact path = "/noteItem/:id" component={(props)=><NoteItem {...props} notes={this.state.notes} deleteMethod={this.removeNote}/>}/>   
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export class Note {
  constructor(data){
    this.id = uuid();
    this.editing = false;
    this.completed = false;
    this.content = data.content;
    this.title = data.title;
  }
}