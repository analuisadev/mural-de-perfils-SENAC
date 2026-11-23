import { ScrollView, StyleSheet, Text } from 'react-native';

import PerfilCartao from './src/components/perfilCartao/perfilCartao';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}>Mural de Perfis</Text>

      <PerfilCartao
        name="Luis Miguel"
        position="Analista de Sistemas"
        bio="Apaixonado por tecnologia."
        color="#000"
      />

      <PerfilCartao
        name="Kamila"
        position="Matemática"
        bio="Que situação..."
        color="#0000FF"
      />

      <PerfilCartao
        name="Edinho"
        position="Full-Stack"
        bio="Eu fico aqui imaginando..."
        color="#008000"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#F1F5F9'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16
  }
});
