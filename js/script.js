/*I have to say this was really difficult for me and 
I had to rewatch the last live coding several times to get at some point here.
I basically followed Serris method of doing it in the video.*/


var parsedMovies = JSON.parse(movies);

var msg = "";

msg += `<div class="row">`;

for (let val of parsedMovies) {
  msg += `
    <div class=" mb-3 col col-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div class="row g-1 container-fluid bg-dark">
        <div class="col-md-4 ">
          <img style="width:100%;" src="${val.image}" class="" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column text-light">
            <h5 class="card-title">${val.title}</h5>
            <p class="card-text">${val.plot} <br> <small>Year: ${val.year} <br> Director: ${val.director} <br> Actors: ${val.actors}</small> </p>
            <p class="card-text d-flex justify-content-end "><button type="button" class="btn btn-outline-danger rounded-pill d-flex mt-auto voting ">
            Likes
            <span class ="vote" style="margin-left: 1vw">${val.likes}</span>
          </p></button>
          </div>
        </div>
      </div>
    </div>

  `;
}

msg += "</div>";

document.getElementById("cards-container").innerHTML = msg;

var buttons = document.getElementsByClassName("vote");
var voting = document.getElementsByClassName("voting");

for (let i = 0; i < voting.length; i++) {
  voting[i].addEventListener("click", function () {
    vote(i);
  });
}



function vote(index) {
  var newNr = Number(buttons[index].innerHTML) + 1;
  buttons[index].innerHTML = newNr;
  parsedMovies[index].likes = newNr;
}

document.getElementById("sort").addEventListener("click", sort);

function sort() {
  parsedMovies.sort(function (a, b) {
    return b.likes - a.likes;
  });

  var msg = "";

  msg += `<div class="row">`;

  for (let val of parsedMovies) {
    msg += `
    <div class=" mb-3 col col-12 col-sm-12 col-md-6 col-lg-4 d-flex  align-items-stretch ">  
        <div class="row g-1 container-fluid bg-dark">
          <div class="col-md-4 ">
            <img style="width:100%;" src="${val.image}" class="" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column text-light">
              <h5 class="card-title">${val.title}</h5>
              <p class="card-text">${val.plot} <br> <small>Year: ${val.year} <br> Director: ${val.director} <br> Actors: ${val.actors}</small> </p>
              <p class="card-text align-self-end align-items-end"><button type="button" class="btn btn-outline-danger rounded-pill d-flex mt-auto voting">
              Likes
              <span class ="vote" style="margin-left: 1vw">${val.likes}</span>
      
            </p></button>
            </div>
          </div>
        </div>
    </div>

  `;
  }

  msg += "</div>";

  document.getElementById("cards-container").innerHTML = msg;

  var buttons = document.getElementsByClassName("vote");

  var voting = document.getElementsByClassName("voting");

for (let i = 0; i < voting.length; i++) {
  voting[i].addEventListener("click", function () {
    vote(i);
  });
}

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      vote(i);
    });
  }

  function vote(index) {
    var newNr = Number(buttons[index].innerHTML) + 1;
    buttons[index].innerHTML = newNr;
    parsedMovies[index].likes = newNr;
  }
}











//Below are commented all the previous attempts I made to figure this out//





// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     vote(i);
//   });
// }

// for (let val of parsedMovies) {
//   document.getElementById("cards").innerHTML += `
//   <div class="card col-lg-3 container mb-3 bg-dark text-light" style="max-width: 540px;">
//   <div class="row g-0 ">
//     <div class="col-md-4 ">
//       <img src="${val.image}" class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${val.title}</h5>
//         <p class="card-text">${val.plot}</p>
//         <p class="card-text"><small class="text-muted"> Year: ${val.year} <br> Director: ${val.director} <br> Actors: ${val.actors}</small>

//       </div>
//     </div>
//   </div>
//  `;
// }

// var btns = document.getElementsByClassName("vote");

// function incrementVote() {
//   var element = document.getElementsByClassName("vote");
//   var value = element.innerHTML;
//   ++value;
// }

// console.log(value);
// document.getElementsByClassName("vote").innerHTML = value;

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     printMoreInfo(i);
//   });
// }

// function printMoreInfo(index){
//   document.getElementById("result").innerHTML += `
//   </div><p><input type="text" id="input1" value="${parsedMovies[index].likes}></p>`
// }

// var buttonTarget = document.getElementsByClassName("btn")[0];
// var counter = 1;

// function incrementer(){
// //document.getElementById("btn").innerHTML = counter.toString();
//   buttonTarget.innerHTML  = counter.toString();
//   counter++;
//   return counter;
// }

{
  /*  */
}

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
