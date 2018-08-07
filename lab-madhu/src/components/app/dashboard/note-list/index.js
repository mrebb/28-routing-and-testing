import React from 'react';
import {Link} from 'react-router-dom';
import './note.scss';
export default class NotesList extends React.Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete(e){
    this.props.deleteMethod(e.target.value);
  }
  render(){
    return(
      <React.Fragment>
        <form>
          <ul>
            {
              this.props.notes.length>0 &&this.props.notes.map((note) =>
                <li key={note.id}>
                  <Link to={`/noteItem/${note.id}`}>{note.title}</Link>  
                  <button className="delete" value={note.id} id={note.id} onClick={this.delete}>X</button>
                  <br></br><br></br>
                </li>
              )
            }
          </ul>
        </form>
      </React.Fragment>
    );
  }
}