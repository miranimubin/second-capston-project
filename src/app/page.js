import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './pages/Home/home'

import Script from 'next/script'


export default function pages () {
  return (
    <>
  
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    <HomePage/>
    </>
)
}
