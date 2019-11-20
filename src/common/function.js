import { ITEMS_PER_PAGES } from './constants'

// Processing of images from array
export function outImage(elements) {
  return elements.flatMap(element => element.links)
}

// Calculate total pages
export function totalPage(items) {
  return items / ITEMS_PER_PAGES
}

// Get current year
export function getYear() {
  return new Date().getFullYear()
}

export default null
