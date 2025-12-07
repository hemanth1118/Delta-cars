# Delta Cars Website

A modern, production-ready website for Delta Cars - a premium car leasing service. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🚗 **Available Cars Page** - Browse and filter available vehicles
- 📋 **Step-by-Step Process Guide** - Clear walkthrough of the leasing process
- 📄 **Documentation Requirements** - Comprehensive list of required documents, terms, and conditions
- 📧 **Contact Form** - Easy way for customers to get in touch
- 🎨 **Modern UI** - Beautiful, responsive design with dark/light theme support
- ✨ **Interactive Background** - Animated dot-shader background effect
- 📱 **Fully Responsive** - Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes for dark/light mode

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Delta-cars
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Delta-cars/
├── app/
│   ├── api/
│   │   ├── cars/          # API route for fetching car data
│   │   └── contact/       # API route for contact form submissions
│   ├── cars/              # Available cars page
│   ├── contact/           # Contact form page
│   ├── docs/              # Documentation requirements page
│   ├── process/           # Step-by-step process guide
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── dot-shader-background.tsx  # Animated background component
│   │   └── ...            # Other UI components
│   ├── header.tsx         # Site header/navigation
│   ├── footer.tsx         # Site footer
│   └── theme-provider.tsx  # Theme provider for dark/light mode
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── public/                # Static assets
```

## Configuration

### Google Sheets Integration

To connect the website to your Google Sheets:

1. Create a Google Cloud Project and enable the Google Sheets API
2. Create a service account and download the JSON key file
3. Share your Google Sheet ("Available_Delta") with the service account email
4. Add the following to `.env.local`:

```env
GOOGLE_SHEETS_ID=your-spreadsheet-id
GOOGLE_CREDENTIALS=path-to-your-service-account-key.json
```

5. Update `app/api/cars/route.ts` to use the Google Sheets API (see TODO comments in the file)

### Email Integration

To enable the contact form to send emails:

1. Choose an email service (Resend, SendGrid, Nodemailer, etc.)
2. Get your API key
3. Add it to `.env.local`:

```env
RESEND_API_KEY=your-api-key
# or
SENDGRID_API_KEY=your-api-key
```

4. Update `app/api/contact/route.ts` to use your email service (see TODO comments in the file)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Features in Detail

### Available Cars Page
- Fetches car data from API (currently using mock data)
- Filter by availability status
- Displays car details: make, model, year, color, VIN, monthly lease amount
- "Reserve This Car" button links to process guide

### Process Guide
- 5-step interactive walkthrough
- Checkbox system to track progress
- Links to insurance providers
- Clear instructions for each step

### Documentation Page
- Required documents checklist
- Insurance requirements
- Terms and conditions (accordion format)
- Rent rules and late fees
- Payment methods

### Contact Form
- Form validation with React Hook Form + Zod
- Success/error messaging
- Email integration ready (needs configuration)

## Customization

### Colors and Theme
Edit `app/globals.css` to customize color scheme. The site uses CSS variables for easy theming.

### Content
- Update contact information in `components/footer.tsx` and `components/header.tsx`
- Modify process steps in `app/process/page.tsx`
- Update documentation requirements in `app/docs/page.tsx`

## License

This project is proprietary and confidential.

## Support

For questions or issues, contact: car.delta@yahoo.com

