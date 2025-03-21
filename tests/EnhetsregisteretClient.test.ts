import { describe, it, expect, vi, beforeEach } from 'vitest'
import { EnhetsregisteretClient } from '../src/EnhetsregisteretClient'
import { mockCompany, mockCompanyResponse } from './__mocks__/mockData'

describe('EnhetsregisteretClient', () => {
    let client: EnhetsregisteretClient
    const mockFetch = vi.fn()

    beforeEach(() => {
        vi.stubGlobal('fetch', mockFetch)
        client = new EnhetsregisteretClient()
    })

    describe('getCompany', () => {
        it('should fetch and return company data', async () => {
            const mockResponse = {
                ok: true,
                json: () => Promise.resolve(mockCompany),
            }
            mockFetch.mockResolvedValueOnce(mockResponse)

            const result = await client.getCompany('123456789')

            expect(mockFetch).toHaveBeenCalledWith(
                'https://data.brreg.no/enhetsregisteret/api/enheter/123456789'
            )
            expect(result).toEqual(mockCompany)
        })

        it('should throw error when request fails', async () => {
            const mockResponse = {
                ok: false,
                statusText: 'Not Found',
            }
            mockFetch.mockResolvedValueOnce(mockResponse)

            await expect(client.getCompany('123456789')).rejects.toThrow(
                /Failed to fetch company/i
            )
        })
    })

    describe('searchCompanies', () => {
        it('should fetch and return search results', async () => {
            const mockResponse = {
                ok: true,
                json: () => Promise.resolve(mockCompanyResponse),
            }
            mockFetch.mockResolvedValueOnce(mockResponse)

            const result = await client.searchCompanies('Test Company')

            expect(mockFetch).toHaveBeenCalledWith(
                'https://data.brreg.no/enhetsregisteret/api/enheter?navn=Test%20Company&page=0&size=20'
            )
            expect(result).toEqual(mockCompanyResponse)
        })

        it('should throw error when request fails', async () => {
            const mockResponse = {
                ok: false,
                statusText: 'Bad Request',
            }
            mockFetch.mockResolvedValueOnce(mockResponse)

            await expect(client.searchCompanies('Test Company')).rejects.toThrow(
                'Failed to search companies: Bad Request'
            )
        })
    })

    describe('getCompaniesByMunicipality', () => {
        it('should fetch and return companies by municipality', async () => {
            const mockResponse = {
                ok: true,
                json: () => Promise.resolve(mockCompanyResponse),
            }
            mockFetch.mockResolvedValueOnce(mockResponse)

            const result = await client.getCompaniesByMunicipality('0301')

            expect(mockFetch).toHaveBeenCalledWith(
                'https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=0301&page=0&size=20'
            )
            expect(result).toEqual(mockCompanyResponse)
        })

        it('should throw error when request fails', async () => {
            const mockResponse = {
                ok: false,
                statusText: 'Bad Request',
            }
            mockFetch.mockResolvedValueOnce(mockResponse)

            await expect(client.getCompaniesByMunicipality('0301')).rejects.toThrow(
                'Failed to fetch companies by municipality: Bad Request'
            )
        })
    })
}) 