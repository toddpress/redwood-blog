import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>HomePage</h1>
        <nav>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
        </nav>
      </header>
      <main>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </main>
    </>
  )
}

export default HomePage
