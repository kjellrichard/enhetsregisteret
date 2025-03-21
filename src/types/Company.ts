export interface Company {
    organisasjonsnummer: string
    navn: string
    organisasjonsform: {
        kode: string
        beskrivelse: string
    }
    registreringsdatoEnhetsregisteret: string
    registrertIMvaregisteret: boolean
    naeringskode1: {
        kode: string
        beskrivelse: string
    }
    forretningsadresse?: {
        land: string
        landkode: string
        postnummer: string
        poststed: string
        adresse: string[]
        kommune: string
        kommunenummer: string
    }
    postadresse?: {
        land: string
        landkode: string
        postnummer: string
        poststed: string
        adresse: string[]
        kommune: string
        kommunenummer: string
    }
    beliggenhetsadresse?: {
        land: string
        landkode: string
        postnummer: string
        poststed: string
        adresse: string[]
        kommune: string
        kommunenummer: string
    }
    institusjonellSektorkode?: {
        kode: string
        beskrivelse: string
    }
    konkurs: boolean
    underAvvikling: boolean
    underTvangsavviklingEllerTvangsopplosning: boolean
    maalform: string
    _links: {
        self: {
            href: string
        }
    }
}

export interface CompanyResponse {
    _embedded: {
        enheter: Company[]
    }
    _links: {
        self: {
            href: string
        }
        first: {
            href: string
        }
        next: {
            href: string
        }
        last: {
            href: string
        }
    }
    page: {
        size: number
        totalElements: number
        totalPages: number
        number: number
    }
} 