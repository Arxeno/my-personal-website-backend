import express, { Application, Request, Response } from 'express';

const app: Application = express();

const port: number = Number(process.env.PORT) || 6001;
