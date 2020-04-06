import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Project } from '../../models/project'
import { first, filter, timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  private projects$: Subject<Project[]> = new Subject<Project[]>();

  public async getProjects(): Promise<Project[]> {
    return this.projects$.asObservable().pipe(
      filter((v) => v !== undefined),
      first(),
      timeout(10000),
    ).toPromise();
  }

  public async init(): Promise<void> {
    this.loadProjects();
  }

  private async loadProjects() {
    const url = `${environment.api}/projects`;
    const projects = await this.http.get<Project[]>(url).toPromise();
    console.log(projects);
    this.projects$.next(projects);
  }

}