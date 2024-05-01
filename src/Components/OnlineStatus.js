import React, { useState, useEffect } from 'react';

const OnlineStatusIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div className="text-sm mt-2">
      {isOnline ? (
        <p className="text-green-600">🟢 Online</p>
      ) : (
        <p className="text-red-600">🔴 Offline</p>
      )}
    </div>
  );
};

export default OnlineStatusIndicator;
