interface ToDo {
    id: string;
    title: string;
    description?: string;
    status: "pending" | "in-progress" | "completed" | "canceled" | "on-hold" | "overdue" //status: "pendente" | "em_progresso" | "completo" | "cancelado" | "em_espera / em_pausa" | "atrasado";
    createdAt: Date
    updatedAt?: Date
    dueDate?: Date
    priority: "low" | "medium" | "high" //priority: "baixa" | "media" | "alta"
}

type ColorScheme = "light" | "dark"

export { ToDo, ColorScheme }