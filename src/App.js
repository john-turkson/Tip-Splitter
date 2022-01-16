import {useState} from 'react';
import logo from './images/logo.svg';
import dollarSign from './images/icon-dollar.svg';

function App() {
  return (
    <div className="App">

      <div className="title">
        <img src={logo}/>
      </div>

      <div className="calculator">

        <div className="section-one">

          <div className="bill-amount">
            <label className="input-title-text">Bill</label>
            <input
              className="icon-field"
              type="text"
              inputMode='numeric'
              id="bill-amount"
              name="billAmount"
              placeholder="0"/>
          </div>

          <div className="tip-selector">

            <label className="input-title-text">Select Tip %</label>

            <div className="tip-buttons">
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input type="text" inputMode="numeric" id="custom-tip" placeholder="Custom"/>
            </div>

          </div>

          <div className="total-people">
            <label className="input-title-text">Number of People</label>
            <input
              className="icon-field"
              type="text"
              id="total-people"
              name="totalName"
              placeholder="0"/>
          </div>

        </div>

        <div className="section-two">
          <div className="description">
            <p>Tip Amount <br /> <span>/ person</span></p>
          
            <div className="tip-value">$0.00</div>
          </div>

          <br />

          <div className="description">
            <p>Total <br /> <span>/ person</span></p>
          
            <div className="tip-value">$0.00</div>
          </div>

          <div className="reset-button">
            <button>RESET</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;

{/* <div className="bill-input">
            <label>Bill</label>
            <input type="number" id="bill-amount" name="billAmount"/>
          </div>

          <div className="tip-selector">

            <label>Select Tip %</label>

            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>

            <input type="number" id="custom-tip" placeholder="Custom"/>

          </div>

          <div className="total-people">
            <label>Number of People</label>
            <input type="number" id="total-people" name="totalName"/>
          </div>
        </div> */
}