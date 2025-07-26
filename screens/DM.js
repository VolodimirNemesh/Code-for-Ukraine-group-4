

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Rachel',
      text: 'Hello',
      avatar: require('../DialogWithRachel/Rachel!!.jpg'),
    },
    {
      id: 2,
      sender: 'You',
      text: 'Hi Rachel! How many trophies do you have in Clash Royale?',
      avatar: require('../DialogWithRachel/ProfileMainIcon.png'),
    },
    {
      id: 3,
      sender: 'Rachel',
      text: 'I`m the best player so i play on 4000',
      avatar: require('../DialogWithRachel/Rachel!!.jpg'),
    },
  ]);

  const [inputText, setInputText] = useState('');

  function handleSend() {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        text: inputText,
        avatar: require('../DialogWithRachel/ProfileMainIcon.png'), // локальный путь
      };

      setMessages([...messages, newMessage]);
      setInputText('');
    }
  }

  return (
    <View style={styles.screen}>
      
      <View style={styles.header}>
        <Image
          source={require('../DialogWithRachel/Rachel!!.jpg')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Rachel Liu</Text>
          <Text style={styles.username}>@rachelthebest</Text>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.messagesBox}>
        <ScrollView>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={
                msg.sender === 'You'
                  ? styles.myMessageBlock
                  : styles.otherMessageBlock
              }
            >
              <View style={styles.messageRow}>
                {msg.sender !== 'You' && (
                  <Image source={msg.avatar} style={styles.messageAvatar} />
                )}

                <View
                  style={[
                    styles.bubble,
                    msg.sender === 'You' ? styles.myBubble : styles.otherBubble,
                  ]}
                >
                  <Text style={styles.messageText}>{msg.text}</Text>
                </View>

                {msg.sender === 'You' && (
                  <Image source={msg.avatar} style={styles.messageAvatar} />
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      
      <View style={styles.inputBox}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type here..."
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '95%',
    backgroundColor: '#ffffff',
  },

  header: {
    height: 100,
    backgroundColor: '#FD4A9B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#CC005C',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  username: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },

  menuButton: {
    padding: 1,
  },

  menuIcon: {
    fontSize: 24,
    color: 'white',
  },

  messagesBox: {
    flex: 1,
    padding: 10,
  },

  myMessageBlock: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  otherMessageBlock: {
    alignItems: 'flex-start',
    marginBottom: 5,
  },

  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxWidth: '100%',
  },

  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 6,
  },


  bubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },

  myBubble: {
    backgroundColor: '#ff93c4ff',
  },

  otherBubble: {
    backgroundColor: '#90e5ffff',
  },

  messageText: {
    fontSize: 16,
    color: '#000',
  },

  inputBox: {
    height: 60,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#000',
  },

  sendButton: {
    marginLeft: 10,
    backgroundColor: '#CC005C',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  sendText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});