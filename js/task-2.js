function initTask() {
  const gallery = document.querySelector(".gallery");

  // Check if the gallery element exists
  if (!gallery) {
    console.error("Gallery element not found");
    return;
  }

  gallery.style.display = "flex";
  gallery.style.gap = "10px";

  gallery.innerHTML = images.map(image => `
    <li style="list-style: none;">
      <img src="${image.url}" alt="${image.alt}" style="width: 300px; height: auto; display: block; border-radius: 8px;">
    </li>
  `).join("");
}

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];



