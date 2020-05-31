import React, {Component} from 'react';
import NotesSummary from './NotesSummary';
import CreateNote from './CreateNote';
import './App.css';

class Dashboard extends Component{
    state = {
        notes: [
          {id: 1, title: 'Thought' ,content: 'Cooking talent', level : 'vi', date: '02-04-2020'},//vi = very_imp
          {id: 2, title: 'Market' , content: 'Buy Groceries',  level : 'i', date: '02-04-2020'},//i = imp
          {id: 3, title: 'Submit' , content: 'Fill form',  level : 'm', date: '02-04-2020'},// m =medium
          {id: 4, title: 'Talk' , content: 'Call Kukal',  level : 'ni', date: '02-04-2020'},// ni =not_imp
          {id: 5, title: 'Doctor' , content: 'For headache',  level : 'i', date: '02-04-2020'},
        ]
      }
     
   
    addNote = (note) => {
        note.id = Math.random();
        let notes = [...this.state.notes, note];
        this.setState({
          notes
        });
    }

    deleteNote = (Id) => {
        const notes = this.state.notes.filter((note, id) => {
            return note.id !== Id;
        });
        this.setState({notes})
    }
   
    render(){
        return (
            <div className= "login">
                <div className = "row">
                    <div className= "column notes">
                        <NotesSummary notes = {this.state.notes} deleteNote = {this.deleteNote}/>
                    </div>
                    <div className = "column">
                        <CreateNote addNote= {this.addNote.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;