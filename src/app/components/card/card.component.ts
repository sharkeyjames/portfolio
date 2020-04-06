import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() type: string;
  @Input() project: Project;

  public date: Date = new Date(2018, 2);

  ngOnInit() {
  }

}
