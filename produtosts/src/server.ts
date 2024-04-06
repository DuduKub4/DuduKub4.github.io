import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';
import { z } from 'zod';

const prisma = new PrismaClient();
const server = fastify();

// Defina o esquema de validação usando Zod
const produtoSchema = z.object({
  id: z.number(),
  nome: z.string(),
  img: z.string(),
  descricao: z.string(),
  createdAt: z.string(),
});

async function main() {
  const produtos = await prisma.produto.findMany();
  
  // Validar os produtos recuperados do banco de dados
  produtos.forEach(produto => {
    if (typeof produto === 'object' && produto !== null) {
      try {
        produtoSchema.parse(produto);
        console.log('Produto válido:', produto.nome);
      } catch (error) {
        console.error('Produto inválido:', produto.nome, (error as Error).message);
      }
    }
  });
}

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
  console.log('HTTP Server Running');
}).catch(error => {
  console.error('Error starting server:', error);
});
