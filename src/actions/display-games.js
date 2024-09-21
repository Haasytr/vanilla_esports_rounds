function displayData(data) {
  const contentBody = document.querySelector(".content-body");
  const roundsElement =
    document.querySelector(".rounds b");

  const previousRound =
    document.querySelector("#previous-round");
  const nextRound = document.querySelector("#next-round");

  let currentRound = 0;

  function updateRound() {
    roundsElement.textContent = `Rodada ${currentRound + 1}`;
    contentBody.innerHTML = "";

    data[currentRound].games.forEach((game) => {
      const gameElement = document.createElement("div");
      gameElement.className = "game";
      gameElement.innerHTML = `
        <div class="team">
          <img src="./assets/team_shield_${
            game.team_home_id.split("-")[1]
          }.svg" alt="${game.team_home_name}" />
          <span class="bold text-sm">${game.team_home_name}</span>
        </div>
        <div class="result bold text-md">
          <b>${game.team_home_score}</b>
          <i class="fas fa-x"></i>
          <b>${game.team_away_score}</b>
        </div>
        <div class="team">
          <span class="bold text-sm">${game.team_away_name}</span>
          <img src="./assets/team_shield_${
            game.team_away_id.split("-")[1]
          }.svg"alt="${game.team_away_name}" />
        </div>
      `;
      contentBody.appendChild(gameElement);
    });

    previousRound.disabled = currentRound === 0;
    nextRound.disabled = currentRound === data.length - 1;

    previousRound.onclick = () => {
      if (currentRound > 0) {
        currentRound--;
        updateRound();
      }
    };

    nextRound.onclick = () => {
      if (currentRound < data.length - 1) {
        currentRound++;
        updateRound();
      }
    };
  }

  updateRound();
}
