const data = [
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
categories__right.innerHTML = data.map((item) => {
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
