import { html, TemplateResult } from 'lit';
import '../src/oui-checkbox.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'OuiCheckbox',
  component: 'oui-checkbox',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    indicatorLast: { control: 'boolean' }
  }
};

interface Story<T> {
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;

  (args: T): TemplateResult;
}

interface ArgTypes {
  label?: string;
  value?: string;
  name?: string;
  indicatorLast?: boolean;
}

const Template: Story<ArgTypes> = (
  {
    label,
    value,
    name,
    indicatorLast
  }: ArgTypes
) => html`
  <oui-checkbox
    ?indicatorLast='${ifDefined(indicatorLast)}'
    .value='${ifDefined(value)}'
    .name='${ifDefined(name)}'>
    ${label}
  </oui-checkbox>
`;

export const Default = Template.bind({});
Default.args = { value: 'value', name: 'name', label: 'Label' };
export const IndicatorLast = Default.bind({});
IndicatorLast.args = { ...Default.args, indicatorLast: true };
