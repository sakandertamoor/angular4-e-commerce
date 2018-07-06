import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  courses;
  

  loadCourses(){
    this.courses = [

      { id:1, name: 'course1'},
      { id:2, name: 'course2'},
      { id:3, name: 'course3'},
      { id:4, name: 'course4'}
    ]
  }

  trackCourse(index, course){
    return course ? course.id :undefined;
  }

  onAdd(){
   // this.courses.push({ id:5, name: 'course5'});
  }
  onChange(course){
   // let index = this.courses.indexOf(course);
  //  this.courses.splice(index, 1);
  }
  viewMode ='map';

  //courses = [1,2];

  post ={
    title : "Title",
    isFavorite: true
  }

  tweet ={
    body:'...',
    likesCount:10,
    isLiked: true
  }

 // title = 'Sakander app';
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed: ",eventArgs);
  }
}
