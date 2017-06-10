var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1 aria-live="polite">Accessibility and dynamic content</h1>
                <p>Demos</p>
            </div>
        )
    }
}

module.exports = Home;