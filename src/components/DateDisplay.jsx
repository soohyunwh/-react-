import PropTypes from 'prop-types';

function DateDisplay({ currentDate }) {
  // 요일 구하기
  const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayName = daysOfWeek[currentDate.getDay()];

  // 날짜 포맷
  const formattedDate = currentDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="date-display">
      <h2>{formattedDate}({dayName})</h2>
    </div>
  );
}

DateDisplay.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateDisplay;
