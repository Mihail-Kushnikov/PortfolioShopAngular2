import { Component, OnInit } from '@angular/core';

const activs = [
  
  {activ:false, url:'5.jpg', id: 's1' },
  // {activ:false, url:'1.jpg', id: 's2'}
]

@Component({
  selector: 'app-bg-galerey',
  templateUrl: './bg-galerey.component.html',
  styleUrls: ['./bg-galerey.component.css'],
  
})
export class BgGalereyComponent implements OnInit {
  toggle(active:any){
    if (activs.find(item => item.id == 's1')){
   activs.pop()
   activs.push({activ:false, url:'1.jpg', id: 's2'})
    }else{
      activs.pop()
      activs.push({activ:false, url:'5.jpg', id: 's1' })
    }
  }

  

  activs = activs
  constructor() {}

  ngOnInit() {
  }

}
