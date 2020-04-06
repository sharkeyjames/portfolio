import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project/project.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private service: ProjectService) { }

  async ngOnInit(): Promise<void> {
    this.service.init();
    this.projects = await this.service.getProjects();
  }

}
