# react-native-diablo-ui (Bate v0.0.1)

DiabloUI是一套基于RN0.61.5的javascript界面库，开箱即可简单定制您的应用。

## 安装

`$ npm install react-native-diablo-ui --save`

## 使用

```
import { Avatar } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Avatar
            containerStyle={{width:150,height:150,backgroundColor:'cyan'}}
            size={150}
            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
    )
}
export default App;
```

## 关于作者

[Ethan zhang](https://dmedu.github.io/EthanZhang.me/)