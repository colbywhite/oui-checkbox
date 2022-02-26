import { html } from "lit";
import { expect } from "@open-wc/testing";
import { accessibleFixture } from "./utils.js";
import "../src/oui-checkbox-built-in.js";

describe("OuiCheckboxBuiltIn", () => {
  it("should use default props when undefined", async () => {
    const label = await accessibleFixture<HTMLLabelElement>(html`
      <label>
        <input is="oui-checkbox-built-in" />
        Label
      </label>
    `);
    const checkbox = label.querySelector(
      "input[is=oui-checkbox-built-in]"
    ) as HTMLInputElement;
    expect(checkbox).property("type").to.equal("checkbox");
  });
});
