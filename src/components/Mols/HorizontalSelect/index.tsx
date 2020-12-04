import React from 'react';

import Loading from 'components/Atoms/Loading';

import {
  Container, SelectContainer, ButtonContaier, StyledButton,
} from './styles';

interface SelectItems{
  key: string;
  value: string;
}

interface HorizontalSelectProps {
  options: Array<SelectItems>;
  selectedValue?: string;
  isLoading?: boolean;
  onChange(item: SelectItems): void;
}

const HorizontalSelect: React.FC<HorizontalSelectProps> = ({
  options, selectedValue = '', isLoading = false, onChange,
}) => (
  <Container>
    <SelectContainer className="hasHorizontalScroll">
      {!options ? (
        <>
          <ButtonContaier>
            <StyledButton contrast><Loading size={1.6} /></StyledButton>
          </ButtonContaier>
          <ButtonContaier>
            <StyledButton contrast><Loading size={1.6} /></StyledButton>
          </ButtonContaier>
          <ButtonContaier>
            <StyledButton contrast><Loading size={1.6} /></StyledButton>
          </ButtonContaier>
          <ButtonContaier>
            <StyledButton contrast><Loading size={1.6} /></StyledButton>
          </ButtonContaier>
        </>
      ) : (
        <>
          {options.map((option) => (
            <ButtonContaier key={option.key}>
              <StyledButton contrast={selectedValue !== option.key} onClick={() => { onChange(option); }}>{isLoading ? <Loading size={1.6} /> : option.value}</StyledButton>
            </ButtonContaier>
          ))}
        </>
      )}
    </SelectContainer>
  </Container>
);
export default HorizontalSelect;
