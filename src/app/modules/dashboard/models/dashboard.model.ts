export interface Dashboard {
    success: string;
    chartDonut: ChartDonut[];
    chartBar: ChartBar[];
    tableUsers: TableUser[];
}

export interface ChartDonut {
    name: string;
    value: number;
}

export interface ChartBar {
    name: string;
    value: number;
}

export interface TableUser {
    firstName: string;
    lastName: string;
    username: string;
}