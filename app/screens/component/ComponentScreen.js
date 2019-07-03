import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Divider, Card, Text, Icon, Container, ImageGradient } from '../../components';
import BgImage from '../../assets/images/bgimages';
import styles from './styles';

class ComponentListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'All Components'
    })

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Container>
                    <Container padd>
                        <Card title="Text from h1 to h4">
                            <Text h1> Heading 1 </Text>
                            <Text h2> Heading 2 </Text>
                            <Text h3> Heading 3 </Text>
                            <Text h4> Heading 4 </Text>
                        </Card>

                        <Card rounded title="Text from h1 to h4 with rounded card">
                            <Text h1> Heading 1 </Text>
                            <Text h2> Heading 2 </Text>
                            <Text h3> Heading 3 </Text>
                            <Text h4> Heading 4 </Text>
                        </Card>

                        <Card title="Gradient Button">
                            <Button gradient onPress={this.generateLuckyNumber} primary title="primary gradient Button" />
                            <Button title="Custom gradient button" gradient colors={['#000', '#FF3800']} />
                            <Button icon={{ name: "md-home" }} title="Custom gradient button" gradient colors={['#000', '#FF3800']} />
                            <Button icon={{ name: "md-home" }} iconRight title="Custom gradient button" gradient colors={['#000', '#FF3800']} />
                            <Button loading title="Custom gradient button" gradient colors={['#000', '#FF3800']} />
                            <Button loading loadingRight title="Custom gradient button" gradient colors={['#000', '#FF3800']} />
                        </Card>

                        <Card title="Buttons">
                            <Button onPress={this.generateLuckyNumber} primary title="Primary Button" />
                            <Button onPress={this.generateLuckyNumber} accent title="Accent Button" />
                            <Button icon={{ name: "md-home" }} onPress={this.generateLuckyNumber} title="Left Icon Button" />
                            <Button icon={{ name: "md-navigate" }} iconRight onPress={this.generateLuckyNumber} title="Right Icon Button" />
                            <Button loading onPress={this.generateLuckyNumber} title="Right Icon Button" />
                            <Button loading loadingRight onPress={this.generateLuckyNumber} title="Right Icon Button" />
                        </Card>

                        <Card rounded title="Buttons Rounded">
                            <Button rounded onPress={this.generateLuckyNumber} primary title="Primary Button" />
                            <Button rounded onPress={this.generateLuckyNumber} accent title="Accent Button" />
                            <Button rounded icon={{ name: "md-home" }} onPress={this.generateLuckyNumber} title="Left Icon Button" />
                            <Button rounded icon={{ name: "md-navigate" }} iconRight onPress={this.generateLuckyNumber} title="Right Icon Button" />
                            <Button rounded loading onPress={this.generateLuckyNumber} title="Right Icon Button" />
                            <Button rounded loadingRight loading onPress={this.generateLuckyNumber} title="Right Icon Button" />
                        </Card>



                        <Card title="Icons">
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Icon name="md-wine" size={50} />
                                <Icon name="md-navigate" size={50} />
                                <Icon name="md-home" size={50} />
                                <Icon name="md-print" size={50} />
                            </View>
                            <Text h4>view react-native-vector-icons guide to know more about what icons are supported.</Text>
                        </Card>

                        <Card title="A card with Image and featured title">
                            <Card
                                featuredTitle='HELLO WORLD'
                                featuredSubtitle='This is featured Card'
                                image={{ uri: 'https://c.wallhere.com/photos/e2/96/Che_Nai_legs_crossed_legs_500px_women_model_sitting-921749.jpg!d' }}
                            >
                                <Text style={{ marginBottom: 10 }}>
                                    The idea with React Native is more about component structure than actual design.
                                </Text>
                                <Button
                                    icon={{ name: 'md-code' }}
                                    backgroundColor='#b7ac44'
                                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                    title='VIEW NOW' />
                            </Card>
                        </Card>

                        <Divider />
                        <Divider />

                    </Container>
                    <ImageGradient source={BgImage.auth}>
                        <View style={{ flex: 2 }} />
                        <View style={styles.bodyContent}>
                            <Text h1 inverseText style={styles.title}>
                                Experience a new way of Building
                        </Text>
                            <Text h2 inverseText style={styles.note}>
                                With thousands of Components for all kind of professional
                                UI and very useful resources for your next
                                React Native Project.
                        </Text>
                        </View>
                        <View style={styles.buttonWrapper} >
                            <Button title="Log In"
                                gradient
                                rounded
                                containerStyle={[styles.buttonContainerStyle, { marginBottom: 10 }]}
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                            <Button title="Sign Up"
                                gradient
                                containerStyle={styles.buttonContainerStyle}
                                rounded
                                colors={['#000', '#fff']}
                                onPress={() => this.props.navigation.navigate('Signup')}
                            />
                        </View>
                    </ImageGradient>
                </Container>
            </ScrollView>
        )
    }
}

export default ComponentListScreen;