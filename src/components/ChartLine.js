import React from 'react'
import styled from 'styled-components'

function getDayLeft(end) {
    const timeLeft = end.valueOf() - new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/2020`);
    const miliseconPerDay = 86400000;
    return Math.round(timeLeft / miliseconPerDay);
}

export default function ({ width, backgroundColor, end }) {
    return (
        <Chartline style={{ width, backgroundColor }} >
            <DayLeft>{getDayLeft(end)} day left</DayLeft>
        </Chartline>
    )
}

const Chartline = styled.div`
    background: #000;
    border-radius: 30px;
    height: 12px;
    align-items: center;
    position: relative;
`
const DayLeft = styled.div`
    font-weight: 500;
    font-size: 12px;
    position: absolute;
    left: 100%;
    width: 70px;
    top: -2px;
`