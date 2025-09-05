export interface Task {
    id: number;
    title: string;
    description?: string;
    status?: string;
    created_at: Date;
    updated_at: Date;
}

export interface TaskCreate extends Omit<Task, 'id' | 'created_at' | 'updated_at'> {}


export interface TaskUpdate extends Partial<Omit<Task, 'id' | 'created_at' | 'updated_at'>> {}