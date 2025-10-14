import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const { users, setSelectedUser } = useChat()
  const [usersToRender, setUsersToRender] = useState(users)

  const navigate = useNavigate()

  // 🔄 Cada vez que cambien los usuarios globales, actualizamos la lista a renderizar
  useEffect(() => {
    setUsersToRender(users)
  }, [users])

  // 🔍 Filtro por búsqueda
  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    )
    setUsersToRender(result)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={handleChange}
        />

        {usersToRender.length === 0 && (
          <p className="search-result">No search found...</p>
        )}

        <ul className="user-list">
          {usersToRender.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user.id)}
              className="user"
            >
              <img
                className="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
              />
              <div className="user-info">
                <strong>
                  <span
                    style={{
                      color: user.status === "online" ? "green" : "red",
                      marginRight: "3px",
                    }}
                  >
                    •
                  </span>
                  {user.name}
                </strong>
                <small>
                  {user.status === "offline" ? user.lastSeen : "online"}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>


      <div className="log-out" >
        <button onClick={handleLogout}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
          </svg>
          <p>Cerrar Sesión</p>
        </button>
      </div>

    </div>

  )
}
