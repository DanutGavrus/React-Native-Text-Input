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
        if (e) {
            e.preventDefault();
        }

        this.setState({value: ''})
    }

    render() {
        return (
            <>
                <TextInput
                    onChangeText={(comment) => this.setState({value: comment})}
                    value={this.state.value} />
                <View
                    // Keep focus on the composer when Send message is clicked.
                    onMouseDown={(e) => e.preventDefault()} >
                    <Button
                        title='Send'
                        onPress={this.submitForm}
                        hitSlop={{
                            top: 3,
                            right: 3,
                            bottom: 3,
                            left: 3,
                        }} />
                </View>
            </>
        );
    }
}

export default TextInputComponent;