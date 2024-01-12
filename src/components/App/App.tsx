import WidgetMeteo from '../WidgetMeteo/WidgetMeteo'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h2>Bienvenue sur le météo widget de Sylvia</h2>
        <WidgetMeteo city="Saint-Etienne" />
        <WidgetMeteo city="Ivry-sur-Seine" />
      </div>
    </>
  )
}

export default App
