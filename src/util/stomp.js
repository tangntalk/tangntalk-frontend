import {Client} from '@stomp/stompjs';
import {Subject} from 'rxjs';
const webSocketUrl = 'ws://localhost:8080/ws'
const _stompClient = new Client();

const subject = new Subject();

export const alerts = {
    sendMessage: message => subject.next(message),
    clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable()
};

export const webSocket = (userId) => {

    if(_stompClient.connected)
        return _stompClient
    console.log("creating web socket")

    _stompClient.configure({
        brokerURL: webSocketUrl,
        debug: function (str) {
        //   console.log(str);
        },
        reconnectDelay: 5000, //자동 재연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onStompError: (frame) => {
            console.log('Broker reported error: ' + frame.headers['message']);
            console.log('Additional details: ' + frame.body);
        },
        onConnect: (frame) => {
            console.log("소켓에 연결되었습니다.", frame)
            if(_stompClient.connected){
                _stompClient.subscribe(`/sub/chat/${userId}`, (message) => {
                    console.log("message", message);
                    if(message.body){
                        let notification = JSON.parse(message.body);
                        console.log("notification", notification);
                        alerts.sendMessage(notification);
                    }
                })
            }
        },
        onWebSocketClose: (frame) => {
            console.log("연결이 종료되었습니다.", frame);
        },
        onWebSocketError: (frame) => {
            console.log("소켓 에러가 발생했습니다.", frame)
        }
    })

    _stompClient.activate()
    return _stompClient
}

// export default webSocket;
