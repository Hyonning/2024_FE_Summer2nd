import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 1100px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: #000000;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px; /* 아이템 하단에서 간격을 둡니다 */
    height: 2px;
    background: #000000;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover:after {
    opacity: 1;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  padding-left: 700px;
`;

const DropdownButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add this line */

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: white;
  width: 150px; /* Adjust the width */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0; /* Align the dropdown to the right */
`;

const DropdownOption = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#f1f1f1" : "white")};
  display: flex;
  justify-content: space-between; /* Align text and icon */

  &:hover {
    background-color: #ddd;
  }
`;

const Plus = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-left: 20px;
  }

  &:hover {
    color: #080808;
  }
`;

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("이번 주");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <Nav>
      <Menu>
        <MenuItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.5 3.5h4v4" />
              <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
            </g>
          </svg>
          트렌딩
        </MenuItem>
        <MenuItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
            />
          </svg>
          최신
        </MenuItem>
        <MenuItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8l3 3l3-3a4.237 4.237 0 0 0-6 0m-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13"
            />
          </svg>
          피드
        </MenuItem>
      </Menu>
      <Dropdown>
        <DropdownButton onClick={toggleDropdown}>
          {selectedOption} ▼
        </DropdownButton>
        <DropdownContent isOpen={dropdownOpen}>
          <DropdownOption
            onClick={() => handleOptionClick("오늘  ")}
            isSelected={selectedOption === "오늘  "}
          >
            오늘ㅤ
          </DropdownOption>
          <DropdownOption
            onClick={() => handleOptionClick("이번 주  ")}
            isSelected={selectedOption === "이번 주  "}
          >
            이번 주ㅤ
          </DropdownOption>
          <DropdownOption
            onClick={() => handleOptionClick("이번 달  ")}
            isSelected={selectedOption === "이번 달  "}
          >
            이번 달ㅤ
          </DropdownOption>
          <DropdownOption
            onClick={() => handleOptionClick("올해  ")}
            isSelected={selectedOption === "올해  "}
          >
            올해ㅤ
          </DropdownOption>
        </DropdownContent>
      </Dropdown>
      <Plus>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>
      </Plus>
    </Nav>
  );
};

export default NavBar;
