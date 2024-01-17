const eduList = [
    {
        name: '1',
        link: 'https://hgentry.github.io/1/',
        img: 'https://main.dd8vt524eqsk2.amplifyapp.com/projects/1/meta/apple-touch-icon.png'
    }
]

eduList.forEach(eduApp => {
    var cont = document.createElement("a");
    cont.classList.add("game-link");

    var div = document.createElement("div");
    div.classList.add("game-tile");

    var appimg = document.createElement("img");
    appimg.src = eduApp.img;

    var title = document.createElement("h1");
    title.innerHTML = eduApp.title;
    title.classList.add("game-title");

    document.getElementById("flex-container").appendChild(cont);
    cont.appendChild(div);
    div.appendChild(appimg);
    div.appendChild(title);
});


/* html Stuct

    <a href="ok" class="game-link container">
      <div class="game-tile">
        <img class="game-icon" src="https://main.dd8vt524eqsk2.amplifyapp.com/projects/1/meta/apple-touch-icon.png" loading="lazy">
        <h1 class="game-title">1</h1>
      </div>
    </a>

*/