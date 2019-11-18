import React from 'react'
import { connect } from 'react-redux'

import { setCurrentPage } from 'redux/actions'
import { Pagination } from 'antd'
import './pagination.scss'

const PaginationKit = ({setCurrentPage, pageCurrent}) => {

  const setCurrentPageHandler = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <Pagination
        simple
        className='ui-kit__pagination'
        onChange={setCurrentPageHandler}
        defaultCurrent={pageCurrent}
        total={500}
      />

    </div>
  )
}

const mapDispatchToProps = {
  setCurrentPage
}

// PaginationKit.propTypes = {
// }


export default connect(null, mapDispatchToProps)(PaginationKit)
