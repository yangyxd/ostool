export class PageData<T> {
  items: T[] = []
  pageTotal = 1

  constructor(pageTotal?: number, items?: T[]) {
    this.pageTotal = pageTotal ?? 1
    this.items = items ?? []
  }
}
