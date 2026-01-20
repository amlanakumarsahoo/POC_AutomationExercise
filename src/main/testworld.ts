import { World } from "@cucumber/cucumber";
import { Page,Browser, BrowserContext } from "playwright";
// import { PageObjectFactory } from "../operations/pageObjectFactory";
export class TestWorld extends World {
  page!: Page;
  context!: BrowserContext;
  browser!: Browser;
//   factory!: PageObjectFactory;
}