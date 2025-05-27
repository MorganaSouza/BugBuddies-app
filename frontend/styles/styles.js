import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#A8E6CF', // verde pastel de fundo
  },

  card: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    padding: 12,
  },

  image: {
    height: 180,
    width: '100%',
    borderRadius: 12,
    marginTop: 8,
  },

  input: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
  },

  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#FF6F61',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  fabText: {
    fontSize: 24,
    color: '#fff',
  },

  mapButton: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    backgroundColor: '#87CEEB',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  cardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },

  cardButton: {
    marginLeft: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  editButton: {
    backgroundColor: '#FFD3B6', // tom pastel suave
  },

  deleteButton: {
    backgroundColor: '#FF6F61',
  },

  cardButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});