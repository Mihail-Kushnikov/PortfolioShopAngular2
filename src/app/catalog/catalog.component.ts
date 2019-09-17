import { Component, OnInit } from '@angular/core';

const catalogs =[
  { id: 'c1', url: '1.jpg', alt: 'for-men', name: 'For Men`s'},
  { id: 'c2', url: '2.jpg', alt: 'for-kids', name: 'For Kid`s'},
  { id: 'c3', url: '3.jpg', alt: 'acsesuars', name: 'Acsesuars'},
  { id: 'c4', url: '4.jpg', alt: 'for-women', name: 'For Women`s'}
]

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  catalogs = catalogs

  constructor() { }

  ngOnInit() {
  }

}
