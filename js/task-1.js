// document.addEventListener("DOMContentLoaded", () => {
//   const categoriesList = document.querySelector("#categories");

//   const categoryItems = categoriesList.querySelectorAll(".item");
//   console.log(`Number of categories: ${categoryItems.length}`);

//   categoryItems.forEach(item => {
//     const title = item.querySelector("h2").textContent;
//     const itemCount = item.querySelectorAll("ul li").length;
//     console.log(`Category: ${title}, Elements: ${itemCount}`);
//   });
// });

function initTask() {
    const categoriesList = document.querySelector("#categories");

    const categoryItems = categoriesList.querySelectorAll(".item");
    console.log(`Number of categories: ${categoryItems.length}`);

    categoryItems.forEach(item => {
        const title = item.querySelector("h2").textContent;
        const itemCount = item.querySelectorAll("ul li").length;
        console.log(`Category: ${title}, Elements: ${itemCount}`);
    });
}
