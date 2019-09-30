import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TextInput } from 'react-native-paper';


const SignupPresentation = (props) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>

          <TextInput
            label='Email'
            style={{backgroundColor: 'transparent'}} />
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  );
}

export default SignupPresentation;