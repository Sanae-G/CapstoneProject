import styled from 'styled-components';

function Months({ month, setMonth }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <SelectStyle value={month} required onChange={e => setMonth(e.target.value)}>
        <option value="" disabled>
          Month
        </option>
        {months.map(_month => (
          <option key={_month} value={_month}>{_month}</option>
        ))}
      </SelectStyle>
    </>
  );
}

export default Months;

const SelectStyle = styled.select`
  background-color: #bfa2db;
  border-radius: 5px;
  border: none;
`;
