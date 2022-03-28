// Write your Character component here
import React from 'react';
import styled from 'styled-components';

import StyleCharacter from './StyleCharacter';

const StyledChar = styled.div`
    display: flex;
    flex-flow:column wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
`

const Character = (props) => {
    return (
        <StyledChar>
            { props.characters.map(char => (
                <StyleCharacter character={char} key={char.name} />
            ))}
        </StyledChar>
    )
}

export default Character;