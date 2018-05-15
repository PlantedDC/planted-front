import React from 'react';
import { StyleSheet, View, Button, AsyncStorage, Clipboard } from 'react-native';
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
        }

        return (
            <View style={styles.getToken}>
                {copied ?
                        <FontAwesome style={styles.fontCopy}>{Icons.checkCircleO}</FontAwesome>
                    :
                        <FontAwesome style={styles.fontCopy}>{Icons.copy}</FontAwesome>
                }
                <Button 
                    onPress={copyTokenHandler}
                    title="Token"
                />
            </View> 
        )

    }
}

const styles = StyleSheet.create({
    getToken: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        right: 0,
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontCopy: {
        color: 'green',
        fontSize: 15,
        margin: 0,
        textAlign: 'center',
        position: 'relative',
        left: 3,
        top: 1,
    }
    
});

export default CopyTokenBtn;