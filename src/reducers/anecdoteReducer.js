import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

// const anecdoteSlice = createSlice({
//   name: 'anecdotes',
//   initialState,
//   reducers: {
//     createAnecdote(state, action) {
//       const anecdote = action.payload
//       state.push({
//         anecdote,
//         id: getId()
//       })
//     },
//     getNotification(state, action) {
//       const notification = 'test notification'
//       state.content({
//         notification,
//         id: getId()
//       })
//     }
    
//   }

// })

const reducer = (state = initialState, action) => {
  console.log('i', initialState)
  switch(action.type) {
    case 'ADD_VOTE':
      return state.map((anecdote) =>
        anecdote.id === action.data
          ? {...anecdote, votes: anecdote.votes + 1}
          : anecdote
      );

    case 'NEW_ANECDOTE':
      console.log('a',action.data)
      return [ ...state, action.data ]
    default:
      return state
  }

    
}

export const additionalVote = (anecdote) => {
  return {
    type: 'ADD_VOTE',
    data: anecdote.id
  }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: generateId(),
      votes: 0
    }
  }
}

// export const { createAnecdote, getNotification} = anecdoteSlice.actions
// export default anecdoteSlice.reducer

export default reducer