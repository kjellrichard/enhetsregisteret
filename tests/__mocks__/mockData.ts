import { Company, CompanyResponse } from '../../src/types/Company'

export const mockCompany: Company = {
    organisasjonsnummer: '123456789',
    navn: 'Test Company AS',
    organisasjonsform: {
        kode: 'AS',
        beskrivelse: 'Aksjeselskap',
    },
    registreringsdatoEnhetsregisteret: '2020-01-01',
    registrertIMvaregisteret: true,
    naeringskode1: {
        kode: '6201.0',
        beskrivelse: 'Programmering',
    },
    forretningsadresse: {
        land: 'Norge',
        landkode: 'NO',
        postnummer: '0123',
        poststed: 'Oslo',
        adresse: ['Test Street 1'],
        kommune: 'Oslo',
        kommunenummer: '0301',
    },
    konkurs: false,
    underAvvikling: false,
    underTvangsavviklingEllerTvangsopplosning: false,
    maalform: 'nb',
    _links: {
        self: {
            href: 'https://data.brreg.no/enhetsregisteret/api/enheter/123456789',
        },
    },
}

export const mockCompanyResponse: CompanyResponse = {
    _embedded: {
        enheter: [mockCompany],
    },
    _links: {
        self: {
            href: 'https://data.brreg.no/enhetsregisteret/api/enheter?page=0&size=20',
        },
        first: {
            href: 'https://data.brreg.no/enhetsregisteret/api/enheter?page=0&size=20',
        },
        next: {
            href: 'https://data.brreg.no/enhetsregisteret/api/enheter?page=1&size=20',
        },
        last: {
            href: 'https://data.brreg.no/enhetsregisteret/api/enheter?page=5&size=20',
        },
    },
    page: {
        size: 20,
        totalElements: 100,
        totalPages: 5,
        number: 0,
    },
} 