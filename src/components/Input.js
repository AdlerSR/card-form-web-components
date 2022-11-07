import {
  html,
  component,
  useState,
  useEffect
} from "haunted";

function Input({ label }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const event = new CustomEvent('change', {
      detail: `${input}`
    });

    this.dispatchEvent(event);
  }, [input]);

  return html`
    <div class="container">
      <label for=${label}>${label}</label>
      <input
        value=${input}
        @keyup=${ev => setInput(ev.target.value)}
        type="text"
        id=${label}
      />
    </div>

    <style>
      .container {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      input {
        border: 1px solid #e5e5e5;
        padding: 6px 10px;
        margin-bottom: 1em;
      }
    </style>
  `;
}

customElements.define("haunted-input", component(Input));
