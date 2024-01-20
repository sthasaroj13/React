

function Nav(props){
    return(
<>
<div className="nav">
    <div>{props.user}</div>
<a href="#">Home</a> 
        <a href="#">about</a> 
        <a href="#">help</a>
</div>

</>
       
    )
}
export default Nav