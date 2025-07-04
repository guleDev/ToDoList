interface ToDo {
    id: string;
    title: string;
    description?: string;
    status: "pending" | "in-progress" | "completed" | "canceled" | "on_hold" | "overdue" //status: "pendente" | "em_progresso" | "completo" | "cancelado" | "em_espera / em_pausa" | "atrasado";
    createdAt: Date | string;
    updatedAt?: Date | string;
    dueDate?: Date | string;
    priority: "low" | "medium" | "high" //priority: "baixa" | "media" | "alta"
}

type ColorScheme = "light" | "dark"

export { ToDo, ColorScheme }