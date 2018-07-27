import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';
import { journalEntry } from '../../interfaces/journalEntry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journals: Array<journalEntry>;

  constructor(public api: ApiConnectService) { }

  ngOnInit() {
    this.api.getJournals().subscribe(res =>
      this.journals = res
    );
  }

  refreshJournalList() {
    this.api.getJournals().subscribe(res =>
      this.journals = res
    );
  }
}
