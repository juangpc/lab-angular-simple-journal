import { Component, OnInit,
         Output,EventEmitter } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';
import { journalEntry } from '../../interfaces/journalEntry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  title: string;
  content: string;

  @Output() entryAdded = new EventEmitter<journalEntry>();

  constructor(public api: ApiConnectService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.api.addJournalEntry(form)
      .subscribe(res => this.entryAdded.emit(res));
    
  }


}
