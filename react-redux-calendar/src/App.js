import './App.css';
import Event from './components/Event';

// import {useDispatch, useSelector} from "react-redux";

function App({
              _Event = Event
             }) {

  const event = {title: 'My Event', description: 'My Desc', date: new Date()}

  return <Event event={event}/>
}

export default App;
