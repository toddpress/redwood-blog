import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <h2>About</h2>
        <nav>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
        </nav>
      </header>
      <main>
        <p>
          Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
        </p>
        <p>
          My default route is named <code>about</code>, link to me with `
          <Link to={routes.about()}>About</Link>`
        </p>
      </main>
    </>
  )
}

export default AboutPage
