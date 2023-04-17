import React from 'react';
import Upload from './Upload';
import Options from './Options';
import styled from 'styled-components';

const SelectionSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: 30%;
`;
function Selection() {
  return (
    <SelectionSection>
        <Upload/>
        <Options/>
    </SelectionSection>
  )
}

export default Selection