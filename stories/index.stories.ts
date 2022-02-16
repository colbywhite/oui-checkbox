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
    indicatorLast: { control: 'boolean' },
    disabled: { control: 'boolean' }
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
  disabled?: boolean;
}

const Template: Story<ArgTypes> = (
  {
    label,
    value,
    name,
    indicatorLast,
    disabled
  }: ArgTypes
) => html`
  <oui-checkbox
    ?indicatorLast='${indicatorLast}'
    ?disabled='${disabled}'
    .value='${ifDefined(value)}'
    .name='${ifDefined(name)}'>
    ${label}
  </oui-checkbox>
`;

export const Default = Template.bind({});
Default.args = { value: 'value', name: 'name', label: 'Label' };
export const IndicatorLast = Default.bind({});
IndicatorLast.args = { ...Default.args, indicatorLast: true };
export const Disabled = Default.bind({});
Disabled.args = { ...Default.args, disabled: true};
