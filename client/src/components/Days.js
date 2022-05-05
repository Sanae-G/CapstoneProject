function Days({day, setDay}) {

    const days = [
       'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' 
    ]

    return (
    <>
    <select value={day}
    required
    onChange={(e) => setDay(e.target.value)}>

     {days.map((_day) => (
            <option value={_day}>{_day}</option>
        ))}
    </select>
    </>
    )
}

export default Days;