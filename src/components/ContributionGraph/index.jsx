import Cell from '../Cell';
import Month from '../Month';
import WeekDay from '../WeekDays';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './index.scss'

const ContributionGraph = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dpg.gg/test/calendar.json');
                const jsonData = await response.json();
                setData(jsonData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    let cells = Array.from(new Array(357))
    console.log(cells.length);
    let weekDays = Array.from(new Array(7))
    let month = Array.from(new Array(12))

    console.log(data);

    return (
        <div className="contribution">
            <div className="container">
                <div className="contribution__month">
                    {
                        month.map((_, index) => <Month key={index} index={index} />)
                    }
                </div>
                <div className="contribution__body">
                    <div className="contribution__week">
                        {
                            weekDays.map((_, index) => <WeekDay key={index} index={index} />)
                        }
                    </div>
                    <div className="contribution__cells" >
                        {
                            cells.map((_, index) => <Cell key={index} />)
                        }
                    </div >
                </div>

                <div className="contribution__degree">
                    <div className="contribution__degree-text">Меньше</div>
                    <div className="contribution__degree-cells">
                        <div className="contribution__degree-cell"></div>
                        <div className="contribution__degree-cell cell-2"></div>
                        <div className="contribution__degree-cell cell-3"></div>
                        <div className="contribution__degree-cell cell-4"></div>
                        <div className="contribution__degree-cell cell-5"></div>
                    </div>
                    <div className="contribution__degree-text">Больше</div>
                </div>


                {/* сделал как получилось */}
                <div className="contribution__data">
                    {Object.entries(data).map(([dateString, value]) => {
                        const date = new Date(dateString);
                        const formattedDate = format(date, 'dd.MM.yyyy');

                        let backgroundClass;
                        if (value >= 1 && value <= 9) {
                            backgroundClass = 'cell-2';
                        } else if (value >= 10 && value <= 19) {
                            backgroundClass = 'cell-3';
                        } else if (value >= 20 && value <= 29) {
                            backgroundClass = 'cell-4';
                        } else {
                            backgroundClass = 'cell-5';
                        }

                        return (
                            <div className={`contribution__data-item ${backgroundClass}`} key={dateString}>
                                {formattedDate}: {value}
                            </div>
                        );
                    })}
                </div>

            </div>


        </div>

    )
}

export default ContributionGraph