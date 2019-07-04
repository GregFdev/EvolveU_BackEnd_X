import React, { Component } from 'react';
import '../style_community.css';

class InvComp extends Component {
	constructor(props) {
        super(props);
        this.inv_num = this.props.inv_num;
        
		this.state = {
			displayInvoice: 0
        };
        
    }
    componentDidMount() {
        console.log(`invoice ${this.inv_num} did mount`);
        let urlstring = '/invoice_details/' + String(this.inv_num);
        
        fetch(urlstring)
            // .then(console.log('invnum is ', this.inv_num))
			.then(resp => resp.json())
			.then(json => {
                this.props.getInvDetails(json);
                console.log('details', json);
            })
    };
    
    
    


    render() {

        if(this.props.inv_details != null) {
            console.log('inv total ', this.props.inv_details)

            const prodList = this.props.inv_details.Products.map(prod => {

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
                        <h3>Customer Name: {this.props.inv_details.Customer.cust_name}</h3>
    
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
                                    <td>
                                        <input id="ProdName"></input>
                                    </td>
                                    <td>
                                        <input id="ProdCost"></input>
                                    </td>
                                    <td>
                                        <input id="ProdQty"></input>
                                    </td>
                                    <td>
                                        <button onClick={this.props.onClickAddProduct}>Add Product</button>

                                    </td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Total Cost</td>
                                    <td>{this.props.inv_details.TotalCost}</td>
                                    <td>
                                        <button onClick={this.props.onClickSubmitInvoice}>Close / Cancel</button>    
                                    </td>     
                                </tr>
                                
                            </tbody>
                            
                        </table>
                       
                        
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

export default InvComp;