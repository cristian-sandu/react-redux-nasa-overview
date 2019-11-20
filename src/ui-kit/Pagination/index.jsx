import React from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'antd'
import { number } from 'prop-types'

import { setCurrentPage } from 'redux/actions'

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

const mapDispatchToProps = {
  setCurrentPage,
}

PaginationKit.propTypes = {
  setCurrentPage: number.isRequired,
  pageCurrent: number.isRequired,
  totalPage: number.isRequired,
}

export default connect(
  null,
  mapDispatchToProps,
)(PaginationKit)
