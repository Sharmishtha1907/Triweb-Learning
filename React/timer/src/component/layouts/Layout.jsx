import MainMenu from "./MainMenu";


function Layout(props){
  return <div>
    <main><MainMenu /></main>
    {props.children}
    </div>
}

export default Layout;