import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from '../core/service/note/note.service';
import { Note } from '../core/model/note/note';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-mainnote',
  templateUrl: './mainnote.component.html',
  styleUrls: ['./mainnote.component.css']
})
export class MainnoteComponent implements OnInit {



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
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
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



  deleteNote(note)
  {
     var newNote = {
      "description": note.description,
      "inTrash": true,
      "noteId": note.noteId,
      "pinned": note.pinned,
      "title": note.title,
      "archive": note.archive
    }
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open("Sent to Trash ", "OK", {
        duration: 3000,
      });
    })
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
}
