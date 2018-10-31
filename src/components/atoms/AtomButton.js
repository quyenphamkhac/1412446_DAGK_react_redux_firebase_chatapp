import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid black;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
`

const AtomButton = (props) => (
    <StyledButton
        {...props}
        onClick={props.clicked}
    >
        {props.children}
    </StyledButton>
);

export default AtomButton;