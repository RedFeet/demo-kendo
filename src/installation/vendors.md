### Vendors

1. Create a `vendors` folder in the root (at the same level as src or dist)
2. Download Kendo UI Pro from the Telerik website
3. Extract the `js` and `styles` folder into the `vendors` folder
4. Open `config.js` and add a path mapping
  You can do this in two ways, in the `map` and the `paths` section:

  Map (recommended):

    ```
    "map": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "kendo-ui": "/vendors",
    }
    ```

    Paths:

    ```
    paths: {
      "*": "dist/*",
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*",
      "kendo-ui/*": "vendors/*"
    }
    ```

5. Install Kendo and the aurelia-kendoui-plugin
`jspm install kendo-ui aurelia-kendoui-plugin`

6. Install SystemJS CSS plugin (you will need it to include various KendoUI specific CSS files)
` jspm install github:systemjs/plugin-css`

7. Register the aurelia-kendoui-plugin plugin
Now we're going to register the plugin with Aurelia in your "main.js" or equivalent. The configuration function will be passed a builder object that you can use to configure which Kendo controls you wish to use. You can use all controls in Kendo UI Pro by calling the "pro()" method

    ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

      aurelia.start().then(a => a.setRoot());
    }
    ```

8. Now let's open up "app.html" and load Kendo's CSS files

    ```
    <require from="kendo-ui/styles/kendo.common.core.min.css"></require>
    <require from="kendo-ui/styles/kendo.bootstrap.min.css"></require>
    ```

### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.
