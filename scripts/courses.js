const courses_data= [
    {
      course_img:"../images/course1.jpg ",
      course_name:"Responsive website UI design",
      course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
      course_page: "course.html",
    },
    {
      course_img:"../images/course2.jpg  ",
      course_name:"Responsive website UI design",
      course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
      course_page: "course.html",
    },
    {
      course_img:"../images/course3.jpg ",
      course_name:"Responsive website UI design",
      course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
      course_page: "course.html",
    },
    {
        course_img:"../images/course4.jpg ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course5.jpg  ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course6.jpg ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course7.jpg ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course8.jpg  ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course9.jpg ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course10.jpg ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course11.jpg  ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
      {
        course_img:"../images/course12.jpg ",
        course_name:"Responsive website UI design",
        course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
        course_page: "course.html",
      },
  ]
  
  const courses__container =document.getElementsByClassName("courses__container")[0];
  
  courses__container.innerHTML = courses_data.map( course=>{
    let {course_img, course_name, course_desc, course_page} = course;
    return`
    <article class="course">
            <div class="course__image">
              <img src=${course_img} alt="Course Image" />
            </div>
            <div class="course__info">
              <h4>${course_name}</h4>
              <p>
                ${course_desc}
              </p>
              <a href=${course_page} class="btn btn-primary">Learn more</a>
            </div>
          </article>
    `
  }).join("")