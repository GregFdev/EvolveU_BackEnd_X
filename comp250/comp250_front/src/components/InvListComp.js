import React, { Component } from 'react';
import '../style_community.css';

class InvListComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayInvoice: 0
		};
		
	}
	componentDidMount() {
		this.props.getInvData()
	};

	render () {
		console.log('line list is ', this.props.inv_list);
		const invList = this.props.inv_list.map(inv => {

			return (
				<tr key={inv.inv_num}>
					<td>{inv.inv_num}</td>
					<td>{inv.date}</td>
					<td>{inv.cust_id}</td>
					
					<td>
						<button 
							id={inv.inv_num} 
							onClick={this.props.onClickEditInvoice}>
							Invoice Details
						</button>
					</td>
				</tr>
			)
		});

		return(

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
							{invList}
						</tbody>
						
					</table>

				</div>

			</div>
		)

	}
}


export default InvListComp;