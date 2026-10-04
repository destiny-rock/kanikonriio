import { StyleSheet } from "react-native";
import { colors } from '../theme/brand';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.background,
    },
    headerTitle: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
    headerButton: {
      padding: 5,
      color: colors.text,
      fontWeight: 'bold',
    },
    messagesContainer: {
      flex: 1,
    },
    scrollViewContent: {
      padding: 10,
      paddingBottom: 20,
    },
    messageBubble: {
      maxWidth: '80%',
      padding: 10,
      borderRadius: 20,
      marginBottom: 10,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: colors.primary,
    },
    aiMessage: {
      width: '80%',
      alignSelf: 'flex-start',
      backgroundColor: colors.secondary,
    },
    userMessageText: {
      color: colors.text,
    },
    aiMessageText: {
      color: colors.text,
    },
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: colors.backgroundDeep,
      maxHeight: 100,
      paddingBottom: 32,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.textSoft,
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginRight: 10,
      color: colors.text,
    },
    sendButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: 20,
      paddingHorizontal: 20,
    },
    stopButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.danger,
      borderRadius: 20,
      paddingHorizontal: 20,
    },
    sendButtonText: {
      color: colors.text,
      fontWeight: 'bold',
    },
    clearButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: 20,
      paddingHorizontal: 15,
      marginRight: 10,
    },
    clearButtonText: {
      color: colors.text,
      fontWeight: 'bold',
    },
    infoContainer: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: colors.backgroundDeep,
    },
    infoHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: colors.backgroundDeep,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButtonText: {
      color: colors.text,
      fontSize: 16,
      marginLeft: 5,
    },
    infoTitle: {
      color: colors.text,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 85,
    },
    infoContent: {
      flex: 1,
      padding: 15,
    },
    infoSection: {
      marginBottom: 30,
    },
    infoSectionTitle: {
      color: colors.text,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    versionText: {
      color: colors.textMuted,
      fontSize: 16,
      marginBottom: 10,
    },
    infoDescription: {
      color: colors.text,
      fontSize: 16,
      lineHeight: 22,
    },
    licenseSection: {
      marginBottom: 30,
    },
    licenseSectionTitle: {
      color: colors.text,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    licenseItem: {
      marginBottom: 20,
    },
    licenseTitle: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    licenseText: {
      color: colors.textSoft,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 5,
    },
    linkText: {
      color: colors.primary,
      fontSize: 14,
      marginTop: 5,
    },
    copyrightSection: {
      marginTop: 20,
      paddingTop: 20,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    copyrightText: {
      color: colors.textMuted,
      fontSize: 14,
      textAlign: 'center',
    },
    unsupportedContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      padding: 16
    },
    unsupportedText: {
      fontSize: 18,
      color: colors.text,
      textAlign: 'center'
    },
    noContentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    noContentText: {
      textAlign: 'center',
      color: colors.textFaint,
      fontSize: 16,
    },
    inputDisabled: {
      backgroundColor: '#f0f0f0',
      color: colors.textMuted,
    },
    sendButtonDisabled: {
      backgroundColor: colors.textSoft,
    },
    contentSection: {
      marginBottom: 20,
      padding: 16,
      backgroundColor: colors.surface,
      borderRadius: 8,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 12,
    },
    contentText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
    },
    buttonContainer: {
      padding: 16,
      backgroundColor: colors.backgroundDeep,
    },
    button: {
      backgroundColor: colors.primary,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonDisabled: {
      backgroundColor: colors.textFaint,
    },
    buttonText: {
      color: colors.text,
      fontSize: 16,
    },
    summarizeButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      marginRight: 8,
    },
    noMessagesContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop: 20,
    },
    noMessagesText: {
      textAlign: 'center',
      color: colors.textFaint,
      fontSize: 16,
      lineHeight: 24,
    },
  });
  
  const markdownStyles = {
    text: {
      color: colors.text, // White text
    },
    heading1: {
      color: colors.text, // White heading
    },
    strong: {
      color: colors.text, // White bold text
    },
    em: {
      color: colors.text, // White italic text
    },
    link: {
      color: colors.link, // Blue color for links
    },
    list_item: {
      color: colors.text, // White list items
    },
    code: {
      color: '#000' // code should be black
    },
    code_inline: {
      color: '#000'
    },
    blockquote: {
      color: '#000'
    }
  }
  
  const popoverStyles = (isUser: boolean) => ({
    optionsContainer: {
      backgroundColor: colors.surface,
      padding: 5,
      borderRadius: 8,
      width: 70,
      shadowColor: "#000",
      marginLeft: isUser ? 1 : 297, // Adjust these values as needed
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  });
  
  const menuOptionStyles = {
    optionWrapper: {
      padding: 10,
    },
    optionText: {
      color: colors.text,
      fontSize: 16,
    },
  };

export {styles, markdownStyles, popoverStyles, menuOptionStyles}