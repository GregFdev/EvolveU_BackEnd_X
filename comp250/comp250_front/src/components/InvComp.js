import React, { Component } from 'react';
import '../style_community.css';

class InvComp extends Component {
	constructor(props) {
        super(props);
        this.inv_num = this.props.inv_num;
        
		this.state = {
			inv_details: [],
			displayInvoice: 0
        };
        
    }
    componentDidMount() {
        console.log('invoice did mount');
        let urlstring = '/invoice_details/' + String(this.inv_num);
        console.log(urlstring);
        fetch(urlstring)
            .then(console.log('invnum is ', this.inv_num))
			.then(resp => resp.json())
			.then(json => {
                this.setState({inv_details: json});
                console.log('details', json);
            })
    };
    
    render() {
        return(
            <div>
                hello
            </div>
        )
    };
};

export default InvComp;