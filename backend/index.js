const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://postgres:postgres@db:5432/todos', {
  dialect: 'postgres',
  logging: false
});

// Todo model
const Todo = sequelize.define('Todo', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Routes
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.update(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.destroy();
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Database sync and server start
async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer(); 