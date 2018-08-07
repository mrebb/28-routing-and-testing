import React from 'react';
import '../note-list/note.scss';
export default class createNote extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.state = {
      title:'',
      content:'',
    }; 
  }
  handleSubmit(e){
    e.preventDefault();
    let data = {};
    data.title = this.state.title;
    data.content = this.state.content;
    this.props.createMethod(data);
  }
  handleTitle(e){
    let title = e.target.value;
    this.setState({title});
  }
  handleContent(e){
    let content = e.target.value;
    this.setState({content});
  }
  render(){
    return(
      <React.Fragment>
        <div>
          <a href="/">Back to home</a>
        </div>
        <div className="notesDiv">
          <form className="notesForm" onSubmit={this.handleSubmit}>
            <h1>Create new notes</h1>
            <label htmlFor="title">Title:  </label>
            <input onChange={this.handleTitle} required id="title" name="title" type="text" />
            <br></br>
            <br></br>
            <label htmlFor="content">Content:  </label>
            <textarea onChange={this.handleContent} required id="content" name="content" type="text" />
            <br></br><br></br>
            <button>Create</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}