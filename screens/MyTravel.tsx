import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity, Image,  ScrollView} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from '../components/Themed';
import { Formik } from 'formik';
import * as yup from 'yup'


interface OwnProps {
    isNewUser:boolean,
  }

  interface user {
    name:string,
    firstname: string,
    email:string,
  }

  interface trip {
    name:string,
    person:number,
    icon:string,
  }

  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Champ obligatoire')
  })

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
      <Text style={{marginRight:5}}>{item.firstname}</Text>
      <Text style={{marginRight:15}}>{item.name}</Text>
      <Text> {item.email}</Text>
      </View>
    );
  };
  
export default function LogIn(isNewUser:boolean) {
  const navigation =useNavigation<StackNavigationProp<any>>()
    const [newTrip, setNewTrip]= useState(false)
    const [joinTrip, setJoinTrip]= useState(false)
    const [listHasChanged, setListHasChanged]= useState(false)
    const [listTrip, setListTrip]=useState<Array<trip>>([])
    const [numberPerson, setNumberPerson]=useState<number>(1)
    const [titleTrip, setTitleTrip]=useState<string>("")
    const [list, setList]= useState<Array<user>>([{name:"Dauve", firstname:"Camille", email:"camilledau@gmail.com"}])
    const [newUser, setNewUser]=useState(isNewUser.route.params.isNewUser)
    const [newTripAdded, setNewTripAdded]=useState(false)
    const initialValues:user ={name:"", firstname:"", email:""}
  
    useEffect(()=>{
      if(newUser==false){
        setListTrip([{name:"Voyage Eté", person:3, icon:'calendar'}, {name:"WE entre copains", person:6, icon:"tent"}, {name:"Voyage en famille", person:4, icon:"activities"}])
      }
      if(newTripAdded){
        setListTrip([{name:titleTrip, person:numberPerson, icon:"calendar"}])
      }
    },)

    const renderTrip=({item})=>{

      return(
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonTrip}
        onPress={()=>{navigation.navigate("TravelManager",{ step: item.icon=="calendar" ? "Date" : item.icon=="tent" ? "Houses" : "Activities"})}}>
          <View style={{backgroundColor:"transparent", flex:4,  justifyContent:"center", marginLeft:5, height:30}}>
          <Text style={styles.textButtonTrip}> {item.name}</Text>
          </View>
          <View style={styles.viewPerson}>
            <Text style={styles.textPerson}>{item.person} pers</Text>
          </View>
          <View style={{backgroundColor:"transparent", flex:1,  justifyContent:"center"}}>
          <Image source={item.icon== "calendar" ? require('./images/calendar.png'): item.icon== "tent" ? require('./images/home.png'): require('./images/activities.png')} style={{height:30, width:30}}/>
            </View>
        </TouchableOpacity>
        </View>
      )
    }
    
  return (
    <View style={styles.container}>
      {newUser==false ?
      <View style={styles.containerBis}>
        <View style={styles.subView}>
        <Text style={styles.title}>La liste de vos voyages :</Text>
        </View>
        <FlatList
                    data={listTrip}
                    renderItem={renderTrip}
                    keyExtractor={item => item.name}
                     />
      <View style={styles.buttonOldView}>
      <TouchableOpacity  style={styles.buttonOldTrip}>
        <View style={{backgroundColor:"transparent", flex:4,  justifyContent:"center", marginLeft:5, height:30}}>
        <Text style={styles.textButtonTrip}> Vacances d'hiver</Text>
        </View>
        <View style={styles.viewPerson}>
          <Text style={styles.textPerson}>6 pers</Text>
        </View>
        <View style={{backgroundColor:"transparent", flex:1,  justifyContent:"center"}}>
          </View>          
      </TouchableOpacity>
      </View>
</View>
    :
    <View style={styles.container}>
    { newTrip==false && joinTrip==false &&
      <View style={styles.subView}>
        <Text style={styles.title}>Vous n’avez pas de voyage organisé, il est temps de se lancer !</Text>
        </View>}
       
      {newTrip==false && joinTrip==false ? 
       <View style={styles.subView}>
      <View style={styles.subView}>
        <View style={styles.buttonView}>
          <TouchableOpacity  
            style={styles.button}
            onPress={()=>setNewTrip(true)} >
            <Text style={styles.textButton}> Nouveau Voyage </Text>
         </TouchableOpacity>
       </View>
       <View style={styles.buttonView}>
         <TouchableOpacity  
          style={styles.button}
          onPress={()=>setJoinTrip(true)} >
          <Text style={styles.textButton}> Rejoindre Un Voyage </Text>
         </TouchableOpacity>
       </View>
      </View>
      </View>
      : newTrip && joinTrip==false ?
      <View style={styles.subView}>
                <Text style={styles.subtitle}>Créer un voyage !</Text>
                <View style={{marginTop:10, backgroundColor:"white"}}>
                  <TextInput 
                  style={styles.textInput}
                  placeholder="nom du groupe"
                  placeholderTextColor={"grey"}
                  onChangeText={(value) => setTitleTrip(value)}/>
                </View>
                <Text style={styles.subtitle}> Ajout d'un participant </Text>
                <View style={{marginTop:10, backgroundColor:"white", alignItems:"center"}}>
                
                <Formik
                 validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={values => {
            navigation.navigate("MyTravel")}}
          >
            {({ handleChange, handleBlur, errors, values, isValid }) => (
              <>
              <View style={styles.viewInput}>
                <TextInput
                  placeholderTextColor={"grey"}
                  placeholder="nom"
                  style={styles.textInput}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  keyboardType="email-address"
                />
                {errors.name &&
         <Text style={styles.errorMessage}>{errors.name}</Text>
       }
       </View>
       <View style={styles.viewInput}>
                <TextInput
                  placeholderTextColor={"grey"}
                  placeholder="prénom"
                  style={styles.textInput}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                />
                {errors.firstname &&
         <Text style={styles.errorMessage}>{errors.name}</Text>
       }
       </View>
       <View style={styles.viewInput}>
                <TextInput
                  placeholderTextColor={"grey"}
                  placeholder="email"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.firstname &&
         <Text style={styles.errorMessage}>{errors.name}</Text>
       }
       </View>
       <View style={styles.buttonView}>
         <TouchableOpacity  
         disabled={!isValid}
         style={styles.buttonValidate}
          onPress={()=>{
            const newList= [...list, values]
            setList(newList)
            setNumberPerson(numberPerson+1)
            setListHasChanged(!listHasChanged) }} >
          <Text> Valider</Text>
         </TouchableOpacity>
       </View>
              </>
            )}
          </Formik>
                    </View>
                    <Text style={styles.subtitle}> Liste des partipants :</Text>
                    <FlatList
                    data={list}
                    renderItem={renderItem}
                    extraData={listHasChanged}
                     />
                     <View style={styles.buttonView}>
                      <TouchableOpacity style={styles.button}
                      onPress={()=>{setNewUser(false)
                      setNewTripAdded(true)
                      setListTrip([{name:titleTrip, person:numberPerson, icon:"calendar"}])}}>
                         <Text 
                         style={styles.textButton}>
                           Créer le voyage</Text>
                       </TouchableOpacity>
                       </View>

      </View>
        :
      <View style={styles.subView}>
        <Text style={styles.title}>Rejoindre un voyage !</Text>
        <TextInput
        placeholder='lien'
        placeholderTextColor={"grey"}
        style={styles.textInput}/>
         <View style={styles.buttonView}>
                       <TouchableOpacity style={styles.button}>
                         <Text style={styles.textButton}>Rejoindre</Text>
                       </TouchableOpacity>
                       </View>
      </View>
      }
      </View>
      }
      
  </View>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"white", 
    flex:1,
  },
  containerBis:{
    backgroundColor:"white", 
  },
  subView:{
    backgroundColor:"white", 
    margin:20,
  },
    title: {
      alignSelf:"center",
        color:"black",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:50,
        marginBottom:5,
      },
      buttonView:{
         marginTop:20,
         width:"100%",
         marginVertical:10,
         backgroundColor:"white", 
         alignItems:"center",
         justifyContent:"center",
      },
      button:{
        height:50,
        width:"90%",
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        },
        textButton:{
          fontSize:17,
        },
        textInput: {
          height: 40,
          width: '100%',
          marginVertical: 5,
          backgroundColor: 'white',
          borderColor: 'gray',
          borderWidth: 2,
          borderRadius: 90,
      
        },
        buttonValidate:{
          height:30,
          width:"50%",
          backgroundColor:"black",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:5,
          },
          subtitle:{
            color: "black", 
            fontSize: 17, 
            marginTop: 20,
          },
          errorMessage:{ 
            fontSize: 10, 
            color: 'red',
          },
          viewInput:{
            width:"100%", 
            backgroundColor:"white",
            alignItems:"center",
          },
          renderView:{
            width:"90%", 
            height: 20, 
            flexDirection:"row", 
            margin:10, 
            alignItems:"center", 
            justifyContent:"center", 
            borderRadius:90, 
            backgroundColor:"grey",
          },
          buttonTrip:{
            flexDirection:"row",
            height:50,
            width:"80%",
            backgroundColor:"#1EA21C",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:90,
          },
          textButtonTrip:{
            fontSize:17,
            color:"black",
            marginLeft:20,
          },
          textPerson:{
            fontSize:17,
            color:"black",
            marginLeft:5,
          },
          viewPerson:{
            flex:2,
            marginVertical:5,
            borderLeftWidth:1,
            backgroundColor:"transparent",
            justifyContent:"center",
          },
          buttonOldTrip:{
            marginTop:15,
            flexDirection:"row",
            height:50,
            width:"100%",
            backgroundColor:"#C9C9C9",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:90,
          },
          buttonOldView:{
            marginTop:40,
            width:"80%",
            marginVertical:10,
            backgroundColor:"white", 
            alignItems:"center",
            alignSelf:"center",
            justifyContent:"center",
            borderTopWidth:1,
         },
  });
  