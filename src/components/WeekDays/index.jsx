const WeekDay = ({ index }) => {

    const DayNames = {
        1: 'Пн',
        3: 'Ср',
        5: 'Пт',
    }

    return (
        <div className="contribution__week-days">
            {DayNames[index]}
        </div>
    )
}

export default WeekDay