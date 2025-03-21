import { Company, CompanyResponse } from './types/Company'

export class EnhetsregisteretClient {
    private readonly baseUrl: string

    constructor(baseUrl: string = 'https://data.brreg.no/enhetsregisteret/api') {
        this.baseUrl = baseUrl
    }

    /**
     * Retrieves a company by its organization number
     * @param orgnr - The organization number to look up
     * @returns Promise containing the company information
     */
    public async getCompany(orgnr: string): Promise<Company> {
        const response = await fetch(`${this.baseUrl}/enheter/${orgnr}`)
        if (!response.ok) {
            throw new Error(`Failed to fetch company: ${response.status} ${response.statusText} - ${response.url}`)
        }
        return response.json()
    }

    /**
     * Searches for companies based on name
     * @param name - The name to search for
     * @param page - The page number (0-based)
     * @param size - The number of results per page
     * @returns Promise containing the search results
     */
    public async searchCompanies(
        name: string,
        page: number = 0,
        size: number = 20
    ): Promise<CompanyResponse> {
        const response = await fetch(
            `${this.baseUrl}/enheter?navn=${encodeURIComponent(
                name
            )}&page=${page}&size=${size}`
        )
        if (!response.ok) {
            throw new Error(`Failed to search companies: ${response.statusText}`)
        }
        return response.json()
    }

    /**
     * Retrieves companies by municipality number
     * @param kommunenummer - The municipality number
     * @param page - The page number (0-based)
     * @param size - The number of results per page
     * @returns Promise containing the search results
     */
    public async getCompaniesByMunicipality(
        kommunenummer: string,
        page: number = 0,
        size: number = 20
    ): Promise<CompanyResponse> {
        const response = await fetch(
            `${this.baseUrl}/enheter?kommunenummer=${kommunenummer}&page=${page}&size=${size}`
        )
        if (!response.ok) {
            throw new Error(
                `Failed to fetch companies by municipality: ${response.statusText}`
            )
        }
        return response.json()
    }
} 