function Months({month, setMonth}) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December' 
     ]

    return (
    <>
    <select value={month}
    required
    onChange={(e) => setMonth(e.target.value)}>
   {months.map((_month) => (
            <option value={_month}>{_month}</option>
        ))}
    </select>
    </>
    )
}

export default Months;