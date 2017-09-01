import * as React from 'react'
import {SHOW_FILTER} from '../utils/global'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={SHOW_FILTER.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_FILTER.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_FILTER.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
