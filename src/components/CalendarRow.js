import React, { useMemo } from 'react'
import styled from 'styled-components'
import Title from './Title';

var getDaysArray = function () {
    const now = Date.now();
    const result = [];
    for (var i = 0; i < 31; i++) {
        result.push(new Date(now + i * 86400000).getDate())
    }
    return result;
}
export default function () {

    const days = getDaysArray()

    return (
        <Wrapper>
            <Title></Title>
            <CalRowWrapper>
                {days.map((day, idx) => (
                    <Item>{day}</Item>
                ))}
            </CalRowWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    border-bottom: 1px solid #eee;
`
const CalRowWrapper = styled.div`
    display: flex;
    flex: 1;
`
const Item = styled.div`
    flex: 1;
    padding: 10px 0;
    border-left: 1px solid #eee;
    font-size: 12px;
    font-weight: 500;
`