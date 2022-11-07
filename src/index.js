import {
  component,
  html,
  useState
} from "haunted"; 

import "./components/Input.js";

function App() {
  const [card, setCard] = useState({cardholder_name: '', card_number: '', expiration_date: '', cvc: ''});
  console.log(card)

  return html`
    <h2>User Page</h2>

    <div className="wrapper">
      <div className="card">
        <p>
          ${card.card_number}
        </p>
        <p>
          ${card.cardholder_name}
        </p>
        <p>
          ${card.expiration_date}
        </p>
      </div>
    </div>

    <form>
      <haunted-input @change=${ev => setCard({...card, cardholder_name: ev.detail})} .label=${"Cardholder Name"}></haunted-input>
      <haunted-input @change=${ev => setCard({...card, card_number: ev.detail})} .label=${"Card Number"}></haunted-input>
      <haunted-input @change=${ev => setCard({...card, expiration_date: ev.detail})} .label=${"Exp.Date (MM-YY)"}></haunted-input>
      <haunted-input @change=${ev => setCard({...card, cvc: ev.detail})} .label=${"CVC"}></haunted-input>
      <button type="submit">Confirm</button>
    </form>

    <style>
      fieldset {
        border: none;
      }

      legend {
        padding: 0;
        margin-bottom: 0.5rem;
      }
    </style>
  `;
}

customElements.define("my-app", component(App));
