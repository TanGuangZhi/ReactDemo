import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "ReactExample",
  },

  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },

    {
      name: "权限演示",
      path: "/hooksExample",
      routes: [
        {
          name: "useRef",
          path: "useRef",
          component: "./HooksExample/useRefExample/dom.tsx",
        },
      ],
    },

    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
});
