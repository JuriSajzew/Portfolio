import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  iconImg: string[] = [
    'assets/img/shadows/angular.svg',
    'assets/img/shadows/typescript.svg',
    'assets/img/shadows/javaScript.svg',
    'assets/img/shadows/html.svg',
    'assets/img/shadows/firebase.svg',
    'assets/img/shadows/git.svg',
    'assets/img/shadows/css.svg',
    'assets/img/shadows/rest_api.svg',
    'assets/img/shadows/scrum.svg',
    'assets/img/shadows/material_design.svg'
  ];

  iconText: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material design'
  ]
}