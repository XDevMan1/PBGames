const eduList = [
    {
        name: '1',
        link: 'https://hgentry.github.io/1/',
        img: 'https://main.dd8vt524eqsk2.amplifyapp.com/projects/1/meta/apple-touch-icon.png'
    }
]

function createGameButton(projectId, iconSrc, title) {
  // Create anchor element
  var gameLink = document.createElement("a");
  gameLink.href = "projects/" + projectId + "/index.html";
  gameLink.className = "game-link container";

  // Create game tile div
  var gameTile = document.createElement("div");
  gameTile.className = "game-tile";

  // Create image element
  var gameIcon = document.createElement("img");
  gameIcon.className = "game-icon";
  gameIcon.src = iconSrc;
  gameIcon.setAttribute("loading", "lazy");

  // Create h1 element for game title
  var gameTitle = document.createElement("h1");
  gameTitle.className = "game-title";
  gameTitle.textContent = title;

  // Append elements
  gameTile.appendChild(gameIcon);
  gameTile.appendChild(gameTitle);
  gameLink.appendChild(gameTile);

  return gameLink;
}

// Get the game container element
var gameContainer = document.getElementById("game-container");

// Example usage: Create a game button with project ID 1
var gameButton = createGameButton(1, "https://main.dd8vt524eqsk2.amplifyapp.com/projects/1/meta/apple-touch-icon.png", "1");

// Append the button to the game container
gameContainer.appendChild(gameButton);
var i=0;
eduList.forEach(element => {
  createGameButton(i, element.name, element.img);
  i++;
});