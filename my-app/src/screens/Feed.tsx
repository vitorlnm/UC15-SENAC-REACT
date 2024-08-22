import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from '../components/';

export const Feed: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card
        userImage="https://media.licdn.com/dms/image/D4D35AQFdFUCpnGNa9Q/profile-framedphoto-shrink_200_200/0/1710111185675?e=1724371200&v=beta&t=Qf6TIdBYtOBR61GNsTObVyaU9CBt64565swqUC9Usy8"
        userName="Vitor Gabriel"
        postText="Desenvolvedor de Software - SAP"
        postImage="https://intellevo.com.br/wp-content/uploads/2020/09/parceiro-sap.jpg"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
  },
});
