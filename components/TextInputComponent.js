import React from 'react';
import {TextInput, View, Button} from 'react-native';

class TextInputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);

        this.state = {
            value: '',
        }
    }

    submitForm(e) {
        this.setState({value: ''})
    }

    render() {
        return (
            <>
                <TextInput
                    onChangeText={(comment) => this.setState({value: comment})}
                    value={this.state.value} />
                <View
                    // Keep focus on the button when Send is clicked.
                    onMouseDown={(e) => e.preventDefault()} >
                    <Button
                        title='Send'
                        onPress={this.submitForm} />
                </View>
            </>
        );
    }
}

export default TextInputComponent;