import { html, TemplateResult } from "lit";
import "../src/oui-checkbox.js";
import { ifDefined } from "lit/directives/if-defined.js";

export default {
  title: "OuiCheckbox",
  component: "oui-checkbox",
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    value: { control: "text" },
    name: { control: "text" },
    indicatorLast: { control: "boolean" },
    disabled: { control: "boolean" },
  },
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
  checked?: boolean;
  autofocus?: boolean;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
  <oui-checkbox
    ?indicatorLast="${args.indicatorLast}"
    ?disabled="${args.disabled}"
    ?checked="${args.checked}"
    ?autofocus="${args.autofocus}"
    value="${ifDefined(args.value)}"
    name="${ifDefined(args.name)}"
  >
    ${args.label}
  </oui-checkbox>
`;

export const Default = Template.bind({});
Default.args = { value: "value", name: "name", label: "Label" };
export const Checked = Default.bind({});
Checked.args = { ...Default.args, checked: true };
export const AutoFocus = Default.bind({});
AutoFocus.args = { ...Default.args, autofocus: true };
export const IndicatorLast = Default.bind({});
IndicatorLast.args = { ...Default.args, indicatorLast: true };
export const Disabled = Default.bind({});
Disabled.args = { ...Default.args, disabled: true };
