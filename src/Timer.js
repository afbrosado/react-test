import React, {useEffect, useState} from 'react';
import moment from "moment";

const Timer = () => {

  const [seconds, setSeconds] = useState(5);
  const duration = moment.duration(seconds, 'seconds');

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
      <h1>Timer with momentjs</h1>
      <p>{`${duration.minutes()}m${duration.seconds()}s`}</p>
    </div>
  );
};

export default Timer;
