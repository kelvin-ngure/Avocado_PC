class Task {
    id: number | null = null
    title: string
    dueDate: number | null = null
    timeDue: number | null = null
    completed: boolean = false
    description: string = ""

    constructor(title: string) {
        this.title = title
    }
}

export default Task;