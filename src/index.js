import buildPage from './builder'
import './styles/styles.css'
import addTask from './addtask'

buildPage();

document.getElementById('addtask').addEventListener('click', () => {
    addTask();
})