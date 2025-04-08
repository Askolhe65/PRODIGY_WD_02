let timer;
let startTime;
let elapsed = 0;
let isRunning = false;

function updateDisplay() {
  const now = new Date().getTime();
  const time = isRunning ? now - startTime + elapsed : elapsed;

  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  const ms = String(time % 1000).padStart(3, '0');

  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}.${ms}`;
}

function start() {
  if (!isRunning) {
    startTime = new Date().getTime();
    timer = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(timer);
    elapsed += new Date().getTime() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  elapsed = 0;
  isRunning = false;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (isRunning) {
    const now = new Date().getTime();
    const lapTime = now - startTime + elapsed;
    const hrs = String(Math.floor(lapTime / 3600000)).padStart(2, '0');
    const mins = String(Math.floor((lapTime % 3600000) / 60000)).padStart(2, '0');
    const secs = String(Math.floor((lapTime % 60000) / 1000)).padStart(2, '0');
    const ms = String(lapTime % 1000).padStart(3, '0');
    const lapDisplay = `${hrs}:${mins}:${secs}.${ms}`;

    const li = document.createElement('li');
    li.textContent = `Lap - ${lapDisplay}`;
    document.getElementById('laps').appendChild(li);
  }
}

function clearLaps() {
  document.getElementById('laps').innerHTML = '';
}