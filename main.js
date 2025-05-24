function showTeamInfo(teamName) {
  alert("More info about: " + teamName);
}
  const teamDetails = {
    'Red Bull Racing': 'Red Bull Racing is known for its innovative engineering and championship-winning cars.',
    'Ferrari': 'Ferrari is the oldest and most successful team in F1 history with a passionate fan base.',
    'Mercedes': 'Mercedes has dominated the hybrid era with multiple world championships.',
    'McLaren': 'McLaren is a legendary team famous for its history and iconic drivers.',
    'Alpine': 'Alpine is the rebranded Renault team, aiming for strong results with French heritage.',
    'Aston Martin': 'Aston Martin combines luxury with racing performance and a rich automotive legacy.',
    'Alfa Romeo': 'Alfa Romeo brings Italian flair and history back to the grid with a competitive spirit.',
    'Haas': 'Haas is the American team focused on steady development and strong partnerships.',
    'Williams': 'Williams is a historic British team with a proud legacy and commitment to racing.',
    'AlphaTauri': 'AlphaTauri is the sister team to Red Bull, serving as a platform for young talents.'
  };

  function showTeamInfo(team) {
    const infoSection = document.getElementById('team-info');
    infoSection.innerHTML = `<h3>${team}</h3><p>${teamDetails[team]}</p>`;
  }