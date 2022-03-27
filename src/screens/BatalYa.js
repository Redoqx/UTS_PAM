import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';

function BatalYa() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"gray",}}>
            <View style={{
                    backgroundColor:"white",
                    marginHorizontal: 10, 
                    marginVertical: 50, 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                <Text style={{color:'black', fontSize: 32, fontWeight: 'bold'}}>
                    Tidak Ada Pembatalan!
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default BatalYa;