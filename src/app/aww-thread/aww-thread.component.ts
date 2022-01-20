import { Component, OnInit } from '@angular/core';
import { AwwService } from '../aww.service';

@Component({
  selector: 'app-aww-thread',
  templateUrl: './aww-thread.component.html',
  styleUrls: ['./aww-thread.component.css']
})
export class AwwThreadComponent implements OnInit {

  public threadData = [];

  constructor(private _aww: AwwService) { }

  ngOnInit(): void { this._aww.getThread().subscribe(data => this.threadData = data);
  }

}
