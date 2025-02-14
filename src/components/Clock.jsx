import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 시간 업데이트
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 컴포넌트가 사라질 때 인터벌 제거
    return () => clearInterval(timer);
  }, []);

  // 시간 포맷
  const formattedTime = time.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24시간 형식
  });

  return (
    <div className="clock">
      <h2>🕒 현재 시각: {formattedTime}</h2>
    </div>
  );
}

export default Clock;
