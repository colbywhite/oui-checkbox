import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { OuiCheckbox } from '../src/OuiCheckbox.js';
import '../src/oui-checkbox.js';

describe('OuiCheckbox', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<OuiCheckbox>(html`
      <oui-checkbox>Label</oui-checkbox>
    `);
    await expect(el).shadowDom.to.be.accessible();
  });

  it('should use default props when undefined', async () => {
    const el = await fixture<OuiCheckbox>(html`
      <oui-checkbox>Label</oui-checkbox>
    `);
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.not.be.null;
    expect(input).attribute('part').to.equal('indicator');
    expect(input).property('type').to.equal('checkbox');
    expect(input).property('name').to.be.empty;
    expect(input).property('value').to.equal('on');
  });

  it('should pass input props', async () => {
    const el = await fixture<OuiCheckbox>(html`
      <oui-checkbox value='value' name='name'>Label</oui-checkbox>
    `);
    const input = el.shadowRoot?.querySelector('input');
    expect(input).to.not.be.null;
    expect(input).attribute('part').to.equal('indicator');
    expect(input).property('type').to.equal('checkbox');
    expect(input).property('name').to.equal('name');
    expect(input).property('value').to.equal('value');
  });

  it('displays indicator last', async () => {
    const el = await fixture<OuiCheckbox>(html`
      <oui-checkbox ?indicatorLast='${true}'>Label</oui-checkbox>
    `);
    const labelChildren = el.shadowRoot
      ?.querySelector('label')
      ?.querySelectorAll<HTMLInputElement | HTMLSlotElement>('input, slot');
    expect(labelChildren).to.not.be.null;
    // TODO fix tsconfig to recognize @types/node
    // @ts-ignore
    const childTags = [...labelChildren].map(child => child.tagName);
    expect(childTags).to.be.ordered.members(['SLOT', 'INPUT']);
  });
});
