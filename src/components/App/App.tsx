import WidgetMeteo from '../WidgetMeteo/WidgetMeteo'
import './App.css'

function App() {
  console.log(import.meta.env.MODE)

  return (
    <div>
      <h2>Bienvenue sur le widget météo de Sylvia</h2>
      <WidgetMeteo city="Saint-Etienne" zipcode="42000" />
      <WidgetMeteo city="Ivry-sur-Seine" zipcode="94200" />
    </div>
  )
}

export default App
