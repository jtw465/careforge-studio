import { useState } from "react"
import "./App.css"

type CareNote = {
  text: string
  createdAt: string
}

function App() {
  const [note, setNote] = useState("")
  const [savedNotes, setSavedNotes] = useState<CareNote[]>([
    {
      text: "Medication reminder: Blood pressure medication taken at 8:00 AM.",
      createdAt: new Date().toLocaleString(),
    },
  ])

  function saveNote() {
    if (note.trim() !== "") {
      const newNote: CareNote = {
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
                  <strong>{savedNote.createdAt}</strong>
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
