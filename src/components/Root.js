import React, { Component } from 'react';
import CalendarRow from './CalendarRow';
import Line from './Line';

const tasks = [
    { title: "Testing number 1", end: new Date("10/23/2020"), backgroundColor: "#009688" },
    { title: "Testing number 2", end: new Date("10/29/2020"), backgroundColor: "#3f51b5" },
    { title: "Hello world", end: new Date("10/23/2020"), backgroundColor: "#2196f3" },
    { title: "Hello world", end: new Date("11/01/2020"), backgroundColor: "#4caf50" },
    { title: "Hello world", end: new Date("11/06/2020"), backgroundColor: "#ff5722" },
    { title: "Hello world", end: new Date("11/10/2020"), backgroundColor: "#ff9800" },
]


const TOTAL = 2678400000;

export default class App extends Component {

    render() {
        return (
            <div width={window.innerWidth} height={window.innerHeight}>
                <CalendarRow></CalendarRow>
                {tasks.map((item, idx) =>
                    <Line key={idx} title={item.title} backgroundColor={item.backgroundColor} width={(item.end.valueOf() - new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/2020`)) / TOTAL * 100 + "%"} {...item}
                    />
                )}
            </div>
        );
    }
}

