import { FormGroup, NgForm } from '@angular/forms';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Project } from '@mdv-two/core-data'

@Component({
  selector: 'mdv-two-project-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentProject: Project;
  originalTitle;

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
      this.currentProject = Object.assign({}, value)
  }
  @Input() form: FormGroup;
  constructor() { }

  save(project) {
    this.saved.emit(project)
  }

  cancel() {
    this.cancelled.emit();
  }

  submitForm(formDirective: NgForm) {
    this.save(this.form.value);
    formDirective.resetForm();
  }
}
