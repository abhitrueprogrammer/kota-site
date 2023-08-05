let darkmode = 0;
document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('#dark-mode').addEventListener('click', function(){
        let body = document.querySelector('body')
        let navbar = document.getElementById('navbar')
        let boxes = document.querySelectorAll('.box');
        let space = document.querySelectorAll('.space');
        let borderBox = document.querySelector('.border-box');
        navbar.classList.toggle('bg-light');
        navbar.classList.toggle('bg-dark');
        navbar.classList.toggle('navbar-light');
        navbar.classList.toggle('navbar-dark');
        for (let i = 0; i < boxes.length; i++)
            {
                boxes[i].classList.toggle('light-box');
                boxes[i].classList.toggle('dark-box');
            }
        for (let i = 0; i < space.length; i++)
        {
            space[i].classList.toggle('whitespace');
            space[i].classList.toggle('darkspace');
        }
        if (darkmode == 0)
        {
            body = document.querySelector('body');
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            darkmode = 1;
            borderBox.style.borderColor = 'white';  //add for loop if more than 1 box

        }
        else
        {
            body = document.querySelector('body');
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            darkmode = 0;
            borderBox.style.borderColor = 'black';  //add for loop if more than 1 box

        }

    })
})