import { Component, OnInit } from '@angular/core';


  const wears = [
    {
    sales: false,
    atitle: 'Подарочный сертификат',
    htitle: 'Туфли летние',
    hsubtitle: 'Rieker Men',
    image: '13.jpg',
    mtitle: 'Материал верха: натуральнаякожа',
    msubtitle: 'Ограниченная серия',
    url: '#',
    price: 148
    },
    {
    sales: false,
    atitle: 'Подарочный сертификат',
    htitle: 'Сумка мужская',
    hsubtitle: 'Kari',
    image: '7.jpg',
    mtitle: 'Материал: натуральная кожа',
    msubtitle: 'Ограниченная серия',
    url: '#',
    price: 77
  },
  {
    sales: true,
    atitle: 'Распродажа',
    htitle: 'Куртка мужская',
    hsubtitle: 'ALPEX',
    image: '8.jpg',
    mtitle: 'Мембрана с двойнымпокрытием',
    msubtitle: 'КАЧЕСТВО ALPEX',
    url: 'product',
    price: 241
  },
    {
      sales: false,
      atitle: 'Подарочный сертификат',
      htitle: 'Пальто мужское',
      hsubtitle: 'BAZIONI',
      image: '1.jpg',
      mtitle: 'Пальто классическое',
      msubtitle: 'химическая чисткаразрешена',
      url: '#',
      price: 439.02
      },
     {
      sales: false,
      atitle: 'Подарочный сертификат',
      htitle: 'Пальто мужское',
      hsubtitle: 'BAZIONI',
      image: '2.jpg',
      mtitle: 'Пальто классическое',
      msubtitle: 'химическая чисткаразрешена',
      url: '#',
      price: 439.02
      },
       {
      sales: false,
      atitle: 'Подарочный сертификат',
      htitle: 'Пальто мужское',
      hsubtitle: 'BAZIONI',
      image: '3.jpg',
      mtitle: 'Пальто классическое',
      msubtitle: 'химическая чисткаразрешена',
      url: '#',
      price: 439.02
      },
       {
      sales: false,
      atitle: 'Подарочный сертификат',
      htitle: 'Пальто мужское',
      hsubtitle: 'BAZIONI',
      image: '4.jpg',
      mtitle: 'Пальто классическое',
      msubtitle: 'химическая чисткаразрешена',
      url: '#',
      price: 439.02
      },
       {
      sales: false,
      atitle: 'Подарочный сертификат',
      htitle: 'Пальто мужское',
      hsubtitle: 'BAZIONI',
      image: '5.jpg',
      mtitle: 'Пальто классическое',
      msubtitle: 'химическая чисткаразрешена',
      url: '#',
      price: 439.02
      },
      {
      sales: false,
      atitle: 'Подарочный сертификат',
      htitle: 'Пальто мужское',
      hsubtitle: 'BAZIONI',
      image: '6.jpg',
      mtitle: 'Пальто классическое',
      msubtitle: 'химическая чисткаразрешена',
      url: '#',
      price: 439.02
      },
  ]

  const showElement = []
for (let i=0; i<wears.length; i++) {
showElement.push(false) }

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.css']
})
export class MainShopComponent implements OnInit {

  wears = wears

  showElement=showElement

  
  toggleElement(curelement: any) {
    showElement[curelement] =
    !showElement[curelement]
    
    }
  constructor() { }

  ngOnInit() {
  }

}
