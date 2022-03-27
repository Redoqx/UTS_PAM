import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';

function PesananKu() {
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
                    Tidak Ada Pesanan!
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default PesananKu;