async function getData() {
  try {
    const response = await fetch("https://sevn-pleno-esportes.deno.dev/");
    if (!response.ok) {
      throw new Error(`Falha ao carregar jogos`);
    }

    const gamesData = await response.json();
    displayData(gamesData)
  } catch (error) {
    throw new Error(error);
  }
}

window.onload = getData;
