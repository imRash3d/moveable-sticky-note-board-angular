import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AllNotesComponent } from "./all-notes/all-notes.component";
import { AddNotesComponent } from "./add-notes/add-notes.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
@NgModule({
  declarations: [AppComponent, AllNotesComponent, AddNotesComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
