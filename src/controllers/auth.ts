import type { Request, Response } from 'express';

export const getCurrentUser = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      userId: "user_001",
      email: "user@example.com",
      name: "John Doe",
      createdAt: "2026-01-01T00:00:00Z"
    },
    error: null
  });
};

// POST /auth/register → 201
export const registerUser = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {
      userId: 'user_002',
      email: 'newuser@example.com',
      name: 'Jane Doe',
      createdAt: '2026-01-02T00:00:00Z',
    },
    error: null,
  });
};

// POST /auth/login → 200
export const loginUser = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      token: 'mock-jwt-token',
      user: {
        userId: 'user_001',
        email: 'user@example.com',
        name: 'John Doe',
      },
    },
    error: null,
  });
};