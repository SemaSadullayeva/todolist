const btn=document.querySelector('.imgbtn');
const inp=document.querySelector('.input1');
const add=document.querySelector('.addlist');
const del1=document.querySelector('.deleteimg');
const asc=document.querySelector('.asc');
const desc=document.querySelector('.desc');
function  addList(event)
 {
   event.preventDefault();
   let block=document.createElement('div')
   block.classList.add('todoli')
   let newList=document.createElement('span');
    newList.classList.add('todo-list');
    newList.innerText+=inp.value;
    block.append(newList);
    block.innerHTML+=`<img class="delete2" src="image3.png" alt="">`;
    add.append(block);
    add.style.display="block"
    
 }
 btn.addEventListener("click",(addList))
 del1.addEventListener("click",()=>
 { 
   inp.value="";
   inp.focus();
 })
 
 add.addEventListener("click",(e)=>{

   if(e.target.className=='delete2'){
       e.target.parentNode.remove();
   }    
 });
 asc.addEventListener("click", () => {
  desc.style.display = "block"
  asc.style.display = "none"
  });
  desc.addEventListener("click", () => {
  asc.style.display = "block"
  desc.style.display = "none"
  });

function sortLi() {
  let id,i,row,run,stop,d,addLi = 0;
  id = document.getElementById("addlist");
  run = true;
  d = "asc";
  while (run) {
      run = false;
      row = id.getElementsByTagName("div");
      for ( i = 0; i < row.length - 1; i++) {
          stop= false;
          if (d == "asc") {
              if ( row[i].innerHTML.toLowerCase() > row[i + 1].innerHTML.toLowerCase()) {
                  stop = true;
                  break;
              }
          } else if (d == "desc") {
              if (row[i].innerHTML.toLowerCase() < row[i+1].innerHTML.toLowerCase()) {
                  stop = true;
                  break;
              }
          }
      }
      if (stop) {
          row[i].parentNode.insertBefore(row[i + 1], row[i]);
          run = true;
          addLi++;
      } else {
          if (addLi === 0 && d === "asc") {
              d = "desc";
              run = true;
          }
      }
  }
}




  