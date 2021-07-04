import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../types';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(private noteService: NoteService) {}
  notes: Note[] = [];

  @Output() public getNotes = (): void => {
    this.notes = this.noteService.getNotes();
  };

  ngOnInit(): void {
    this.getNotes();
  }
}
