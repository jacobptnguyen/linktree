import { useState } from 'react'
import { tree } from './tree.js'
import avatar from './avatar.jpg'

function LinkNode({ node, className }) {
  return (
    <a className={`node ${className}`} href={node.url} target="_blank">
      {node.title}
    </a>
  )
}

export default function App() {
  // index.html already picked the starting theme before React loaded.
  const [theme, setTheme] = useState(document.documentElement.dataset.theme)

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next // the CSS swaps colors based on this
    localStorage.setItem('theme', next) // remembered for the next visit
    setTheme(next) // updates the button label
  }

  return (
    <main>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>

      <header>
        <h1>Jacob Nguyen</h1>
        <p>Gen AI + full stack developer. UC Davis CS '26.</p>
      </header>

      <nav className="tree" aria-label="Links">
        {/* Lines go from node center to node center. The grid has 4 columns and 3 rows,
            so centers sit at x = 12.5%, 25%, 50%, 75%, 87.5% and y = 16.67%, 50%, 83.33%. */}
        <svg className="edges" aria-hidden="true">
          <line x1="50%" y1="16.67%" x2="25%" y2="50%" />
          <line x1="50%" y1="16.67%" x2="75%" y2="50%" />
          <line x1="25%" y1="50%" x2="12.5%" y2="83.33%" />
          <line x1="75%" y1="50%" x2="87.5%" y2="83.33%" />
        </svg>

        <img className="node root" src={avatar} alt="Jacob Nguyen" />
        <LinkNode node={tree.left} className="left" />
        <LinkNode node={tree.right} className="right" />
        <LinkNode node={tree.left.left} className="left-left" />
        <LinkNode node={tree.right.right} className="right-right" />
      </nav>
    </main>
  )
}
