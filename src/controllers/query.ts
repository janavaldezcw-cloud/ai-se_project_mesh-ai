import type { Request, Response } from 'express';

// POST /query → 200
export const askQuestion = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      question: 'What is chapter 1 about?',
      answer: 'Chapter 1 introduces the main topic of the document.',
      sources: [{ documentId: 'doc_001', filename: 'notes.pdf' }],
    },
    error: null,
  });
};
