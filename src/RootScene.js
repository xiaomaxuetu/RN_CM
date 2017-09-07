/**
 * Created by cmios on 2017/7/13.
 */
import React ,{PureComponent} from 'react'
import {StatusBar,View,StyleSheet} from 'react-native'
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation'
import HomeScene from './scene/Home/HomeScene'
import MapScene from './scene/Map/MapScene'
import MineScene from './scene/Mine/MineScene'
import TabBarItem from './widget/TabBarItem'
import color from './widget/color'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import  reducers from './reducers'
import MapControl from './component/MapViewControlModal'
import PartrolTaskFeedback from './modules/PartrolTask/component/PartrolTaskFeedback'


const lightContentScenes = ['Home', 'Mine']
function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigator: {
        flex: 1,
        backgroundColor: 'white'
    },
    errorView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    errorText: {
        color: 'red',
        fontSize: 16
    }

});

class RootScene extends PureComponent {
    constructor(){
        super()
        StatusBar.setBarStyle('light-content')
    }
    componentDidMount(){

    }
    render(){
        return(
            <View style={styles.container}>
                {/*<MapControl/>*/}
                <Navigator
                    onNaviagtionStateChange={
                        (prevState,currentState)=>{
                            const currentScence = getCurrentRouteName(currentState);
                            const previousScence = getCurrentRouteName(prevState);
                            if (previousScence !== currentScence){
                                if (lightContentScenes.indexOf(currentScence)>=0){
                                    StatusBar.setBarStyle('light-content')
                                }else {
                                    StatusBar.setBarStyle('dark-content')
                                }
                            }
                        }
                    }
                />
            </View>

        );
    }

}
const Tab = TabNavigator(
    {
        Home:{
            screen:HomeScene,
            navigationOptions:({naviagtion})=>({
                tabBarLabel:'主页',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar_home.png')}
                        selectedImage={require('./img/tabbar_home_selected.png')}
                    />
                )
            }),
        },
        Maps:{
            screen:MapScene,
            navigationOptions:({naviagtion})=>({
                tabBarLabel:'地图',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar_home.png')}
                        selectedImage={require('./img/tabbar_home_selected.png')}
                    />
                )
            }),
        },
        Mine:{
            screen:MineScene,
            navigationOptions:({naviagtion})=>({
                tabBarLabel:'我的',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar_home.png')}
                        selectedImage={require('./img/tabbar_home_selected.png')}
                    />
                )
            }),
        }
    },
    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        lazy:true,
        tabBarOptions:{
            activeTintColor:color.theme,
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff'}
        }
    }
);

const Navigator = StackNavigator(
    {
        Tab:{screen:Tab},
        PatrolFeedback:{screen:PartrolTaskFeedback}
    },
    {
        navigationOptions:{
            headerBackTitle:null,
            headerTintColor:'#333333',
            showIcon:true,
        }
    }

)
//export default RootScene;
export default function globalInit () {
    var loggerMiddleware = createLogger();
    var store = applyMiddleware(thunk,loggerMiddleware)(createStore)(reducers);
    return(
            <Provider store={store}>
                <RootScene/>
            </Provider>
        )



}
