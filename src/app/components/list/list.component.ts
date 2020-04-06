import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() projects: Project[];

  ngOnInit() {
  }

  public getCardType(index: number): string {
    return index === 0 ? (index === this.projects.length - 1 ? 'first last' : 'first') : index === this.projects.length - 1 ? 'last' : '';
  }

}
