export interface Company {
    id?: string;
    companyCode?: string;
    name: string;
    symbol: string;
    sector: CompanySector;
}

export interface StockPriceIntervalData {
    companyName: string;
    companySymbol: string;
    boughtStockCount: string;
    pastClosePrice: string;
    selClosePrice: string;
    profitLoss: string;
}

export interface StockPrice {
    date?: string;
    timestamp?: string;
    totalTransactions?: string;
    totalTradeShares?: string;
    totalTradeAmount?: string;
    maxPrice?: string;
    minPrice?: string;
    closePrice?: number;
    companyId?: string;
    company?: Company;
}

export interface CompanySector {
    id: string;
    name: string;
}

// export type CompanySector = 'Hydro Power' | 'Microfinance' | 'Commercial Banks' | 'Mutual Fund' | 'Finance' | 'Development Banks' |
//     'Non Life Insurance' | 'Preferred Stock' | 'Manufacturing And Processing' | 'Others';


// Other Custom Responses
export interface AverageStockPrice {
    companyId?: number;
    date?: string;
    avgCostPrice: number;
    month: number;
    year: number;
}


export interface PageRequest {
    page: number;
    size: number;
    sort: string;
    direction: string;
}

export interface GenericResponse<T> {
    messageCode: string;
    response: T;
    totalElements: number;
    httpStatus: string;
}

export interface GenericFilterRequest<T> {
    dataFilter: T;
}
