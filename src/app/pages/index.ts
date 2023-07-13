// import { lazy } from 'react'

// export const MainView = lazy(() => import('./MainView'))
// export const Modal = lazy(() => import('./Modal'))

// lazy load is not working on this freshwork setup so we use the export below instead

export {default as MainView} from './MainView'
export {default as Modal} from './Modal'