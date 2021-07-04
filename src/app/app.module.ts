import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { DisplayLogsComponent } from './display-logs/display-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteEditorComponent,
    AddNoteComponent,
    DisplayNoteComponent,
    DisplayLogsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
