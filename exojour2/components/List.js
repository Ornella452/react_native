import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: '100%',
        textAlign: "center",
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        //textAlign: "right",
        borderRadius: 5,
      },
  
  });
  
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
        }

    }

    componentDidMount() {

        fetch('http://restcountries.eu/rest/v2/all')
            .then(rest => rest.json())
            .then(json => {
                this.setState({
                    countries: json
                    //je récupere et stock les données de l'Api
                })
                console.log(json)
            })


    }

    renderItem({ item }) {
        return (
            <View style={styles.item}>
                <Text>Pays : {item.name}</Text>
                <Text>Capital : {item.capital}</Text>
                <Image
                    source={{ uri: `${item.flag}` }}
                    style={{ width: 50, height: 50}} />

            </View>
        );
    }

    render() {
        return (
            <View  style={styles.container}>
                <FlatList
                    data={this.state.countries}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default List;