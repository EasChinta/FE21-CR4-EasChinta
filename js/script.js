var parsedMovies = JSON.parse(movies);




for (let val of parsedMovies) {
  document.getElementById("cards").innerHTML += `
  <div class="card col-lg-3 container mb-3 bg-dark text-light" style="max-width: 540px;">
  <div class="row g-0 ">
    <div class="col-md-4 ">
      <img src="${val.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${val.title}</h5>
        <p class="card-text">${val.plot}</p>
        <p class="card-text"><small class="text-muted"> Year: ${val.year} <br> Director: ${val.director} <br> Actors: ${val.actors}</small>
        <p id="result" class="btn btn-danger vote">Like</p>
        </p>
     
        </div>
      </div>
    </div>
  </div>
 `;
}

var btns = document.getElementsByClassName("vote");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    printMoreInfo(i);
  });
}

function printMoreInfo(index){
  document.getElementById("result").innerHTML += `
  </div><p><input type="text" id="input1" value="${parsedMovies[index].likes}></p>`
}















{/*  */}





// for (let i = 0; i < parsedMovies.length; i++) {
//   document.getElementById("cards").innerHTML += `
    
  
//      <div class="card container mb-3 bg-dark text-light" style="max-width: 540px;">
//        <div class="row g-0 ">
//          <div class="col-md-4 ">
//            <img src="${parsedMovies[i].image}" class="img-fluid rounded-start" alt="...">
//          </div>
//          <div class="col-md-8">
//            <div class="card-body">
//              <h5 class="card-title">${parsedMovies[i].title}</h5>
//              <p class="card-text">${parsedMovies[i].plot}</p>
//              <p class="card-text"><small class="text-muted"> Year: ${parsedMovies[i].year} <br> Director: ${parsedMovies[i].director} <br> Actors: ${parsedMovies[i].actors}</small>
//              </p>
//              </div>
//            </div>
//          </div>
//        </>
//       `;
// }











  /* <div class="voting">
            <button id="likebtn">
                <i>👍</i>
            </button>
            <input type="number" id="input1" value="${parsedMovies[i].likes}">
            <button id="dislikebtn">
                <i>👎</i>
            </button>
            <input type="number" id="input2" value="${parsedMovies[i].dislikes}">
        </div>


        let likebtn = document.querySelector("#likebtn");
  let dislikebtn = document.querySelector("#dislikebtn");
  let input1 = document.querySelector("#input1");
  let input2 = document.querySelector("#input2");

  likebtn.addEventListener("click", () => {
    input1.value = parseInt(input1.value) + 1;
  });

  dislikebtn.addEventListener("click", () => {
    input2.value = parseInt(input2.value) + 1;
  }); */


// let likebtn = document.querySelector("#likebtn");
// let dislikebtn = document.querySelector("#dislikebtn");
// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");

// likebtn.addEventListener("click", () =>{
//     input1.value = parseInt(input1.value) + 1;
// })

// dislikebtn.addEventListener("click", () =>{
//     input2.value = parseInt(input2.value) + 1;
// })

// //Like Button!//

// const getLike = document.querySelector('.like');
// const getLikeNum = document.querySelector(".likeNum");

// let like = 0;

// increaseLike = () => {
//     like++;
//     getLikeNum.innerHTML = `${like}`;
// }

// likeClick = () => {
//     increaseLike();
// }

// getLike.addEventListener("click", likeClick);
