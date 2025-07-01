import React from "react"
import styled from "styled-components"

interface HeaderProps {
  onAddClick: () => void;
}


const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`

const AddButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.softBlue};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <HeaderContainer>
      <Logo>🗂️ Taskbento</Logo>
      <AddButton onClick={onAddClick}>+ Add Task</AddButton>
    </HeaderContainer>
  )
}

export default Header
