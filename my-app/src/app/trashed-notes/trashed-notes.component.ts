import { Component, OnInit } from '@angular/core';
import { NoteService } from '../core/service/note/note.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Note } from '../core/model/note/note';

@Component({
  selector: 'app-trashed-notes',
  templateUrl: './trashed-notes.component.html',
  styleUrls: ['./trashed-notes.component.css']
})
export class TrashedNotesComponent implements OnInit {
 
  public mytoken = localStorage.getItem('token')
  public notes: Note[] = [];


  constructor(private noteService: NoteService, private dialog: MatDialog, private snackBar: MatSnackBar ) { }
  

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

  openDialog(note): void {
    const dialogRef = this.dialog.open(TrashedNotesComponent, {
      width: '550px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      this.noteService.updateNote(note).subscribe(response => {
        this.snackBar.open("Note updated successfully", "OK", {
          duration: 3000,
        });
      })
      console.log('The dialog was closed');
    });
  }


  sendToArchive(note) {
    var newNote = {
    
      "description": note.description,
      "inTrash": note.inTrash,
      "noteId": note.noteId,
      "pinned": note.pinned,
      "title": note.title,
      "archive": true
    }
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open("Sent to Archive ", "OK", {
        duration: 3000,
      });
    })
  }
  deleteNoteForever(note) {
    console.log(note.noteId);
    this.noteService.deleteNote(note.noteId).subscribe(response => {
      this.snackBar.open("deleted Note forever", "OK", { duration: 2000 });
    }), error => {
      this.snackBar.open("error", "error to retrieve notes", { duration: 2000 });
    }
  }


  restore(note)
  {
    var newNote = {
      "archive": note.archive,
      "description": note.description,
      "inTrash": false,
      "noteId": note.noteId,
      "pinned": note.pinned,
      "title": note.title
    }
    console.log(newNote);
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open(" Restored ", "OK", {
        duration: 3000,
      });
    })
  }
  }
