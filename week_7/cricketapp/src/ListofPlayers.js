import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 80 },
  { name: 'Rohit Sharma', score: 95 },
  { name: 'Shikhar Dhawan', score: 65 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Rishabh Pant', score: 72 },
  { name: 'Jasprit Bumrah', score: 56 },
  { name: 'Hardik Pandya', score: 74 },
  { name: 'Suryakumar Yadav', score: 67 },
  { name: 'Shubman Gill', score: 92 },
  { name: 'Mohammed Shami', score: 58 },
  { name: 'Yuzvendra Chahal', score: 63 },
];

function ListofPlayers() {
  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
      <h3>Players with Score Below 70</h3>
      <ul>
        {below70.map((player, idx) => (
          <li key={idx}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
