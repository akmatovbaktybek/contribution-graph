const Month = ({ index }) => {
    const MonthNames = {
        1: 'Апр.',
        2: 'Май',
        3: 'Июнь',
        4: 'Июль',
        5: 'Авг.',
        6: 'Сент.',
        7: 'Окт.',
        8: 'Нояб.',
        9: 'Дек.',
        10: 'Янв.',
        11: 'Февр.',
        12: 'Март',
    }
    return (
        <div className="contribution__month-name">
            {MonthNames[index]}
        </div>
    )
}

export default Month