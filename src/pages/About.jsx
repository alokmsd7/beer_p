import "../sassStyles/main.scss"

export default function About() {
    return (
        <nav className="about-container">
            <h3>Developed by:</h3>
            <ul>
                <li>Jordan Bortner</li>
                <li>Corey Loftus</li>
            </ul>
            <h4>for their Software Engineering Immersive Remote</h4>
            <h4>October 31, 2022 cohort</h4>
            <h3>with General Assembly</h3>
            <h3><a href="https://github.com/jordbort/project-2-brewery-app" target="_blank" rel="noreferrer noopener">Check out the Github Repo here!</a></h3>
            <h4>Made using the following technologies:</h4>
            <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <h4>Made possible thanks to the following APIs and resources:</h4>
            <ul>
                <li><a href="https://www.openbrewerydb.org" target="_blank" rel="noreferrer noopener">Open Brewery DB</a></li>
                <li><a href="https://leafletjs.com" target="_blank" rel="noreferrer noopener">Leaflet.js</a></li>
                <li><a href="https://react-leaflet.js.org" target="_blank" rel="noreferrer noopener">React Leaflet</a></li>
                <li><a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer noopener">OpenStreetMap</a></li>
                <li><a href="https://fontawesome.com/" target="_blank" rel="noreferrer noopener">Font Awesome</a></li>
            </ul>
            <h3>Please search responsibly.</h3>
            <h3>Cheers!</h3>
        </nav>
    )
}