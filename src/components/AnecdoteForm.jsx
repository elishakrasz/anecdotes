import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {

    const dispatch = useDispatch()
    const addAnecdote = e => {
        e.preventDefault()
        const content = e.target.content.value
        console.log('c', content)
        e.target.content.value = ''
        dispatch(createAnecdote(content))
      }
  return (
    <div>
         <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='content'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm