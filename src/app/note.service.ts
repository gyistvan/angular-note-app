import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Note } from './types';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(loggerService: LoggerService) {this.loggerService = loggerService}
  
  loggerService: LoggerService
  notes: Note[] = JSON.parse(localStorage.getItem("notes") ?? "[]");


  getNewId(): string{
     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  }

  getNotes = (): Note[] => this.notes

  getNote = (id:string): Note | undefined => this.notes.find((note: Note) => note.id === id)

  updateNotes():void  {
    localStorage.setItem("notes", JSON.stringify(this.notes))
  }

  addNote(title: string, body: string):void {
    let note: Note = {
      id: this.getNewId(),
      title, body,
      createdAt: new Date()
    }
    this.notes.push(note);
    this.loggerService.createNewLog(`new note has been added with title: ${title}`)
    this.updateNotes()
  }

  removeNote(id: string): void {
    this.notes = this.notes.filter((note:Note) => note.id !== id)
    this.loggerService.createNewLog(`a log has been deleted with id: ${id}`)
    this.updateNotes()
  }
}
