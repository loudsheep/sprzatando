import { useState, useEffect } from 'react';

export const useTimeDifference = (createdAt) => {
  const [timeDifference, setTimeDifference] = useState('');

  useEffect(() => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const difference = today.getTime() - createdDate.getTime();

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(difference / (1000 * 60));
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    let monthNames = [
      "sty",
      "lut",
      "mar",
      "kwi",
      "maj",
      "cze",
      "lip",
      "sie",
      "wrz",
      "paź",
      "lis",
      "gru",
    ];

    if (seconds < 60) {
      setTimeDifference(seconds + " sec");
    } else if (minutes < 60) {
      setTimeDifference(minutes + " min");
    } else if (hours < 24) {
      setTimeDifference(hours + " h");
    } else if (days < 4) {
      setTimeDifference(days + " dni");
    } else {
      setTimeDifference(`${createdDate.getDate()} ${monthNames[createdDate.getMonth()]}`);
    }
  }, [createdAt]);

  return timeDifference;
};