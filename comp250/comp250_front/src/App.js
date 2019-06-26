import React, { Component } from 'react';
import InvComp from './components/InvComp';
import InvListComp from './InvListComp'
import './style_community.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayInvoice: 0
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
	
	

	render () {

		return(

			<div className='commContainer'>

				<div className='topContainer'>
					<h2>Invoice Information</h2>
				</div>
				<div>
                    {this.state.displayInvoice === 0 ? 
						<InvListComp onClickEditInvoice={this.onClickEditInvoice}/> : 
						<InvComp 
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
