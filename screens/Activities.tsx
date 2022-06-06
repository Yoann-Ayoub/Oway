import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';


export interface Activity {
  title:string,
  url:string,
  price:number,
  typePrice:string,
  adress:string,
  validationNumber:number,
  click:number,
  dontKnowNumber:number,
  notValidationNumber:number,
}

export default function Activities(props) {

  const navigation =useNavigation<StackNavigationProp<any>>()
  const [listActivities, setListActivities]=useState<Array<Activity>>([
      {title:"Saut en parachute", url:"https://www.cap-adrenaline.com/saut-en-parachute-A42.html?gclid=Cj0KCQjw1tGUBhDXARIsAIJx01mc393P5BjCJ5UF5K4dW008tS7a1ttWxSxw0Gqet0ov19FmJcWqcXAaAo2eEALw_wcB", price:160, typePrice:"personne", adress:"", validationNumber:3,click: 0, dontKnowNumber:1,notValidationNumber:0},
      {title:"Visite musée nationale", url:"", price:10, typePrice:"personne", adress:"", validationNumber:1,click: 0, dontKnowNumber:0,notValidationNumber:2}, 
      {title:"Randonnées", url:"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiSlbWSn4f4AhU4GgYAHXDrA_AYABADGgJ3cw&ae=2&ohost=www.google.com&cid=CAESa-D2ysF36YTgSYchdJp5vRq4ZA-zrHphzWMrO6WRics7LgZFQB4wK8EjWBtMfBoyU_loyVEbSO3II91kA0t8IVufxP9UQAuSuE31FP8lS5WMta7QlbtDewwVfTCrijKUNIiln5pHtSAl2U3L&sig=AOD64_3yWt70poc6WgNJCOmNSlRwDc_XBQ&q&adurl&ved=2ahUKEwjjz66Sn4f4AhUpgc4BHQvgB8MQ0Qx6BAgDEAE&dct=1", price:0,typePrice:"total", adress:"", validationNumber:2, click: 0, dontKnowNumber:0,notValidationNumber:0},
      {title:"Après-midi Plage", url:"", price:30,typePrice:"total", adress:"", validationNumber:2,click: 0, dontKnowNumber:1,notValidationNumber:0} ])
  const [render, setRender]=useState(false)

useEffect(()=>{
if (props.activity!==undefined){
  console.log("youhou",props.activity)
  const newList= [...listActivities,props.activity]
  setListActivities(newList)
}
}, [props.activity])


      const renderActivity=({item})=>{
        return(
        <TouchableOpacity style={styles.activityButton}
        onPress={()=>{
          navigation.push("ActivityDetail", {activity:item})
        }}>
        <View style={styles.activityView}>
        <Text style={{color:"black", fontSize:15}}>{item.title}</Text>
        </View>
        <View style={styles.choiceView}>
          <TouchableOpacity style={{width:30, height:30, borderRadius:90,  backgroundColor:"#1EA21C", alignItems:"center", justifyContent:"center"}}
          disabled={item.click!==0}
            onPress={()=>{
              listActivities.map(element=>{
                if(element.adress===item.adress){
               element.validationNumber=element.validationNumber+1
                element.click=1
                setRender(!render)
                }
              }) 
              setListActivities(listActivities)
            }}>
              {item.click==0 ?
                <Image source={require("./images/validate.png")} style={{height:25, width:25}} />
                :
                  <Text>{item.validationNumber}</Text>
              }
           </TouchableOpacity>
        </View>
        <View style={styles.choiceView}>
        <TouchableOpacity style={{width:30, height:30, borderRadius:90,  backgroundColor:"#E9A16D", alignItems:"center", justifyContent:"center"}}
          disabled={item.click!==0}
            onPress={()=>{
              listActivities.map(element=>{
                if(element.adress===item.adress){
               element.dontKnowNumber=element.dontKnowNumber+1
                element.click=2
                setRender(!render)
                }
              }) 
              setListActivities(listActivities)
            }}>
              {item.click==0 ?
                <Image source={require("./images/question.png")} style={{height:25, width:25}} />
                :
                  <Text>{item.dontKnowNumber}</Text>
              }
           </TouchableOpacity>
        </View>
        <View style={styles.choiceView}>
        <TouchableOpacity style={{width:30, height:30, borderRadius:90,  backgroundColor:"#EB4A4A", alignItems:"center", justifyContent:"center"}}
          disabled={item.click!==0}
            onPress={()=>{
              listActivities.map(element=>{
                if(element.adress===item.adress){
               element.notValidationNumber=element.notValidationNumber+1
                element.click=3
                setRender(!render)
                }
              }) 
              setListActivities(listActivities)
            }}>
              {item.click==0 ?
                <Image source={require("./images/cross.png")} style={{height:25, width:25}} />
                :
                  <Text>{item.notValidationNumber}</Text>
              }
           </TouchableOpacity>
        </View>
          
      </TouchableOpacity>)

      }
    return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.globalView}>
      <Text style={styles.title}>Votez pour vos activités préférés ou  proposez-en un autre !</Text>
      <TouchableOpacity
      onPress={()=>{navigation.push("ActivitiesForm")}}>
        <Image source={require("./images/plus.png")} style={{height:50, width:50, marginLeft:30}}/>
      </TouchableOpacity>
      </View>
      <View style={{width:"80%", backgroundColor:"white", marginTop:40}}>
      <View style={{backgroundColor:"white", alignItems:'center', marginBottom:10}}>
     <FlatList data={listActivities} renderItem={renderActivity} keyExtractor={item=>item.adress} extraData={render}/>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex:  1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globalView: {
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"center", 
    backgroundColor:"white"},
  title: {
    color:"black",
    fontSize: 20,
    fontWeight: 'bold',
  },
  activityButton:{
    borderRadius:90, 
      borderWidth: 1, 
      width:"100%", 
      height:50, 
      marginVertical:20, 
      backgroundColor:"white", 
      flexDirection:"row", 
      alignItems:"center", 
      justifyContent:"center"
    },
    activityView: {
      marginLeft:20, 
      flex:6, 
      alignItems:"center", 
      justifyContent:"center", 
      backgroundColor:"white"
    },
      choiceView:{
        flex: 1, 
        marginHorizontal:20, 
        backgroundColor:"white", 
        alignItems:"center"},
});
