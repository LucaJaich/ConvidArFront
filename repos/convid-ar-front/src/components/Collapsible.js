import React, {Component} from 'react'
import {Collapsible, CollapsibleItem} from 'react-materialize'

class Fundaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }

    render() {
        return (
            <Collapsible accordion defaultActiveKey={1}>
                <CollapsibleItem header='First' icon='filter_drama'>
                    
                </CollapsibleItem>
                <CollapsibleItem header='Second' icon='place'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Third' icon='whatshot'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
            </Collapsible>
        );
    }
}

export default Fundaciones