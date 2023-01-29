import { CSSProperties, useState } from 'react'
import { useForm } from './hooks/useForm'
import './App.css'

 const styleForm:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  }

  const styleInput:CSSProperties = {
    display: 'block',
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  }



function App() {




//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   })

const {name, email, password} = formData


//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }
  const onSubmit = (e:) => {
    e.preventDefault()
    
  }



  return (
      <div className="App">
     <form style={styleForm} onSubmit={onSubmit}>
    <div>
    <label htmlFor="name">Name</label>
    <input style={styleInput} type="text" id='name' name='name' value={name} onChange={onChange}  />
    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input style={styleInput} type="email" id='email' name='email' onChange={onChange} value={email} />
    </div>
    <div>
    <label htmlFor="password">Password</label>
    <input style={styleInput} type="password" id='password' name='password' value={password} onChange={onChange} />
    </div>

    <button type='submit'>Submit</button>
     </form>


    </div>
  )
}

export default App
