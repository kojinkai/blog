export default function plopfile(plop) {
  plop.setGenerator("component", {
    description: "UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/component-index.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/component-test.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/interface.ts",
        templateFile: "plop-templates/component-interface.hbs",
      },
      {
        type: "append",
        path: "components/index.ts",
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { default as {{pascalCase name}} } from "./{{pascalCase name}}";`,
      },
    ],
  });

  plop.setGenerator("model", {
    description: "API response",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Model name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "models/{{camelCase name}}.ts",
        templateFile: "plop-templates/model.hbs",
      },
      {
        type: "append",
        path: "models/index.ts",
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export type { {{pascalCase name}} } from "./{{camelCase name}}";`,
      },
    ],
  });

  plop.setGenerator("icon", {
    description: "General custom Icons in the components folder",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Icon name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/Icons/Icon{{pascalCase name}}.tsx",
        templateFile: "plop-templates/icon.hbs",
      },
      {
        type: "add",
        path: "components/Icons/Icon{{pascalCase name}}.d.ts",
        templateFile: "plop-templates/icon-d.hbs",
      },
      {
        type: "append",
        path: "components/Icons/index.ts",
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { ForwardRef as Icon{{pascalCase name}} } from "./Icon{{pascalCase name}}";`,
      },
    ],
  });
}
