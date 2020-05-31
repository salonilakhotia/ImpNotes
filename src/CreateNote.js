import React, { Component } from 'react'
import './createNote.css';

class CreateNote extends Component{
    state = {
        title: '',
        content: '',
        level: ' ',
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value,
        })  
    }
    
    handleRadio = (e) => {
        this.setState({ level : e.target.value})
    }
    
    handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state);
      this.props.addNote(this.state);
    }

    render(){
        return (
            <div className="form_box">
              <form onSubmit = {this.handleSubmit} className="white">
                  <h3 className="new_note">New Note</h3>
                  <div className="input">
                      <label class = "label_title" htmlFor="title">Note Title</label>
                      <input className='title_tab' type="text" id="title" onChange={this.handleChange} />
                  </div>
                  <div className="input">
                      <label class = "label_content" htmlFor="content">Note Content</label>
                      <textarea className = "content_tab" id="content" rows={10} cols={10}  onChange={this.handleChange} />
                  </div>
                  <div class="label_level input" >Level :  </div>
                    <label class="label input">
                    <input class="input_vi " type="radio" name = "level"  value="vi" onChange={this.handleRadio} />
                    Damn Important
                    <input class="input_i" type="radio" name="level" value="i"  onChange={this.handleRadio} />
                    Important
                    <br></br>
                    <input class="input_m" type="radio" name = "level"  value="m" onChange={this.handleRadio} />
                    OK..OK..
                    <input class="input_ni" type="radio" name = "level"  value="ni" onChange={this.handleRadio} />
                    Not Important
                </label>
                
                  <div className="input">
                      <button className = "add_button">Add</button>
                  </div>
              </form>
            </div>
        )
    }
}   

export default CreateNote;
