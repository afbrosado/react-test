import React, {useEffect, useState} from "react";
import intervalToDuration from 'date-fns/intervalToDuration';
import ALink from "./ALink";


const DateFNSTimer = () => {
  const [seconds, setSeconds] = useState(3610);
  const duration = intervalToDuration({start: 0, end: seconds * 1000});

  const zeroPad = (num) => String(num).padStart(2, '0')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if(seconds === 0) {
      setSeconds(5);
    }
  }, [seconds])

  return (
    <div>
      <h1>Timer with date-fns</h1>
      <p>{`${zeroPad(duration.hours)}h${zeroPad(duration.minutes)}m${zeroPad(duration.seconds)}s`}</p>
      <ALink to="home" className="lazy-media">
        <h2>click</h2>
      </ALink>
    </div>
  );
};

export default DateFNSTimer;
