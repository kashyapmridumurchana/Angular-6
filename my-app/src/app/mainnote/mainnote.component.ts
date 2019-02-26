import { Component, OnInit } from '@angular/core';
import { NoteService } from '../core/service/note/note.service';
import { Note } from '../core/model/note/note';

@Component({
  selector: 'app-mainnote',
  templateUrl: './mainnote.component.html',
  styleUrls: ['./mainnote.component.css']
})
export class MainnoteComponent implements OnInit {

  public mytoken = localStorage.getItem('token')
  public notes: Note[] = [];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }
  
  getNotes() {
    console.log("token", this.mytoken);
    this.noteService.retrieveNotes(this.mytoken).subscribe(newNote => {
      this.notes = newNote;
    }
    )
  }
}
