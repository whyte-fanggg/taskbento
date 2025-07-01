import React, { useState } from "react"
import styled from "styled-components"
import TaskTile from "./TaskTile"
import TaskForm from "./TaskForm"
import type { Task } from "../App"

interface TaskGridProps {
  tasks: Task[]
  onDelete: (taskId: string) => void
  onUpdate: (taskId: string, title: string, description: string) => void
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  padding: 20px 60px;
`

const TaskGrid: React.FC<TaskGridProps> = ({ tasks, onDelete, onUpdate }) => {
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  return (
    <>
      <Grid>
        {tasks.map((task) => (
          <TaskTile
            key={task.id}
            title={task.title}
            description={task.description}
            color={task.color}
            onDelete={() => onDelete(task.id)}
            onEdit={() => setEditingTask(task)}
          />
        ))}
      </Grid>

      {editingTask && (
        <TaskForm
          onClose={() => setEditingTask(null)}
          onAdd={(title, description) => {
            onUpdate(editingTask.id, title, description)
            setEditingTask(null)
          }}
          initialTitle={editingTask.title}
          initialDescription={editingTask.description}
        />
      )}
    </>
  )
}

export default TaskGrid
