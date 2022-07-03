import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { additionalVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
//   const anecdotes = useSelector((state) => state.anecdotes);
  const anecdotes = useSelector(state => {
    console.log('sf1', state.filter);
    if (state.filter.length > 2) {
        return state.anecdotes.filter(n => n.content.includes(state.filter))
    } else {
        return state.anecdotes
    }
})

const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes)

  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(additionalVote(anecdote))
    dispatch(setNotification(`You voted ${anecdote.content}`, 5000))
  }

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
