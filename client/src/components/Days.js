import styled from 'styled-components';

function Days({day, setDay}) {

    const days = [
       'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' 
    ]

    return (
    <>
    <SelectStyle value={day}
    required
    onChange={(e) => setDay(e.target.value)}>
        <option value='' disabled selected hidden>Day</option>

     {days.map((_day) => (
            <option value={_day}>{_day}</option>
        ))}
    </SelectStyle>
    </>
    )
}

export default Days;

const SelectStyle = styled.select`
    background-color: #F0D9FF;
    border-radius: 5px;
    border: none;
`;