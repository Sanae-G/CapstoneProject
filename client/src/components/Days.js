import styled from 'styled-components';

function Days({ day, setDay }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <>
      <SelectStyle value={day} required onChange={e => setDay(e.target.value)}>
        <option value="" disabled>
          Day
        </option>

        {days.map(_day => (
          <option key={_day} value={_day}>{_day}</option>
        ))}
      </SelectStyle>
    </>
  );
}

export default Days;

const SelectStyle = styled.select`
  background-color: #f0d9ff;
  border-radius: 5px;
  border: none;
`;
