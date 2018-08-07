import React from 'react';

export default class NotesItem extends React.Component {
  constructor(props){
    super(props);
    this.find = this.find.bind(this);
    this.delete = this.delete.bind(this);
  }
  find(){
    return this.props.notes.find((note)=>{
      return note.id===this.props.match.params.id;
    });
  }
  delete(){
    this.props.deleteMethod(this.find().id);
  }
  render(){
    return(
      <React.Fragment>
        {
          this.props.notes.length>0 &&this.find()&& (
            <form>
              <div>
                <h2>{this.find().title}</h2>
                <p>{this.find().content}</p>
                <button onClick={this.delete}>delete</button>
              </div></form>)
        }
      </React.Fragment>
      
    );
  }
}
