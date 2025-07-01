import React, { useEffect, useState } from "react"
import GlobalStyle from "./styles/globalStyles"
import ThemeProvider from "./components/ThemeProvider"
import Header from "./components/Header"
import TaskGrid from "./components/TaskGrid"
import TaskForm from "./components/TaskForm"
import { db } from "./firebase"

import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore"

export interface Task {
  id: string
  title: string
  description: string
  color: string
}

const taskColors = [
  // Blues & Greens
  "#A8DADC", // Light Teal
  "#BFD8B8", // Soft Mint
  "#C8D8E1", // Soft Blue
  "#D8E2DC", // Pale Sage
  "#D8E2C9", // Sage Green
  "#CAE4DB", // Aqua Mint
  "#BEE3DB", // Frosted Mint
  "#AED9E0", // Pale Aqua
  "#C7CEEA", // Lavender Blue

  // Pinks & Purples
  "#F1D1D0", // Rose Blush
  "#F5C7B8", // Soft Peach
  "#F6D6AD", // Light Apricot
  "#F4D1AE", // Pastel Apricot
  "#E2CFC4", // Warm Taupe
  "#E0BBE4", // Lilac Mist
  "#D2A69E", // Clay Rose
  "#EAD1DC", // Rose Quartz
  "#F0D9E7", // Ballet Pink

  // Yellows & Beiges
  "#F9EBC8", // Lemon Cream
  "#FFF1BD", // Light Lemon
  "#F7E1AE", // Buttercream
  "#F5E1A4", // Soft Mustard
  "#EDE3D1", // Warm Beige
  "#F1E3D3", // Cream
  "#F6EAC2", // Vanilla
  "#E4C29E", // Golden Beige

  // Corals & Oranges
  "#F4B6C2", // Pastel Coral
  "#FACBAA", // Soft Coral Peach
  "#FBC4AB", // Peach
  "#FFD8BE", // Light Peach

  // Grays & Neutrals
  "#E6E6FA", // Lavender Gray
  "#F5F5F5", // Light Gray
  "#FCFCF8", // Neutral Background
  "#D3D3D3", // Light Silver
  "#ECECEC", // Mist

  // Additional Mints & Teals
  "#B9FBC0", // Pastel Mint
  "#A0E7E5", // Pastel Teal
  "#B5EAD7", // Pale Mint
  "#C6F1E7", // Soft Mint Ice
]

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  const tasksCollection = collection(db, "tasks")

  // Fetch tasks in real-time
  useEffect(() => {
    const fetchTasks = async () => {
      const snapshot = await getDocs(tasksCollection)
      const fetchedTasks: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        color: doc.data().color || "#EDE3D1",
      }))
      setTasks(fetchedTasks)
    }

    fetchTasks()
  })

  const handleAddTask = async (title: string, description: string) => {
    const randomColor =
      taskColors[Math.floor(Math.random() * taskColors.length)]
    await addDoc(tasksCollection, {
      title,
      description,
      color: randomColor,
    })
  }

  const handleUpdateTask = async (
    taskId: string,
    title: string,
    description: string
  ) => {
    const taskDoc = doc(db, "tasks", taskId)
    await updateDoc(taskDoc, { title, description })
  }

  const handleDeleteTask = async (taskId: string) => {
    const taskDoc = doc(db, "tasks", taskId)
    await deleteDoc(taskDoc)
  }

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header onAddClick={() => setShowForm(true)} />
      {showForm && (
        <TaskForm
          onClose={() => setShowForm(false)}
          onAdd={(title, description) => {
            handleAddTask(title, description)
            setShowForm(false)
          }}
        />
      )}
      <TaskGrid
        tasks={tasks}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    </ThemeProvider>
  )
}

export default App
