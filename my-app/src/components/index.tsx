import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CardProps } from '../types/';

export const Card: React.FC<CardProps> = ({ userImage, userName, postText, postImage }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: userImage }} style={styles.userImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.postText}>{postText}</Text>
        {postImage && <Image source={{ uri: postImage }} style={styles.postImage} />}
      </View>
      <View style={styles.footer}>
        <Text>❤️ Curtir</Text>
        <Text>💬 Comentar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  body: {
    marginBottom: 10,
  },
  postText: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
