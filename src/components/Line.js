import React from 'react'
import styled from 'styled-components'
import ChartLine from './ChartLine'
import Title from './Title'

export default function ({ title, ...rest }) {
    return (
        <LineWrapper>
            <Title title={title}/>
            <ChartWrap>
            <ChartLine {...rest} />
            </ChartWrap>
        </LineWrapper>
    )
}

const LineWrapper = styled.div`
    border-bottom: 1px solid #eee;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
`
const ChartWrap = styled.div`
    flex: 1;
`