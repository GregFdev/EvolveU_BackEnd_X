import React, { Component } from 'react';
import './style_community.css';

class InvListComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			line_list: [],
			displayInvoice: 0
		};
	}
	componentDidMount() {
		console.log('did mount');
		fetch('/invoices2')
			.then(resp => resp.json())
			.then(json => this.setState({line_list: json}))
	};

	onClickEditInvoice = (e) => {
		console.log('button pressed and inv num is  ', e.target.id);
		this.setState({
			displayInvoice: Number(e.target.id)
			})
		};

	render () {

		const lineList = this.state.line_list.map(line => {

			return (
				<tr key={line.inv_num}>
					<td>{line.inv_num}</td>
					<td>{line.date}</td>
					<td>{line.cust_id}</td>
					
					<td>
						<button id={line.inv_num} onClick={this.onClickEditInvoice}>Invoice Details</button>
					</td>
				</tr>
			)
		});

		return(

			<div className='commContainer'>

				<div className='topContainer'>
					<h2>Invoice Information</h2>
									

				</div>

				<div className='btmContainer'>

					<div className='leftContainer'>

						<h2>Invoice Table</h2>
						
						<table className='cityTable'>
							
							<thead>
								<tr>
									<th>Invoice Number</th>
									<th>Invoice Date</th>
									<th>Customer ID</th>
									<th></th>
									
								</tr>
							</thead>
							<tbody>
								{lineList}
							</tbody>
							
						</table>

					</div>
					<div>
						{this.state.displayInvoice === 0 ? '': 
							<InvComp
								key={this.state.displayInvoice}
								inv_num={this.state.displayInvoice}
								onSubmitClose={this.onSubmitClose}

							/>
						}

					</div>
											
					

					


				</div>

			</div>
		)

	}
}


export default InvListComp;