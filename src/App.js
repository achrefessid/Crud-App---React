import React, { Component } from 'react';
import CourseForm from './components/CourseForm' 
import CourseList from './components/CourseList' 

class App extends Component {
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "jQuery"},
    ],
    current : ''
  }
  //updateCourse
  updateCourse = (e) => {
    console.log(e.target.value)
  }
  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    console.log("Course Add")
  }

  render() {
  const {courses} = this.state;
  const courseList = courses.map( (course , index) => {
    return <CourseList details={course} key={index}/>
  })
  return (
    <section className="App">
    <h2>Add Course</h2>
    <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} />
    <ul>{courseList}</ul>
    </section>
    );
  }
}
export default App;




