import { ProjectService, Project } from '@mdv-two/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-two-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  form: FormGroup;
  selectedProject: Project;
  projects$;


  constructor(
    private projectsService: ProjectService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
    this.resetProject();
    this.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.form.patchValue(project)
  }

  resetProject() {
    const emptyProject = {
      id: null,
      title: '',
      details: ''
    }
    this.selectProject(emptyProject)
  }

  cancel() {
    this.resetProject();
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  createProject(project: Project) {
    this.projectsService.create(project).subscribe((res) => {
      this.resetProject();
      this.getProjects();
    })
  }

  updateProject(project: Project) {
    this.projectsService.update(project).subscribe((res) => {
      this.resetProject();
      this.getProjects();
    })
  }

  deleteProject(project: Project) {
    this.projectsService.delete(project).subscribe((res) => {
      this.resetProject();
      this.getProjects();
    })
  }

  saveProject(project: Project) {
    if(project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  initForm() {
    this.form = this.fb.group ({
      id: [''],
      title: [''],
      details: ['']
    });
  }
}
