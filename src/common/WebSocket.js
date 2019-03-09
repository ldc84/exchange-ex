import { API_URL } from '@/common/Config';
import Store from '@/store';
import Pako from 'pako';

export default (function huobiWs() {
  const handlers = {
    onMessage: [ keepHandshake, onTickerUpdate ],
    onOpen: [ subscribeTicker ],
  };

  function init() {
    const ws = new WebSocket(API_URL.HUOBI_WS);
    ws.binaryType = 'arraybuffer';

    ws.onmessage = (ev) => {
      const data = decodeData(ev);
      console.log(data);
      handlers.onMessage.forEach((handler) => {
        handler.call(ws, ws, data);
      });
    };
    ws.onopen = (ev) => {
      handlers.onOpen.forEach((handler) => {
        handler.call(ws, ws, ev);
      });
    };

    return {
      ...ws,
      attachOnMessage,
      removeMessageHandler,
      attachOnOpen,
      removeOpenHandler,
    };
  }

  //#region Web Socket Interfaces
  function decodeData(ev) {
    const { data } = ev;
    const message = JSON.parse(Pako.ungzip(data, { to: 'string' }));
    return message;
  }
  function sendMessage(ws, message) {
    return ws.send(JSON.stringify(message));
  }
  function attachOnMessage(cb) {
    return handlers.onMessage.push(cb);
  }
  function removeMessageHandler(cb) {
    handlers.onMessage = handlers.onMessage.filter((handler) => handler !== cb);
  }
  function attachOnOpen(cb) {
    return handlers.onOpen.push(cb);
  }
  function removeOpenHandler(cb) {
    handlers.onOpen = handlers.onOpen.filter((handler) => handler !== cb);
  }
  //#endregion

  //#region subscribers
  function subscribeTicker(ws) {
    return sendMessage(ws, { sub: 'market.tickers', id: 'tradesub1' });
  }
  //#endregion

  
  //#region onMessage handlers
  function keepHandshake(ws, message) {
    if (message.ping) {
      sendMessage(ws, { pong: message.ping });
    }
  }
  
  function onTickerUpdate(ws, message) {
    if(message.ch === 'market.tickers') {
      const { data } = message;
      if(Array.isArray(data)) {
        Store.dispatch('getTickerSocket', data);
        console.log(data);
      }
    }
  }
  //#endregion
  

  return init();
})();
