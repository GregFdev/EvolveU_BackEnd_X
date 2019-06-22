import React, { Component } from 'react';
import '../style_community.css';

class InvComp extends Component {
	constructor(props) {
        super(props);
        this.inv_num = this.props.inv_num;
        
		this.state = {
			line_list: [],
			displayInvoice: 0
        };
        
    }
    componentDidMount() {
		console.log('invoice did mount');
		fetch('/invoices2')
			.then(resp => resp.json())
			.then(json => this.setState({line_list: json}))
    };
    
    render() {
        return(
            <div>
                Hello World
            </div>
        )
    };
};

export default InvComp;