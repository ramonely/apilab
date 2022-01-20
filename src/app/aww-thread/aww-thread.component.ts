import { Component, OnInit } from '@angular/core';
import { AwwService } from '../aww.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-aww-thread',
  templateUrl: './aww-thread.component.html',
  styleUrls: ['./aww-thread.component.css'],
  providers: [AwwService]
})
export class AwwThreadComponent implements OnInit {

  public threadData: any;

  constructor(private _aww: AwwService) { }

  GetAww(){
    this._aww.getThread().subscribe(
      (response:any) => {
        let postjson = JSON.parse(response)
        this.threadData = postjson;
      }
    );
  }

  ngOnInit(): void{  
      
  }

}
