
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
let select = document.querySelector(".breeds")
let img = document.querySelector('.dog')
const spin = document.querySelector(".spin")
let breed
fetch(BREEDS_URL)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        const breedsObject = data.message ; 
        const breedsArray = Object.keys(breedsObject)
        
        for(let i=-1 ; i<breedsArray.length; i++){
            const option = document.createElement('option');
            if( i == -1 ){
            option.innerText = "select";
            }else{
            option.value = breedsArray[i]; 
            option.innerText = breedsArray[i]; 
            }
            select.appendChild(option);
        }
    })
  

select.addEventListener('change', event =>{
    breed = event.target.value ;
    spin.classList.add('show')
    img.classList.add('hide')

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response=>{
            return response.json();
        })
        .then(data=>{   
            console.log(data.message)
            img.src = data.message
            img.alt = `${event.target.value} Dog`
         }).then(()=>{
            spin.classList.remove('show')
            img.classList.remove('hide')
        })   
})


