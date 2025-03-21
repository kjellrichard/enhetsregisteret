# Enhetsregisteret

A TypeScript library for retrieving company information from the Norwegian Enhetsregisteret API.

## Installation

```bash
npm install enhetsregisteret
```

## Usage

```typescript
import { EnhetsregisteretClient } from 'enhetsregisteret';

// Create a client instance
const client = new EnhetsregisteretClient();

// Get a company by organization number
const company = await client.getCompany('940451631');
console.log(company.navn); // "EQUINOR ASA"

// Search for companies by name
const searchResults = await client.searchCompanies('Equinor', 0, 20);
console.log(searchResults._embedded.enheter.length);

// Get companies by municipality number
const municipalityResults = await client.getCompaniesByMunicipality('0301', 0, 20);
console.log(municipalityResults._embedded.enheter.length);
```

## API Reference

### EnhetsregisteretClient

#### Constructor

```typescript
new EnhetsregisteretClient(baseUrl?: string)
```

- `baseUrl` (optional): The base URL of the Enhetsregisteret API. Defaults to 'https://data.brreg.no/enhetsregisteret/api'

#### Methods

##### getCompany(orgnr: string): Promise<Company>

Retrieves a company by its organization number.

- `orgnr`: The organization number to look up
- Returns: Promise containing the company information

##### searchCompanies(name: string, page?: number, size?: number): Promise<CompanyResponse>

Searches for companies based on name.

- `name`: The name to search for
- `page` (optional): The page number (0-based). Defaults to 0
- `size` (optional): The number of results per page. Defaults to 20
- Returns: Promise containing the search results

##### getCompaniesByMunicipality(kommunenummer: string, page?: number, size?: number): Promise<CompanyResponse>

Retrieves companies by municipality number.

- `kommunenummer`: The municipality number
- `page` (optional): The page number (0-based). Defaults to 0
- `size` (optional): The number of results per page. Defaults to 20
- Returns: Promise containing the search results

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build the library
npm run build

# Lint the code
npm run lint
```

## License

MIT 