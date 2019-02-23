import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notesearchbody',
  templateUrl: './notesearchbody.component.html',
  styleUrls: ['./notesearchbody.component.scss']
})
export class NotesearchbodyComponent implements OnInit {
  public buttons = [{
    name: 'notifications',
    tooltip: 'notifications'
  },
  {
    name: 'color_lens',
    tooltip: 'change color'
  },
  {
    name: 'person_add',
    tooltip: 'collaborator'
  },{
    name: 'image',
    tooltip: 'image upload'
  },
  {
    name: 'archive',
    tooltip: 'archive'
  },
  {
    name: 'more_vert',
    tooltip: 'more'
  },
  {
    name: 'undo',
    tooltip: 'undo'
  },{
    name: 'redo',
    tooltip: 'redo'
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
