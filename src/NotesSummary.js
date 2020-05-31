import React, { Component } from 'react'; 
import './noteSummary.css';


const NotesSummary = (props) => {
    console.log(props);
    return(
        <div className = "column">  
        <div className = 'row'>
        <div className='very_imp container'><div className= "font vi_line">Damm Important</div></div>
        {props.notes.filter( note => note.level === 'vi').map(vi_notes => {
                return(
               <div className="card card_vi">
                    <span className="card-title">{vi_notes.title}</span>
                    <p className="card-content">{vi_notes.content}</p>
                    <button class="btn delete" onClick = {() => props.deleteNote(vi_notes.id)}><i class="fa fa-trash"></i></button>
               </div>
                )   
            })}  
        </div>
             
        <div className='row'>
        <div className='imp container'><p className= "font imp_line">Important</p></div>
        {props.notes.filter( note => note.level === 'i').map(vi_notes => {
                return(
                <div className="card card_i">
               <span className="card-title">{vi_notes.title}</span>
               <p className="card-content">{vi_notes.content}</p>
               <button class="btn delete" onClick = {() => props.deleteNote(vi_notes.id)}><i class="fa fa-trash"></i></button>

               </div>
                )   
            })}  
        </div>
        
        <div className='row'>
        <div className='ok container'><div className= "font ok_line">Ok..Okk..</div></div>
        {props.notes.filter( note => note.level === 'm').map(vi_notes => {
                return(
                <div className="card  card_m">
               <span className="card-title">{vi_notes.title}</span>
               <p className="card-content">{vi_notes.content}</p>
               <button class="btn delete" onClick = {() => props.deleteNote(vi_notes.id)}><i class="fa fa-trash"></i></button>

               </div>
                )   
            })}  
        </div>

        <div className='row'>
        <div className='not_imp container'><div className= "font ni_line">Not Important</div></div>
        {props.notes.filter( note => note.level === 'ni').map(vi_notes => {
                return(
                <div className="card card_ni">
               <span className="card-title">{vi_notes.title}</span>
               <p className="card-content">{vi_notes.content}</p>
               <button class="btn delete" onClick = {() => props.deleteNote(vi_notes.id)}><i class="fa fa-trash"></i></button>

               </div>
                )   
            })}   
        </div>  
                   
    </div>
    )
}
export default NotesSummary