import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

function CreatePostsScreen() {
  const navigation = useNavigation();
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [namePhoto, setNamePhoto] = useState("");
  const [location, setLocation] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [spot, setSpot] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const getSpot = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setSpot(coords);
      console.log("cord", coords);
      console.log("spot", spot);
      return spot;
    } catch (error) {
      console.log(error.message);
    }
  };
  const publish = async () => {
    try {
      await getSpot();
      const post = { photo, namePhoto, location, userId, spot: coords };
      await addDoc(collection(db, "posts"), { ...post });
      console.log(post);
      console.log("spot--->", spot);
    } catch (error) {
      throw new Error("DB Error");
    }
    navigation.navigate("Home");
  };

  const deletPost = () => {
    setLocation("");
    setNamePhoto("");
    setPhoto("");
    setUploadPhoto(false);
    setSpot(null);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.continer}>
        <View style={styles.continerHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name={"keyboard-backspace"} size={25} />
          </TouchableOpacity>
          <Text style={styles.title}>Create a publication</Text>
        </View>
        <View style={styles.continerContent}>
          <View style={styles.continerPhoto}>
            {!uploadPhoto && (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <MaterialCommunityIcons
                      name={"camera-retake"}
                      size={25}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonTakePhoto}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        await MediaLibrary.createAssetAsync(uri);
                        setPhoto(uri);
                      }
                    }}
                  >
                    <View style={styles.takePhotoOut}>
                      <View style={styles.takePhotoInner}>
                        <MaterialCommunityIcons
                          name={"camera"}
                          size={25}
                          color="#fff"
                          // style={styles.iconPhote}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </Camera>
            )}
            <View>
              {uploadPhoto && (
                <Image
                  style={styles.photoWrapper}
                  source={{
                    uri: photo,
                  }}
                />
              )}
            </View>
          </View>
          <Text
            style={!photo ? textLoadPhote : textLoadPhoteActive}
            onPress={() => {
              setUploadPhoto(true);
              getSpot();
            }}
          >
            Upload photo
          </Text>
          {/* map-marker-outline */}
          <TextInput
            style={styles.input}
            placeholder="Name..."
            value={namePhoto}
            onChangeText={setNamePhoto}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Locality..."
            placeholderTextColor="#aaa"
            value={location}
            onChangeText={setLocation}
          />
          <Pressable
            style={
              photo || location || namePhoto
                ? buttonPublishActive
                : buttonPublish
            }
            onPress={publish}
          >
            <Text
              style={
                photo || location || namePhoto
                  ? textButtonPublishActive
                  : textButtonPublish
              }
            >
              Publish
            </Text>
          </Pressable>
          <Pressable style={styles.buttonDelete} onPress={deletPost}>
            <MaterialCommunityIcons
              name={"delete"}
              size={25}
              color={photo || location || namePhoto ? "#FF6C00" : "#aaa"}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
  },
  continerHeader: {
    flex: 1,
    flexDirection: "row",
    gap: 55,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 16,
  },
  continerContent: {
    flex: 15,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  continerPhoto: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLoadPhote: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 50,
  },
  // textLoadPhote: {
  //   marginTop: 8,
  //   color: "#BDBDBD",
  //   marginBottom: 16,
  // },
  input: {
    width: 343,
    height: 50,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 16,
    marginTop: 16,
  },

  buttonDelete: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    marginTop: 100,
    marginLeft: 135,
  },
  flipContainer: {
    margin: 5,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  photoView: {
    width: "100%",
    height: "100%",
  },
  buttonTakePhoto: {
    marginLeft: 310,
    marginTop: 170,
  },
  photoWrapper: {
    width: 340,
    height: 240,
    borderRadius: 8,
  },
});

const buttonPublish = {
  marginTop: 43,
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,
  width: 343,
  height: 51,
  backgroundColor: "#F6F6F6",
  borderRadius: 100,
};

const buttonPublishActive = {
  marginTop: 43,
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,
  width: 343,
  height: 51,
  borderRadius: 100,
  backgroundColor: "#FF6C00",
};

const textButtonPublish = {
  color: "#BDBDBD",
};

const textButtonPublishActive = {
  color: "#fff",
};
const textLoadPhote = {
  marginTop: 8,
  color: "#BDBDBD",
  marginBottom: 16,
};
const textLoadPhoteActive = {
  marginTop: 8,
  color: "#FF6C00",
  marginBottom: 16,
};
export default CreatePostsScreen;
