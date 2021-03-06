import { html } from "lit";
import { elementUpdated, expect } from "@open-wc/testing";
import { OuiCheckbox } from "../src/OuiCheckbox.js";
import "../src/oui-checkbox.js";
import { accessibleFixture } from "./utils.js";

describe("OuiCheckbox", () => {
  it("should use default props when undefined", async () => {
    const checkbox = await accessibleFixture<OuiCheckbox>(html`
      <oui-checkbox>Label</oui-checkbox>
    `);
    const input = checkbox.shadowRoot?.querySelector("input");
    expect(input).to.not.be.null;
    expect(input).attribute("part").to.equal("indicator");
    expect(input).property("type").to.equal("checkbox");
    expect(input).property("name").to.be.empty;
    expect(input).property("value").to.equal("on");
  });

  it("should pass input props", async () => {
    const checkbox = await accessibleFixture<OuiCheckbox>(html`
      <oui-checkbox
        ?checked="${true}"
        value="value"
        name="name"
        ?autofocus="${true}"
        ?required="${true}"
        ?readonly="${true}"
      >
        Label
      </oui-checkbox>
    `);
    const input = checkbox.shadowRoot?.querySelector("input");
    expect(input).to.not.be.null;
    expect(input).attribute("part").to.equal("indicator");
    expect(input).property("type").to.equal("checkbox");
    expect(input).property("name").to.equal("name");
    expect(input).property("value").to.equal("value");
    expect(input).property("checked").to.equal(true);
    expect(input).property("autofocus").to.equal(true);
    expect(input).property("required").to.equal(true);
    expect(input).property("readOnly").to.equal(true);
  });

  [true, false].forEach((initialChecked: boolean) => {
    it(`should save defaultChecked when initialized as ${initialChecked}`, async () => {
      const checkbox = await accessibleFixture<OuiCheckbox>(html`
        <oui-checkbox ?checked="${initialChecked}">Label</oui-checkbox>
      `);
      const input = checkbox.shadowRoot?.querySelector("input");
      expect(input).property("checked").to.equal(initialChecked);
      expect(checkbox).property("defaultChecked").to.equal(initialChecked);

      checkbox.checked = !initialChecked;
      await elementUpdated(checkbox);
      expect(input).property("checked").to.equal(!initialChecked);
      expect(checkbox).property("defaultChecked").to.equal(initialChecked);

      checkbox.checked = initialChecked;
      await elementUpdated(checkbox);
      expect(input).property("checked").to.equal(initialChecked);
      expect(checkbox).property("defaultChecked").to.equal(initialChecked);
    });
  });

  it("should disable input", async () => {
    const checkbox = await accessibleFixture<OuiCheckbox>(html`
      <oui-checkbox ?disabled="${true}">Label</oui-checkbox>
    `);
    const input = checkbox.shadowRoot?.querySelector("input");
    expect(input).property("disabled").to.equal(true);
  });

  it("displays indicator last", async () => {
    const checkbox = await accessibleFixture<OuiCheckbox>(html`
      <oui-checkbox ?indicatorLast="${true}">Label</oui-checkbox>
    `);
    const slots = checkbox.shadowRoot?.querySelectorAll(
      "slot[name=label-container], slot[name=indicator-container]"
    );
    expect(slots).to.not.be.null;
    // TODO fix tsconfig to recognize @types/node
    // @ts-ignore
    const slotNames = [...slots].map((slot: Element) =>
      slot.getAttribute("name")
    );
    expect(slotNames).to.be.ordered.members([
      "label-container",
      "indicator-container",
    ]);
  });
});
