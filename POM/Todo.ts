import { Page, Locator } from "@playwright/test";

type todoItems = {
    listPosition: number | null | undefined;
    check: boolean | null | undefined;
    todoItem: string | null | undefined;
}

export class Todo {

    readonly page: Page;
    readonly todoList: Locator;
    readonly toDoHeader: Locator;
    readonly toDoButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.todoList = page.locator("body > div.page > main > article > ul");
        this.toDoHeader = page.locator('body > div.page > main > article > h3');
        this.toDoButton = page.locator('body > div.page > main > article > button');
    }
    
    async addTodoItem(item: string) {        
        await this.page.getByPlaceholder('Something todo').click();
        await this.page.getByPlaceholder('Something todo').fill(item);
        await this.page.getByRole('button', { name: 'Add todo' }).click();
    }

    // async isItemAdded(item: string) {
    //     const isItemAdded = ((await this.todoList.locator('input', {hasText: item}).innerText({ timeout: 3000})) == item);
    //     return isItemAdded;
    // }

    async getTodoItemsList() {
        
        const itemsList = await this.page.getByRole("list");
        return itemsList;

    }
}