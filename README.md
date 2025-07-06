# ArkLab AI Agent Catalog

A responsive and SEO-friendly web application built with Next.js and TypeScript that displays a catalog of AI agents with advanced filtering and search capabilities.

## 🚀 Features

### Core Features
- **Server-Side Rendering (SSR)** - Initial data is fetched and rendered on the server for optimal SEO and performance
- **Responsive Design** - Fully responsive layout that works across desktop, tablet, and mobile devices
- **Advanced Filtering & Search** - Multi-criteria filtering with real-time search functionality
- **State Management** - Redux Toolkit for managing application state
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **Modern UI Components** - Built with Shadcn UI for consistent and accessible design

### Technical Implementation
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Redux Toolkit** for state management
- **Shadcn UI** for component library
- **Framer Motion** for animations
- **Tailwind CSS** for styling

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd arklab-ai-catalog
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`
   Update the `NEXT_PUBLIC_BASE_URL` if needed for your local setup.

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main catalog page (SSR)
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── providers/        # Context providers
│   ├── agent-card.tsx    # Individual agent card
│   ├── agent-catalog.tsx # Main catalog component
│   └── search-filters.tsx # Filter and search UI
├── lib/                  # Utilities and configuration
│   ├── store/           # Redux store setup
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Utility functions
└── public/              # Static assets
    └── mock-agents.json # Mock data
\`\`\`

## 🎯 Key Features Explained

### Server-Side Rendering (SSR)
The application fetches agent data on the server during the initial page load, ensuring:
- Fast initial page rendering
- SEO-friendly content delivery
- Improved Core Web Vitals scores

### Advanced Filtering System
- **Search**: Real-time text search across agent names and descriptions
- **Status Filter**: Multi-select filtering by agent status (Active, Beta, Archived)
- **Category Filter**: Multi-select filtering by business category
- **Pricing Model Filter**: Single-select filtering by pricing model
- **Clear Filters**: One-click reset of all applied filters

### State Management
Redux Toolkit manages:
- Agent data and filtered results
- Filter states and search queries
- Loading states and UI interactions

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive grid layouts (1 column on mobile, 2 on tablet, 3 on desktop)
- Touch-friendly interactions and proper spacing

### Performance Optimizations
- Code splitting with Next.js automatic optimization
- Efficient re-rendering with Redux selectors
- Optimized animations with Framer Motion
- Image optimization ready for future enhancements

## 🎨 Design Decisions

### Component Architecture
- **Server Components** for data fetching and initial rendering
- **Client Components** for interactive features and state management
- **Composition pattern** for flexible and reusable components

### State Management Strategy
- Redux for complex filter state that needs to be shared across components
- Local state for simple UI interactions
- Derived state for filtered results to avoid unnecessary computations

### Animation Strategy
- Subtle entrance animations for agent cards
- Smooth transitions for filter changes
- Hover effects for enhanced interactivity
- Performance-conscious animations that don't impact usability

## 🔍 SEO Implementation

- **Dynamic Meta Tags**: Title and description update based on content
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Server-Side Rendering**: Content available to search engines immediately
- **Structured Data Ready**: Architecture supports future schema.org implementation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 🧪 Testing the Implementation

### Verify SSR
1. View page source in browser (Ctrl+U / Cmd+U)
2. Confirm agent data is present in the initial HTML
3. Check that content loads even with JavaScript disabled

### Test Filtering
1. Use search bar to filter by name/description
2. Apply multiple status filters simultaneously
3. Combine different filter types
4. Verify filter badges and clear functionality

### Test Responsiveness
1. Resize browser window to test breakpoints
2. Test on mobile devices or browser dev tools
3. Verify touch interactions work properly

## 🔮 Future Enhancements

- Google OAuth 2.0 integration for user authentication
- Individual agent detail pages
- Favorites/bookmarking system
- Advanced sorting options
- Performance analytics dashboard
- A/B testing for UI improvements

## 📝 Development Notes

### Challenges Encountered
1. **SSR Data Fetching**: Ensuring proper data flow from server to client components
2. **Filter State Management**: Balancing performance with feature complexity
3. **Animation Performance**: Optimizing Framer Motion for smooth interactions
4. **Responsive Design**: Creating consistent experience across all device sizes

### Key Learnings
- Next.js App Router patterns for SSR with client-side interactivity
- Redux Toolkit best practices for TypeScript applications
- Shadcn UI integration and customization techniques
- Performance optimization strategies for React applications

## 🤝 Contributing

This project was built as a take-home challenge. For any questions or suggestions, please reach out through the provided submission channels.


