import'./MyForm.css'
import {useState} from 'react'

const MyForm = () => {
  // gerenciamento de dados 
    const [ name, setName] = useState ()
    const [email , setEmail] = useState ()
    const [bio,setBio]= useState('')
    const [role,setRole]= useState('')

  return (
    <div class='daniel'>
      {/* criacao de form */}
      <form>
        <div class='asaph'>
           <div class='camila'>
            <div >
              <label htmlFor='name'>Nome:</label>
              <input type= "text"name='name' placeholder='Digite o seu nome '/>
            </div>
            <label>
              {/* label envolvendo input */}
              <span>E-mail:</span>
               <input type='email'name='email'placeholder='Digite seu e-mail '/>
            </label>
            <label>
              <span>Bio:</span>
             <textarea
               name='bio'
               placeholder='Desrição do usuário'
               onChange={(e)=> setBio(e.target.value)}
               value={bio}>
             </textarea>
            </label>
            <label>
              <span>Função no sistema </span>
              <select name='role'onChange={(e)=> setRole(e.target.value)}>
                <option value ='user'>Usuario</option>
                <option value ='Admin'>Adiministrador</option>
                <option value ='editor'>Editor</option>
              </select>
                  <input type='submit'value ='Enviar'/>
            </label>
           </div>
        </div>
        </form>
    </div>
  );
};

export default MyForm