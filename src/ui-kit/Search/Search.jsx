import React from 'react'
import { Input } from 'antd'

import './search.scss'

import { SEARCH_DEFAULT_TEXT } from '../constants'

const { Search } = Input

const Search = () => {
  return (
    <div>
      <Search
        className="ui-kit__search"
        placeholder={SEARCH_DEFAULT_TEXT}
        onSearch={value => console.log(value)}
      />
    </div>
  )
}

export default Search
