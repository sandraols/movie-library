const input = document.getElementById('input');
const themeButtons = $('.theme__button')
const sciFiButton = $('.sci-fi__button');
const hollywoodButton = $('.hollywood__button');
const fantasyButton = $('.fantasy__button');
const horrorButton = $('.horror__button');
const adventureButton = $('.adventure__button');

input.addEventListener('keyup', function(search) {
  if (event.keyCode === 13) {
    search.preventDefault();
    document.getElementById("search-btn").click();
  }
});

$('#search-btn').on('click', function () {
    let searchInput = document.getElementById('input').value;
    $.ajax(`http://www.omdbapi.com/?apikey=2fb80044&t=${searchInput}`).done(function (movie) {
        if (movie.Title == undefined) {
            $('#movie-container').prepend(`<div class="movie__content" style="height: 200px;" id="remove">
            <div class="right__content" style="width: 100%;">
            <i class="fas fa-times" onclick="removeMovie('remove')" style="left: 486px;"></i>
            <h2 class="movie__title" style="margin: auto;">Movie not found</h2>
            </div>
            </div`);
        } else {
            const theme = $('.active').attr('id');
            $('#movie-container').prepend(`
            <div class="movie__content movie__content--${theme}" id="${movie.imdbID}">
            <div class="left__content">
            <img class="poster" src="${movie.Poster}" alt="movie poster">
            </div>    
            <div class="right__content">
            <i class="fas fa-times fa-times--${theme}" onclick="removeMovie('${movie.imdbID}')"></i>
            <a href='https://www.imdb.com/title/${movie.imdbID}/' target='_blank'>
            <h2 class="movie__title movie__title--${theme}" ${movie.Title.length > 12 && screen.width < 565 ? 'style="font-size: 14px"' : null}>
            ${movie.Title}<span class="link__text">Link to IMDB</span>
            </h2>
            </a>
            <p class="paragraph"><span class="info__title">Year -</span> ${movie.Year}</p>
            <p class="paragraph"><span class="info__title">Genre -</span> ${movie.Genre}</p>
            <p class="paragraph"><span class="info__title">IMDB Rating -</span> ${movie.imdbRating}</p>
            <p class="paragraph"><span class="info__title">Plot -</span>${movie.Plot}</p>
            </div>
            </div>
            `);
            // Fix better solution for this at other time
            setTimeout(() => {
                $('.movie__content').scrollTop(0);
            }, 50)
        }    
    });  
});

const removeMovie = (id) => {
    $(`#${id}`).remove();
}

$('.theme__button').on('click', function () {
    const theme = this.id;
    $('body').removeClass().addClass(`${theme}__theme`);
    $('#main-title').removeClass().addClass(`main__title main__title--${theme}`);
    $('#input').removeClass().addClass(`input input--${theme}`);
    $('.fa-search').removeClass().addClass(`fas fa-search fa-search--${theme}`);
    $('.movie__content').removeClass().addClass(`movie__content movie__content--${theme}`);
    $('.movie__title').removeClass().addClass(`movie__title movie__title--${theme}`);
    $('.fa-times').removeClass().addClass(`fas fa-times fa-times--${theme}`);
    $('.active').removeClass('active');
    $(`#${theme}`).addClass('active');
});
