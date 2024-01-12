import "./styles.css";

export default function App() {
  const [newItem, SetNewItem] = useState ("")
  const [todos, setTodos] = useState([])

  function handleSubmlt(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
      ...currentTodos,
      { id: crypto.randomUUID(), text: newItem, completed: false },
      ],
  })
  }

  return (
  <>
  <form onSubmit={handleSubmlt} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value = {newItem}
      onChange={e => setNewItem(e.target.value)}
      type="text"
      id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">To Do List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        Item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  );
}
