import React, { useEffect, useRef, useState } from 'react';


const Icon = ({ isOpen }) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none" className={isOpen ? 'translate' : ''}>
        <path d="M0.5 1L4.5 5L8.5 1" stroke="#56606D"/>
      </svg>
  );
};

const CloseIcon = () => {
  return (
      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
  );
};



const SelectDropdown = ({ placeHolder, options, isMulti, onChange, align }) => {
  const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
      setSearchValue("");
      if (showMenu && searchRef.current) {
          searchRef.current.focus();
      }
  }, [showMenu]);

  useEffect(() => {
      const handler = (e) => {
          if (inputRef.current && !inputRef.current.contains(e.target)) {
              setShowMenu(false);
          }
      };

      window.addEventListener("click", handler);
      return () => {
          window.removeEventListener("click", handler);
      };
  });

  const handleInputClick = (e) => {
      setShowMenu(!showMenu);
  };

  const getDisplay = () => {
      if (!selectedValue || selectedValue.length === 0) {
          return placeHolder;
      }
      if (isMulti) {
          return (
              <div className="dropdown-tags flex flex-wrap gap-1">
                  {
                      selectedValue.map((option, index) => (
                          <div key={`${option.value}-${index}`} className="dropdown-tag-item bg-slate-300 text-white text-xs font-medium py-1 px-1 flex items-center">
                              {option.label}
                              <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close flex items-center ml-1" >
                                  <CloseIcon />
                              </span>
                          </div>
                      ))
                  }
              </div>
          );
      }
      return selectedValue.label;
  };

  const removeOption = (option) => {
      return selectedValue.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
      e.stopPropagation();
      const newValue = removeOption(option);
      setSelectedValue(newValue);
      onChange(newValue);
  };

  const onItemClick = (option) => {
      let newValue;
      if (isMulti) {
          if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
              newValue = removeOption(option);
          } else {
              newValue = [...selectedValue, option];
          }
      } else {
          newValue = option;
      }
      setSelectedValue(newValue);
      onChange(newValue);
  };

  const isSelected = (option) => {
      if (isMulti) {
          return selectedValue.filter((o) => o.value === option.value).length > 0;
      }

      if (!selectedValue) {
          return false;
      }

      return selectedValue.value === option.value;
  };

  const getOptions = () => {
      if (!searchValue) {
          return options;
      }

      return options.filter(
          (option) =>
              option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
      );
  };

  return (
      <div className="custom--dropdown-container bg-gray-secondary-60 text-left relative rounded-full cursor-pointer">

          <div ref={inputRef} onClick={handleInputClick} className="dropdown-input py-2 pl-18 pr-4 flex items-center justify-between gap-3 text-13 font-medium leading-5 text-dark-body">
              <div className={`dropdown-selected-value ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
              <div className="dropdown-tools">
                  <div className="dropdown-tool transition-all">
                      <Icon isOpen={showMenu} />
                  </div>
              </div>
          </div>

          {
              showMenu && (
                  <div className={`dropdown-menu min-w-max p-2 absolute right-0 transform border rounded-xl overflow-auto bg-slate-100 z-50 max-w-xs min-h-[50px] alignment--${align || 'auto'}`}>
                      {
                          getOptions().map((option) => (
                              <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item py-2 px-3 cursor-pointer rounded-xl transition-colors ${isSelected(option) && "selected"}`} >
                                  {option.label}
                              </div>
                          ))
                      }
                  </div>
              )
          }
      </div>
  );
}

export default SelectDropdown;