import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';
import { ActivatedRoute } from '@angular/router';
import { journalEntry } from '../../interfaces/journalEntry';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {

  id: string;
  jEntry: journalEntry = {
    title: 'bla',
    content: 'blu',
    date: new Date()
  }

  constructor(public route: ActivatedRoute, public api: ApiConnectService) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.api.getJournalEntry(this.id)
      .subscribe(res => this.jEntry = res);
  }

}
