import "element-plus/theme-chalk/base.css";
import { ElButton } from "element-plus";
import { App } from "vue";

const components = [ElButton];

export default function (app: App): void {
  // components.forEach(component => {
  //   app.component(component.name, component)
  // })
  for (const component of components) {
    app.component(component.name, component);
  }
}
