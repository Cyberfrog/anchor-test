
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
            console.log('first mount')
            setTimeout(() => {
                console.log('second mount')
                this.setState({ id2: 'foo' });
                setTimeout(() => {
                    console.log('thisd mount')
                    this.setState({ id3: 'foo' });
                }, 10000)
            }, 10000)
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
       return <div id='567'>
<div>
     
            { this.state.id2 && <p  >"We must apologize most humbly, your reverance," began Miusov, simpering affably, and speakin in a dignified and respecful tone. "Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as" -- he glanced at the monks -- "your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place."

As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.

The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:

"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen."

He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.
</p>}

            <AnkLink id='foo' /> foo
             { this.state.id2 && <p  >"We mu3st apologize most humbly, your reverance," began Miusov, simpering affably, and speakin in a dignified and respecful tone. "Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as" -- he glanced at the monks -- "your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place."

As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.

The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:

"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen."

He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.
</p>}
{ this.state.id3 && <p  >"We mu3st apologize most humbly, your reverance," began Miusov, simpering affably, and speakin in a dignified and respecful tone. "Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as" -- he glanced at the monks -- "your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place."

As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.

The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:

"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen."

He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.
</p>}
<AnkLink id='foo2' /> foo2
{ this.state.id3 && <p  >"We mu3st apologize most humbly, your reverance," began Miusov, simpering affably, and speakin in a dignified and respecful tone. "Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as" -- he glanced at the monks -- "your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place."

As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.

The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:

"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen."

He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.
</p>}
{ this.state.id2 && <p  >"We mu6st apologize most humbly, your reverance," began Miusov, simpering affably, and speakin in a dignified and respecful tone. "Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as" -- he glanced at the monks -- "your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place."

As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.

The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:

"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen."

He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.
</p>}</div>

            {/* 
            { this.state.id3 && <img src='https://www.visitmosselbay.co.za/wp-content/gallery/mossel-bay-photo-gallery/Mossel-Bay-Cape-St-Blaize-Lighthouse.jpg' />}

             <img src='https://theviralblazeimage.files.wordpress.com/2017/02/good-night-whatsapp-images-15.jpg' />
            { this.state.id2 && <img src='https://wallpaperaccess.com/full/257531.jpg' />}
           
            <AnkLink id='bar2' />
            <img src='https://www.visitmosselbay.co.za/wp-content/gallery/mossel-bay-photo-gallery/Mossel-Bay-Cape-St-Blaize-Lighthouse.jpg' />
            <AnkLink id='foo2' /> */}
        </div>
    }
    render() {
        return this.state.id === 'foo' ? this.renderComponent() : <div />
    }
}