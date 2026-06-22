import { Link } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Button, Pressable, Switch, Text, } from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false)

  const renderText = () => {
    return <Text>hello world this is my first project</Text>
  }

  //pressable
  const renderPressable = () => {

    return <Pressable onPress={() => alert("Button pressed")} style={{
      backgroundColor: "gray", padding: 15,
      borderRadius: 8,
      margin: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 150

    }}>
      <Text style={{ color: "red" }}>Press</Text>
    </Pressable>
  }

  //native button 
  const renderButton = () =>{
    return <Button title="Login" onPress={() => alert("Button pressed")}/>

  }

  //activity indicator
  //loading state , fetching api data 
  //uploding file etc
  const renderActivityIndicator = () =>{
    return <ActivityIndicator size={"large"}/>
  }

  //switch 
  const renderSwitch = () =>{
    return <Switch value={isEnabled} onValueChange={setIsEnabled}/>
  }

  //LInk
  const renderLink = () =>{
    return <Link href="/profile">
    <Text>go to profile</Text>
     </Link>
  }
  return (
    <>
      {renderLink()}
    </>
  );
}
