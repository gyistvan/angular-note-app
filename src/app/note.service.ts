import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Note } from './types';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(loggerService: LoggerService) {this.loggerService = loggerService}
  
  loggerService: LoggerService

  getNewId(): string{
     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  }

  getNotes(): Note[] {
    let notes = JSON.parse(localStorage.getItem("notes") ?? "[]");
    this.loggerService.createNewLog("logs fetched");
    return notes;
  }

  addNote(title: string, body: string):void {
    let note: Note = {
      id: this.getNewId(),
      title, body,
      createdAt: new Date()
    }
    let notes = JSON.parse(localStorage.getItem("notes") ?? "[]")
    notes.push(note);
    this.loggerService.createNewLog(`new note has been added with title: ${title}`)
    localStorage.setItem("notes", JSON.stringify(notes))
  }

  removeNote(id: string): void {
    let notes = JSON.parse(localStorage.getItem("notes") ?? "[]")
    notes = notes.filter((note:Note) => note.id !== id)
    this.loggerService.createNewLog(`log has been deleted with id: ${id}`)
    localStorage.setItem("notes", JSON.stringify(notes))
  }
}
