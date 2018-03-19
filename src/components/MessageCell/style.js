/**
 * Created by bear on 2018/2/5.
 */
import {StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        // backgroundColor: Color.BackgroundGrey
    },
    KeyboardAvoidingView: {
        flex: 1
    },
    bottomToolBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        // borderTopColor: Color.LittleGrey
    },
    sendButton: {
        marginHorizontal: 10,
        // backgroundColor: Color.WechatGreen,
        // borderColor: Color.WechatGreen
    },
    sendButtonText: {
        // color: Color.White
    },
    input: {
        flex: 1,
        // color: Color.Black,
        // fontSize: FontSize.Main,
        padding: 10
    },
    messageCell: {
        marginTop: 5,
        marginBottom: 5,
    },
    messageCellText: {
        fontSize: 16,
        lineHeight: 25,
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
    contentView: {
        minWidth:40,
        maxWidth: width -120,
        borderRadius: 4,
        paddingHorizontal: 8,
        padding:5,
        justifyContent: 'center',
        borderWidth:0.5,
        borderColor:'#e5e5e5',
        marginTop:5,
        marginBottom:5

    },
    endBlankBlock: {
        margin: 5,
        width: 80,
        height: 40
    },
    ic:{
        position: 'relative',
        height: 0,
        width: 0,
        borderTopWidth:5,
        borderTopColor:"transparent",
        borderRightWidth:7,
        borderRightColor:'#e5e5e5',
        borderBottomColor:'transparent',
        borderBottomWidth:7,
        left:.5,
        zIndex:99,
        top:18
    },
    icme:{
        position: 'relative',
        height: 0,
        width: 0,
        borderTopWidth:5,
        borderTopColor:"transparent",
        borderLeftWidth:7,
        borderLeftColor:'#e5e5e5',
        borderBottomColor:'transparent',
        borderBottomWidth:7,
        left:.5,
        zIndex:99,
        top:18
    },
    icmecnt:{
        position: 'absolute',
        top:-4.5,
        right:0.5,
        height: 0,
        width: 0,
        borderTopWidth:4.5,
        borderTopColor:"transparent",
        borderLeftWidth:6.5,
        borderLeftColor:'#CCE4FC',
        borderBottomColor:'transparent',
        borderBottomWidth:6.5
    },
    icnt:{
        position: 'absolute',
        top:-4.5,
        left:0.5,
        height: 0,
        width: 0,
        borderTopWidth:4.5,
        borderTopColor:"transparent",
        borderRightWidth:6.5,
        borderRightColor:'#fff',
        borderBottomColor:'transparent',
        borderBottomWidth:6.5
    }
});
export default  styles