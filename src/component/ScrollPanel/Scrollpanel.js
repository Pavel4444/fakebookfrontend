import React, {Component} from 'react';
import {ScrollPanel} from 'primereact/scrollpanel';
import {Card} from 'primereact/card';

class PanelScrolls extends Component {

    render() {
        return (

            <Card>
            <div>
                            <ScrollPanel style={{width: '100%', height: '300px'}} className="custombar1">
                                <h2 style={{ textAlign: 'center'}}>Story</h2>
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                    against the good of the family.
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                    family.
                                </div>
                            </ScrollPanel>                 
            </div>
            </Card>
        )
    }
}

export default PanelScrolls;