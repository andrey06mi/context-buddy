# Context Buddy

A visual prompt structure builder that helps you create better AI prompts using a systematic 10-section framework.

**[🚀 Live Demo](https://context.addy.ie)**

## Overview

Context Buddy is a web application that implements the proven 10-section prompt structure methodology from Anthropic for creating effective AI prompts. It provides a visual breakdown of each section with color-coded components and editable fields to build comprehensive, well-structured prompts.

## Features

- **Visual Prompt Structure**: Color-coded breakdown of the 10 essential prompt sections
- **Interactive Builder**: Editable textarea fields for each section with matching color themes
- **Template Library**: Pre-built templates for common use cases:
  - AI Career Coach
  - Technical Writing Assistant
  - Creative Writing Coach
- **One-Click Copy**: Copy your complete structured prompt to clipboard
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Interface**: Intuitive layout that makes prompt building straightforward

## The 10-Section Prompt Structure

1. **Task Context** - Define the AI's role and primary objective
2. **Tone Context** - Specify the desired communication style and personality
3. **Background Data** - Provide relevant documents, data, and reference materials
4. **Detailed Task Description & Rules** - Outline specific requirements and constraints
5. **Examples** - Show desired input/output patterns and formatting
6. **Conversation History** - Include relevant prior context and interactions
7. **Immediate Task** - State the current specific request or question
8. **Thinking Steps** - Encourage step-by-step reasoning and reflection
9. **Output Formatting** - Specify how the response should be structured
10. **Prefilled Response** - Provide starting text or response format

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd context-buddy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Select a Template**: Choose from the dropdown menu or start with a blank template
2. **Fill in Sections**: Complete each colored section with relevant content for your prompt
3. **Preview Structure**: See how your prompt maps to the visual structure on the left
4. **Copy Prompt**: Click "Copy Full Prompt to Clipboard" to get your structured prompt
5. **Use with AI**: Paste your prompt into your preferred AI tool

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # Vite type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Template Structure

Each template follows this TypeScript interface:

```typescript
interface PromptTemplate {
  name: string;
  data: {
    taskContext: string;
    toneContext: string;
    backgroundData: string;
    detailedTask: string;
    examples: string;
    conversationHistory: string;
    immediateTask: string;
    thinkingSteps: string;
    outputFormatting: string;
    prefilledResponse: string;
  };
}
```

## Acknowledgments

Inspired by prompt engineering best practices from Anthropic and structured prompting methodologies
---

**[Try Context Buddy](https://context.addy.ie)** and start building better AI prompts today!