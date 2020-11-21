import React, {
  useState, useCallback, useRef,
} from 'react';
import { FaChevronDown, FaRegDotCircle } from 'react-icons/fa';

import {
  DropdownWrapper,
  DropdownHeader,
  DropdownHeaderTitle,
  DropdownHeaderAction,
  ItemsList,
  SelectedItems,
} from './styles';

interface Item {
  key: string;
  value: string;
}

interface DropdownProps {
  title: string;
  items: Array<Item>;
  multiSelect?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title, items = [], multiSelect = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<Item[]>([]);

  const dropdownContentWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownContentWrapperRef.current && !dropdownContentWrapperRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  const handleOnClick = useCallback((item: Item) => {
    if (!selection.some((current) => current.key === item.key)) {
      if (!multiSelect) {
        setSelection([item]);
      } else {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.key !== item.key);
      setSelection([...selectionAfterRemoval]);
    }
    setOpen(false);
  }, [multiSelect, selection]);

  const isItemSelected = useCallback((item: Item) => selection.find((current) => current.key === item.key), [selection]);

  return (
    <DropdownWrapper ref={dropdownContentWrapperRef}>
      <DropdownHeader
        tabIndex={0}
        role="button"
        onKeyPress={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
      >
        <DropdownHeaderTitle hasValue={selection.length > 0}>
          {!multiSelect && (
            <p>{selection.length > 0 ? selection[0].value : title}</p>
          )}
          {multiSelect && (
            selection.length > 0 ? selection.map((item) => <SelectedItems key={item.key}>{item.value}</SelectedItems>) : <p>{title}</p>
          )}
        </DropdownHeaderTitle>
        <DropdownHeaderAction open={open}>
          <FaChevronDown className="chevron" size={14} />
        </DropdownHeaderAction>
      </DropdownHeader>
      {open && (
        <ItemsList>
            {items.map((item) => (
              <li key={item.key}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span>{item.value}</span>
                  <span>{isItemSelected(item) && <FaRegDotCircle size={10} />}</span>
                </button>
              </li>
            ))}
        </ItemsList>
      )}

    </DropdownWrapper>
  );
};

export default Dropdown;
