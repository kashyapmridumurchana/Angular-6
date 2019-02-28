import { Component, OnInit } from '@angular/core';
import { NoteService } from '../core/service/note/note.service';
import { Note } from '../core/model/note/note';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog,MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-mainnote',
  templateUrl: './mainnote.component.html',
  styleUrls: ['./mainnote.component.css']
})
export class MainnoteComponent implements OnInit {

  

  public mytoken = localStorage.getItem('token')
  public notes: Note[] = [];
  constructor(private noteService: NoteService,private dialog:MatDialog,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getNotes();
  }
  
  getNotes()
   {
    console.log("token", this.mytoken);
    this.noteService.retrieveNotes(this.mytoken).subscribe(newNote => {
      this.notes = newNote;
    }
    )
  }
  openDialog(note): void
  {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
          width: '550px',
          data : note    
        });
          dialogRef.afterClosed().subscribe(result => {
            this.noteService.updateNote(note).subscribe(response =>{
              this.snackBar.open("Note updated successfully", "OK", {
                duration: 3000,
              });
            })
    console.log('The dialog was closed');
  });
  }

  deleteNote(note) {
    console.log(note.noteId);
    this.noteService.deleteNote(note.noteId).subscribe(response => {
      this.snackBar.open("deleted Note", "OK", { duration: 2000 });
    }), error => {
      this.snackBar.open("error", "error to retrieve notes", { duration: 2000 });
    }
}

}
