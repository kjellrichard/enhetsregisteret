import { describe, it, expect } from 'vitest'
import { EnhetsregisteretClient } from '../src/EnhetsregisteretClient'

describe('EnhetsregisteretClient Integration Tests', () => {
    const client = new EnhetsregisteretClient()

    describe('getCompany', () => {
        it('should fetch a real company by organization number', async () => {
            // Using a known company (Equinor ASA)
            const orgNo = '923609016'
            const result = await client.getCompany(orgNo)

            expect(result.organisasjonsnummer).toBe(orgNo)
            expect(result.navn).toBe('EQUINOR ASA')
            expect(result.organisasjonsform.kode).toBe('ASA')
        })
    })

    describe('searchCompanies', () => {
        it('should search for companies by name', async () => {
            const result = await client.searchCompanies('Equinor', 0, 5)

            expect(result._embedded.enheter.length).toBeLessThanOrEqual(5)
            expect(result.page.size).toBe(5)
            expect(result._embedded.enheter[0].navn).toContain('EQUINOR')
        })
    })

    describe('getCompaniesByMunicipality', () => {
        it('should fetch companies by municipality number', async () => {
            // Using Oslo municipality number
            const result = await client.getCompaniesByMunicipality('0301', 0, 5)

            expect(result._embedded.enheter.length).toBeLessThanOrEqual(5)
            expect(result.page.size).toBe(5)
            expect(
                result._embedded.enheter.every(
                    (company) => company.forretningsadresse?.kommunenummer === '0301'
                )
            ).toBe(true)
        })
    })
}) 