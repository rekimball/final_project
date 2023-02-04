//window loading...
// $(window).load(function() {
//     $('#loading').hide();
//   });

const movieUrl = 'https://imdb-api.com/en/API/MostPopularTVs/k_d9yquiig';

const image = document.querySelector('movieImage');
let searchValue = document.getElementById('inputText').value
let searchCriteria = document.getElementById('search-criteria').value

// fetch(movieUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log("Something went wrong..", error);
//     alert("Sorry, something went wrong trying to load the feed. Click to refresh and try again")
//   })
async function showAll() {
  fetch(movieUrl)
    .then(response => response.json())
    .then(data => {
      data.items.forEach(movie => {
            let image = document.createElement('img');
            let ranking = document.createElement('h1')
            let titleyear = document.createElement('h2');
            let rating = document.createElement('h3');
            image.src = movie.image
            ranking.innerText = 'Ranking: ' + movie.rank;
            titleyear.innerText = 'Movie Title: ' + movie.title + ' - ' + movie.year;
            rating.innerText = 'Rating: ' + movie.imDbRating;
            image.append(ranking)
            ranking.append(titleyear)
            titleyear.append(rating)

            document.getElementById("movieContent").appendChild(image)
            // document.getElementById("image").appendChild(image);
            // document.getElementById("ranking").appendChild(ranking);
            // document.getElementById("titleAndyear").appendChild(titleyear);
            // document.getElementById("rating").appendChild(rating);
            //console.log(movie.title);
            console.log(image)
        })
      })
        .catch(err => {
         console.log("something went wrong..", err);
         alert("No matches! Try something else!")
       });
};
window.onload = showAll();

// function clearContent(){
//   const element = document.getElementById('movieContent');
//   while (element.hasChildNodes())
//   element.firstChild.remove()
//   element.innerHTML = '';
// }

//   function search(){
//     clearContent();

//     if(document.getElementById('inputText').value == ''){
//       document.getElementById('movieContent').innerText = 'No search text entered. Please enter text in the search box above and try again.';
//       return;
//     }

//     let searchValue = document.getElementById('inputText').value;
//     let searchCriteria = document.getElementById('search-criteria').value;

//     //search movie title
//    if (searchCriteria === 'movieTitle'){
//     fetch(movieUrl + searchValue)
//         .then(response => response.json())
//         .then(data => {
//                 const image = document.createElement('img');
//                 const ranking = document.createElement('h1')
//                 const titleyear = document.createElement('h2');
//                 const rating = document.createElement('h3');
//                 image.src = data.items.image
//                 ranking.innerText = 'Ranking: ' + data.items.rank;
//                 titleyear.innerText = 'Movie Title: ' + data.items.title + ' - ' + data.items.year;
//                 rating.innerText = 'Rating: ' + data.items.imDbRating;
//                 document.getElementById("image").appendChild(image);
//                 document.getElementById("ranking").appendChild(ranking);
//                 document.getElementById("titleAndyear").appendChild(titleyear);
//                 document.getElementById("rating").appendChild(rating);
//                 document.getElementById("inputText").value = ""; // clearing input field after clicking search
//                 //console.log(movie.title);
//             })
//             .catch(err => {
//              console.log("something went wrong..", err);
//              alert("No matches! Try something else!")
//            });
//     }
//   };
    //search movie year
    // if (searchCriteria === 'year'){
    //   fetch(movieUrl + searchValue)
    //       .then(response => response.json())
    //       .then(data => {
    //         data.items.forEach(movie => {
    //               const year = document.createElement('p');
    //               year.innerText = 'Movie Year: ' + movie.year;
    //               document.getElementById("movieContent").appendChild(year);
    //               document.getElementById("inputText").value = ""; // clearing input field after clicking search
    //               console.log(movie.year);
    //           })
    //         })
    //           .catch(err => {
    //            console.log("something went wrong..", err);
    //            alert("No matches! Try something else!")
    //          });
    //   }
 
 
    //search movie rank
    // if (searchCriteria === 'rank'){
    //   fetch(movieUrl + searchValue)
    //       .then(response => response.json())
    //       .then(data => {
    //         data.items.forEach(movie => {
    //               const rank = document.createElement('p');
    //               rank.innerText = 'Movie Rank: ' + movie.rank;
    //               document.getElementById("movieContent").appendChild(rank);
    //               document.getElementById("inputText").value = ""; // clearing input field after clicking search
    //               console.log(movie.rank);
    //           })
    //         })
    //           .catch(err => {
    //            console.log("something went wrong..", err);
    //            alert("No matches! Try something else!")
    //          });
    //   }

//     return fetch(movieUrl)
//         .then(response => response.json())
//         .then(data => {
//         data.items.forEach(movie => {
//             searchValue = document.getElementById('inputText').value;
//             if (searchValue == movie.movieTitle){
//                 const movieTitle = document.createElement('p');
//                 movieTitle.innerText = 'Movie Title: ' + movie.name;
//                 document.getElementById("movieContent").appendChild(movieTitle);
//                 resultText = 1;
//             }
//             console.log(resultText);
//         })
//     }).catch(error => {
//         console.log("Something went wrong..", error);
//         return error;
//     }); 

// }