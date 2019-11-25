import React from 'react'
import styled from 'styled-components'

const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
`

const RecipeList = ({ children }) => <ItemList>{children}</ItemList>

export default RecipeList
