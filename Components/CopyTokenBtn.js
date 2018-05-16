import React from 'react';
import { StyleSheet, View, Button, AsyncStorage, Clipboard, Text } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


class CopyTokenBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
            token: '',
        }
    }

    async componentDidMount() {
        let token = await AsyncStorage.getItem('token')
        this.setState({ token })
    }

    render() {
        let { copied, token } = this.state;

        let copyTokenHandler = () => {
            this.setState({copied: true})
            Clipboard.setString(token)
            setTimeout( ()=> this.setState({ copied: false}), 1500 )
        }

        return (
            <View style={styles.main}>
                <View style={styles.getToken}>
                    {copied ?
                            <FontAwesome style={styles.fontCopy}>{Icons.checkCircleO}</FontAwesome>
                        :
                            <FontAwesome style={styles.fontCopy}>{Icons.copy}</FontAwesome>
                    }
                    <Button 
                        onPress={copyTokenHandler}
                        title="Token"
                        color='green'
                    />
                </View> 
                {copied && <Text style={styles.text}>Copied!</Text>}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        right: 0,
        top: 42,
        display: 'flex',
    },
    getToken: {
        display: 'flex',
        flexDirection: 'row',
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        width: 85,
    },
    fontCopy: {
        color: 'green',
        fontSize: 18,
        margin: 0,
        textAlign: 'center',
        position: 'relative',
        left: 3,
        top: 1,
    },
    text: {
        textAlign: 'center',
        color: 'green',
        fontSize: 16,
    }
    
});

export default CopyTokenBtn;