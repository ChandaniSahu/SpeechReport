# Speech Score Report

A React-based web application for displaying speech evaluation scores with progress bars and feedback in a visually appealing report format.

## Live Demo 

Visit here :[https://speech-report.netlify.app/](https://speech-report.netlify.app/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ChandaniSahu/SpeechReport.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

- **Overall Score Display**: Shows the total speech score out of 9
- **Skill Breakdown**: Individual scores for Fluency, Clarity, Pronunciation, and Grammar
- **Progress Bar**: progress bars for easy score visualization
- **Feedback Section**: Display feedback with the help of specific feedback logic
- **Responsive Design**: Built with Tailwind CSS for modern, mobile-friendly UI

## Project Structure

```
src/
│         
├── components/
│   ├── ScoreSummary.tsx       # Overall score component
│   ├── SkillScoreBar.tsx      # Individual skill progress bar
│   ├── FeedbackSection.tsx    # Feedback display component
│  
├── reportData.ts              # Sample report data
├── feedbackLogic.ts           # Utility functions for feedback generation
├── ReportPage.tsx             # Main report page
├── main.jsx                   # Application entry point
├── index.css                  # Global styles
└── App.css                    # Component styles
```

## Sample Data Structure

The application uses a simple data structure for speech scores:

```typescript
{
  overallScore: number,        // Score out of 9
  skills: Array<{
    name: string,
    score: number             // Score out of 9
  }>,
}
```
## How Feedback Logic Works 

The feedback logic works on the basis of these conditions 

```text
  if (score >= 7) 
    "Excellent performance with strong clarity and control.";
  
  if (score >= 4) 
   "Satisfactory performance with some noticeable inaccuracies.";
  
   if(score < 4)
   "Needs significant improvement in clarity and accuracy.";
```

## Customization

- Update `src/reportData.ts` to change sample data





