import React from 'react'
import DropdownClass from './class/DropdownClass'

const links = [
  { label: 'How to name', icon: '🤯' },
  {
    label: 'You know what I mean',
    icon: '😏',
  },
  {
    label: 'Winter is coming',
    icon: '🥶',
  },
  {
    label: 'And deadlines too',
    icon: '😱',
  },
]

function handleLinkClick(index) {
  console.log('clicked link at index', index)
}

function App() {
  return (
    <div className="container">
      <DropdownClass
        toggleIcon={'🤗'}
        toggleLabel="Toggle"
        links={links}
        onLinkClick={handleLinkClick}
      />
    </div>
  )
}

export default App
