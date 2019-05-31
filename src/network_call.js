
import React from 'react';
import AnkLink from './anchorLink'

export default class Nwloader extends React.Component {
    constructor(p) {
        super(p)
        this.state = {};
    }
    simulateNetworkCall() {
        setTimeout(() => {
            this.setState({ id: 'foo' });
        }, 10000);
    }
    observeDomChanges() {
        this.setState({ registered: true });
        if (this.state.registered) { return; }
        ["DOMAttributeNameChanged",
            "DOMAttrModified",
            "DOMCharacterDataModified",
            "DOMContentLoaded",
            "DOMElementNameChanged",
            "DOMNodeInserted",
            "DOMNodeInsertedIntoDocument",
            "DOMNodeRemoved",
            "DOMNodeRemovedFromDocument",
            "DOMSubtreeModified"].forEach((ev) => document.addEventListener(ev, (dev) => { console.log('fires', ev, dev) }));

    }
    componentDidMount() {
        this.simulateNetworkCall();
        this.observeDomChanges();
    }
    renderComponent() {
       return <div>
            <img src='https://theviralblazeimage.files.wordpress.com/2017/02/good-night-whatsapp-images-15.jpg' />
            <img src='https://www.visitmosselbay.co.za/wp-content/gallery/mossel-bay-photo-gallery/Mossel-Bay-Cape-St-Blaize-Lighthouse.jpg' />
            <AnkLink id='bar' />
            <img src='https://theviralblazeimage.files.wordpress.com/2017/02/good-night-whatsapp-images-15.jpg' />
            <img src='https://www.visitmosselbay.co.za/wp-content/gallery/mossel-bay-photo-gallery/Mossel-Bay-Cape-St-Blaize-Lighthouse.jpg' />

            <AnkLink id='foo' />

            <img src='https://wallpaperaccess.com/full/257531.jpg' />
            <img src='https://theviralblazeimage.files.wordpress.com/2017/02/good-night-whatsapp-images-15.jpg' />
            <AnkLink id='bar2' />
            <img src='https://www.visitmosselbay.co.za/wp-content/gallery/mossel-bay-photo-gallery/Mossel-Bay-Cape-St-Blaize-Lighthouse.jpg' />
            <AnkLink id='foo2' />
        </div>
    }
    render() {
        return this.state.id === 'foo' ? this.renderComponent() : <div />
    }
}