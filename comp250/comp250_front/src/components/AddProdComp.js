import React, { Component } from 'react';
import '../style_community.css';

class AddProdComp extends Component {
	constructor(props) {
        super(props);
        this.inv_num = this.props.inv_num;
        
		this.state = {
			inv_details: null,
			displayInvoice: 0
        };
        
    }
    componentDidMount() {
        console.log('invoice did mount');
        let urlstring = '/invoice_details/' + String(this.inv_num);
        console.log(urlstring);
        fetch(urlstring)
            // .then(console.log('invnum is ', this.inv_num))
			.then(resp => resp.json())
			.then(json => {
                this.setState({inv_details: json});
                // console.log('details', json);
            })
    };
    
    onClickAddProduct = (e) => {
		return null

	}

    render() {

        if(this.state.inv_details != null) {
            console.log('inv total ', this.state.inv_details)

            const prodList = this.state.inv_details.Products.map(prod => {

                return (
                    <tr key={prod.prod_id}>
                        <td>{prod.prod_name}</td>
                        <td>{prod.prod_cost}</td>
                        <td>{prod.qty}</td>                  
                    </tr>
                )
            });

            return(
                <div className='btmContainer'>
    
                    <div className='leftContainer'>
    
                        <h2>Invoice Details</h2>
                        
                        <h3>Invoice Number: {this.inv_num}</h3>
                        <h3>Customer Name: {this.state.inv_details.Customer.cust_name}</h3>
    
                        <table className='cityTable'>
                            
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Cost</th>
                                    <th>Product Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prodList}
                                
                                <tr>
                                    <td></td>
                                    <td>Total Cost</td>
                                    <td>{this.state.inv_details.TotalCost}</td>       
                                </tr>
                                
                            </tbody>
                            
                        </table>
                        <button onClick={this.onClickAddProduct}>Add Product</button>
                        <button onClick={this.props.onClickSubmitInvoice}>Close Invoice</button>
                    </div>
    
                </div>
            )

        } else {
            return (
                <div>LOADING</div>
            )
        }
        
    };
};

export default AddProdComp;