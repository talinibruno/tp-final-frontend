# 🟢 Clon de WhatsApp – Proyecto Final - UTN Frontend

Link de acceso a la web app: https://clon-wsp-frontbt.vercel.app/

**Bruno Talini**  

---

### 📋 Descripción del Proyecto
Este proyecto consiste en un **Clon funcional de WhatsApp** desarrollado con **Vite + React**, como parte del trabajo práctico final de Frontend, desplegado y disponible a través de **Vercel**.  
El objetivo fue aplicar conceptos de **ruteo, manejadores de estados globales, hooks y persistencia de la sesión del usuario**, ampliando la base provista en el repositorio original del curso.

Repositorio base: [GabrielAlberini/base-proyecto-react-999198241](https://github.com/GabrielAlberini/base-proyecto-react-999198241)

---

### 🚀 Funcionalidades implementadas

1. **🔐 Rutas protegidas según sesión: <ProtectedRoutes />**
   - El acceso a `/chat` solo está permitido si el usuario inició sesión correctamente.
   - Si no hay sesión activa, el usuario es redirigido automáticamente al login (`/`).
   - Si el usuario ya inició sesión, no puede volver manualmente al login.
   - Implementado mediante `localStorage`, `Navigate` y `ProtectedRoute`.

2. **⚙️ Ventana emergente (Popup) en el botón Settings**
   - Desde el botón de configuración se abre un **popup o modal** con opciones personalizables.
   - Contiene al menos dos elementos interactivos (por ejemplo, cambiar color de fondo o nombre de usuario).
   - Se controla con `useState` y estilos `position: fixed` para lograr un fondo semitransparente.
   - Incluye botón de cierre funcional.

3. **❓ Página de Ayuda para usuarios (/help)**
   - Nueva ruta `/help` accesible desde el botón de ayuda.
   - Contiene documentación sobre:
     - El funcionamiento general del chat.
     - Tecnologías utilizadas.
     - Posibles mejoras futuras.
   - Componente estático (`Help.jsx`) sin hooks ni contexto.

---

### 🧠 Tecnologías Utilizadas
- **React** (con Estados y con Hooks: `useState`, `useEffect`, `useNavigate`)
- **React Router DOM** (RouterApp y ProtectedRoutes)
- Almacenamiento en **LocalStorage**
- **CSS / Flexbox**
- **Componentes modulares y reutilizables**

---

### ⚙️ Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/talinibruno/tp-final-frontend.git
   ```
2. Ingresar al directorio del proyecto:
   ```bash
   cd tp-final-frontend
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm start
   ```
5. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

---

### 💡 Posibles Mejoras Futuras
- Integración con un backend real para mensajería.
- Autenticación con Firebase o JWT.

---

### 👨‍💻 Autor
**Bruno Talini**  
📧 [talinibruno@gmail.com](mailto:talinibruno@gmail.com)

---

📄 *Proyecto desarrollado con fines educativos para la diplomatura FullStack (TP Final: FrontEnd).*