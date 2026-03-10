import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-4xl'>Hello world </h1>
   <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-shadow'>
    <img className = "w-full h-48 object-cover" src="/elementor-placeholder-image.png" alt="" />
<div className="">
      <h2 classname > Card title </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos obcaecati officiis quod tenetur quidem adipisci, possimus, ei4s aut voluptas ex distinctio voluptates. Laboriosam repudiandae tempora illum adipisci at, obcaecati esse?   </p>
    <button>Click here buy now</button>
</div>
   </div>
    </>
  )
}

export default App
