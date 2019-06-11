import React, { Component } from 'react';
import './style_community.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			line_list: {},
			displayInvoice: 0
		};
	}
	componentDidMount() {
		response = fetch('/invoices');
		console.log('response is ', response);

	}
	onClickEditInvoice = (e) => {
		this.setState({
			displayInvoice: Number(e.target.id)
			})};

	render () {

		// const lineList = this.communityCtrl.cityArray.map((city) => {

		// 	return(
		// 		<tr key={city.cityID}>
		// 			<td>{city.cityName}</td>
		// 			<td>{city.cityLat}</td>
		// 			<td>{city.cityLong}</td>
		// 			<td>{city.cityPop}</td>
		// 			<td colSpan='2'>
		// 				<button id={city.cityID} onClick={this.onClickEditCity}>Edit</button>
		// 				<button id={city.cityID} onClick={this.onClickDeleteCity}>Delete</button>
		// 			</td>
		// 		</tr>
		// 	)
		// });

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
									<th>Date</th>
									<th>Customer</th>
									<th>
										<button onClick={this.onClickEditInvoice}>Display Invoice</button>
									</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Line list here</td>
								</tr>

							</tbody>
							
						</table>

					</div>

											
					{/* {this.state.displayCityID === 0 ? '': 
                		<CityDetailsComp
                			key={this.state.displayCityID}
                			cityObj={currCityObj}
	               			reRender={this.reRender} 
	               			whichSphere={this.whichSphere}
	               			onSubmitClose={this.onSubmitClose}

            			/>
        			} */}

					


				</div>

			</div>
		)

	}
}


export default App;
