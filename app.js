searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    //loading data
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
}
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');

    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyric-name">Purple Noon</h3>
                <p class="author load">Album by <span>Washed Out</span></p>
            </div>
            <div class="col-ms-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        `
        songContainer.appendChild(songDiv);
    })
}