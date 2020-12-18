import React, { useEffect, useRef } from 'react';

import { useAuth } from 'hooks/auth';

import Loading from 'components/Atoms/Loading';

import {
  Container, SelectContainer, ButtonContaier, StyledButton,
} from './styles';

interface SelectItems {
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
  options = [], selectedValue = '', isLoading = false, onChange,
}) => {
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selectedButtonOptionRef = useRef<HTMLDivElement>(null);
  const buttonOptionRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();

  useEffect(() => {
    if (selectedValue === user.levelid
        && selectContainerRef.current && selectContainerRef.current.scrollLeft < 10) {
      const selectedPosition = selectedButtonOptionRef.current?.getBoundingClientRect();
      if (selectedPosition) {
        selectContainerRef.current?.scrollTo(0, 0);
        selectContainerRef.current?.scrollTo(selectedPosition.x - 180, 0);
      }
    }
  }, [selectedValue, selectContainerRef, selectedButtonOptionRef, user.levelid]);

  return (
    <Container>
      <SelectContainer className="hasHorizontalScroll" ref={selectContainerRef}>
        {options.length < 1 ? (
          <>
            <ButtonContaier>
              <StyledButton enabled={false} contrast shimmer />
            </ButtonContaier>
            <ButtonContaier>
              <StyledButton enabled={false} contrast shimmer />
            </ButtonContaier>
            <ButtonContaier>
              <StyledButton enabled={false} contrast shimmer />
            </ButtonContaier>
            <ButtonContaier>
              <StyledButton enabled={false} contrast shimmer />
            </ButtonContaier>
          </>
        ) : (
          <>
            {options.map((option) => (
              <ButtonContaier key={option.key} ref={selectedValue === option.key ? selectedButtonOptionRef : buttonOptionRef}>
                <StyledButton contrast={selectedValue !== option.key} onClick={() => { onChange(option); }}>{isLoading ? <Loading size={1.6} /> : option.value}</StyledButton>
              </ButtonContaier>
            ))}
          </>
        )}
      </SelectContainer>
    </Container>
  );
};
export default HorizontalSelect;
