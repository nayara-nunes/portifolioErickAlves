


/*MENU SANDWICHE */
const $menu = document.querySelectorAll('#menu')[0];

const $nav = document.querySelectorAll('nav')[0];
let isOpen = false;
$menu.addEventListener('click',toggleMenu);
function toggleMenu(){
  if(!isOpen){
    $nav.classList.add('menu-open');
    $menu.firstElementChild.classList.add('close-btn')
    isOpen =true;
  }else {
        $nav.classList.remove('menu-open');
        $menu.firstElementChild.classList.remove('close-btn')
        isOpen = false;
    }
}





let link = document.querySelector('.link');
let pageLateral = document.querySelector('.lateral');
let pageOcupada = document.querySelector('.secao1');
let image = document.querySelector('.imagem');
let text = document.querySelector('.text');
let background = document.querySelector('.background');


const images = document.querySelectorAll('.gallery .image span img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const modalTxt = document.querySelector('.modalTxt');
const close = document.querySelector('.close');




//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}
/*
//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}

*/

// modal 


images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add('appear');
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });

    });
});

function abrePage() {
    if (pageLateral.classList.contains('active-page')) {
        pageLateral.classList.remove('active-page');
        pageOcupada.classList.remove('secao1-active');
        image.classList.remove('imagem-active');
        text.classList.remove('text-active');
        background.classList.remove('background-active');

    } else {
        pageLateral.classList.add('active-page');
        pageOcupada.classList.add('secao1-active');
        image.classList.add('imagem-active');
        text.classList.add('text-active');
        background.classList.add('background-active');
    }
}

link.addEventListener('click', abrePage);




/*

const data = Array.from({length:10}).map((_, i) => `Item ${(i + 1)}`)

  
 
let perPage = 5
const state = {
  page:1,
  perPage,
  totalPage:Math.ceil(data.lenght / perPage),
  maxVisibleButtons:3,
  height: 100
}

const html ={
  get(element){
    return document.querySelector();
  }
}
const list = {
  create(item){
    console.log(item)
    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML = item
    html.get('.list').appendChild(div)


  },
  update(){
    html.get('.list').innerHTML = ""
    let page = state.page - 1 
    let start = page * state.perPage
    let end = start + state.perPage
    const paginatedItems = data.slice(start, end)

    paginatedItems.forEach((item)=>{

    })

  
  }

}

const controls = {
  next(){
    state.page++

    const lastPage = state.page > state.totalPage

    if(lastPage){
     state.page--
     
    }
  },
  prev() {
    state.page--
     if(state.page < 1){
       state.page++
     }
  },
  goTo(page){
    if(page < 1){
      page = 1

    }


    state.page = +page
    if(page > state.totalPage){
      state.page = state.totalPage

    }

  }, createListeners(){
    html.get('.first').addEventListener('click', ()=> {
      controls.goTo(state.totalPage)
      update()
    })
    html.get('.last').addEventListener('click', ()=> {
      controls.goTo(state.totalPage)
      update()
    })
    html.get('.next').addEventListener('click', ()=> {
      controls.next(state.totalPage)
      update()

    })
    html.get('.prev').addEventListener('click', ()=> {
      controls.prev(state.totalPage)
      update()
      
    })

  }


}
const buttons = {
  element: html.get('.pagination .number'),
create(number){

const button = document.createElement('.div')
button.innerHTML = number;
if(state.page == number){

  button.classList.add('active')
}
button.addEventListener('click', (event)=>{
  const page = event.target.innerText

  constols.goTo(page)
  update()


})
buttons.element.appendChild(button)


},
update(){

  buttons.element.innerHTML= ""
const {maxLeft, maxRight} = buttons.calculateMaxVisible()
for (let page = maxLeft; page <= maxRight; page++){
  buttons.create(page)
}
},
calculateMaxVisible(){
  const{maxVisibleButtons} = state
  let maxLeft = (state.page - Math.floor(5 / 2))
  let maxRight = (state.page + Math.floor (5 / 2 ))
  if(maxLeft < 1){
    maxLeft = 1
    maxRight = maxVisibleButtons
  } 
  if(maxRight > state.totalPage){
    maxLeft = state.totalPage - (maxVisibleButtons - 1)
    maxRight= state.totalPage 
  }
  if(maxLeft < 1) maxLeft =1
  return {maxLeft, maxRight}
}

}

function update(){
list.update()
buttons.update()

}
function init(){
  list.update()
  buttons.update()
  controls.createListeners()
}

init()


controls.next()
*/