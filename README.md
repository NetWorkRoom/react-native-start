## Создание мобильных приложений на основе [React Native]

Полезная информация для создания приложений на основе React Native

### Установка
1.) Установить [Node.js]  
2.) Установить [Yarn]  
3.) Устновить и настроить редактор [Visual Studio Code]  
4.) Установить плагины в редакторе - React Native Snippet и React Native Tools  
5.) Устанавливаем  [Install React Native] исходя из того на какой ОС будет производиться 
разработка программы

Вариант - Expo CLI
```
yarn global add expo-cli
expo init AwesomeProject
cd AwesomeProject
yarn start #you can also use: expo start
```

Вариант (Устарел) - Create React Native App 
```
yarn global add create-react-native-app
create-react-native-app my-project
cd my-project
yarn start
```

Вариант (Лучший) - React Native CLI (указаны только команды, настройка сложнее, все в описании - [Install React Native])
```
yarn global add react-native-cli
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
-or-
react-native run-ios
```

6.) Установить [react-devtools]
```
yarn global add react-devtools
// start
react-devtools
// если не работает сразу
adb reverse tcp:8097 tcp:8097
```

[Node.js]: https://nodejs.org/en/
[React Native]: https://facebook.github.io/react-native/
[Install React Native]: https://facebook.github.io/react-native/docs/getting-started.html
[Visual Studio Code]: https://code.visualstudio.com/
[Yarn]: https://yarnpkg.com/en/
[react-devtools]: https://github.com/facebook/react-devtools/tree/master/packages/react-devtools
