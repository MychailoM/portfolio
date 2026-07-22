const devices = {
  mobile: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="6" width="28" height="52" rx="6"/>
    <rect x="22" y="12" width="20" height="34" rx="2"/>
    <circle cx="32" cy="52" r="2"/>
    <line x1="28" y1="9" x2="36" y2="9"/>
</svg>`,
  tablet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="10" y="6" width="44" height="52" rx="5"/>
    <rect x="15" y="11" width="34" height="42" rx="2"/>
    <circle cx="32" cy="56" r="1.8"/>
    <circle cx="32" cy="8.8" r="1"/>
</svg>`,
  desktop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="10" width="52" height="34" rx="3"/>
    <rect x="10" y="14" width="44" height="26" rx="1"/>
    <line x1="32" y1="44" x2="32" y2="52"/>
    <path d="M22 58h20"/>
    <path d="M26 52h12"/>
</svg>`,
}

const projects = [
  {
    name: "Bakery",
    url: "https://bakery-zeta.vercel.app/",
    img: "bakery",
    device: ['desktop'],
  },
  {
    name: "MoGo",
    url: "https://mo-go-five.vercel.app/",
    img: "mogo",
    device: ['desktop'],
  },
  {
    name: "Recipes",
    url: "https://recipes-inky-xi.vercel.app/",
    img: "recipes",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "Avatar",
    url: "https://avatar-tan-five.vercel.app/",
    img: "avatar",
    device: ['desktop'],
  },
  {
    name: "MedPet",
    url: "https://med-pat.vercel.app/",
    img: "medpet",
    device: ['desktop'],
  },
  {
    name: "Miami",
    url: "https://miami-iota.vercel.app/",
    img: "miamiall",
    device: ['desktop'],
  },
  {
    name: "WebStudio",
    url: "https://web-studio-scss-seven.vercel.app/",
    img: "webstudio",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "Wedding Invation",
    url: "https://wedding-invation-theta.vercel.app/",
    img: "weddinginvation",
    device: ['desktop'],
  },
  {
    name: "Shiman clean",
    url: "https://www.shiman-clean.com.ua/",
    img: "shimancleanall",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "High peaks",
    url: "https://mountain-flame.vercel.app/",
    img: "highPeaks",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "MNTN",
    url: "https://mntm-murex.vercel.app/",
    img: "MNTN",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "Coffee Time",
    url: "https://coffe-time-five.vercel.app/",
    img: "coffee-time",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "Cars",
    url: "https://cars-beige-delta.vercel.app/",
    img: "cars",
    device: ['tablet', 'desktop'],
  },
  {
    name: "Lush Garden",
    url: "https://lush-garden-five.vercel.app/",
    img: "lushGarden",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "Interno",
    url: "https://interno-ivory.vercel.app/",
    img: "interno",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "FEKRA",
    url: "https://fekra-rose.vercel.app/",
    img: "fekra",
    device: ['desktop'],
  },
  {
    name: "Inteo",
    url: "https://inteo-eta.vercel.app/",
    img: "inteo",
    device: ['mobile', 'tablet', 'desktop'],
  },
  {
    name: "Luxury Restaurant",
    url: "https://luxuty-restaurant.vercel.app/",
    img: "luxury-restaurant",
    device: ['mobile', 'tablet', 'desktop'],
  },
];

const container = document.querySelector(".content");
projects.forEach((project) => {
  const div = document.createElement("div");
  div.classList.add("project");
  div.innerHTML = `
    <img src="./photos/${project.img}.png" alt="${project.name}">

    <div class="project__info">
        <h2>${project.name}</h2>

        <ul class="project__devices">
            ${project.device
      .map(screen => `<li>${devices[screen]}</li>`)
      .join("")}
        </ul>

        <a href="${project.url}" target="_blank">
            Перейти
        </a>
    </div>
`;
  container.appendChild(div);
});
