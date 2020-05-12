const input = document.getElementById('input');
const themeButtons = $('.theme__button')
console.log(themeButtons);
const sciFiButton = $('#sci-fi-button');
const hollywoodButton = $('#hollywood-button');
const fantasyButton = $('#fantasy-button');
const horrorButton = $('#horror-button');

input.addEventListener("keyup", function(search) {
  if (event.keyCode === 13) {
    search.preventDefault();
    document.getElementById("search-btn").click();
  }
});

$('#search-btn').on('click', function () {
    let searchInput = document.getElementById('input').value;
    $.ajax(`http://www.omdbapi.com/?apikey=2fb80044&t=${searchInput}`).done(function (movie) {
        let theme = $('.active').attr('id');
        console.log(theme);
        if (movie.Title == undefined) {
            $('#movie-container').prepend(`<div class="movie__content" style="height: 200px;" id="remove">
                <div class="right__content" style="width: 100%;">
                    <i class="fas fa-times" onclick="removeMovie('remove')" style="left: 486px;"></i>
                    <h2 class="movie__title" style="margin: auto;">Movie not found</h2>
                </div>
            </div`);
        } else {
            $('#movie-container').prepend(`
            <div class="movie__content" id="${movie.imdbID}">
                <div class="left__content">
                    <img class="poster" src="${movie.Poster}" alt="movie poster">
                </div>    
                <div class="right__content">
                    <i class="fas fa-times" onclick="removeMovie('${movie.imdbID}')"></i>
                    <a href='https://www.imdb.com/title/${movie.imdbID}/' target='_blank'>
                        <h2 class="movie__title" ${movie.Title.length > 12 && screen.width < 565 ? 'style="font-size: 14px"' : null}>
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
        if (theme === 'sci-fi-button') {
            sciFiButton.addClass('active');
            hollywoodButton.removeClass('active');
            fantasyButton.removeClass('active');
            horrorButton.removeClass('active');
    
            //background img
            $('body').addClass('sci-fi__theme');
            $('body').removeClass('hollywood__theme');
            $('body').removeClass('fantasy__theme');
            $('body').removeClass('horror__theme');
            //main title
            $('#main-title').addClass('main__title--sci-fi');
            $('#main-title').removeClass('main__title--hollywood');
            $('#main-title').removeClass('main__title--fantasy');
            $('#main-title').removeClass('main__title--horror');
            //input
            $('#input').addClass('input--sci-fi');
            $('#input').removeClass('input--hollywood');
            $('#input').removeClass('input--fantasy');
            $('#input').removeClass('input--horror');
            //search button
            $('.fa-search').addClass('fa-search--sci-fi');
            $('.fa-search').removeClass('fa-search--hollywood');
            $('.fa-search').removeClass('fa-search--fantasy');
            $('.fa-search').removeClass('fa-search--horror');
            //movie title
            $('.movie__title').addClass('movie__title--sci-fi');
            $('.movie__title').removeClass('movie__title--hollywood');
            $('.movie__title').removeClass('movie__title--fantasy');
            $('.movie__title').removeClass('movie__title--horror');
            //close button
            $('.fa-times').addClass('fa-times--sci-fi');
            $('.fa-times').removeClass('fa-times--hollywood');
            $('.fa-times').removeClass('fa-times--fantasy');
            $('.fa-times').removeClass('fa-times--horror');
            //movie content box shadow
            $('.movie__content').addClass('movie__content--sci-fi');
            $('.movie__content').removeClass('movie__content--hollywood');
            $('.movie__content').removeClass('movie__content--fantasy');
            $('.movie__content').removeClass('movie__content--horror');
    
        } 
        if (theme === 'hollywood-button') {
            hollywoodButton.addClass('active');
            sciFiButton.removeClass('active');
            fantasyButton.removeClass('active');
            horrorButton.removeClass('active');
    
            //background img
            $('body').addClass('hollywood__theme');
            $('body').removeClass('.sci-fi__theme');
            $('body').removeClass('fantasy__theme');
            $('body').removeClass('horror__theme');
            //main title
            $('#main-title').addClass('main__title--hollywood');
            $('#main-title').removeClass('main__title--sci-fi');
            $('#main-title').removeClass('main__title--fantasy');
            $('#main-title').removeClass('main__title--horror');
            //input
            $('#input').addClass('input--hollywood');
            $('#input').removeClass('input--sci-fi');
            $('#input').removeClass('input--fantasy');
            $('#input').removeClass('input--horror');
            //search button
            $('.fa-search').addClass('fa-search--hollywood');
            $('.fa-search').removeClass('fa-search--sci-fi');
            $('.fa-search').removeClass('fa-search--fantasy');
            $('.fa-search').removeClass('fa-search--horror');
            //movie title
            $('.movie__title').addClass('movie__title--hollywood');
            $('.movie__title').removeClass('movie__title--sci-fi');
            $('.movie__title').removeClass('movie__title--fantasy');
            $('.movie__title').removeClass('movie__title--horror');
            //close button
            $('.fa-times').addClass('fa-times--hollywood');
            $('.fa-times').removeClass('fa-times--sci-fi');
            $('.fa-times').removeClass('fa-times--fantasy');
            $('.fa-times').removeClass('fa-times--horror');
            //movie content box shadow
            $('.movie__content').addClass('movie__content--hollywood');
            $('.movie__content').removeClass('movie__content--sci-fi');
            $('.movie__content').removeClass('movie__content--fantasy');
            $('.movie__content').removeClass('movie__content--horror');
        }
        if (theme === 'fantasy-button') {
            fantasyButton.addClass('active');
            sciFiButton.removeClass('active');
            hollywoodButton.removeClass('active');
            horrorButton.removeClass('active');
    
            //background img
            $('body').addClass('fantasy__theme');
            $('body').removeClass('sci-fi__theme');
            $('body').removeClass('hollywood__theme');
            $('body').removeClass('horror__theme');
            //main title
            $('#main-title').addClass('main__title--fantasy');
            $('#main-title').removeClass('main__title--sci-fi');
            $('#main-title').removeClass('main__title--hollywood');
            $('#main-title').removeClass('main__title--horror');
            //input
            $('#input').addClass('input--fantasy');
            $('#input').removeClass('input--sci-fi');
            $('#input').removeClass('input--hollywood');
            $('#input').removeClass('input--horror');
            //search button
            $('.fa-search').addClass('fa-search--fantasy');
            $('.fa-search').removeClass('fa-search--sci-fi');
            $('.fa-search').removeClass('fa-search--hollywood');
            $('.fa-search').removeClass('fa-search--horror');
            //movie title
            $('.movie__title').addClass('movie__title--fantasy');
            $('.movie__title').removeClass('movie__title--sci-fi');
            $('.movie__title').removeClass('movie__title--hollywood');
            $('.movie__title').removeClass('movie__title--horror');
            //close button
            $('.fa-times').addClass('fa-times--fantasy');
            $('.fa-times').removeClass('fa-times--sci-fi');
            $('.fa-times').removeClass('fa-times--hollywood');
            $('.fa-times').removeClass('fa-times--horror');
            //movie content box shadow
            $('.movie__content').addClass('movie__content--fantasy');
            $('.movie__content').removeClass('movie__content--sci-fi');
            $('.movie__content').removeClass('movie__content--hollywood');
            $('.movie__content').removeClass('movie__content--horror');
        }
        if (theme === 'horror-button') {
            horrorButton.addClass('active');
            sciFiButton.removeClass('active');
            hollywoodButton.removeClass('active');
            fantasyButton.removeClass('active');
    
            //background img
            $('body').addClass('horror__theme');
            $('body').removeClass('sci-fi__theme');
            $('body').removeClass('hollywood__theme');
            $('body').removeClass('fantasy__theme');
            //main title
            $('#main-title').addClass('main__title--horror');
            $('#main-title').removeClass('main__title--sci-fi');
            $('#main-title').removeClass('main__title--hollywood');
            $('#main-title').removeClass('main__title--fantasy');
            //input
            $('#input').addClass('input--horror');
            $('#input').removeClass('input--sci-fi');
            $('#input').removeClass('input--hollywood');
            $('#input').removeClass('input--fantasy');
            //search button
            $('.fa-search').addClass('fa-search--horror');
            $('.fa-search').removeClass('fa-search--sci-fi');
            $('.fa-search').removeClass('fa-search--hollywood')
            $('.fa-search').removeClass('fa-search--fantasy');
            //movie title
            $('.movie__title').addClass('movie__title--horror');
            $('.movie__title').removeClass('movie__title--sci-fi');
            $('.movie__title').removeClass('movie__title--hollywood');
            $('.movie__title').removeClass('movie__title--fantasy');
            //close button
            $('.fa-times').addClass('fa-times--horror');
            $('.fa-times').removeClass('fa-times--sci-fi');
            $('.fa-times').removeClass('fa-times--hollywood');
            $('.fa-times').removeClass('fa-times--fantasy');
            //movie content box shadow
            $('.movie__content').addClass('movie__content--horror');
            $('.movie__content').removeClass('movie__content--sci-fi');
            $('.movie__content').removeClass('movie__content--hollywood');
            $('.movie__content').removeClass('movie__content--fantasy');
        }
    });  
});

const removeMovie = (id) => {
    $(`#${id}`).remove();
    console.log(id);
}

// const changeTheme = () => {

// }

$('.theme__button').on('click', function () {
    let theme = this.id;

    if (theme === 'sci-fi-button') {
        sciFiButton.addClass('active');
        hollywoodButton.removeClass('active');
        fantasyButton.removeClass('active');
        horrorButton.removeClass('active');

        //background img
        $('body').addClass('sci-fi__theme');
        $('body').removeClass('hollywood__theme');
        $('body').removeClass('fantasy__theme');
        $('body').removeClass('horror__theme');
        //main title
        $('#main-title').addClass('main__title--sci-fi');
        $('#main-title').removeClass('main__title--hollywood');
        $('#main-title').removeClass('main__title--fantasy');
        $('#main-title').removeClass('main__title--horror');
        //input
        $('#input').addClass('input--sci-fi');
        $('#input').removeClass('input--hollywood');
        $('#input').removeClass('input--fantasy');
        $('#input').removeClass('input--horror');
        //search button
        $('.fa-search').addClass('fa-search--sci-fi');
        $('.fa-search').removeClass('fa-search--hollywood');
        $('.fa-search').removeClass('fa-search--fantasy');
        $('.fa-search').removeClass('fa-search--horror');
        //movie title
        $('.movie__title').addClass('movie__title--sci-fi');
        $('.movie__title').removeClass('movie__title--hollywood');
        $('.movie__title').removeClass('movie__title--fantasy');
        $('.movie__title').removeClass('movie__title--horror');
        //close button
        $('.fa-times').addClass('fa-times--sci-fi');
        $('.fa-times').removeClass('fa-times--hollywood');
        $('.fa-times').removeClass('fa-times--fantasy');
        $('.fa-times').removeClass('fa-times--horror');
        //movie content box shadow
        $('.movie__content').addClass('movie__content--sci-fi');
        $('.movie__content').removeClass('movie__content--hollywood');
        $('.movie__content').removeClass('movie__content--fantasy');
        $('.movie__content').removeClass('movie__content--horror');

    } 
    if (theme === 'hollywood-button') {
        hollywoodButton.addClass('active');
        sciFiButton.removeClass('active');
        fantasyButton.removeClass('active');
        horrorButton.removeClass('active');

        //background img
        $('body').addClass('hollywood__theme');
        $('body').removeClass('.sci-fi__theme');
        $('body').removeClass('fantasy__theme');
        $('body').removeClass('horror__theme');
        //main title
        $('#main-title').addClass('main__title--hollywood');
        $('#main-title').removeClass('main__title--sci-fi');
        $('#main-title').removeClass('main__title--fantasy');
        $('#main-title').removeClass('main__title--horror');
        //input
        $('#input').addClass('input--hollywood');
        $('#input').removeClass('input--sci-fi');
        $('#input').removeClass('input--fantasy');
        $('#input').removeClass('input--horror');
        //search button
        $('.fa-search').addClass('fa-search--hollywood');
        $('.fa-search').removeClass('fa-search--sci-fi');
        $('.fa-search').removeClass('fa-search--fantasy');
        $('.fa-search').removeClass('fa-search--horror');
        //movie title
        $('.movie__title').addClass('movie__title--hollywood');
        $('.movie__title').removeClass('movie__title--sci-fi');
        $('.movie__title').removeClass('movie__title--fantasy');
        $('.movie__title').removeClass('movie__title--horror');
        //close button
        $('.fa-times').addClass('fa-times--hollywood');
        $('.fa-times').removeClass('fa-times--sci-fi');
        $('.fa-times').removeClass('fa-times--fantasy');
        $('.fa-times').removeClass('fa-times--horror');
        //movie content box shadow
        $('.movie__content').addClass('movie__content--hollywood');
        $('.movie__content').removeClass('movie__content--sci-fi');
        $('.movie__content').removeClass('movie__content--fantasy');
        $('.movie__content').removeClass('movie__content--horror');
    }
    if (theme === 'fantasy-button') {
        fantasyButton.addClass('active');
        sciFiButton.removeClass('active');
        hollywoodButton.removeClass('active');
        horrorButton.removeClass('active');

        //background img
        $('body').addClass('fantasy__theme');
        $('body').removeClass('sci-fi__theme');
        $('body').removeClass('hollywood__theme');
        $('body').removeClass('horror__theme');
        //main title
        $('#main-title').addClass('main__title--fantasy');
        $('#main-title').removeClass('main__title--sci-fi');
        $('#main-title').removeClass('main__title--hollywood');
        $('#main-title').removeClass('main__title--horror');
        //input
        $('#input').addClass('input--fantasy');
        $('#input').removeClass('input--sci-fi');
        $('#input').removeClass('input--hollywood');
        $('#input').removeClass('input--horror');
        //search button
        $('.fa-search').addClass('fa-search--fantasy');
        $('.fa-search').removeClass('fa-search--sci-fi');
        $('.fa-search').removeClass('fa-search--hollywood');
        $('.fa-search').removeClass('fa-search--horror');
        //movie title
        $('.movie__title').addClass('movie__title--fantasy');
        $('.movie__title').removeClass('movie__title--sci-fi');
        $('.movie__title').removeClass('movie__title--hollywood');
        $('.movie__title').removeClass('movie__title--horror');
        //close button
        $('.fa-times').addClass('fa-times--fantasy');
        $('.fa-times').removeClass('fa-times--sci-fi');
        $('.fa-times').removeClass('fa-times--hollywood');
        $('.fa-times').removeClass('fa-times--horror');
        //movie content box shadow
        $('.movie__content').addClass('movie__content--fantasy');
        $('.movie__content').removeClass('movie__content--sci-fi');
        $('.movie__content').removeClass('movie__content--hollywood');
        $('.movie__content').removeClass('movie__content--horror');
    }
    if (theme === 'horror-button') {
        horrorButton.addClass('active');
        sciFiButton.removeClass('active');
        hollywoodButton.removeClass('active');
        fantasyButton.removeClass('active');

        //background img
        $('body').addClass('horror__theme');
        $('body').removeClass('sci-fi__theme');
        $('body').removeClass('hollywood__theme');
        $('body').removeClass('fantasy__theme');
        //main title
        $('#main-title').addClass('main__title--horror');
        $('#main-title').removeClass('main__title--sci-fi');
        $('#main-title').removeClass('main__title--hollywood');
        $('#main-title').removeClass('main__title--fantasy');
        //input
        $('#input').addClass('input--horror');
        $('#input').removeClass('input--sci-fi');
        $('#input').removeClass('input--hollywood');
        $('#input').removeClass('input--fantasy');
        //search button
        $('.fa-search').addClass('fa-search--horror');
        $('.fa-search').removeClass('fa-search--sci-fi');
        $('.fa-search').removeClass('fa-search--hollywood')
        $('.fa-search').removeClass('fa-search--fantasy');
        //movie title
        $('.movie__title').addClass('movie__title--horror');
        $('.movie__title').removeClass('movie__title--sci-fi');
        $('.movie__title').removeClass('movie__title--hollywood');
        $('.movie__title').removeClass('movie__title--fantasy');
        //close button
        $('.fa-times').addClass('fa-times--horror');
        $('.fa-times').removeClass('fa-times--sci-fi');
        $('.fa-times').removeClass('fa-times--hollywood');
        $('.fa-times').removeClass('fa-times--fantasy');
        //movie content box shadow
        $('.movie__content').addClass('movie__content--horror');
        $('.movie__content').removeClass('movie__content--sci-fi');
        $('.movie__content').removeClass('movie__content--hollywood');
        $('.movie__content').removeClass('movie__content--fantasy');
    }
});




