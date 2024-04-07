import fs from 'fs';
import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';
import { z } from 'zod';

const prisma = new PrismaClient();
const app = fastify();

// Defina o esquema de validação usando Zod
const produtoSchema = z.object({
  id: z.string(),
  nome: z.string(),
  img: z.string().url(), // Validar que 'img' é uma URL
  descricao: z.string(),
});

app.get('/produtos', async (request, reply) => {
  try {
    const produtos = await prisma.produtos.findMany({
      select: {
        id: true,
        nome: true,
        img: true,
        descricao: true,
      },
    });
    reply.send(produtos);
  } catch (error) {
    reply.status(500).send('Erro ao buscar produtos');
  }
});

app.post('/produtos', async (request, reply) => {
  try {
    const body = request.body;
    // Validar o corpo da requisição usando o esquema Zod
    const produto = produtoSchema.parse(body);

    // Criar o produto no banco de dados
    const novoProduto = await prisma.produtos.create({
      data: produto,
    });

    reply.status(201).send(novoProduto);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    reply.status(400).send('Erro ao criar produto');
  }
});

const PORT = process.env.PORT || 5555;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
