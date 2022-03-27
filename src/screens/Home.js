import * as React from 'react';
import {
        StyleSheet,
        SafeAreaView,
        View,
        Text,
        Button,
        Modal,
        TextInput,
}from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import color from '../config/color';
import data from '../data/data'

function Home() {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const [PDari, setPDari]       = React.useState(false);
    const [PKe, setPKe]           = React.useState(false);
    const [PKelas, setPKelas]     = React.useState(false);
    const [PTanggal, setPTanggal] = React.useState(false);
    const [PJadwal, setPJadwal]   = React.useState(false);

    const [dari, setDari]       = React.useState('Bakauheni');
    const [ke, setKe]           = React.useState('Merak');
    const [kelas, setKelas]     = React.useState('Express');
    const [tanggal, setTanggal] = React.useState('2021/28/03');
    const [jadwal, setJadwal]   = React.useState('01.00');
    const [orang, setOrang]   = React.useState('1');

    return (
        <SafeAreaView style={{flex:1,}}>
            <View name="background" style={styles.background}>
                <View nama="Kotak" style={styles.Kotak}>
                    <Text style={styles.title}>SHIPERZY</Text>
                    <View style={{marginVertical:10}} />
                    {/* dari */}
                    <View style={styles.KotakCari}>
                        <Text style={styles.JudulIsian}>
                            Pelabuhan Awal
                        </Text>
                        <View style={styles.KolomIsi}>
                            <MaterialCommunityIcons name="sail-boat" color={'gray'} size={40} />
                            <Pressable onPress={()=>setPDari(true)} >
                                <View  style={{height: 35,width: 300, backgroundColor:"gainsboro", justifyContent:"center",}}>
                                    <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                        {dari}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={PDari}
                                // style={{justifyContent:'center',alignItems: 'center'}}
                                onRequestClose={() => {
                                setDari(false);
                                }}
                            >
                                <View style={styles.popup}>
                                    <View style={{ backgroundColor:'orange',  marginBottom: 10, height: 70, width: "100%", alignItems:'center', justifyContent:'center', }}>
                                        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>
                                            Pilih Pelabuhan
                                        </Text>
                                    </View>
                                    <Text style={{color:'black'}}>Hello!</Text>
                                    <Button title="Hide modal" onPress={()=>setPDari(false)} />
                                </View>
                            </Modal>
                        </View>
                    </View>
                    {/* Ke */}
                    <View style={styles.KotakCari}>
                        <Text style={styles.JudulIsian}>
                            Pelabuhan Tujuan
                        </Text>
                        <View style={styles.KolomIsi}>
                            <MaterialCommunityIcons name="sail-boat" color={'gray'} size={40} />
                            <Pressable onPress={()=>setPKe(true)} >
                                <View  style={{height: 35,width: 300, backgroundColor:"gainsboro", justifyContent:"center",}}>
                                    <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                        {ke}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={PKe}
                                // style={{justifyContent:'center',alignItems: 'center'}}
                                onRequestClose={() => {
                                setKe(false);
                                }}
                            >
                                <View style={styles.popup}>
                                    <View style={{ backgroundColor:'orange',  marginBottom: 10, height: 70, width: "100%", alignItems:'center', justifyContent:'center', }}>
                                        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>
                                            Pilih Pelabuhan
                                        </Text>
                                    </View>
                                    <Text style={{color:'black'}}>Hello!</Text>
                                    <Button title="Hide modal" onPress={()=>setPKe(false)} />
                                </View>
                            </Modal>
                        </View>
                    </View>
                    {/* Kelas */}
                    <View style={styles.KotakCari}>
                        <Text style={styles.JudulIsian}>
                            Kelas Layanan
                        </Text>
                        <View style={styles.KolomIsi}>
                            <MaterialCommunityIcons name="sofa-single" color={'gray'} size={40} />
                            <Pressable onPress={()=>setPKelas(true)} >
                                <View  style={{height: 35,width: 300, backgroundColor:"gainsboro", justifyContent:"center",}}>
                                    <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                        {kelas}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={PKelas}
                                // style={{justifyContent:'center',alignItems: 'center'}}
                                onRequestClose={() => {
                                setPKelas(false);
                                }}
                            >
                                <View style={styles.popup}>
                                    <View style={{ backgroundColor:'orange',  marginBottom: 10, height: 70, width: "100%", alignItems:'center', justifyContent:'center', }}>
                                        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>
                                            Pilih Kelas Layanan
                                        </Text>
                                    </View>
                                    <Text style={{color:'black'}}>Hello!</Text>
                                    <Button title="Hide modal" onPress={()=>setPKelas(false)} />
                                </View>
                            </Modal>
                        </View>
                    </View>
                    {/* Tanggal */}
                    <View style={styles.KotakCari}>
                        <Text style={styles.JudulIsian}>
                            Tanggal Masuk Pelabuhan
                        </Text>
                        <View style={styles.KolomIsi}>
                            <MaterialCommunityIcons name="calendar" color={'gray'} size={40} />
                            <Pressable onPress={()=>setPTanggal(true)} >
                                <View  style={{height: 35,width: 300, backgroundColor:"gainsboro", justifyContent:"center",}}>
                                    <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                        {tanggal}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={PTanggal}
                                // style={{justifyContent:'center',alignItems: 'center'}}
                                onRequestClose={() => {
                                setPTanggal(false);
                                }}
                            >
                                <View style={styles.popup}>
                                    <View style={{ backgroundColor:'orange',  marginBottom: 10, height: 70, width: "100%", alignItems:'center', justifyContent:'center', }}>
                                        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
                                            Pilih Tanggal Keberangkatan
                                        </Text>
                                    </View>
                                    <Text style={{color:'black'}}>Hello!</Text>
                                    <Button title="Hide modal" onPress={()=>setPTanggal(false)} />
                                </View>
                            </Modal>
                        </View>
                    </View>
                    {/* Jadwal */}
                    <View style={styles.KotakCari}>
                        <Text style={styles.JudulIsian}>
                            Jam Masuk Pelabuhan
                        </Text>
                        <View style={styles.KolomIsi}>
                            <MaterialCommunityIcons name="clock-outline" color={'gray'} size={40} />
                            <Pressable onPress={()=>setPJadwal(true)} >
                                <View  style={{height: 35,width: 300, backgroundColor:"gainsboro", justifyContent:"center",}}>
                                    <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                        {jadwal}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={PJadwal}
                                // style={{justifyContent:'center',alignItems: 'center'}}
                                onRequestClose={() => {
                                setPJadwal(false);
                                }}
                            >
                                <View style={styles.popup}>
                                    <View style={{ backgroundColor:'orange',  marginBottom: 10, height: 70, width: "100%", alignItems:'center', justifyContent:'center', }}>
                                        <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                                            Pilih Jam Penyebrangan
                                        </Text>
                                    </View>
                                    <Text style={{color:'black'}}>Hello!</Text>
                                    <Button title="Hide modal" onPress={()=>setPJadwal(false)} />
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.KotakCari,{alignSelf:'center', marginVertical: 10}}>
                        <Pressable onPress={()=>setPJadwal(true)} >
                            <View  style={{height: 35,width: 350, backgroundColor:"gainsboro", justifyContent:"center", flexDirection: 'row',}}>
                                <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                    Dewasa
                                </Text>
                                <TextInput 
                                    style={{fontSize: 16, color: 'black', marginHorizontal: 10}}
                                    onChangeText={setOrang}
                                    value={orang}
                                    keyboardType="numeric"
                                >

                                </TextInput>
                                <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10}}>
                                    Orang
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.tombol}>
                        <Button 
                            title='CARI' 
                            color={'orange'} 
                            />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: color.background,
        flex: 1,
    },
    title:{
        fontSize: 32,
        color: 'navy',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
    },
    Kotak:{
        backgroundColor: color.Kotak,
        marginHorizontal: 10,
        marginVertical: 50,
        flex: 1,
    },
    KotakCari:{
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 7,
        justifyContent: 'space-between',
    },
    KolomIsi:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    JudulIsian:{
        color: "gray",
        fontSize: 16,
    },
    tombol:{
        marginHorizontal: 20,
        marginVertical: 10,
        flex: 1,
    },
    popup:{ 
        marginTop:'50%',
        width: 350,
        height: "50%",
        alignSelf:'center', 
        // justifyContent:'center',
        alignItems:'center', 
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    },
});

export default Home;