import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { TakePicture } from '../actions/cameraAction'
import CameraLoading from '../components/CameraLoading'
import * as ImageManipulator from 'expo-image-manipulator';

export default function CameraScreen ({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null)
  const [cameraLoading, setCameraLoading] = useState(false)
  const dispatch = useDispatch()

  const takePicture = async () => {
    if (camera) {
      setCameraLoading(true)
      let photo = await camera.takePictureAsync();
      const manipResult = await ImageManipulator.manipulateAsync(
        photo.uri,
        [],
        { compress: 0.2}
      )
      setCameraLoading(false)
      dispatch(TakePicture(manipResult))
      navigation.navigate('Create')
    }
  }

  const openGallery = async() => {
    let result = await ImagePicker.launchImageLibraryAsync()
    if(!result.cancelled) {
      dispatch(TakePicture(result))
      navigation.navigate('Create')
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
        <View style={{ flex: 1 }}>
            <Camera quality={0.1} autoFocus={'on'} style={{ flex: 1 }} type={type} ref={ref => {
          setCamera(ref)
        }}>
            <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:20}}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',                  
          }}
          onPress={() => openGallery()}
          >
          <Ionicons
              name="ios-photos"
              style={{ color: "#fff", fontSize: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
          onPress={() => {
            takePicture()
          }}>
          <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <MaterialCommunityIcons
              name="camera-switch"
              style={{ color: "#fff", fontSize: 40}}
          />
        </TouchableOpacity>
      </View>
            </Camera>
            {
              cameraLoading
              && <CameraLoading />
            }
          </View>
  )
}