import { html, TemplateResult } from "lit";
import "../src/oui-checkbox-built-in.js";

export default {
  title: "OuiCheckboxBuiltIn",
  component: "oui-checkbox-built-in",
  argTypes: {},
};

interface Story<T> {
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;

  (args: T): TemplateResult;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <input is="oui-checkbox-built-in" />
`;

export const Default = Template.bind({});
