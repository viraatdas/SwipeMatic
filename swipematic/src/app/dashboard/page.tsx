'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [matches, setMatches] = useState([]);

  // Fetch the matches from the backend
  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch('/api/matches'); // Replace with your actual API
      const data = await res.json();
      setMatches(data.matches);
    };
    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Your Matches</h1>
      <ul>
        {matches.length > 0 ? (
          matches.map((match) => (
            <li key={match.id}>
              <p>{match.name}</p>
              <p>{match.age} years old</p>
              <p>Interests: {match.interests}</p>
            </li>
          ))
        ) : (
          <p>No matches found yet!</p>
        )}
      </ul>
    </div>
  );
}

