import { useState } from "react"
import "./App.css"

type CareNote = {
  category: string
  text: string
  createdAt: string
}

function App() {
  const [note, setNote] = useState("")
  const [category, setCategory] = useState("General")
  const [savedNotes, setSavedNotes] = useState<CareNote[]>([
    {
      category: "Medication",
      text: "Medication reminder: Blood pressure medication taken at 8:00 AM.",
      createdAt: new Date().toLocaleString(),
    },
  ])

  function saveNote() {
    if (note.trim() !== "") {
      const newNote: CareNote = {
        category: category,
        text: note,
        createdAt: new Date().toLocaleString(),
      }

      setSavedNotes([newNote, ...savedNotes])
      setNote("")
    }
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">CareForge Studio</p>

        <h1>Caregiving Companion Suite</h1>

        <p className="lede">
          Tier 1 foundation shell successfully loaded.
        </p>

        <div className="status-panel">
          <h2>Current Status</h2>

          <ul>
            <li>Application shell running</li>
            <li>React environment active</li>
            <li>Timestamped care notes enabled</li>
          </ul>

          <div className="care-card">
            <h2>Add Care Note</h2>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option>General</option>
            <option>Medication</option>
            <option>Meal</option>
            <option>Activity</option>
            <option>Observation</option>
          </select>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter a care note..."
              className="note-input"
            />

            <button onClick={saveNote} className="save-button">
              Save Note
            </button>

            <h2>Saved Notes</h2>

            <ul className="note-list">
              {savedNotes.map((savedNote, index) => (
                <li key={index}>
                  <strong>
                    [{savedNote.category}] {savedNote.createdAt}
                  </strong>
                  <br />
                  {savedNote.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
