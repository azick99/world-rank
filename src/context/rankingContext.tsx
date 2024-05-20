'use client'
import { createContext, ReactElement, useReducer } from 'react'
import {  reducer } from './rankingReducer'
import { ActionTypes } from './rankingActionTypes'

const initialState = {
  count: 0,
  increment: () => {},
}

export const RankingContext = createContext(initialState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const RankingProvider = ({ children }: ChildrenType): ReactElement => {

  const  [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: ActionTypes.INCREMENT })
  }

  const value = {
    count: state.count,
    increment,
  }
  return (
    <RankingContext.Provider value={value}>{children}</RankingContext.Provider>
  )
}
