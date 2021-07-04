import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  @Input() public getNotes?: () => void;

  title = '';
  body = '';

  addNote(): void {
    this.noteService.addNote(this.title, this.body);
    if (this.getNotes) {
      this.getNotes();
    }
  }

  ngOnInit(): void {}
}
