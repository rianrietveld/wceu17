// https://www.npmjs.com/package/react-context-tabs

var React = require('react');
var Tab = require('react-context-tabs').Tab;
var Tabs = require('react-context-tabs').Tabs;
var TabList = require('react-context-tabs').TabList;
var TabPanel = require('react-context-tabs').TabPanel;

class MyTabs extends React.Component {

    render() {

        return (<div>
            <h1>Tabs</h1>
            <Tabs defaultTabId='cat'>
                <TabList>
                    <Tab tabId='cat'>Cat</Tab>
                    <Tab tabId='dog'>Dog</Tab>
                    <Tab tabId='fish'>Fish</Tab>
                </TabList>
                <TabPanel tabId='cat'>
                    <img src={'images/cat.jpg'} alt="cat" />
                    <p>
                        Apple pie chocolate bar caramels pudding ice cream. I love dragée sesame snaps jelly danish chocolate bar gummies lemon drops. Toffee brownie toffee. Biscuit cake cake pie danish topping cupcake apple pie I love.
                    </p>
                </TabPanel>
                <TabPanel tabId='dog'>
                    <img src={'images/dog.jpg'} alt="dog" />
                    <p>
                        Cookie jelly beans tart ice cream sugar plum gummi bears I love sesame snaps gingerbread. Donut chocolate I love lollipop dessert cookie marzipan I love tootsie roll. Soufflé cotton candy brownie toffee powder. Chupa chups jelly beans halvah gummi bears chocolate cake cupcake.
                    </p>
                </TabPanel>
                <TabPanel tabId='fish'>
                    <img src={'images/fish.jpg'} alt="goldfish" />
                    <p>
                        Cupcake ipsum dolor sit amet tart bear claw. Biscuit sugar plum marzipan sugar plum caramels lollipop I love. Sesame snaps jelly-o apple pie dragée jelly dessert donut cupcake cake. Soufflé cake liquorice chupa chups halvah. Muffin brownie fruitcake pastry cotton candy I love. Muffin dragée gingerbread candy canes dragée icing jelly-o sweet roll jelly beans.
                    </p>
                </TabPanel>
            </Tabs>
            </div>
        )
    }
}

module.exports = MyTabs;
