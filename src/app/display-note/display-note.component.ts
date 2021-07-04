import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../types';
import * as moment from 'moment';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  @Input() note!: Note;
  @Input() index!: number;
  @Input() getNotes!: () => void;

  ngOnInit(): void {}

  onRemove(id: string): void {
    if (confirm('Biztosan törölni akarod?')) {
      this.noteService.removeNote(id);
      this.getNotes();
    }
  }

  getDateCreatedAt(): string {
    return moment(this.note.createdAt).format('YYYY-MM-DD HH:mm');
  }
}
