const achievements_data =[
    {
        icon:'"bi bi-camera-video"',
        number:'349+',
        type:'courses'
    },
    {
        icon:'"bi bi-people"',
        number:'34989+',
        type:'students'
    },
    {
        icon:'"bi bi-award"',
        number:'23',
        type:'Awards'
    },
]

const achievements__cards = document.getElementsByClassName('achievements__cards')[0]

achievements__cards.innerHTML = achievements_data.map(achievement =>{
    let {icon, number, type}= achievement
    return`
    <article class="achievement__card">
    <span class="achievement__icon">
    <i class=${icon}></i>
    </span>
    <h3>${number}</h3>
    <p>${type}</p>
</article>
    `
}).join("")

const teams_data= [
    {
        img:"../images/tm1.jpg",
        name:'Shate Wales',
        role:"Recruiter",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
    {
        img:"../images/tm2.jpg",
        name:'Daisy Daisy',
        role:"Technical instructor",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
    {
        img:"../images/tm3.jpg",
        name:'Shate Wales',
        role:"tutor",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
    {
        img:"../images/tm4.jpg",
        name:'Shate Wales',
        role:"tutor",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
    {
        img:"../images/tm5.jpg",
        name:'Shate Wales',
        role:"tutor",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
    {
        img:"../images/tm6.jpg",
        name:'Shate Wales',
        role:"tutor",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
    {
        img:"../images/tm7.jpg",
        name:'Shate Wales',
        role:"tutor",
        instagram:"link",
        twitter:'link',
        linkedin:'link',
    },
]

const team__container = document.getElementsByClassName('team__container')[0]

team__container.innerHTML = teams_data.map( item=>{
    let {img, name, role,instagram, twitter, linkedin} = item;
    return`
    <article class="team__member">
    <div class="team__member-image">
      <img src= ${img} alt="team">
    </div>
    <div class="team__member-info">
      <h4>${name}</h4>
      <p>Expert tutor</p>
    </div>
    <div class="team__member-socials">
      <a href="instagram" target="_blank"><i class="bi bi-instagram"></i></a>
      <a href="twitter" target="_blank"><i class="bi bi-twitter"></i></a>
      <a href="linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
    </div>
  </article>
    `
}).join('')