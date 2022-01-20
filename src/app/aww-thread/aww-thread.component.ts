import { Component, OnInit } from '@angular/core';
import { AwwService } from '../aww.service';
import { Observable } from 'rxjs';
import { Root } from 'aww';


@Component({
  selector: 'app-aww-thread',
  templateUrl: './aww-thread.component.html',
  styleUrls: ['./aww-thread.component.css'],
  providers: [AwwService]
})
export class AwwThreadComponent implements OnInit {

 threadData?: Root;

  constructor(private _aww: AwwService) { }

  GetAww(){
    this._aww.getThread().subscribe(
      (response:Root) => {
        this.threadData = response;
      }

    );
  }

  ngOnInit(): void{  this.GetAww();
      
  }

}
