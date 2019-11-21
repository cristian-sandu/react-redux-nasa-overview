import { lazy } from 'react'

export const Home = lazy(() => import('./screens/Home/Home'))
export const ImageGallery = lazy(() =>
  import('./screens/ImageGallery/ImageGallery'),
)
