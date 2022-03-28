import React from 'react';
import styled from 'styled-components';

const NewStyleCharacter = styled.div`
    margin: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    color: blue;
    background-color: purple;

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
    }
`

const StyleCharacter = (props) => {
    return (
        <NewStyleCharacter>
            <h3>{props.character.name}</h3>
        </NewStyleCharacter>
    )
}

export default StyleCharacter;