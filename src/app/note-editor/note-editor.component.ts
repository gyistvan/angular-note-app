import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {
  constructor(public noteService: NoteService, private route: ActivatedRoute) {}

  selectedNote: Note | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      alert(id);
      this.selectedNote = this.noteService.getNote(id);
    }
  }
}
