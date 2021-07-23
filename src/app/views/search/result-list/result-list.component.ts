import { Component, OnInit } from '@angular/core';
import { ItemList } from 'src/app/models/ItemList';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  public results: Array<ItemList> = []

  constructor() { }

  ngOnInit(): void {
  }

}
