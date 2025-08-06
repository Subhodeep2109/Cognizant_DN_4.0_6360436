import React from 'react';

function IndianPlayers() {
  const players = [
    'Virat Kohli', 'Rohit Sharma', 'Shikhar Dhawan', 'KL Rahul',
    'Rishabh Pant', 'Jasprit Bumrah', 'Hardik Pandya', 'Suryakumar Yadav',
  ];

  const oddTeam = players.filter((_, idx) => idx % 2 === 0);
  const evenTeam = players.filter((_, idx) => idx % 2 !== 0);

  const T20players = ['MS Dhoni', 'Ravindra Jadeja', 'Bhuvneshwar Kumar'];
  const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Wriddhiman Saha'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
      <h2>Merged Team (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
