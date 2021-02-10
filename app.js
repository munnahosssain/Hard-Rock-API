// searchSongs = async () => {
//     const searchText = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`
//     //loading data
//     const res = await fetch(url);
//     const data = await res.json();
//     displaySongs(data.data);
// }
searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    //loading data
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
        .catch(error => displayError("Something went wrong!"));

}
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';

    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyric-name">${song.title}</h3>
                <p class="author load">Album by- <span>${song.artist.name}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                </audio>
            </div>
            <div class="col-ms-3 text-md-right text-center">
                <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `
        songContainer.appendChild(songDiv);
    })
}
const getLyric = async (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayLyric(data.lyrics);
    }
    catch (error) {
        displayError('Sorry! i failed to load lyric');
    }

}
// const getLyric = (artist, title) => {
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayLyric(data.lyrics));
// }
const displayLyric = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerHTML = lyrics;
}
const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}