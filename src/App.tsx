import { useEffect, useState } from "react"
import "./App.css"
import logo from "./assets/careforge-logo.svg"

type CareNote = {
  category: string
  text: string
  createdAt: string
}

function App() {
  const [note, setNote] = useState("")
  const [category, setCategory] = useState("General")
  const [savedNotes, setSavedNotes] = useState<CareNote[]>(() => {
    const storedNotes = localStorage.getItem("careforge-notes")

    if (storedNotes) {
      return JSON.parse(storedNotes)
    }

    return [
      {
        category: "Medication",
        text: "Medication reminder: Blood pressure medication taken at 8:00 AM.",
        createdAt: new Date().toLocaleString(),
      },
    ]
  })

  useEffect(() => {
    localStorage.setItem(
      "careforge-notes",
      JSON.stringify(savedNotes)
    )
  }, [savedNotes])

  function saveNote() {
    if (note.trim() !== "") {
      const newNote: CareNote = {
        category,
        text: note,
        createdAt: new Date().toLocaleString(),
      }

      setSavedNotes([newNote, ...savedNotes])
      setNote("")
    }
  }

  return (
    <main className="app-shell">
      <section className="brand-hero">
        <div className="brand-lockup">
          <img src={logo} alt="CareForge Studio logo" className="brand-logo" />

          <div>
            <p className="eyebrow">Caregiver Readiness Edition</p>
            <h1>CareForge Studio</h1>
            <p className="tagline">
              Turn caregiving chaos into organized readiness.
            </p>
          </div>
        </div>

        <p className="brand-summary">
          A local-first caregiving organization suite that helps family and
          independent caregivers organize medications, appointments, providers,
          notes, documents, and emergency information into clear, printable care
          packets.
        </p>
      </section>

      <section className="promise-card">
        <h2>Built for the people who didn’t train for caregiving, but showed up anyway.</h2>
      </section>

      <section className="dashboard-grid">
        <article className="status-card">
          <h2>Current Status</h2>

          <ul>
            <li>Application shell running</li>
            <li>React environment active</li>
            <li>Branded care notes enabled</li>
          </ul>
        </article>

        <article className="care-card">
          <h2>Add Care Note</h2>

          <label htmlFor="category">Category</label>
          <select
            id="category"
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

          <label htmlFor="care-note">Care Note</label>
          <textarea
            id="care-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter a care note..."
            className="note-input"
          />

          <button onClick={saveNote} className="save-button">
            Save Note
          </button>
        </article>

        <article className="notes-card">
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
        </article>
      </section>

      <footer className="trust-bar">
        <span>Local-first</span>
        <span>Offline capable</span>
        <span>Private by design</span>
        <span>No forced accounts</span>
      </footer>
    </main>
  )
}

export default App
