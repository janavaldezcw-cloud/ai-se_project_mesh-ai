import type { Request, Response } from 'express';

// POST /documents → 201
export const uploadDocument = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {
      id: 'doc_003',
      filename: 'new-document.pdf',
      uploadedAt: '2026-01-03T00:00:00Z',
    },
    error: null,
  });
};

// GET /documents → 200
export const getDocuments = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 'doc_001',
        filename: 'notes.pdf',
        uploadedAt: '2026-01-01T00:00:00Z',
      },
      {
        id: 'doc_002',
        filename: 'research-paper.pdf',
        uploadedAt: '2026-01-02T00:00:00Z',
      },
    ],
    error: null,
  });
};

// GET /documents/:id → 200
export const getDocumentById = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      id: req.params.id,
      filename: 'notes.pdf',
      uploadedAt: '2026-01-01T00:00:00Z',
    },
    error: null,
  });
};

// DELETE /documents/:id → 204 (no response body)
export const deleteDocument = (req: Request, res: Response): void => {
  res.status(204).send();
};
