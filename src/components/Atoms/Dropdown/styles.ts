import styled, { css } from 'styled-components';

interface DropdownHeaderActionProps {
  open?: boolean;
  hasValue?: boolean;
  textColor?: string;
  arrowColor?: string;
}

interface DropdownHeaderProps {
  isLoading: boolean;
  backgroundColor?: string;
  customRadius?: number;
  customHeight?: number;
}

interface DropDownItemListProps{
  size: string;
}

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 30px;
  flex-wrap: wrap;

  font-family: 'Raleway';
`;

export const DropdownHeader = styled.div<DropdownHeaderProps>`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  border-radius: 4px;
  border-radius: ${(props) => (props.customRadius ? `${props.customRadius}px` : '4px')};

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.customHeight && `${props.customHeight}px`};
  padding: 0 8px;

  border: solid 0.6px inherit;

  transition: border-color 0.4s, box-shadow 0.4s;

  ${(props) => props.customHeight && css`
    padding: 16px;
  `};

  ${(props) => props.isLoading && css`
    pointer-events: none;
    opacity: 0.4;
  `}

  ${(props) => !props.isLoading && css`
    &:hover{
      cursor: pointer;
      box-shadow: 0 .125rem .25rem rgba(0,0,0,.2);
    }
  `}
`;

export const DropdownHeaderTitle = styled.div<DropdownHeaderActionProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    font-size: 14px;
    font-weight: bold;

    ${(props) => props.hasValue && css`
      color: ${props.textColor ? props.textColor : '#fff'}; 
      opacity: 1;
    `};

    ${(props) => !props.hasValue && css`
      color: #fff; 
      opacity: 0.5;
    `};
  }
`;

export const DropdownHeaderAction = styled.div<DropdownHeaderActionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  .chevron{
    transition: 0.4s;
    color: ${(props) => (props.arrowColor ? props.arrowColor : '#fff')};
  }

  ${(props) => props.open && css`
    .chevron{
      transform: rotate(-180deg);
    }
  `}
`;

export const ItemsList = styled.ul<DropDownItemListProps>`
  position: absolute;
  z-index: 999;

  ${(props) => props.size === 'small' && css`
    overflow-y: scroll;
    max-height: 340px;
  `}


  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 30px;

  li{
    list-style-type: none;
    z-index: 1000;

    &:first-of-type {
      > button {
        border-top: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }

    &:last-of-type > button {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    button {
      display: flex;
      justify-content: space-between;
      background-color: white;
      font-size: 16px;
      padding: 15px 20px 15px 20px;
      border: 0;
      border-bottom: 1px solid #ccc;
      width: 100%;
      text-align: left;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;

      transition: background-color 0.4s;

      &:hover, &:focus {
        cursor: pointer;
        font-weight: bold;
        background-color: #ccc;
      }
    }
  }
`;

export const SelectedItems = styled.p`
  background: rgba(0,0,0,0.2);
  height: 20px;

  padding: 0 8px;

  border-radius: 4px;
`;
