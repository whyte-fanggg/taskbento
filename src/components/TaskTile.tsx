import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

interface TaskTileProps {
  title: string
  description: string
  color: string
  onDelete: () => void
  onEdit: () => void
}

const Tile = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 20px;
  padding: 20px 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15),
    -5px -5px 10px rgba(255, 255, 255, 0.6);
  width: 180px; /* increased from 150px */
  height: 180px; /* increased from 150px */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15),
      -3px -3px 8px rgba(255, 255, 255, 0.5);
  }
`

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  word-break: break-word;
  text-align: center;
  margin-bottom: 8px; /* added spacing below title */
`;


const Description = styled.p`
  font-size: 0.85rem;
  color: #555;
  word-break: break-word;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 24px; /* added spacing between buttons */
  justify-content: center;
  margin-top: 10px;
`;


const EditButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`

const TaskTile: React.FC<TaskTileProps> = ({
  title,
  description,
  color,
  onDelete,
  onEdit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Tile color={color}>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <ButtonGroup>
          <EditButton onClick={onEdit}>Edit</EditButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </ButtonGroup>
      </Tile>
    </motion.div>
  )
}

export default TaskTile
