import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export class OuiCheckbox extends LitElement {
  static styles = css`
    :host {
    }
  `;

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  defaultChecked = false;

  @property({ type: String })
  value = 'on';

  @property({ type: Boolean })
  autofocus = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  form = null;

  @property({ type: String })
  name = '';

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean })
  indicatorLast = false;

  render() {
    return html`
      <label part='label'>
        ${this.indicatorLast ? nothing : this.indicator()}
        <slot></slot>
        ${this.indicatorLast ? this.indicator() : nothing}
      </label>
    `;
  }

  private indicator() {
    return html`
      <input part='indicator'
             type='checkbox'
             ?disabled='${this.disabled}'
             .value='${ifDefined(this.value)}'
             .name='${ifDefined(this.name)}' />
    `;
  }
}
