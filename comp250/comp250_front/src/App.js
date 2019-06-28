import React, { Component } from 'react';
import InvComp from './components/InvComp';
import InvListComp from './components/InvListComp'
import './style_community.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayInvoice: 0,
			line_list: [],
			prod_list: [],
			inv_list: [],
			cust_list: []
		};
	}

	onClickEditInvoice = (e) => {
		console.log('button pressed and inv num is  ', e.target.id);
		this.setState({
			displayInvoice: Number(e.target.id)
			})
		};
	
	onClickSubmitInvoice = (e) => {
		this.setState({
			displayInvoice: 0
		})
	}
	
	getInvData = (e) => {
		fetch('/invoices2')
			.then(resp => resp.json())
			.then(invList => this.setState({inv_list: invList}))
	}
	
	getProductData = (e) => {
		fetch('/products')
			.then(resp => resp.json())
			.then(products => this.setState({prod_list: products}))
		
	}

	onClickAddProduct = (e) => {
        let nextProdId = this.state.inv_details.Products.length;
        console.log('current max prod is ', nextProdId)
        let prodName = document.getElementById('ProdName').value;
        let prodCost = document.getElementById('ProdCost').value;
        let prodQty = document.getElementById('ProdQty').value;
        let newProd = {prod_cost: prodCost, prod_name: prodName, qty: prodQty}
        console.log("product to add is ", newProd)
    };

	render () {

		return(

			<div className='commContainer'>

				<div className='topContainer'>
					<h2>Invoice Information</h2>
				</div>

				<div>
                    {this.state.displayInvoice === 0 ? 
						<InvListComp 
							inv_list={this.state.inv_list} 
							getInvData={this.getInvData} 
							onClickEditInvoice={this.onClickEditInvoice}/> : 
						<InvComp
							getProductData={this.getProductData}
							onClickAddProduct={this.onClickAddProduct}
							prod_list={this.state.prod_list}
							inv_num={this.state.displayInvoice} 
							onClickSubmitInvoice={this.onClickSubmitInvoice}
							/>
					}
                </div>
			</div>
		)

	}
}


export default App;
