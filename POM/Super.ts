import { Page, Locator } from "@playwright/test";

export class Super {

    readonly page: Page;
    readonly title: Locator;

    constructor (page: Page) {
        this.page = page;
        this.title = page.getByRole("heading");        
    }
}