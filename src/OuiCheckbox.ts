import { css, html, LitElement, nothing, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

export class OuiCheckbox extends LitElement {
  static styles = css`
    :host {
      display: flex;
    }
  `;

  @property({ type: Boolean })
  checked = false;

  @property({ type: String })
  value = "on";

  @property({ type: Boolean })
  autofocus = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  form = null;

  @property({ type: String })
  name = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean })
  indicatorLast = false;

  @state()
  private initialCheckedState: undefined | boolean;

  @property({ type: Boolean, attribute: false, noAccessor: true })
  get defaultChecked() {
    return Boolean(this.initialCheckedState);
  }

  render() {
    return html`
      ${this.indicatorLast ? nothing : this.indicator()}
      <slot name="label-container">
        <label part="label" for="indicator">
          <slot></slot>
        </label>
      </slot>
      ${this.indicatorLast ? this.indicator() : nothing}
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
      <slot name="indicator-container">
        <div part="indicator">
          <slot name="indicator">
            <input
              id="indicator"
              part="indicator"
              type="checkbox"
              ?checked="${this.checked}"
              ?disabled="${this.disabled}"
              ?autofocus="${this.autofocus}"
              .value="${ifDefined(this.value)}"
              .name="${ifDefined(this.name)}"
            />
          </slot>
        </div>
      </slot>
    `;
  }
}
