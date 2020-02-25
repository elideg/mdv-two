import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
model = 'projects3'

  constructor(private hc: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.hc.get(this.getUrl());
  }

  create(project: Project) {
    return this.hc.post(this.getUrl(), project);
  }

  delete(project: Project) {
    return this.hc.delete(this.getUrlForId(project.id));
  }

  update(project: Project) {
    return this.hc.put(this.getUrlForId(project.id), project);
  }
}
