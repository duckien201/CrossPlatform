import { ScrollView, StyleSheet , Text,View } from "react-native";
import React from 'react'
import {data} from '../data/Constant';



const CategoryFIlter = ()=>{
    return(
        <View style={{marginTop : 20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator ={false}>
            {  
            
                    data.map((category, index) => {
                    return(
                        <View style ={{width: 80,
                            height: 30,
                            backgroundColor: index === 0? '#E5F3FE' : 'white',
                            marginLeft: 20,
                            borderRadius: 10}}>

                            <Text style ={{textAlign: 'center',
                            marginTop: 3}}>{category.category}</Text>
                        </View>


                    );
                })}
            </ScrollView>

        </View>
    )
}

export default CategoryFIlter
const styles = StyleSheet.create({
    
})