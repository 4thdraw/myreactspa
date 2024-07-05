import 'bootstrap/dist/css/bootstrap.min.css'
//npm i sass / npm i node-sass ( 실전 노드버전은 12 ~ 14버전 )
import logo from './logo.svg'

const App = (props) => {
  return (
   <header id="hd" className={ props.bgcls }>
    <div className="container d-flex justify-content-between align-items-center">
       <h1 className='col-4 col-md-2'>
        <a href="/" className='d-block'>
            <img src={logo} className='w-100' alt="" />
        </a>
       </h1>
       <ul id="gnb" className='d-flex'>
        <li ><a href="" className={props.textcls}>대메뉴</a></li>
        <li ><a href="">대메뉴</a></li>
        <li ><a href="">대메뉴</a></li>
        <li ><a href="">대메뉴</a></li>
       </ul>
    </div>
   </header>
  );
}

export default App;
