import { css, html, LitElement, nothing, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

export class OuiCheckbox extends LitElement {
  static styles = css`
    :host {
    }
  `;

  @property({ type: Boolean })
  checked = false;

  @property({ type: String, reflect: true })
  value = "on";

  @property({ type: Boolean })
  autofocus = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  form = null;

  @property({ type: String, reflect: true })
  name = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean, reflect: true })
  indicatorLast = false;

  @state()
  private initialCheckedState: undefined | boolean;

  @property({ type: Boolean, attribute: false, noAccessor: true })
  get defaultChecked() {
    return Boolean(this.initialCheckedState);
  }

  render() {
    return html`
      <label part="label">
        ${this.indicatorLast ? nothing : this.indicator()}
        <slot></slot>
        ${this.indicatorLast ? this.indicator() : nothing}
      </label>
    `;
  }

  protected willUpdate(changedProperties: PropertyValues) {
    if (
      this.initialCheckedState === undefined &&
      changedProperties.has("checked")
    ) {
      this.initialCheckedState = this.checked;
    }
  }

  private indicator() {
    return html`
      <input
        part="indicator"
        type="checkbox"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        .value="${ifDefined(this.value)}"
        .name="${ifDefined(this.name)}"
      />
    `;
  }
}
