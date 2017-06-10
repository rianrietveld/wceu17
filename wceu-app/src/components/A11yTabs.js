// https://medium.com/@andreasmcd/creating-an-accessible-tab-component-with-react-24ed30fde86a

var React = require('react');

const Tab = ({children, index, isSelected}) => (
    <div id={`tabpanel_${index}`}
         name={`tabpanel_${index}`}
         role="tabpanel"
         aria-labelledby={`tab_${index}`}
         aria-hidden={!isSelected()}
    >{children}</div>
)

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.tabs = props.children
        this.state = {selected: this.tabs.find(tab => tab.props.selected) || this.tabs[0]}
        this.selectTab = this.selectTab.bind(this)
        this.previousTab = this.previousTab.bind(this)
        this.nextTab = this.nextTab.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyup = this.handleKeyup.bind(this)
    }
    componentDidUpdate() {
        this.activeLink.focus()
    }
    selectTab (tab) {
        this.setState({selected: tab})
    }
    previousTab (tab) {
        const index = this.tabs.indexOf(tab)
        if (index > 0) this.selectTab(this.tabs[index - 1])
    }
    nextTab (tab) {
        const index = this.tabs.indexOf(tab)
        if (index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1])
    }
    handleClick (e, tab) {
        e.preventDefault()
        this.selectTab(tab)
    }
    handleKeyup (e, tab) {
        e.preventDefault()
        if (e.which === 13) this.selectTab(tab)
        else if (e.which === 37) this.previousTab(tab)
        else if (e.which === 39) this.nextTab(tab)
    }
    render () {
        return (<div>
            <h1 aria-live="polite">Tabs using semantic elements and ARIA</h1>
            <ul role="tablist">
                {this.tabs.map((tab, i) => (
                    <li role="presentation">
                        <a id={`tab_${i}`}
                           href={`#tabpanel_${i}`}
                           role="tab"
                           aria-controls={`tab_${i}`}
                           aria-selected={tab === this.state.selected}
                           tabIndex={tab === this.state.selected ? 0 : -1}
                           onClick={e => this.handleClick(e, tab)}
                           onKeyUp={e => this.handleKeyup(e, tab)}
                           ref={link => { if (tab === this.state.selected) this.activeLink = link}}
                        >{tab.props.title}</a>
                    </li>
                ))}
            </ul>
            <div>
                {this.tabs.map((tab, i) => (
                    React.cloneElement(tab, {
                        index: i,
                        isSelected: () => tab === this.state.selected
                    })
                ))}
            </div>
        </div>)
    }
}

const A11yTabs = () => (

    <Tabs>
        <Tab title="Cats">
            <h2>Cats</h2>
            <img src={'images/cat.jpg'} alt="cat" />
            <p>
                Apple pie chocolate bar caramels pudding ice cream.
            </p>
        </Tab>
        <Tab title="Dogs">
            <h2>Dogs</h2>
            <img src={'images/dog.jpg'} alt="dog" />
            <p>
                I love sesame snaps gingerbread.
            </p>
        </Tab>
        <Tab title="Fish">
            <h2>Fish</h2>
            <img src={'images/fish.jpg'} alt="goldfish" />
            <p>
                Biscuit sugar plum marzipan sugar plum caramels lollipop I love.
            </p>
        </Tab>
    </Tabs>
)

module.exports = A11yTabs;
