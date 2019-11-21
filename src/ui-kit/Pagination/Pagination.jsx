import React from 'react'
import { Pagination } from 'antd'
import { func, number } from 'prop-types'

import './pagination.scss'

const PaginationKit = ({ setCurrentPage, pageCurrent, totalPage }) => {
  const setCurrentPageHandler = pageIndex => {
    setCurrentPage(pageIndex)
  }

  return (
    <div>
      <Pagination
        simple
        className="ui-kit__pagination"
        onChange={setCurrentPageHandler}
        defaultCurrent={pageCurrent}
        total={totalPage}
      />
    </div>
  )
}

PaginationKit.propTypes = {
  setCurrentPage: func.isRequired,
  pageCurrent: number.isRequired,
  totalPage: number.isRequired,
}

export default PaginationKit
