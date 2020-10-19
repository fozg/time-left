import React from 'react'
import styled from 'styled-components'

export default function ({title}) {
    return (
        <TitleWrapper>
            {title}
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    width: 300px;
    background: #fafafa;
    height: 100%;
    display: flex; 
    font-size: 13px;
    padding: 0 10px;
    align-items: center;
`