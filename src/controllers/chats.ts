import type { Request, Response } from 'express';

// GET /chats → 200
export const getChats = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 'chat_001',
        title: 'Questions about my notes',
        createdAt: '2026-01-01T00:00:00Z',
      },
      {
        id: 'chat_002',
        title: 'Research paper summary',
        createdAt: '2026-01-02T00:00:00Z',
      },
    ],
    error: null,
  });
};

// POST /chats → 201
export const createChat = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {
      id: 'chat_003',
      title: 'New chat',
      createdAt: '2026-01-03T00:00:00Z',
    },
    error: null,
  });
};

// GET /chats/:id → 200
export const getChatById = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      id: req.params.id,
      title: 'Questions about my notes',
      createdAt: '2026-01-01T00:00:00Z',
      messages: [
        { role: 'user', content: 'What is chapter 1 about?' },
        { role: 'assistant', content: 'Chapter 1 introduces the topic.' },
      ],
    },
    error: null,
  });
};

// DELETE /chats/:id → 204 (no response body)
export const deleteChat = (req: Request, res: Response): void => {
  res.status(204).send();
};

// POST /chats/:id/messages → 201
export const sendMessage = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {
      chatId: req.params.id,
      message: { role: 'user', content: 'What is chapter 2 about?' },
      reply: { role: 'assistant', content: 'Chapter 2 covers the methods.' },
    },
    error: null,
  });
};
