import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      		<header>
			<h1>Carbon Interface API Calls</h1>
		</header>
		<main>
			<button id="electricity" className="btn">Electricity</button>
			
			<section id="electricity_estimate">
                {/* <!-- Electricity estimate goes here --> */}
            </section>

			<button id="flight" className="btn">Flight</button>
			<section id="flight_estimate">
                {/* <!-- Flight estimate goes here --> */}
            </section>

			<button id="shipping" className="btn">Shipping</button>
			<section id="shipping_estimate">
                {/* <!-- Shipping estimate goes here --> */}
            </section>

			<button id="vehicle" className="btn">Vehicle</button>
			<section id="vehicle_estimate">
                {/* <!-- Vehicle estimate goes here --> */}
            </section>

		</main>



    </div>
  );
}
}

export default App;
