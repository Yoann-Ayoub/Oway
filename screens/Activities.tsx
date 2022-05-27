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

export default function Activities(activity:Activity) {

  const navigation =useNavigation<StackNavigationProp<any>>()
  const [listActivities, setListActivities]=useState<Array<Activity>>([
      {title:"Saut en parachute", url:"", price:160, typePrice:"personne", adress:"", validationNumber:3,click: 0, dontKnowNumber:1,notValidationNumber:0},
      {title:"Visite musée nationale", url:"", price:10, typePrice:"personne", adress:"", validationNumber:1,click: 0, dontKnowNumber:0,notValidationNumber:2}, 
      {title:"Randonnées", url:"", price:0,typePrice:"total", adress:"", validationNumber:2, click: 0, dontKnowNumber:0,notValidationNumber:0},
      {title:"Après-midi Plage", url:"", price:30,typePrice:"total", adress:"", validationNumber:2,click: 0, dontKnowNumber:1,notValidationNumber:0} ])
  const [render, setRender]=useState(false)

useEffect(()=>{
if (activity.route.params!==undefined){
  console.log("youhou",activity.route.params.activity)
  const newList= [...listActivities,activity.route.params.activity]
  setListActivities(newList)
}
}, [activity.route.params])


      const renderActivity=({item})=>{
        return(
        <TouchableOpacity style={styles.activityButton}>
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
