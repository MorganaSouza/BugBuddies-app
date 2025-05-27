require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Conexão com o MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB Atlas'))
.catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

// Modelo de Inseto
const Insect = mongoose.model('Insect', {
  commonName: String,
  scientificName: String,
  photo: String,
  location: String,
  date: String,
  latitude: Number,
  longitude: Number,
});

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Rota para listar todos os insetos
app.get('/insects', async (req, res) => {
  const insects = await Insect.find();
  res.json(insects);
});

// Rota para cadastrar novo inseto
app.post('/insects', upload.single('photo'), async (req, res) => {
  const { commonName, scientificName, location, date, latitude, longitude } = req.body;
  const photo = req.file ? req.file.path : null;
  const insect = new Insect({ commonName, scientificName, photo, location, date, latitude, longitude });
  await insect.save();
  res.json(insect);
});

// Rota para buscar inseto pelo ID
app.get('/insects/:id', async (req, res) => {
  try {
    const insect = await Insect.findById(req.params.id);
    if (!insect) {
      return res.status(404).json({ error: 'Inseto não encontrado' });
    }
    res.json(insect);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar inseto' });
  }
});


// Rota para atualizar um inseto pelo id
app.put('/insects/:id', upload.single('photo'), async (req, res) => {
  try {
    const insect = await Insect.findById(req.params.id);
    if (!insect) return res.status(404).json({ message: 'Inseto não encontrado' });

    const { commonName, scientificName, location, date, latitude, longitude } = req.body;

    insect.commonName = commonName || insect.commonName;
    insect.scientificName = scientificName || insect.scientificName;
    insect.location = location || insect.location;
    insect.date = date || insect.date;
    insect.latitude = latitude !== undefined ? latitude : insect.latitude;
    insect.longitude = longitude !== undefined ? longitude : insect.longitude;

    if (req.file) {
      insect.photo = req.file.path;
    }

    await insect.save();
    res.json(insect);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para deletar um inseto pelo id
app.delete('/insects/:id', async (req, res) => {
  try {
    const insect = await Insect.findByIdAndDelete(req.params.id);
    if (!insect) return res.status(404).json({ message: 'Inseto não encontrado' });

    res.json({ message: 'Inseto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`BugBuddies backend rodando na porta ${PORT}`));