// @ts-ignore
import {h, render} from "preact";
import { expect, test } from "vitest";
import {IndexView} from "./index.11ty.tsx";

test("render index", () => {
  render(IndexView, document.body);
  const h1 = document.getElementById("target");
  expect(h1?.textContent).to.equal("Hello");
});
