import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  searchStr : string = '';

  services = [
    {
      name: 'Регистрация по месту жительства',
      shortName: 'Прописка',
      description: 'Прописывать можете сами или не можете',
      url: '',
    },
    {
      name: 'ЭЦП',
      shortName: 'Выпуск ЭЦП',
      description: 'Прописывать можете сами или не можете',
      url: 'https://egov.kz/cms/ru/services/pass_onlineecp'
    },
    {
      name: 'Справка о несудимости',
      shortName: 'Несудимость, справка',
      description: 'Прописывать можете сами или не можете',
      url: 'https://egov.kz/cms/ru/services/e_004'
    },
    {
      name: 'Пенсионные отчисления',
      shortName: 'отчисления, работа',
      url: 'https://egov.kz/cms/ru/services/pass160_mtszn'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
