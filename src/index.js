require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());  //para a leitura dos dados em json inseridos no postman
const port = 3001;


//declaração das variáveis
const Noticia = mongoose.model('Noticia', { 
    titulo: String,
    autor: String,
    descricao: String,
    data_publicacao: String,
    media_url: String
});


//Para listar as notícias
app.get('/noticias', async (req, res) => {
  try {
      const noticias = await Noticia.find().sort({ data_publicacao: -1 }); // para a mais recente aparecer 1º
      return res.send(noticias);
  } catch (erro) {
      res.status(500).send(erro.message);
  }
});



//Para listar pelo id
app.get("/noticias/:id", async (req, res) => {
  try {
    const noticia = await Noticia.findById(req.params.id);
    if (noticia) {
      res.status(200).json(noticia);
    } else {
      res.status(404).send("Notícia não encontrada");
    }
  } catch (erro) {
    res.status(500).send(erro.message);
  }
});

//Para criar as notícias
app.post('/noticias', async (req, res) => {
    const noticia = new Noticia({
        titulo: req.body.titulo,
        autor: req.body.autor,
        descricao: req.body.descricao,
        data_publicacao: req.body.data_publicacao,
        media_url: req.body.media_url
    });

    await noticia.save();
    return res.status(201).send(noticia);
});

//Para atualizar/editar as notícias
app.put("/noticias/:id", async (req, res) => {
    try {
      const noticia_atualizada = await Noticia.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (noticia_atualizada) {
        res.status(200).json(noticia_atualizada);
      } else {
        res.status(404).send("Noticia não encontrada");
      }
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  });

//Para excluir as notícias
app.delete('/noticias/:id', async (req, res) => {
  try {
    const noticiaexcluida = await Noticia.findByIdAndDelete(req.params.id);
    if (noticiaexcluida) {
      res.status(200).send("Notícia excluída com sucesso");
    } else {
      res.status(404).send("Notícia não encontrada");
    }
  } catch (erro) {
    res.status(500).send(erro.message);
  }
});


app.listen(port, () => {

  //conexão com o mongoose

  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao banco de dados!'))
    .catch(err => console.error('Erro na conexão:', err));

  console.log(`Servidor de notícias rodando na porta ${port}`);
});
