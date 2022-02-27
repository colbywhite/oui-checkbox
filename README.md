# Open UI checkbox

This is an in-progress web component implementation of the [Open UI Proposal for a checkbox component][proposal]. At
this point, it is meant to move forward OUI discussion.

# Usage

This project contains two components.

- `<oui-checkbox>`: A new component that intends to fulfil the proposal.
- `<oui-checkbox-built-in>`: A component that extends the built in `HTMLInputComponent`.

## <oui-checkbox>

```html

<script type="module">
  import "../dist/src/oui-checkbox.js";
</script>

<style>
  oui-checkbox::part(indicator) {
    -webkit-appearance: none;
    background-color: #fbfbfb;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }
</style>

<p>Choose your monster's features:</p>
<oui-checkbox value="scales" name="scales" checked>
  Scales
</oui-checkbox>
<oui-checkbox value="horns" name="horns">
  Horns
</oui-checkbox>
```

## <oui-checkbox-built-in>

```html

<script type="module">
  import "../dist/src/oui-checkbox-built-in.js";
</script>

<form>
  <fieldset>
    <legend>Choose your monster's features</legend>
    <label>
      <input is="oui-checkbox-built-in" name="features" value="scales" />
      Scales
    </label>
    <label>
      <input is="oui-checkbox-built-in" name="features" value="horns" />
      Horns
    </label>
  </fieldset>
</form>
```

# Local dev

- `yarn start`: Run local demo (i.e. `demo/index.html`)
- `yarn run build`: Build component
- `yarn run build:watch`: Continuously build component
- `yarn test`: Single test run
- `yarn run test:watch`: Continuously run tests
- `yarn run lint`: Check for lint errors
- `yarn run lint:fix`: Fix lint errors
- `yarn run storybook`: Run local Storybook server
- `yarn run storybook:build`: Build Storybook

After a local `yarn install` a build will be ran (to produce a `custom-elements.json`) and git hooks will be installed.
This is accomplished via `yarn run prepare`.


[proposal]: https://open-ui.org/components/checkbox
