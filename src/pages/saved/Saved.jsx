import MovieView from '@/components/movie-view/MovieView'
import { useStateValue } from '@/context'
import React from 'react'

const Saved = () => {
  const [state] = useStateValue()

  return (
    <div>
      <MovieView movies={state.saved}/>
    </div>
  )
}

export default Saved