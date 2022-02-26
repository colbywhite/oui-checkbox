import { LitHTMLRenderable } from "@open-wc/testing-helpers/src/renderable";
import { expect, fixture } from "@open-wc/testing";

export async function accessibleFixture<T extends Element>(
  template: LitHTMLRenderable
): Promise<T> {
  const el = await fixture<T>(template);
  await expect(el).shadowDom.to.be.accessible();
  return el;
}
