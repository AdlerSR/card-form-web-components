import {
  html,
  component,
  useState,
  useEffect,
} from "haunted";

import { Component } from "haunted/lib/component";

interface InputProps {
  label: string;
  this: any
}

function Input(this: Component<HTMLElement & InputProps> ,{ label }: InputProps) {
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
        @keyup=${(e: KeyboardEvent) => setInput((e?.target as HTMLInputElement)?.value)}
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

customElements.define("haunted-input", component<HTMLElement & InputProps>(Input, {}));
