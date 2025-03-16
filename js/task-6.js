// document.addEventListener('DOMContentLoaded', function () {

//             function getRandomHexColor() {
//                 return `#${Math.floor(Math.random() * 16777215)
//                     .toString(16)
//                     .padStart(6, 0)}`;
//             }

//             function createBoxes(amount) {
//                 const boxesContainer = document.getElementById('boxes');

//                 boxesContainer.innerHTML = '';

//                 for (let i = 0; i < amount; i++) {
//                     const box = document.createElement('div');
                    
//                     const size = 30 + i * 10;
//                     box.style.width = `${size}px`;
//                     box.style.height = `${size}px`;
                    

//                     box.style.backgroundColor = getRandomHexColor();

//                     boxesContainer.appendChild(box);

//                 }
//             }

//             document.querySelector('[data-create]').addEventListener('click', () => {
//                 const input = document.querySelector('input');
//                 const amount = parseInt(input.value.trim(), 10);


//                 if (amount < 1 || amount > 100 || isNaN(amount)) {
//                     return;
//                 }

//                 createBoxes(amount);

//                 input.value = '';
//             });


//             document.querySelector('[data-destroy]').addEventListener('click', () => {

//                 destroyBoxes();
//             });


//             function destroyBoxes() {
//                 const boxesContainer = document.getElementById('boxes');
//                 boxesContainer.innerHTML = ''; 
//             }
// });
        
function initTask() {
    function getRandomHexColor() {
                return `#${Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, 0)}`;
            }

            function createBoxes(amount) {
                const boxesContainer = document.getElementById('boxes');

                boxesContainer.innerHTML = '';

                for (let i = 0; i < amount; i++) {
                    const box = document.createElement('div');
                    
                    const size = 30 + i * 10;
                    box.style.width = `${size}px`;
                    box.style.height = `${size}px`;
                    

                    box.style.backgroundColor = getRandomHexColor();

                    boxesContainer.appendChild(box);

                }
            }

            document.querySelector('[data-create]').addEventListener('click', () => {
                const input = document.querySelector('input');
                const amount = parseInt(input.value.trim(), 10);


                if (amount < 1 || amount > 100 || isNaN(amount)) {
                    return;
                }

                createBoxes(amount);

                input.value = '';
            });


            document.querySelector('[data-destroy]').addEventListener('click', () => {

                destroyBoxes();
            });


            function destroyBoxes() {
                const boxesContainer = document.getElementById('boxes');
                boxesContainer.innerHTML = ''; 
            }
}