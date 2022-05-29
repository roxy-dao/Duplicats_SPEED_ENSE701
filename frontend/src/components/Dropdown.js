import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Dropdown = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  const onChange = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onChange)}>

      <select {...register('sepractice')}>
        <option value="Moderartor">Moderator</option>
        <option value="Analyst">Analyst</option>
        <option value="Search/Submit">Search/Submit Article</option>
      </select>

      <p>{result}</p>
    </form>
  )
}

export default Dropdown