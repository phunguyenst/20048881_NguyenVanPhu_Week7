import {StyleSheet, View, Text,Image ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


export default function Trang2({route, navigation}){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
     useEffect(()=>{
        const{image, name, title, price} = route.params;
        setImage(image)
        setName(name)
        setPrice(price)
        setTitle(title)

    }, [])
    return (
        <View style = {styles.container}>
          <View style ={{flex: 4}}>
            <Image
                source={image||require("../img/pink_donut.png")}
                style = {{height: 300, width: 300, alignItems:"center", margin:"auto"}}
                resizeMode='contain'
            ></Image>
          </View>
          <View style = {{flex: 6, justifyContent:"center"}}>
             <View style ={{flex: 1, marginTop:30}}>
                <Text style = {{fontSize:18, fontWeight:"bold", marginLeft: 15}}>{name}</Text>
                <View style = {{flexDirection:"row", justifyContent:"space-between", marginTop:10}}>
                    <Text style ={{color:"#999", fontSize:14, marginLeft:18}}>{title}</Text>
                    <Text style = {{fontSize:18, fontWeight:"bold",marginRight:25}}>{price}</Text>
                </View>
             </View>
             <View style ={{flex: 1, marginTop: 30}}>
                <View style = {{flexDirection:"row"}}>
                <Feather name="clock" size={20} color="black" style = {{marginLeft:20}} />
                <Text style ={{color:"#999", fontSize:16, marginLeft:5}}>Delivery in</Text>
                </View>
                <View style = {{flexDirection:"row", justifyContent:"space-between", marginTop:5}}>
                     <Text style = {{fontSize:18, fontWeight:"bold",marginLeft:30}}>30 min</Text>
                  
                    <View style ={{flexDirection: 'row', alignItems:"center", marginRight:25}}>
                    <AntDesign name="minussquareo" size={24} color="#F1B000" style ={{marginRight:8}}/>
                   
                    <Text style ={{fontWeight:"bold", marginRight: 8, fontSize:18}}>1</Text>
                    <AntDesign name="plussquareo" size={24} color="#F1B000" />
                    </View>
                </View>
              
             </View>
             <View style ={{flex:2, marginTop: 25, marginLeft:20}}>
                    <Text style = {{fontSize: 22, fontWeight:"bold", marginLeft:5}}>Restaurants info</Text>
                    <Text style = {{fontSize: 15, marginTop: 5}}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>
            <View style = {{flex: 2}}>
                <TouchableOpacity style = {{height: 55, borderRadius:5, width: 350, backgroundColor: "#F1B000", alignItems:"center", margin:"auto"}}>
                    <Text style = {{marginTop:8, color:"#fff", fontSize:24}}>Add to cart</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    }
})