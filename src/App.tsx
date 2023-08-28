import 'bulma/css/bulma.css'
//se instaló bulma css, la mejor alternativa a bootstrap
import './App.css'
import User,{UserFormState} from './forms/User'
import { useEffect, useState } from 'react'

//se genera un type para verificar de que forma van a recibir los datos, la intersección entre UserFormState y un nuevo id
type User_ = UserFormState & {id:number}
function App() {
  //se declara un useState como un arreglo vacío, de la forma User_, esto para evitar que sea indefinido
  const [users, setUsers] = useState<User_[]>([])

  //se declara la función asíncrona de llamada a la api
  async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data:User_[] = await response.json()
      setUsers(data)
  }

  //va a llamar a la función fetchUsers
  useEffect(()=>{
    fetchUsers()
  },[])

  //.map va a devolver los elementos de la lista actual guardada en users, setUsers. 
  //la segunda parte es para agregar nuevos elementos, lo que hace es que a través de cada submit, genera spread operator de users y el segundo parámetro la actualiza con el nuevo valor (recordad estados inmutables)
  return (
    <div className='App'>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <User handleSubmit={user=>setUsers([...users, {...user, id:Date.now()}])} />
    </div>
  )
}

export default App
