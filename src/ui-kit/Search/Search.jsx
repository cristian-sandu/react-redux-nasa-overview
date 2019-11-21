import React from 'react'
import { func } from 'prop-types'
import { Input } from 'antd'

import { SEARCH_DEFAULT_TEXT } from '../constants'
import './search.scss'

const { Search } = Input

const SearchKit = ({ setSearchWord }) => {
  const setCurrentYears = value => {
    setSearchWord(value)
  }

  return (
    <div>
      <Search
        className="ui-kit__search"
        placeholder={SEARCH_DEFAULT_TEXT}
        onSearch={setCurrentYears}
      />
    </div>
  )
}

SearchKit.propTypes = {
  setSearchWord: func.isRequired,
}

export default SearchKit
