import { useState } from 'react'
import { useForm } from 'react-hook-form'

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Title" />
      <p>
        <input {...register('authors')} placeholder="Authors" />
      </p>
      <p>
        <input {...register('source')} placeholder="Source" />
      </p>
      <p>
        <input {...register('pubyear')} placeholder="Publication Year" />
      </p>
      <p>
        <input {...register('doi')} placeholder="DOI" />
      </p>
      <p>
        <input {...register('claim')} placeholder="Claim" />
      </p>
      <p>
        <input {...register('evidence')} placeholder="Evidence" />
      </p>

      <select {...register('sepractice')}>
        <option value="">Select SE Practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  )
}

export default SubmissionForm