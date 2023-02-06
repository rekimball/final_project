//window loading...
// $(window).load(function() {
//     $('#loading').hide();
//   });

//set api url to variable
const tvUrl = 'https://imdb-api.com/en/API/MostPopularTVs/k_d9yquiig';
const tvTitleUrl = 'https://imdb-api.com/en/API/AdvancedSearch/k_d9yquiig/?title=';
const tvYearUrl = 'https://imdb-api.com/en/API/AdvancedSearch/k_d9yquiig/?year=';
const tvRatingUrl = 'https://imdb-api.com/en/API/AdvancedSearch/k_d9yquiig/?user_rating=';

//get elements and set them to a variable
const allContent = document.getElementById('content');
const image = document.querySelector('tvImage');
const searchValue = document.getElementById('inputText').value
const searchCriteria = document.getElementById('search-criteria').value
const pageTitle = document.querySelector('b');

async function showAll() {
  fetch(tvUrl)
    .then(response => response.json())
    .then(data => {
      data.items.forEach(tv => {
        console.log(data)
            const tvContent = document.createElement('div');
            const image = document.createElement('img');
            image.style.height = "118px";
            const ranking = document.createElement('h2')
            const titleYear = document.createElement('h3');
            const rating = document.createElement('h4');
            const likeDislike = document.createElement('h5')

            image.src = tv.image
            ranking.innerText = 'Rank: ' + tv.rank;
            titleYear.innerText = 'Title: ' + tv.title + ' - ' + tv.year;
            rating.innerText = 'IMDb Rating: ' + tv.imDbRating;
            likeDislike.innerHTML = '<i onclick="toggleUp(this)" class="fa fa-thumbs-up"></i><i onclick="toggleDown(this)" class="fa fa-thumbs-down"></i>'
          // likeDislike.innerHTML = '<i onclick="toggle(this)" class="fa fa-thumbs-up"></i>'

            //append inner elements to div element
            tvContent.append(image)
            tvContent.append(ranking)
            tvContent.append(titleYear)
            tvContent.append(rating)
            tvContent.append(likeDislike)

            //append child div element to content parent element
            allContent.appendChild(tvContent)
            //console.log(image)
        })
      })
        .catch(err => {
         console.log("something went wrong..", err);
         alert("No matches! Try something else!")
       });
};
window.onload = showAll();

//toggle thumbs up/down
function toggleUp(x) {
  x.style.backgroundColor = "green";
}

function toggleDown(y) {
  y.style.backgroundColor = "red";
}


//clear all images and text from content area
function clearContent(){
  const clear = document.getElementById('content');
  while (clear.hasChildNodes())
  clear.firstChild.remove()
  clear.innerHTML = '';
}

//search function- when search button is clicked
async function search(){
    //clear content first before proceeding
    clearContent();

    if(document.getElementById('inputText').value == ''){
      alert("No search text entered. Please enter text in the search box and try again.")
    }

  const searchValue = document.getElementById('inputText').value;
  const searchCriteria = document.getElementById('search-criteria').value

//search for tv title
  if (searchCriteria === 'title'){
    // console.log(searchValue)
    // console.log(tvTitleUrl + searchValue)
    fetch(tvTitleUrl + searchValue)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(tv => {
        // console.log(data)
            const tvContent = document.createElement('div');
            const image = document.createElement('img');
            image.style.height = "118px";
            const ranking = document.createElement('h2')
            const titleYear = document.createElement('h3');
            const rating = document.createElement('h4');
            const likeDislike = document.createElement('h5')

            image.src = tv.image
            ranking.innerText = 'Votes: ' + tv.imDbRatingVotes;
            titleYear.innerText = 'Title: ' + tv.title + ' - ' + tv.description;
            rating.innerText = 'IMDb Rating: ' + tv.imDbRating;
            pageTitle.innerText = 'TV and movie titles containing ' + searchValue;
            likeDislike.innerHTML = '<i onclick="toggleUp(this)" class="fa fa-thumbs-up"></i><i onclick="toggleDown(this)" class="fa fa-thumbs-down"></i>'
          // likeDislike.innerHTML = '<i onclick="toggle(this)" class="fa fa-thumbs-up"></i>'

            //append inner elements to div element
            tvContent.append(image)
            tvContent.append(ranking)
            tvContent.append(titleYear)
            tvContent.append(rating)
            tvContent.append(likeDislike)

            //append child div element to content parent element
            allContent.appendChild(tvContent)
            //console.log(image)
        })
      })
        .catch(err => {
         console.log("something went wrong..", err);
         alert("No matches! Try something else!")
       });
}
 //search for tv year
 if (searchCriteria === 'year'){
  fetch(tvYearUrl + searchValue)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(tv => {
      //console.log(data)
          const tvContent = document.createElement('div');
          const image = document.createElement('img');
          image.style.height = "118px";
          const ranking = document.createElement('h2')
          const titleYear = document.createElement('h3');
          const rating = document.createElement('h4');
          const likeDislike = document.createElement('h5')

          image.src = tv.image
          ranking.innerText = 'Votes: ' + tv.imDbRatingVotes;
          titleYear.innerText = 'Title: ' + tv.title + ' - ' + tv.description;
          rating.innerText = 'IMDb Rating: ' + tv.imDbRating;
          pageTitle.innerText = 'TV shows and movies made/released in the year ' + searchValue;
          likeDislike.innerHTML = '<i onclick="toggleUp(this)" class="fa fa-thumbs-up"></i><i onclick="toggleDown(this)" class="fa fa-thumbs-down"></i>'
          // likeDislike.innerHTML = '<i onclick="toggle(this)" class="fa fa-thumbs-up"></i>'
          
          //append inner elements to div element
          tvContent.append(image)
          tvContent.append(ranking)
          tvContent.append(titleYear)
          tvContent.append(rating)
          tvContent.append(likeDislike)

          //append child div element to content parent element
          allContent.appendChild(tvContent)
          //console.log(image)
      })
    })
      .catch(err => {
       console.log("something went wrong..", err);
       alert("No matches! Try something else!")
     });
}
//search for tv rating
if (searchCriteria === 'rating'){
  fetch(tvRatingUrl + searchValue)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(tv => {
      //console.log(data)
          const tvContent = document.createElement('div');
          const image = document.createElement('img');
          image.style.height = "118px";
          const ranking = document.createElement('h2')
          const titleYear = document.createElement('h3');
          const rating = document.createElement('h4');
          const likeDislike = document.createElement('h5')
          
          image.src = tv.image
          ranking.innerText = 'Votes: ' + tv.imDbRatingVotes;
          titleYear.innerText = 'Title: ' + tv.title + ' - ' + tv.description;
          rating.innerText = 'IMDb Rating: ' + tv.imDbRating;
          pageTitle.innerText = 'TV shows and movies with an IMDb rating of ' + searchValue;
          likeDislike.innerHTML = '<i onclick="toggleUp(this)" class="fa fa-thumbs-up"></i><i onclick="toggleDown(this)" class="fa fa-thumbs-down"></i>'
          // likeDislike.innerHTML = '<i onclick="toggle(this)" class="fa fa-thumbs-up"></i>'

          //append inner elements to div element
          tvContent.append(image)
          tvContent.append(ranking)
          tvContent.append(titleYear)
          tvContent.append(rating)
          tvContent.append(likeDislike)

          //append child div element to content parent element
          allContent.appendChild(tvContent)
          //console.log(image)
      })
    })
      .catch(err => {
       console.log("something went wrong..", err);
       alert("No matches! Try something else!")
     });
}
};