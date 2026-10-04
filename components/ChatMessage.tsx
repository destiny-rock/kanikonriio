/**
 * Component for rendering individual chat messages.
 * Displays messages differently based on whether they're from the user or AI.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/brand';

type ChatMessageProps = {
  message: {
    message: string;   // Message content
    isUser: boolean;   // Determines message styling
  };
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <View style={[
      styles.container,
      message.isUser ? styles.userMessage : styles.aiMessage
    ]}>
      <Text style={styles.text}>{message.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
});

export default ChatMessage; 