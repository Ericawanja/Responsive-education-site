const category_data = [
  {
    icon: ' "bi bi-currency-bitcoin" ',
    category: "Blockchain",
    desc: "Vero invidunt stet amet et nonumy labore takimata dolores sadipscing.",
  },
  {
    icon: ' "bi bi-image" ',
    category: "Graphic design",
    desc: "Vero invidunt stet amet et nonumy labore takimata dolores sadipscing.",
  },
  {
    icon:  ' "bi bi-cash-coin" ' ,
    category: "Finance",
    desc: "Vero invidunt stet amet et nonumy labore takimata dolores sadipscing.",
  },
  {
    icon: ' "bi bi-shop" ',
    category: "Marketing",
    desc: "Vero invidunt stet amet et nonumy labore takimata dolores sadipscing.",
  },
  {
    icon: '"bi bi-file-earmark-music-fill"',
    category: "Music",
    desc: "Vero invidunt stet amet et nonumy labore takimata dolores sadipscing.",
  },
  {
    icon: '"bi bi-briefcase"',
    category: "Business",
    desc: "Vero invidunt stet amet et nonumy labore takimata dolores sadipscing.",
  },
];

const categories__right =
  document.getElementsByClassName("categories__right")[0];
categories__right.innerHTML = category_data.map((item) => {
  let { icon, category, desc } = item;
  return `

    <article class="category">
                <span class="category__icon">
                <i class= ${icon}></i>
                </span>
                <h5> ${category} </h5>
                <p> ${desc} </p>
            </article>
    `
}).join("");


const courses_data= [
  {
    course_img:"../images/course1.jpg ",
    course_name:"Responsive website UI design",
    course_desc:" Eos dolor dolor labore diam sadipscing sadipscing magna. Duo dolor dolores justo no, et sed dolores diam dolore clita vero..",
    course_page: "course.html",
  },
  {
    course_img:"../images/course2.png  ",
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



const faqs_data = [
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
  {
    quiz:'How do I know the right course for me?',
    ans:'Amet dolore diam sed vero labore sit tempor takimata sed amet, est at et dolores sed ut erat dolor, dolores dolore et erat tempor sed eirmod no kasd vero. Magna.',
  },
]
const faqs__container =document.getElementsByClassName("faqs__container")[0];

faqs__container.innerHTML = faqs_data.map( faq=>{
  let {quiz, ans} = faq

  return `
  <article class="faq">
  <div class="faq__icon"><i class="bi bi-plus-lg"></i></div>
  <div class="question__answer">
    <h4>How do i know the right course for me</h4>
    <p>
      Amet dolor erat nonumy magna sed, sanctus elitr est sed lorem
      voluptua. Ipsum diam dolore rebum dolor tempor amet duo, lorem
      ipsum voluptua duo eirmod.
    </p>
  </div>
</article>
  `
}).join("")
const faqs =document.querySelectorAll('.faq');
//show and hide faqs

faqs.forEach(faq =>{
  faq.addEventListener('click', ()=>{
    faq.classList.toggle('open');
    
    //change icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === "bi bi-plus-lg"){
      icon.className = "bi bi-dash-lg"
    }else{
      icon.className = "bi bi-plus-lg"
    }
  })
})

//TESTIMONIALS DATA
const testimonials_data =[
  {
    avatar:'../images/student2.png',
    name:'ASige Juma',
    type:'student',
    testimony:'Magna dolores erat justo et no nonumy ea sed vero amet, ipsum vero diam lorem ipsum sanctus erat justo, eirmod ut lorem sit amet et.'
  },
  {
    avatar:'../images/student1.png',
    name:'Diana Ayi',
    type:'student',
    testimony:'Magna dolores erat justo et no nonumy ea sed vero amet, ipsum vero diam lorem ipsum sanctus erat justo, eirmod ut lorem sit amet et.'
  },
  {
    avatar:'../images/student2.png',
    name:'Diana Ayi',
    type:'student',
    testimony:'Magna dolores erat justo et no nonumy ea sed vero amet, ipsum vero diam lorem ipsum sanctus erat justo, eirmod ut lorem sit amet et.'
  },
  {
    avatar:'../images/student3.png',
    name:'John Doe',
    type:'Lecturer',
    testimony:'Magna dolores erat justo et no nonumy ea sed vero amet, ipsum vero diam lorem ipsum sanctus erat justo, eirmod ut lorem sit amet et.'
  },
  {
    avatar:'../images/student2.png',
    name:'David Ayi',
    type:'student',
    testimony:'Magna dolores erat justo et no nonumy ea sed vero amet, ipsum vero diam lorem ipsum sanctus erat justo, eirmod ut lorem sit amet et.'
  }
]

const testimonials__container = document.getElementsByClassName('testimonials__container')[0];

testimonials__container.innerHTML = testimonials_data.map( item=>{
  let { avatar, name, type, testimony} = item;

  return `
  <article class="testimonial">
  <div class="avatar">
    <img src= ${avatar} alt="student photo" />
  </div>
  <div class="testimonial__info">
    <h5>${name}</h5>
    <small>${type}</small>
  </div>
  <div class="testimonial__body">
    <p>
      ${testimony}
    </p>
  </div>
</article>
  `
}).join("")