import React, { useState } from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.softBlue};
  color: #333;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`

interface TaskFormProps {
  onClose: () => void
  onAdd: (title: string, description: string) => void
  initialTitle?: string
  initialDescription?: string
}

const TaskForm: React.FC<TaskFormProps> = ({
  onClose,
  onAdd,
  initialTitle = "",
  initialDescription = "",
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)

  const handleSubmit = () => {
    if (title.trim() === "") return
    onAdd(title, description)
    onClose()
  }

  return (
    <Overlay>
      <Modal>
        <h2>{initialTitle ? "Edit Task" : "Add Task"}</h2>
        <Input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <Button onClick={handleSubmit}>
            {initialTitle ? "Save" : "Add"}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </Modal>
    </Overlay>
  )
}

export default TaskForm
