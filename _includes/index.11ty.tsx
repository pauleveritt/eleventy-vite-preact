// noinspection ES6UnusedImports
import { h } from "preact";

export const data = {
  title: "Eleventy 11ty.js Extensions",
};

interface Context {
  log(message: string): void;
}

interface Data {
  readonly title: string;
}

export function render(this: Context, { title }: Data) {
  return <div>Hello</div>;
}
