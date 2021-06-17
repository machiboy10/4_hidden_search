const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


const expand = ()=>{
    search.classList.toggle('active');
    input.focus();
    
}




 btn.addEventListener('click', expand);


