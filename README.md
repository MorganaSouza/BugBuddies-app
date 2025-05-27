# 🐞 BugBuddies

BugBuddies é um aplicativo mobile desenvolvido com **Expo** e **React Native**, acompanhado por uma **API backend em Node.js com Express e MongoDB**. Ele permite que usuários identifiquem, cadastrem e consultem insetos com informações como nome comum, nome científico, foto e localização geográfica.

Ideal para **entusiastas, estudantes e pesquisadores de entomologia**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Expo](https://img.shields.io/badge/Made%20with-Expo-4630EB.svg?style=flat)](https://expo.dev/)
[![Platform](https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-lightgrey)](https://reactnative.dev/)

## ✨ Funcionalidades

* 📋 Listagem de insetos cadastrados
* 🔍 Visualização de detalhes com foto e dados científicos
* ➕ Cadastro de insetos com upload de imagens e geolocalização
* ✏️ Edição e exclusão de registros
* 🗽️ Visualização dos insetos em um mapa

## ⚙️ Tecnologias

### Frontend (Mobile)

* [Expo](https://expo.dev/)
* [React Native](https://reactnative.dev/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Paper](https://callstack.github.io/react-native-paper/)

### Backend (API)

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Multer](https://github.com/expressjs/multer) para upload de imagens

## 🚀 Como rodar o projeto

### Pré-requisitos

* Node.js
* Expo CLI (`npm install -g expo-cli`)
* MongoDB (local ou na nuvem, como Atlas)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/bugbuddies.git
cd bugbuddies
```

### 2. Instale as dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3. Crie um arquivo `.env` na pasta `backend` com as variáveis:

```
MONGODB_URI=seu_link_do_mongodb
PORT=3000
```

> ⚠️ Adicione `.env` ao `.gitignore` para manter suas credenciais seguras.

### 4. Inicie os servidores

#### Backend

```bash
cd backend
npm start
```

#### Frontend (Expo)

```bash
cd frontend
npm start
```

Use o app Expo Go no seu celular ou um emulador para visualizar o app.

## 📸 Capturas de Tela

![Tela inicial do BugBuddies](assets/screenshot-home.png)


## 👩‍💻 Desenvolvedora

**Morgana Souza**

---

## 👁️ English Version

# 🐞 BugBuddies

BugBuddies is a mobile app built with **Expo** and **React Native**, with a **Node.js API backend using Express and MongoDB**. Users can identify, register and explore insects, storing information such as common name, scientific name, photo, and geolocation.

Ideal for **enthusiasts, students, and entomology researchers**.

## ✨ Features

* 📋 Insect listing
* 🔍 Detail view with photo and scientific data
* ➕ Insect registration with image upload and location
* ✏️ Edit and delete records
* 🗽️ Map view with insect markers

## ⚙️ Technologies

### Frontend

* [Expo](https://expo.dev/)
* [React Native](https://reactnative.dev/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Paper](https://callstack.github.io/react-native-paper/)

### Backend

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Multer](https://github.com/expressjs/multer)

## 🚀 Getting Started

See the setup steps above (Portuguese section) or run the frontend and backend separately with `npm start` after installing dependencies.

## 📸 Screenshots

*Add screenshots of your app UI here.*

## 👩‍💻 Developer

**Morgana Souza**

---

Licensed under the [MIT License](LICENSE).
