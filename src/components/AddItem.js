import React, { Component } from 'react';
import{ View, TextInput, Button, Text } from 'react-native';
import {db} from '../config';

let addItem = item => {
    db.ref('/items').push({
        itemInfo: item,
    });
}

let itemRef = db.ref('/items');

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemInfo: '' ,
            items: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickToAdd = this.clickToAdd.bind(this);
    };

    handleChange(e){
        this.setState({itemInfo:e.nativeEvent.text})
    }

    clickToAdd(){
        addItem(this.state.itemInfo);
    }

    componentDidMount(){
        itemRef.on('value', myDataTable => {
            let data = myDataTable.val();
            let items = Object.values(data);
            this.setState({items});
        });
    }


    render() {
        return(
            <View>
                <TextInput
                    style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
                    onChange={this.handleChange}
                    value={this.state.itemInfo}
                />
                
                <Button
                    title="Add"
                    color="#841584"
                    onPress={this.clickToAdd}
                />

                {this.state.items.map( x => {
                    return <Text>{x.itemInfo}</Text>
                })
                }

            </View>
        );
    }
}