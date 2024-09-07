'use client';

import { useState, useEffect } from 'react';

export default function SwipePage() {
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);

  // Fetch profiles to swipe on (you'll replace this with API fetching)
  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await fetch('/api/profiles'); // This would be an API to fetch profiles
      const data = await res.json();
      setProfiles(data.profiles);
      setCurrentProfile(data.profiles[0]); // Set the first profile for now
    };
    fetchProfiles();
  }, []);

  // Handle swiping logic (you'll expand this)
  const handleSwipe = (direction: 'left' | 'right') => {
    const nextProfile = profiles.find((p) => p.id !== currentProfile.id);
    if (nextProfile) {
      setCurrentProfile(nextProfile);
    }
    // Record swipe in the backend (left or right)
    fetch('/api/swipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId: 'random-id', // Replace this with actual customer ID
        swipedProfileId: currentProfile.id,
        swipeDirection: direction,
      }),
    });
  };

  return (
    <div>
      {currentProfile ? (
        <div>
          <h2>{currentProfile.name}</h2>
          <p>{currentProfile.age} years old</p>
          <p>Interests: {currentProfile.interests}</p>
          <button onClick={() => handleSwipe('left')}>Swipe Left</button>
          <button onClick={() => handleSwipe('right')}>Swipe Right</button>
        </div>
      ) : (
        <p>No profiles available to swipe!</p>
      )}
    </div>
  );
}

