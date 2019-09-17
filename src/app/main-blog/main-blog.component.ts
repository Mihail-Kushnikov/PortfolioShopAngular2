import { Component, OnInit } from '@angular/core';

const blogs = [
  {id:'bl1', blogName:'The Top 7 Spring ’16 Shows in London', posted: 'Admin', date:'01/09/2019', comment:'10', url: '1.jpg', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id nostrum alias asperiores in aliquid, maxime commodi. Illum accusamus enim voluptas commodi rem unde aliquam nam quisuscipit maxime quae perferendis obcaecati ad quod fuga dolorum, iusto omnis doloremque, dolores nisi optio culpa! Officia, voluptatum adipisci a nesciunt reiciendis et tempore at laborum vitae atque nemo dicta  repellat facere voluptatem.'},
  {id:'bl2', blogName:'How Saint Laurent Crystal Boots Became The Status Symbol Of 2018', posted: 'Admin', date:'30/08/2019', comment:'18', url: '2.jpg', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id nostrum alias asperiores in aliquid, maxime commodi. Illum accusamus enim voluptas commodi rem unde aliquam nam quisuscipit maxime quae perferendis obcaecati ad quod fuga dolorum, iusto omnis doloremque, dolores nisi optio culpa! Officia, voluptatum adipisci a nesciunt reiciendis et tempore at laborum vitae atque nemo dicta  repellat facere voluptatem.'},
  {id:'bl3', blogName:'The 25 Best Photos of Milan Fashion Week', posted: 'Admin', date:'28/08/2019', comment:'5', url: '3.jpg', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id nostrum alias asperiores in aliquid, maxime commodi. Illum accusamus enim voluptas commodi rem unde aliquam nam quisuscipit maxime quae perferendis obcaecati ad quod fuga dolorum, iusto omnis doloremque, dolores nisi optio culpa! Officia, voluptatum adipisci a nesciunt reiciendis et tempore at laborum vitae atque nemo dicta  repellat facere voluptatem.'}
]

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {

  blogs = blogs

  constructor() { }

  ngOnInit() {
  }

}
