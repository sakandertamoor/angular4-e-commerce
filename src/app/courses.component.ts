import {Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component ({
    selector : 'courses',
   // template : '<h2>{{ "Title:" + getTitle() }}</h2>' //<courses>
  /*  template : `
    <div (click)="onDivClick()">
    <button (click)="onSave($event)" > Save </button>
    </div>

    `

    template : `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"  />
    `


    template :`
    {{course.title | uppercase }} <br/>
    {{course.rating | number:'2.1-1'}} <br/>
    {{course.student | number}} <br/>
    {{course.price | currency:'PK':true:'3.2-2' }} <br/>
    {{course.releaseDate | date:'shortDate'}}
    `*/

    template: `{{ text | summary: 10}}`

})

export class CoursesComponent{
   

    text=`Lorem ipsum dolor sit amet, eu quidam epicuri persecuti ius, nec ne legere suscipiantur consequuntur. Et putant numquam pro, iudico sensibus mnesarchum eu nec. Sit nisl appareat te, ex quo pertinax delicata contentiones, vis vero lucilius intellegam ex. Eu est deleniti accusamus delicatissimi, est erant viris ne. Ut vocent laboramus est, facilis deterruisset conclusionemque cu ius, ea his zril definiebas.`;


   /*
    course = {
        title : "Sakander Tamoor Angular Developer",
        rating: 4.6623,
        student:1232,
        price: 109.23,
        releaseDate: new Date(2018, 6,24)
    }
    title = "List of courses";
    imageUrl ="https://loremflickr.com/cache/resized/4315_35271161274_4963552141_320_240_nofilter.jpg";
     courses;
     isActive = true;

     email="asd@example.com";

     constructor(service: CoursesService){
         this.courses = service.getCourses();
     }
     onSave($event){
         $event.stopPropagation();
         console.log("Button is clicked",$event);
     }
     onDivClick(){
         console.log("Div was Clicked");
     }
     onKeyUp(){
         console.log (this.email);
     }*/



}