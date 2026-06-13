const projects = [
  {
    name: "Bakery",
    url: "https://bakery-zeta.vercel.app/",
    img: "bakery",
  },
  {
    name: "MoGo",
    url: "https://mo-go-five.vercel.app/",
    img: "mogo",
  },
  {
    name: "Recipes",
    url: "https://recipes-inky-xi.vercel.app/",
    img: "recipes",
  },
  {
    name: "Avatar",
    url: "https://avatar-tan-five.vercel.app/",
    img: "avatar",
  },
  {
    name: "MedPet",
    url: "https://med-pat.vercel.app/",
    img: "medpet",
  },
  {
    name: "Miami",
    url: "https://miami-iota.vercel.app/",
    img: "miamiall",
  },
  {
    name: "WebStudio",
    url: "https://web-studio-blue.vercel.app/",
    img: "webstudio",
  },
  {
    name: "Wedding Invation",
    url: "https://wedding-invation-theta.vercel.app/",
    img: "weddinginvation",
  },
  {
    name: "Shiman clean",
    url: "https://www.shiman-clean.com.ua/",
    img: "shimancleanall",
  },
];

const container = document.querySelector(".content");
projects.forEach((project) => {
  const div = document.createElement("div");
  div.classList.add("project");
  div.innerHTML = `
        <img src="./photos/${project.img}.png" alt="${project.name}">
        <h2>${project.name}</h2>
        <a href="${project.url}">Перейти</a>
    `;
    container.appendChild(div);
});
