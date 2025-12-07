import { NextResponse } from 'next/server';
import { Car } from '@/types';

// For now, using mock data. Replace with Google Sheets API integration
// To integrate Google Sheets:
// 1. Set up Google Cloud project and enable Sheets API
// 2. Create service account and download JSON key
// 3. Share your Google Sheet with the service account email
// 4. Add GOOGLE_SHEETS_ID and GOOGLE_CREDENTIALS to .env.local

const mockCars: Car[] = [
  {
    unit: "1",
    make: "Toyota",
    model: "Camry",
    trim: "LE",
    year: 2020,
    vin: "4T1B11HK5KU123456",
    color: "Silver",
    leaseAmount: 450,
    category: "Available",
    status: "Open"
  },
  {
    unit: "2",
    make: "Honda",
    model: "Accord",
    trim: "EX",
    year: 2021,
    vin: "1HGCV1F30MA123456",
    color: "Black",
    leaseAmount: 500,
    category: "Available",
    status: "Open"
  },
  {
    unit: "3",
    make: "Nissan",
    model: "Altima",
    trim: "SV",
    year: 2019,
    vin: "1N4AL3AP5KC123456",
    color: "White",
    leaseAmount: 400,
    category: "Reserved",
    status: "Reserved"
  }
];

export async function GET() {
  try {
    // TODO: Replace with actual Google Sheets API call
    // const sheets = await getGoogleSheetsClient();
    // const response = await sheets.spreadsheets.values.get({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range: 'Available_Delta!A2:J',
    // });
    // const rows = response.data.values;
    // const cars = parseCarsFromRows(rows);

    // For now, return mock data
    const cars = mockCars;

    return NextResponse.json({ cars }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars', cars: mockCars },
      { status: 500 }
    );
  }
}

