const SERVICE_UUID = '0000ffe0-0000-1000-8000-00805f9b34fb'; // Replace with actual UUID
const CHARACTERISTIC_UUID = '0000ffe2-0000-1000-8000-00805f9b34fb'; // Replace with actual UUID
let bleDevice, gattCharacteristic;

// Connect to BLE Device
document.getElementById('connect').addEventListener('click', async () => {
    try {
        bleDevice = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: [SERVICE_UUID]
        });

        document.getElementById('status').textContent = `Connecting to ${bleDevice.name}...`;
        const server = await bleDevice.gatt.connect();
        const service = await server.getPrimaryService(SERVICE_UUID);
        gattCharacteristic = await service.getCharacteristic(CHARACTERISTIC_UUID);

        document.getElementById('status').textContent = `Connected to ${bleDevice.name} ✅`;
    } catch (error) {
        console.error('Connection failed:', error);
        document.getElementById('status').textContent = `Error: ${error.message} ❌`;
    }
});

// General function to send messages
async function sendMessage(message) {
    if (!gattCharacteristic) {
        alert('Please connect first!');
        return;
    }
    try {
        const data = new TextEncoder().encode(message);
        await gattCharacteristic.writeValue(data);
        document.getElementById('status').textContent = `Data sent: ${message} 🚀`;
    } catch (error) {
        console.error('Data send failed:', error);
        document.getElementById('status').textContent = `Error: ${error.message} ❌`;
    }
}

// Event listeners for sending different messages
document.getElementById('Forward').addEventListener('click', () => sendMessage('f'));
document.getElementById('Backward').addEventListener('click', () => sendMessage('b'));
document.getElementById('Left').addEventListener('click', () => sendMessage('l'));
document.getElementById('Right').addEventListener('click', () => sendMessage('r'));
document.getElementById('Wave').addEventListener('click', () => sendMessage('w'));
document.getElementById('Dance').addEventListener('click', () => sendMessage('d'));
document.getElementById('Stand').addEventListener('click', () => sendMessage('s'));
document.getElementById('SayHi').addEventListener('click', () => sendMessage('h'));

// 语音控制功能
document.getElementById('VoiceControl').addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US'; // 设置语言为英语
    recognition.interimResults = false; // 只返回最终结果
    recognition.maxAlternatives = 1; // 只返回一个结果

    recognition.start(); // 开始录音

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // 获取识别的文本并转换为小写
        document.getElementById('status').textContent = `Recognized: ${transcript}`;

        // 根据识别的文本执行相应的操作
        if (transcript.includes('forward')) {
            sendMessage('f');
        } else if (transcript.includes('backward')) {
            sendMessage('b');
        } else if (transcript.includes('left')) {
            sendMessage('l');
        } else if (transcript.includes('right')) {
            sendMessage('r');
        } else if (transcript.includes('shake')) {
            sendMessage('w');
        } else if (transcript.includes('dance')) {
            sendMessage('d');
        } else if (transcript.includes('stand')) {
            sendMessage('s');
        } else if (transcript.includes('say hi')) {
            sendMessage('h');
        } else {
            document.getElementById('status').textContent = 'Command not recognized';
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        document.getElementById('status').textContent = `Error: ${event.error}`;
    };

    recognition.onend = () => {
        console.log('Speech recognition ended');
    };
});