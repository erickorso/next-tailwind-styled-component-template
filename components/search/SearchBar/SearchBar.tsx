'use client'
import SearchManufacturer from './SearchManufacturer'
import { SearchBarStyled } from './style'
import {useState} from 'react'

const SearchBar = () => {
  const [manuf, setManufac] = useState('')

  const handleSubmit = () => {}

  return (
    <SearchBarStyled className="search-bar" onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer />
      </div>
    </SearchBarStyled>
  )
}

export default SearchBar
