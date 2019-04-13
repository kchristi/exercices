var inBruges = {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
};

var frozen = {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false,
};

var madMax = {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
};

var miserables = {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
};

var movies = [inBruges, frozen, madMax, miserables];

movies.forEach(element => {
    alert(buildMovieMsg(element));
});

function buildMovieMsg(element) {
    var msg = "You have ";
    if (element.hasWatched)
        msg += "watched";
    else
        msg += "not seen";
    msg += " \"" + element.title + "\" - " + element.rating + " stars";
    return msg;
}
